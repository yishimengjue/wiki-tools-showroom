import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';

// Pass a local Playwright entry point and browser binary; do not install dependencies.
const require = createRequire(import.meta.url);
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({headless:true, ...(process.env.BROWSER_EXECUTABLE ? {executablePath:process.env.BROWSER_EXECUTABLE} : {})});
const base = process.env.SHOWROOM_URL || 'http://127.0.0.1:8765';
const output = process.env.SHOWROOM_SCREENSHOTS || '/tmp/wiki-showroom-20260908';
fs.mkdirSync(output,{recursive:true});
const context = await browser.newContext({viewport:{width:1440,height:950}});
const page = await context.newPage();
const failures = [];
page.on('pageerror', error=>failures.push(error.message));
try {
  await page.goto(base + '/compare.html');
  await page.waitForFunction(()=>document.querySelectorAll('.compare-reading-example').length === 4);
  assert.equal(await page.locator('.overview-evidence[open]').count(),0,'Long evidence should be collapsed initially.');
  assert(await page.locator('#compare-overview').evaluate(el=>el.getBoundingClientRect().height<420),'Default overview should leave room for the readers.');
  assert(await page.evaluate(()=>document.documentElement.scrollHeight > innerHeight + 500),'Outer page should scroll.');
  assert(await page.locator('#left-frame').evaluate(el=>el.getBoundingClientRect().height >= 660),'Reader must not shrink under overview.');
  const tools = ['local-skill','devinwiki','deepwiki-open','openwiki','codewiki'];
  for (const tool of tools) {
    await page.selectOption('#left-tool',tool);
    await page.waitForFunction(expected=>document.querySelector('#left-frame').getAttribute('src').startsWith(expected + '.html') && document.querySelector('#left-frame').getAttribute('aria-busy') === 'false',tool);
    assert.equal(await page.locator('#overview-left .compare-reading-example').count(),2,tool + ': missing style evidence');
    await page.locator('#overview-left .overview-evidence').evaluate(el=>{el.open=true;});
    const frame = page.frames().find(frame=>frame.url().includes('/' + tool + '.html?embed=1'));
    const types = await page.locator('#overview-left .compare-diagram-types a').count();
    assert(types > 0,tool + ': missing diagram types');
    for (const link of await page.locator('#overview-left .compare-reading-example a, #overview-left .compare-diagram-types a').all()) {
      const target = new URL(await link.getAttribute('href'),base).hash.slice(1);
      assert.equal(await frame.locator('[id="' + target + '"]').count(),1,tool + ': missing evidence target');
    }
    await page.locator('#overview-left .compare-reading-example a').first().click();
    await frame.waitForFunction(()=>scrollY > 0);
    assert(await page.evaluate(()=>scrollY > 100),'Evidence should bring the large readers into view.');
  }
  await page.selectOption('#left-tool','local-skill');
  await page.waitForFunction(()=>document.querySelector('#left-frame').getAttribute('aria-busy') === 'false');
  await page.locator('#jump-readers').click();
  await page.screenshot({path:path.join(output,'compare-desktop.png')});
  const leftFrame = page.frames().find(frame=>frame.url().includes('/local-skill.html?embed=1'));
  const rightFrame = page.frames().find(frame=>frame.url().includes('/devinwiki.html?embed=1'));
  const rightBefore = await rightFrame.evaluate(()=>scrollY);
  await leftFrame.evaluate(()=>scrollBy(0,800));
  assert.equal(await rightFrame.evaluate(()=>scrollY),rightBefore,'Independent scroll should not move the other Wiki.');

  await page.goto(base + '/issues-compare.html#case=figma-compact-input');
  await page.waitForSelector('.skill-fix');
  assert.equal(await page.locator('.review-correction').count(),0);
  assert.equal(await page.locator('[data-category="review-notes"]').count(),0);
  assert.equal(await page.locator('.tool-verdict .status-error').count(),0);
  assert.equal(await page.locator('.fact-box').count(),0,'Remove duplicate source summary.');
  assert(await page.locator('.skill-fix').evaluate(el=>el.getBoundingClientRect().top < document.querySelector('.tool-verdicts').getBoundingClientRect().top),'Skill fix must precede tool comparison.');
  assert(await page.locator('.skill-fix p').evaluate(el=>parseFloat(getComputedStyle(el).fontSize) >= 16));
  await page.goto(base + '/issues-compare.html#case=lightbox-reinit');
  await page.waitForSelector('.skill-fix');
  assert.equal(await page.locator('.tool-verdict .status-error').count(),0);
  await page.goto(base + '/issues-compare.html#case=sqlx-fixbound');
  await page.waitForSelector('.skill-fix');
  assert.match(await page.locator('.plain-example').innerText(),/返回原 SQL/);
  await page.locator('.skill-fix').scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(output,'issues-desktop.png')});
  await page.locator('.case-source-shortcut').click();
  await page.waitForFunction(()=>document.querySelector('#source-evidence').getBoundingClientRect().top < innerHeight);
  await page.goto(base + '/issues-compare.html#case=ghost-build-order');
  await page.waitForFunction(()=>document.querySelectorAll('.audit-diagram-view svg').length===2);
  assert.equal(await page.locator('.case-button').count(),10,'A deep link should not hide the other cases by default.');
  assert.equal(await page.locator('[data-category="all"]').getAttribute('aria-pressed'),'true');
  await page.locator('[data-category="interface-contract"]').click();
  assert.equal(await page.locator('.case-button').count(),1);
  await page.locator('#show-all-cases').click();
  assert.equal(await page.locator('.case-button').count(),10);
  await page.locator('[data-case="ghost-helper-order"]').click();
  await page.waitForFunction(()=>document.querySelectorAll('.audit-diagram-view svg').length===2);

  await page.goto(base + '/index.html');
  await page.waitForSelector('.material-cell');
  assert.equal(await page.locator('.style-table tbody tr').count(),5);
  assert.equal(await page.locator('.material-cell').count(),50);
  assert.equal(await page.locator('#local-fact-count').innerText(),'5/7');
  await page.locator('[data-ability="B"][data-tool="local-skill"]').click();
  assert.equal(await page.locator('.training-evidence-grid article').count(),7);
  assert.doesNotMatch(await page.locator('#training-evidence').innerText(),/撤回|指控/);
  assert.match(await page.locator('#training-evidence').innerText(),/不是事实错误/);
  await page.locator('.training-evidence-heading button').click();
  await page.locator('#tool-differences').scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(output,'home-desktop.png')});
  await page.emulateMedia({colorScheme:'dark'});
  await page.locator('#atomic-capabilities').scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(output,'home-dark.png')});

  await page.setViewportSize({width:390,height:844});
  await page.emulateMedia({colorScheme:'light'});
  await page.goto(base + '/compare.html');
  await page.waitForFunction(()=>document.querySelectorAll('.compare-reading-example').length === 4);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth + 1),'Mobile page should not overflow horizontally.');
  await page.locator('#jump-readers').click();
  assert(await page.locator('#left-frame').evaluate(el=>el.getBoundingClientRect().height >= 460));
  await page.screenshot({path:path.join(output,'compare-mobile.png')});
  await page.goto(base + '/index.html');
  await page.waitForSelector('.material-cell');
  assert(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth + 1),'Mobile home should not overflow horizontally.');
  await page.locator('#atomic-capabilities').scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(output,'home-mobile.png')});
  await page.goto(base + '/issues-compare.html#case=sqlx-fixbound');
  await page.waitForSelector('.skill-fix');
  assert(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth + 1),'Mobile issue page should not overflow horizontally.');
  await page.locator('.skill-fix').scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(output,'issues-mobile.png')});
  assert.deepEqual(failures,[],'Unexpected page script errors');
  console.log('PASS: five tool profiles, all evidence targets, independent scrolling, retractions, source shortcut, homepage matrix, desktop/mobile and dark mode.');
  console.log('Screenshots: ' + output);
} finally {
  await browser.close();
}
