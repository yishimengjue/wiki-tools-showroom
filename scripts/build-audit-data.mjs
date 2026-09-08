import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const categories = new Set(['interface-contract','capability-scope','control-flow','error-semantics','state-semantics','evidence-mismatch','pipeline-contract','review-notes']);
const tools = ['local-skill','devinwiki','deepwiki-open','openwiki','codewiki'];
const statuses = new Set(['error','correct','partial','not-covered','unverified','no-output','not-applicable']);
const severities = new Set(['high','medium','low']);
const cases = ['audit-core.json','audit-behavior.json'].flatMap((file) => JSON.parse(fs.readFileSync(path.join(root,'assets',file),'utf8')).cases);
const ids = new Set();
for (const item of cases) {
  if (!item.id || ids.has(item.id)) throw new Error('Missing or duplicate case ID: ' + item.id);
  ids.add(item.id);
  if (!categories.has(item.category)) throw new Error('Unknown category: ' + item.category);
  if (item.category === 'review-notes' && (!item.reviewNote || Object.values(item.tools).some((record) => record.status === 'error'))) throw new Error(item.id + ': withdrawn case must explain the correction and contain no confirmed error');
  if (!severities.has(item.severity)) throw new Error(item.id + ': invalid severity');
  for (const field of ['title','repo','sourceFact','impact','skillFix','plainExample']) if (typeof item[field] !== 'string' || !item[field].trim()) throw new Error(item.id + ': missing ' + field);
  if (item.kind !== 'pipeline' && !/^[0-9a-f]{40}$/i.test(item.commit)) throw new Error(item.id + ': unpinned source snapshot');
  for (const tool of tools) {
    const record = item.tools[tool];
    if (!record || !statuses.has(record.status) || !record.explanation) throw new Error(item.id + ': invalid result for ' + tool);
    if (['error','correct'].includes(record.status) && !record.quote) throw new Error(item.id + ': missing verbatim evidence for ' + tool);
  }
  for (const source of item.sourceEvidence || []) {
    if (!source.url.startsWith('https://github.com/' + item.repoSlug + '/blob/' + item.commit + '/')) throw new Error(item.id + ': source is not the reviewed snapshot');
    if (!/#L\d+(?:-L\d+)?$/.test(source.url)) throw new Error(item.id + ': source lacks line range');
  }
}
if (cases.filter((item) => item.fromTable).length !== 7) throw new Error('The seven table cases must all be represented once.');
for (const category of categories) if (category !== 'review-notes' && cases.filter((item) => item.category === category && item.fromTable).length !== 1) throw new Error('Expected exactly one table representative: ' + category);
const snippetsPath = path.join(root,'assets','audit-source-snippets.json');
const sourceSnippets = fs.existsSync(snippetsPath) ? JSON.parse(fs.readFileSync(snippetsPath,'utf8')) : {};
for (const item of cases) {
  const snippets = sourceSnippets[item.id];
  if (!Array.isArray(snippets)) throw new Error(item.id + ': missing source cache entry');
  if (item.kind !== 'pipeline' && !snippets.length) throw new Error(item.id + ': missing source excerpts');
  if (item.kind === 'pipeline' && snippets.length) throw new Error(item.id + ': runtime failure must not be presented as repository source');
  for (const snippet of snippets) {
    if (!Number.isInteger(snippet.start) || snippet.start < 1 || !Array.isArray(snippet.lines) || !snippet.lines.length || snippet.lines.some((line) => typeof line !== 'string')) throw new Error(item.id + ': invalid source lines');
    const end = snippet.start + snippet.lines.length - 1;
    if (!Array.isArray(snippet.highlight) || snippet.highlight.some((line) => !Number.isInteger(line) || line < snippet.start || line > end)) throw new Error(item.id + ': highlight outside source excerpt');
    if (typeof snippet.summary !== 'string' || !snippet.summary.trim()) throw new Error(item.id + ': missing plain source summary');
    if (!Array.isArray(snippet.annotations) || !snippet.annotations.length) throw new Error(item.id + ': missing source annotations');
    const annotatedLines = new Set();
    for (const annotation of snippet.annotations) {
      if (!Number.isInteger(annotation.line) || annotation.line < snippet.start || annotation.line > end) throw new Error(item.id + ': annotation outside source excerpt');
      if (annotatedLines.has(annotation.line)) throw new Error(item.id + ': duplicate source annotation');
      if (typeof annotation.text !== 'string' || !annotation.text.trim()) throw new Error(item.id + ': empty source annotation');
      annotatedLines.add(annotation.line);
    }
    const url = new URL(snippet.url);
    const sourcePath = '/' + item.repoSlug + '/blob/' + item.commit + '/' + snippet.path;
    if (url.origin !== 'https://github.com' || decodeURIComponent(url.pathname) !== sourcePath) throw new Error(item.id + ': snippet source mismatch');
    const covered = (item.sourceEvidence || []).some((source) => {
      const evidence = new URL(source.url);
      const range = evidence.hash.match(/^#L(\d+)(?:-L(\d+))?$/);
      return decodeURIComponent(evidence.pathname) === sourcePath && range && snippet.start >= Number(range[1]) && end <= Number(range[2] || range[1]);
    });
    if (!covered) throw new Error(item.id + ': excerpt exceeds cited evidence range');
  }
}
for (const id of Object.keys(sourceSnippets)) if (!ids.has(id)) throw new Error('Orphan source cache: ' + id);
const data = {schemaVersion:1, reviewDate:'2026-09-08', cases, sourceSnippets};
const serialized = JSON.stringify(data, null, 2);
if (/\/Users\/|merlin-ssh|larkoffice\.com|feishuapp\.com/.test(serialized)) throw new Error('Internal location found in public audit payload.');
const outputPath = path.join(root,'assets','audit-data.js');
const output = '/* Generated by scripts/build-audit-data.mjs. */\nwindow.WIKI_AUDIT_DATA = ' + serialized + ';\n';
if (process.argv.includes('--check')) {
  if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath,'utf8') !== output) throw new Error('audit-data.js is stale; run node scripts/build-audit-data.mjs.');
} else fs.writeFileSync(outputPath, output);
console.log('Validated ' + cases.length + ' cases, ' + cases.length * tools.length + ' tool results and all seven table categories.');
