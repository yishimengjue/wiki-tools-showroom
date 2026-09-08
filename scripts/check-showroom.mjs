import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const pages = fs.readdirSync(root).filter((file) => file.endsWith('.html'));
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
const home = read('index.html');
if ([...home.matchAll(/\bid="repository-intro"/g)].length !== 1) errors.push('Expected one repository introduction on the home page.');
if (home.indexOf('id="repository-intro"') < home.indexOf('class="repo-grid"')) errors.push('Repository introduction must follow the comparison and scope sections.');
if ([...home.matchAll(/\bclass="repository-brief-flow"/g)].length !== 1) errors.push('Expected one short repository example.');
const oldIntro = read('repository-intro.html');
if (!oldIntro.includes('href="index.html#repository-intro"')) errors.push('Legacy repository page must link to the home introduction.');
if (/<script\b|http-equiv\s*=\s*["']refresh/i.test(oldIntro)) errors.push('Legacy repository page must not redirect automatically.');
execFileSync(process.execPath, ['scripts/build-audit-data.mjs', '--check'], {cwd: root, stdio: 'inherit'});
for (const file of ['assets/site.js', 'assets/audit.js', 'assets/audit-data.js', 'assets/compare.js', 'assets/compare-embed.js','assets/home.js','assets/training-summary.js','scripts/build-training-summary.mjs']) {
  execFileSync(process.execPath, ['--check', file], {cwd: root, stdio: 'inherit'});
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else console.log('PASS: ' + pages.length + ' pages, ' + checkedLinks + ' maintained links, 13 legacy anchors, audit data and all authored scripts.');
