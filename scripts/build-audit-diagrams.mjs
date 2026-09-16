import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, 'assets/audit-diagrams.js');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/audit-data.js'),'utf8'), context);
const cases = context.window.WIKI_AUDIT_DATA.cases;
const normal = text => text.split('\n').map(line=>line.trim()).filter(Boolean).join('\n');
const hash = text => createHash('sha256').update(text).digest('hex');
const decode = text => text.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|#39);/gi, (entity,key) => {
  if (key[0] === '#') return String.fromCodePoint(key[1].toLowerCase() === 'x' ? parseInt(key.slice(2),16) : Number(key.slice(1)));
  return {amp:'&',lt:'<',gt:'>',quot:'"',apos:"'"}[key.toLowerCase()] || entity;
});
const evalRoot = process.env.WIKI_EVAL_ROOT || path.resolve(root,'../wiki-tool-eval');
function sourceFile(item, tool) {
  if (item.repo === 'Ghost') return path.join(root,tool+'.html');
  if (item.id === 'sqlx-bind-order' && tool === 'deepwiki-open') return path.join(evalRoot,'runs/deepwiki-open/jmoiron__sqlx/artifacts/wiki.md');
  if (item.id === 'sqlx-bind-order' && tool === 'openwiki') return path.join(evalRoot,'runs/openwiki/jmoiron__sqlx/repo/openwiki/concepts/named-queries.md');
  throw new Error('No original artifact mapped: '+item.id+'/'+tool);
}
function extract(file, quote) {
  const text = fs.readFileSync(file,'utf8');
  const html = file.endsWith('.html');
  const pattern = html ? /<div\b[^>]*class="[^"]*\bmermaid\b[^"]*"[^>]*>([\s\S]*?)<\/div>/g : /```mermaid[^\n]*\n([\s\S]*?)```/g;
  const matches = [...text.matchAll(pattern)].map(m=>({source:html?decode(m[1]):m[1],index:m.index})).filter(m=>normal(m.source).includes(normal(quote)));
  assert.equal(matches.length,1,'Diagram must match exactly one original: '+file);
  const found = matches[0];
  const page = html ? [...text.slice(0,found.index).matchAll(/<article[^>]*id="(page-\d+)"/g)].at(-1)?.[1] : null;
  return {source:found.source,page};
}
const check = process.argv.includes('--check');
let data = {};
if (check) {
  const saved = {window:{}};
  vm.runInNewContext(fs.readFileSync(target,'utf8'),saved);
  data = saved.window.WIKI_AUDIT_DIAGRAMS;
}
let count = 0;
for (const item of cases.filter(item=>item.category === 'control-flow')) {
  for (const [tool,result] of Object.entries(item.tools)) {
    if (!/-->|->>|-->>/.test(result.quote || '')) continue;
    const file = sourceFile(item,tool);
    if (!check) {
      const extracted = extract(file,result.quote);
      (data[item.id] ||= {})[tool] = {source:extracted.source,sha256:hash(extracted.source),origin:result.wikiLabel,wikiUrl:extracted.page ? tool+'.html#'+extracted.page : null};
    }
    const record = data[item.id]?.[tool];
    assert(record,'Missing full original diagram: '+item.id+'/'+tool);
    assert.match(record.source,/^\s*(?:flowchart|graph|sequenceDiagram)\b/);
    assert(normal(record.source).includes(normal(result.quote)),'Quote must occur in the original graph');
    assert.equal(record.sha256,hash(record.source));
    // Public readers are always verifiable; optional external originals are checked when available.
    if (fs.existsSync(file)) assert.equal(record.source,extract(file,result.quote).source);
    count++;
  }
}
assert.equal(Object.values(data).flatMap(Object.values).length,count);
if (!check) fs.writeFileSync(target,'// Full Mermaid blocks extracted from original Wiki artifacts; never repaired or redrawn.\nwindow.WIKI_AUDIT_DIAGRAMS = '+JSON.stringify(data,null,2)+';\n');
console.log('PASS: '+count+' complete original diagrams, matched to audit excerpts and SHA-256 digests.');
