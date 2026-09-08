import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = process.argv[2];
if (!input) throw new Error('Usage: node scripts/build-training-summary.mjs <seven-repository-review.json>');
const original = JSON.parse(fs.readFileSync(input, 'utf8'));
const revisions = [
  {repo:'mhmzdev__figma-flutter-mcp', tool:'local-skill', dimensions:['B','C','D'], from:'fix', to:'partial', caseId:'figma-compact-input', reason:'原文介绍了输入形式和失败返回，但没有说明编号简写在什么情况下会解析失败。因此记为部分说明，不是事实错误。'},
  {repo:'mhmzdev__figma-flutter-mcp', tool:'openwiki', dimensions:['B','C','D'], from:'fix', to:'partial', caseId:'figma-compact-input', reason:'按相同口径，列出输入形式不足以证明对任意有效编号组合保证成功；该分支缺陷未说明，记覆盖不足。'},
  {repo:'lokesh__lightbox2', tool:'local-skill', dimensions:['E'], from:'fix', to:'partial', caseId:'lightbox-reinit', reason:'不重复创建遮罩层的说明正确。若要理解重复初始化的完整过程，还缺少事件会重复绑定的说明，因此本能力记为部分。'},
  {repo:'cpu0x00__Ghost', tool:'codewiki', dimensions:['E'], from:'yes', to:'partial', caseId:'ghost-build-order', reason:'构建顺序没有讲全资源与 C++ 编译先后；从有收紧为部分，不是新增事实错误。'}
];
const counts = Object.fromEntries(original.dimensions.map(([id]) => [id, Object.fromEntries(original.tools.map(tool => [tool, {yes:0,partial:0,fix:0,missing:0,no_artifact:0}]))]));
let applied = 0;
const repositories = original.repos.map(repo => {
  const slug = repo.key.replace('__','/');
  const tools = Object.fromEntries(original.tools.map(tool => {
    const record = repo.tools[tool];
    const cells = Object.fromEntries(original.dimensions.map(([id]) => {
      const cell = record.cells[id];
      const revision = revisions.find(item => item.repo === repo.key && item.tool === tool && item.dimensions.includes(id));
      if (revision && cell.status !== revision.from) throw new Error('Revision no longer matches its input: ' + repo.key + '/' + tool + '/' + id);
      if (revision) applied += 1;
      const status = revision ? revision.to : cell.status;
      if (!Object.hasOwn(counts[id][tool], status)) throw new Error('Unknown material status: ' + status);
      counts[id][tool][status] += 1;
      const sources = (cell.source || []).flatMap(source => {
        const marker = '/repo/';
        const position = source.path.lastIndexOf(marker);
        if (position < 0 || !Number.isInteger(source.line)) return [];
        const relative = source.path.slice(position + marker.length);
        return [{label:relative + ':' + source.line, url:'https://github.com/' + slug + '/blob/' + repo.commit + '/' + relative + '#L' + source.line}];
      });
      return [id, {
        status,
        finding:revision ? revision.reason : cell.finding,
        checkpoint:repo.checkpoints[id],
        excerpts:(cell.wiki || []).slice(0,2).map(item => ({label:path.basename(item.path) + (item.line ? ':' + item.line : ''), quote:item.quote})),
        sources,
        correctionCase:revision ? revision.caseId : null
      }];
    }));
    return [tool,{available:record.available,cells}];
  }));
  return {name:repo.name,slug,commit:repo.commit,tools};
});
if (applied !== 8) throw new Error('Expected eight explicitly revised material cells, got ' + applied);
for (const row of Object.values(counts)) for (const cell of Object.values(row)) if (Object.values(cell).reduce((a,b)=>a+b,0) !== 7) throw new Error('Every cell must account for seven repositories.');
const data = {sourceReviewDate:original.date,revisionDate:'2026-09-08',tools:original.tools,definitions:original.definitions,dimensions:original.dimensions,counts,available:original.available,revisions,repositories};
const serialized = JSON.stringify(data,null,2);
if (/\/Users\/|merlin-ssh|larkoffice\.com|feishuapp\.com/.test(serialized)) throw new Error('Private location in public summary.');
fs.writeFileSync(path.join(root,'assets','training-summary.js'),'/* Derived from the seven-repository review; corrections are listed in the payload. */\nwindow.WIKI_TRAINING_DATA = ' + serialized + ';\n');
console.log('Exported 350 material judgments with eight disclosed corrections; no original artifact changed.');
