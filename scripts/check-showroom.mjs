import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const flowRoot = path.join(root, 'tool-flow-showcase');
const flowPages = fs.readdirSync(flowRoot).filter((file) => file.endsWith('.html')).map((file) => 'tool-flow-showcase/' + file);
const pages = fs.readdirSync(root).filter((file) => file.endsWith('.html')).concat(flowPages);
const cases = ['audit-core.json', 'audit-behavior.json'].flatMap((file) => JSON.parse(read('assets/' + file)).cases);
const caseIds = new Set(cases.map((item) => item.id));
const readerCases = new Set(['ghost-build-order', 'ghost-helper-order']);
const readers = ['local-skill', 'devinwiki', 'deepwiki-open', 'openwiki', 'codewiki'];
const errors = [];
let checkedLinks = 0;
const ids = new Map(pages.map((file) => [file, new Set([...read(file).matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]))]));
const trainingContext = {window:{}};
vm.runInNewContext(read('assets/training-summary.js'), trainingContext);
const training = trainingContext.window.WIKI_TRAINING_DATA;
for (const [id] of training.dimensions) ids.get('index.html').add('ability-' + id);
for (const [id] of training.dimensions) for (const tool of training.tools) {
  const actual = {yes:0,partial:0,fix:0,missing:0,no_artifact:0};
  for (const repo of training.repositories) actual[repo.tools[tool].cells[id].status] += 1;
  if (Object.values(actual).reduce((a,b)=>a+b,0) !== 7 || JSON.stringify(actual) !== JSON.stringify(training.counts[id][tool])) errors.push('Training count mismatch: ' + id + '/' + tool);
}
if (training.repositories.filter(repo => Object.entries(repo.tools['local-skill'].cells).some(([id,cell]) => 'ABCDEFH'.includes(id) && cell.status === 'fix')).length !== 5) errors.push('Local revised fact count must be five repositories.');
for (const id of ['figma-compact-input','lightbox-reinit']) {
  const item = cases.find(item=>item.id === id);
  if (item.category !== 'review-notes' || Object.values(item.tools).some(record=>record.status === 'error')) errors.push('Withdrawn case still counted as an error: ' + id);
}

function checkLink(page, rawURL) {
  const value = rawURL.replaceAll('&amp;', '&');
  if (!value || /^(?:https?:|mailto:|data:)/.test(value)) return;
  checkedLinks += 1;
  const url = new URL(value, 'https://local.test/' + page);
  if (url.origin !== 'https://local.test') return;
  const file = decodeURIComponent(url.pathname).replace(/^\//, '') || 'index.html';
  if (!fs.existsSync(path.join(root, file))) {
    errors.push(page + ': missing file ' + value);
    return;
  }
  if (!url.hash || !file.endsWith('.html')) return;
  const hash = decodeURIComponent(url.hash.slice(1));
  const params = new URLSearchParams(hash);
  if (file === 'issues-compare.html' && params.has('case')) {
    if (!caseIds.has(params.get('case'))) errors.push(page + ': unknown case ' + value);
  } else if (file === 'compare.html' && params.has('case')) {
    if (!readerCases.has(params.get('case'))) errors.push(page + ': unknown reader case ' + value);
  } else if (ids.has(file) && !ids.get(file).has(hash)) {
    errors.push(page + ': missing anchor ' + value);
  }
}

for (const page of pages) {
  const html = read(page);
  const start = html.search(/<section\b[^>]*\bid="wiki-content"/);
  // Original Wiki links can intentionally be broken; check the maintained UI, not the assessed artifact.
  const ui = start < 0 ? html : html.slice(0, start) + html.slice(html.indexOf('</main>', start));
  for (const match of ui.matchAll(/<(?:a|link|script|img|iframe)\b[^>]*?\b(?:href|src)="([^"]*)"/g)) checkLink(page, match[1]);
  if (/\/Users\/|merlin-ssh|larkoffice\.com|feishuapp\.com/.test(ui)) errors.push(page + ': private location in maintained UI');
}

for (const item of cases) {
  for (const result of Object.values(item.tools)) if (result.wikiUrl) checkLink('issues-compare.html', result.wikiUrl);
}
for (let i = 1; i <= 13; i += 1) {
  if (!ids.get('issue-summary.html').has('issue-' + String(i).padStart(2, '0'))) errors.push('Missing legacy issue anchor: ' + i);
}
for (const tool of readers) {
  const html = read(tool + '.html');
  if (!html.includes('assets/compare-embed.js')) errors.push(tool + ': no embed integration');
  if (html.indexOf('assets/site.js') > html.indexOf('assets/compare-embed.js')) errors.push(tool + ': embed executes before base reader');
}
const flowDetailPages = ['local-skill.html','deepwiki-open.html','openwiki.html','codewiki.html','devinwiki.html'];
const flowHub = read('tool-flow-showcase/index.html');
for (const file of flowDetailPages) {
  if (!flowHub.includes('href="' + file + '"')) errors.push('Flow hub missing ' + file);
  const html = read('tool-flow-showcase/' + file);
  for (const marker of ['data-flow','data-example','data-call-body','detail.js']) if (!html.includes(marker)) errors.push(file + ': missing ' + marker);
}
const home = read('index.html');
if (!home.includes('<h2 id="study-flow-title">调研实测流程</h2>')) errors.push('Unexpected research workflow title.');
if (!home.includes('class="study-flow-scroll"')) errors.push('Research workflow must have its own horizontal scroll region.');
const theme = read('assets/review-theme.css');
if (/\.study-flow-track\s*\{[^}]*grid-template-columns:\s*1fr[;}]/.test(theme)) errors.push('Research workflow must not collapse to a vertical column.');
if (/\.study-flow-track>i\s*\{[^}]*rotate\(90deg\)/.test(theme)) errors.push('Research arrows must not rotate downward.');
const styleTable = home.match(/<table class="home-table style-table">([\s\S]*?)<\/table>/)?.[1] || '';
if (!styleTable.includes('优点') || (styleTable.match(/class="tool-strength"/g) || []).length !== 5) errors.push('Each tool needs an evidence-backed strengths cell.');
const contentCases = cases.filter(item=>item.kind !== 'pipeline' && item.category !== 'review-notes');
if (contentCases.length !== 9) errors.push('Update the homepage nine-case comparison scope.');
for (const tool of ['deepwiki-open','codewiki']) {
  const correct = contentCases.filter(item=>item.tools[tool].status === 'correct').length;
  const wrong = contentCases.filter(item=>item.tools[tool].status === 'error').length;
  if (correct !== 3 || wrong !== 0) errors.push('Update the scoped error-count note for ' + tool);
}
const topicContext = {window:{}};
vm.runInNewContext(read('assets/diagram-topics.js'),topicContext);
if (topicContext.window.WIKI_DIAGRAM_TOPICS[0].id !== 'resource-handoff') errors.push('Resource/source generation must be the first/default diagram topic.');
const principles = read('tool-principles-horizontal.zh-CN.html');
const chainTable = principles.match(/<table class="chain-table">([\s\S]*?)<\/table>/)?.[1] || '';
if ((chainTable.match(/<tr data-tool=/g) || []).length !== 5) errors.push('Expected five tools in the plain-language chain comparison table.');
for (const tool of readers) {
  const row = chainTable.match(new RegExp('<tr data-tool="' + tool + '">([\\s\\S]*?)</tr>'))?.[1] || '';
  if ((row.match(/<td\b/g) || []).length !== 4 || !row.includes('href="#' + tool + '"')) errors.push(tool + ': incomplete chain overview or missing detail link.');
  if (tool === 'devinwiki' && (row.match(/class="chain-unknown"/g) || []).length !== 3) errors.push('Devin internal stages must remain explicitly unknown.');
}
if (/class="board-wrap"/.test(principles)) errors.push('Legacy vertical tool table must not return.');
if (!principles.includes('<h1>五个wiki工具对比</h1>')) errors.push('Unexpected principles page title.');
for (const tool of readers) {
  const lane = principles.match(new RegExp('<article class="principle-lane" id="' + tool + '">([\\s\\S]*?)</article>'))?.[1] || '';
  const expectedSteps = tool === 'devinwiki' ? 3 : 4;
  if ((lane.match(/class="process-step /g) || []).length !== expectedSteps) errors.push(tool + ': incomplete horizontal chain.');
  if ((lane.match(/class="module-column"/g) || []).length !== 4 || !lane.includes('运行依赖') || !lane.includes('本次评测实际使用')) errors.push(tool + ': missing horizontal tool inventory.');
}
if ([...home.matchAll(/\bid="repository-intro"/g)].length !== 1) errors.push('Expected one repository introduction on the home page.');
if (home.indexOf('id="repository-intro"') < home.indexOf('class="repo-grid"')) errors.push('Repository introduction must follow the comparison and scope sections.');
if ([...home.matchAll(/\bclass="repository-brief-flow"/g)].length !== 1) errors.push('Expected one short repository example.');
const oldIntro = read('repository-intro.html');
if (!oldIntro.includes('href="index.html#repository-intro"')) errors.push('Legacy repository page must link to the home introduction.');
if (/<script\b|http-equiv\s*=\s*["']refresh/i.test(oldIntro)) errors.push('Legacy repository page must not redirect automatically.');
execFileSync(process.execPath, ['scripts/build-audit-data.mjs', '--check'], {cwd: root, stdio: 'inherit'});
execFileSync(process.execPath, ['scripts/build-audit-diagrams.mjs', '--check'], {cwd: root, stdio: 'inherit'});
for (const file of ['assets/audit-diagrams.js','assets/audit-diagram-renderer.js','scripts/build-audit-diagrams.mjs']) execFileSync(process.execPath,['--check',file],{cwd:root,stdio:'inherit'});
const auditPage = read('issues-compare.html');
for (const name of ['assets/mermaid.min.js','assets/audit-diagrams.js','assets/audit-diagram-renderer.js','id="show-all-cases"']) if (!auditPage.includes(name)) errors.push('Missing audit rendering/filter integration: '+name);
if ((read('compare.html').match(/<details class="overview-evidence">/g)||[]).length!==2) errors.push('Both reading evidence panels must be collapsed by default.');
for (const file of ['assets/site.js', 'assets/audit.js', 'assets/audit-data.js', 'assets/compare.js', 'assets/compare-embed.js','assets/diagram-topics.js','assets/compare-diagrams.js','tool-flow-showcase/detail.js','scripts/check-diagram-ui.mjs','assets/home.js','assets/training-summary.js','scripts/build-training-summary.mjs']) {
  execFileSync(process.execPath, ['--check', file], {cwd: root, stdio: 'inherit'});
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else console.log('PASS: ' + pages.length + ' pages, ' + checkedLinks + ' maintained links, 13 legacy anchors, audit data and all authored scripts.');
