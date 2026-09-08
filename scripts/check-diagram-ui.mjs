import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const require = createRequire(import.meta.url);
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({headless:true,...(process.env.BROWSER_EXECUTABLE ? {executablePath:process.env.BROWSER_EXECUTABLE} : {})});
const base = process.env.SHOWROOM_URL || 'http://127.0.0.1:8765';
const output = '/tmp/wiki-showroom-diagrams';
fs.mkdirSync(output,{recursive:true});
const context = await browser.newContext({viewport:{width:1600,height:1050}});
const page = await context.newPage();
const failures = [];
page.on('pageerror',error=>failures.push(error.message));
const ready = () => page.waitForFunction(()=>document.querySelectorAll('.diagram-viewport svg').length === 2);
try {
  await page.goto(base + '/compare.html');
  await ready();
  assert.equal(await page.locator('[data-diagram-topic]').count(),3);
  for (const topic of ['build-order','build-inputs','resource-handoff']) {
    await page.locator('[data-diagram-topic="' + topic + '"]').click();
    await ready();
    assert.equal(new URL(page.url()).searchParams.get('diagram'),topic);
    for (const [side,tool] of [['left','local-skill'],['right','devinwiki']]) {
      const card = page.locator('[data-diagram-side="' + side + '"]');
      const raw = await card.locator('.diagram-source pre').textContent();
      const originalHTML = fs.readFileSync(path.join(process.cwd(),tool+'.html'),'utf8');
      const expected = await page.evaluate(({topic,tool,html})=> {
        const record = window.WIKI_DIAGRAM_TOPICS.find(item=>item.id===topic).tools[tool];
        const document = new DOMParser().parseFromString(html,'text/html');
        const matches = [...document.getElementById(record.page).querySelectorAll('.mermaid')].filter(el=>record.fragments.every(part=>el.textContent.includes(part)));
        if(matches.length!==1)throw new Error('Original diagram is not unique');
        return matches[0].textContent;
      },{topic,tool,html:originalHTML});
      assert.equal(raw,expected,'Paired source must exactly equal original: '+topic+'/'+tool);
      const width = await card.locator('svg').evaluate(el=>el.getBoundingClientRect().width);
      await card.locator('[data-zoom="in"]').click();
      assert(await card.locator('svg').evaluate(el=>el.getBoundingClientRect().width)>width,'Zoom must enlarge the actual diagram.');
      await card.locator('[data-zoom="fit"]').click();
    }
    await page.locator('#diagram-locate-both').click();
    for (const tool of ['local-skill','devinwiki']) {
      const frame=page.frames().find(frame=>frame.url().includes('/'+tool+'.html?embed=1'));
      await frame.waitForFunction(id=> {
        const el=document.getElementById('paired-diagram-'+id);
        return el && el.getBoundingClientRect().top>=0 && el.getBoundingClientRect().top<innerHeight;
      },topic);
    }
    await page.locator('.diagram-pair-grid').scrollIntoViewIfNeeded();
    await page.screenshot({path:path.join(output,topic+'.png')});
  }
  await page.locator('[data-diagram-topic="build-order"]').click();
  await ready();
  await page.selectOption('#diagram-left-tool','openwiki');
  await page.waitForFunction(()=>document.querySelector('[data-diagram-side="left"] .diagram-viewport').textContent.includes('尚未为该工具配对'));
  assert.equal(await page.locator('[data-diagram-side="left"] svg').count(),0);
  assert(await page.locator('#diagram-locate-both').isDisabled());
  assert.equal(await page.locator('#left-tool').inputValue(),'openwiki');
  await page.locator('#diagram-default-pair').click();
  await ready();
  await page.locator('#swap-tools').click();
  await ready();
  assert.equal(await page.locator('#diagram-left-tool').inputValue(),'devinwiki');
  assert.match(await page.locator('[data-diagram-side="left"] .diagram-source pre').textContent(),/ParallelProcess/);
  await page.selectOption('#diagram-right-tool','devinwiki');
  await ready();
  const svgIds=await page.locator('.diagram-viewport svg').evaluateAll(elements=>elements.map(el=>el.id));
  assert.equal(new Set(svgIds).size,2,'Same-tool diagrams still require unique SVG ids.');
  assert.match(await page.locator('#diagram-comparison-note').innerText(),/同一工具/);
  await page.locator('#diagram-default-pair').click();
  await ready();
  // A late render must not overwrite the topic selected most recently.
  await page.evaluate(()=> {
    for(const id of ['resource-handoff','build-inputs','build-order'])document.querySelector('[data-diagram-topic="'+id+'"]').click();
  });
  await ready();
  assert.match(await page.locator('[data-diagram-side="right"] .diagram-source pre').textContent(),/ParallelProcess/);
  await page.locator('#jump-style').click();
  assert.equal(await page.locator('#overview-left .compare-style-links a').count(),2);
  assert.equal(await page.locator('#overview-left .compare-structure-proof article').count(),2);
  assert.match(await page.locator('#overview-left .compare-structure-proof').innerText(),/Scope → Components → Control Flow → Design Constraints → Change Guidance/);
  for (const example of await page.locator('.compare-reading-example').all()) {
    assert(await example.locator('blockquote').innerText(),'A style claim must show the original excerpt.');
  }
  await page.screenshot({path:path.join(output,'style-evidence.png')});
  await page.locator('#overview-left .compare-style-links a').first().click();
  const localFrame=page.frames().find(frame=>frame.url().includes('/local-skill.html?embed=1'));
  await localFrame.waitForFunction(()=>document.querySelector('h2.compare-current-target')?.textContent==='Purpose');
  await page.locator('#jump-style').click();
  await page.locator('#overview-left .compare-structure-pair').click();
  await page.waitForFunction(()=>['left','right'].every(side=>document.querySelector('#'+side+'-frame').getAttribute('aria-busy')==='false'));
  for (const [side,target] of [['left','compare-style-repeat-1'],['right','compare-style-repeat-2']]) {
    const frame=page.frames().find(frame=>frame.url().includes('frame='+side+'-'));
    await frame.waitForFunction(id=> {
      const target=document.getElementById(id);
      return target.classList.contains('compare-current-target')&&target.getBoundingClientRect().top<innerHeight;
    },target);
    assert.equal(await page.locator('#'+side+'-tool').inputValue(),'local-skill');
  }
  await page.screenshot({path:path.join(output,'same-style-chapters.png')});
  await page.locator('#diagram-default-pair').click();
  await ready();
  await page.emulateMedia({colorScheme:'dark'});
  await page.locator('.diagram-pair-grid').scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(output,'dark.png')});
  await page.setViewportSize({width:390,height:844});
  await page.emulateMedia({colorScheme:'light'});
  await page.locator('#diagram-comparison').scrollIntoViewIfNeeded();
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Mobile page must not overflow.');
  await page.screenshot({path:path.join(output,'mobile.png')});
  assert.deepEqual(failures,[]);
  console.log('PASS: three exact-source diagram pairs; zoom, dual navigation, missing-pair state, tool selection, swap, rapid switching, style examples, repeated chapter comparison, desktop/mobile/dark.');
  console.log('Screenshots: '+output);
} finally {
  await browser.close();
}
