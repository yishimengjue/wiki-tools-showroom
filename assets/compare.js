(() => {
  'use strict';
  const CHANNEL = 'wiki-compare-v1';
  const TOOLS = Object.freeze({
    'local-skill': { name: 'Local Skill', file: 'local-skill.html' },
    devinwiki: { name: 'DevinWiki', file: 'devinwiki.html' },
    'deepwiki-open': { name: 'deepwiki-open', file: 'deepwiki-open.html' },
    openwiki: { name: 'OpenWiki', file: 'openwiki.html' },
    codewiki: { name: 'CodeWiki', file: 'codewiki.html' }
  });
  const CASES = new Set(['ghost-build-order', 'ghost-helper-order']);
  const RECEIVED = new Set(['ready', 'progress', 'navigation', 'search', 'error']);
  const targetOrigin = location.protocol === 'file:' ? '*' : location.origin;
  const sync = document.getElementById('sync-scroll');
  const routeMessage = document.getElementById('route-message');
  const sides = {};
  let selectedCase = '';
  let sequence = 0;
  let syncLeader = null;
  const diagramState = {};
  // Share only validated metadata with the topic viewer; iframe messages remain checked here.
  function publishDiagrams(side, records = null) {
    diagramState[side.name] = {tool:side.tool, ready:side.ready, records};
    document.dispatchEvent(new CustomEvent('wiki-diagram-state', {detail:{...diagramState}}));
  }
  window.WIKI_COMPARE_DIAGRAMS = {
    snapshot: () => ({...diagramState}),
    choose: (name, tool) => {
      if (!sides[name] || !Object.hasOwn(TOOLS, tool)) return;
      load(sides[name], tool);
      syncLeader = null;
      updateURL();
    },
    locate: entries => {
      sync.checked = false;
      syncLeader = null;
      entries.forEach(({side, target}) => {
        if (sides[side] && validTarget(target)) send(sides[side], 'navigate', {target});
      });
      document.getElementById('compare-readers').scrollIntoView({block:'start',behavior:'instant'});
    }
  };

  ['left', 'right'].forEach(name => {
    sides[name] = {
      name,
      frame: document.getElementById(name + '-frame'),
      select: document.getElementById(name + '-tool'),
      status: document.getElementById(name + '-status'),
      open: document.getElementById(name + '-open'),
      progress: document.getElementById(name + '-progress'),
      overview: document.getElementById('overview-' + name),
      tool: '', instance: '', ready: false, metadata: null, style: null, ratio: 0, timer: null, pendingTarget: null
    };
  });

  function send(side, command, fields = {}) {
    if (!side.ready && command !== 'hello') return;
    side.frame.contentWindow.postMessage({
      channel: CHANNEL, command, instance: side.instance, ...fields
    }, targetOrigin);
  }

  function updateURL() {
    const url = new URL(location.href);
    url.searchParams.set('left', sides.left.tool);
    url.searchParams.set('right', sides.right.tool);
    url.searchParams.delete('case');
    url.hash = selectedCase ? 'case=' + selectedCase : '';
    try { history.replaceState(null, '', url); } catch (_) { /* file hosts may disallow history updates. */ }
    document.getElementById('issues-link').href = 'issues-compare.html' +
      (selectedCase ? '#case=' + selectedCase : '');
  }

  function difference() {
    const left = sides.left.metadata;
    const right = sides.right.metadata;
    const output = document.getElementById('difference-text');
    if (!left || !right) {
      output.textContent = '正在从两份全文读取统计；不同体量或侧重不等于更准确。';
      return;
    }
    if (sides.left.tool === sides.right.tool) {
      output.textContent = '两侧选择了同一工具，可独立查看不同章节；数量一致不代表所有内容已经核查正确。';
      return;
    }
    const describe = (key, label) => {
      if (left[key] === right[key]) return label + '数量相同（' + left[key] + '）';
      const larger = left[key] > right[key] ? sides.left : sides.right;
      return TOOLS[larger.tool].name + ' 的' + label + '更多（' +
        Math.max(left[key], right[key]) + ' 对 ' + Math.min(left[key], right[key]) + '）';
    };
    output.textContent = describe('codeBlocks', '代码块') + '；' + describe('diagrams', '图表') + '。数量不代表准确性。';
  }

  function resetOverview(side) {
    side.overview.querySelector('.overview-tool').textContent = TOOLS[side.tool].name;
    side.overview.querySelectorAll('[data-metric]').forEach(el => { el.textContent = '待加载'; });
    side.overview.querySelector('.compare-evidence').replaceChildren();
    ['.compare-style', '.compare-extra-style', '.compare-diagram-types', '.compare-reading-evidence'].forEach(selector => side.overview.querySelector(selector).replaceChildren());
    difference();
  }

  const validTarget = target => typeof target === 'string' && /^[a-zA-Z][a-zA-Z0-9_-]{0,100}$/.test(target);
  function evidenceLink(side, target, label) {
    const link = document.createElement('a');
    link.href = TOOLS[side.tool].file + '?embed=1#' + target;
    link.textContent = label;
    link.title = '在' + (side.name === 'left' ? '左' : '右') + '侧定位原文';
    link.addEventListener('click', event => {
      if (!side.ready || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      send(side, 'navigate', { target });
      document.querySelectorAll('.compare-panel').forEach(panel => panel.classList.toggle('is-evidence-target', panel.dataset.side === side.name));
      const destination = matchMedia('(max-width:800px)').matches ? side.frame.closest('.compare-panel') : document.getElementById('compare-readers');
      destination.scrollIntoView({block:'start', behavior:'instant'});
    });
    return link;
  }

  function renderStyle(side, data) {
    const style = side.overview.querySelector('.compare-style');
    style.replaceChildren();
    side.overview.querySelector('.compare-extra-style').replaceChildren();
    if (data.style && typeof data.style.focus === 'string' && typeof data.style.summary === 'string') {
      side.style = {focus:data.style.focus.slice(0,100), summary:data.style.summary.slice(0,500)};
      const title = document.createElement('h3');
      title.textContent = side.style.focus;
      const summary = document.createElement('p');
      summary.textContent = side.style.summary;
      style.append(title);
      side.overview.querySelector('.compare-extra-style').append(summary);
    }
    const immediate = document.createElement('nav');
    immediate.className = 'compare-style-links';
    immediate.setAttribute('aria-label','风格说法的原文例子');
    if (Array.isArray(data.reading)) data.reading.slice(0,3).forEach(item=> {
      if (item && validTarget(item.target) && typeof item.label === 'string') immediate.append(evidenceLink(side,item.target,'看例子：' + item.label.slice(0,80)));
    });
    style.append(immediate);
    if (side.tool === 'local-skill' && Array.isArray(data.repeatedStructure)) {
      const records = data.repeatedStructure.filter(item=>item && validTarget(item.target) && typeof item.title === 'string' && /^page-\d+$/.test(item.page) && Array.isArray(item.outline) && item.outline.length > 0 && item.outline.every(text=>typeof text==='string')).slice(0,2);
      if (records.length === 2 && JSON.stringify(records[0].outline) === JSON.stringify(records[1].outline)) {
        const proof = document.createElement('section');
        proof.className = 'compare-structure-proof';
        const heading = document.createElement('h3');
        heading.textContent = '“复用相同结构”的两个实际例子';
        const plain = document.createElement('p');
        plain.textContent = '两页介绍的主题不同，但二级标题完全一致。下列标题直接从原文提取；结构相同不等于事实有错。';
        proof.append(heading,plain);
        records.forEach(item=> {
          const section = document.createElement('article');
          const outline = document.createElement('p');
          outline.className = 'original-outline';
          outline.textContent = item.outline.join(' → ');
          section.append(evidenceLink(side,item.target,item.page.replace('page-','第 ') + ' 页 · ' + item.title),outline);
          proof.append(section);
        });
        const compare = document.createElement('button');
        compare.type = 'button';
        compare.className = 'compare-button compare-structure-pair';
        compare.textContent = '把这两章放到左右全文窗口对照';
        compare.addEventListener('click',()=> {
          sync.checked = false;
          chooseCase('',false);
          ['left','right'].forEach((name,index)=> {
            load(sides[name],'local-skill');
            sides[name].pendingTarget = records[index].target;
          });
          updateURL();
          document.getElementById('compare-readers').scrollIntoView({block:'start',behavior:'instant'});
        });
        proof.append(compare);
        side.overview.querySelector('.compare-extra-style').append(proof);
      }
    }
    const reading = side.overview.querySelector('.compare-reading-evidence');
    reading.replaceChildren();
    if (Array.isArray(data.reading)) data.reading.slice(0,3).forEach(item => {
      if (!item || !validTarget(item.target) || !['label','detail','heading'].every(key => typeof item[key] === 'string')) return;
      const card = document.createElement('article');
      card.className = 'compare-reading-example';
      const detail = document.createElement('p');
      detail.textContent = item.detail.slice(0,400);
      const heading = document.createElement('small');
      heading.textContent = '原文章节：' + item.heading.slice(0,150);
      card.append(evidenceLink(side, item.target, item.label.slice(0,100) + ' · 看原文'), detail, heading);
      if (typeof item.excerpt === 'string' && item.excerpt) {
        const quoteLabel = document.createElement('small');
        quoteLabel.textContent = '下面直接摘自该节开头（最多 460 字符）';
        const quote = document.createElement('blockquote');
        quote.textContent = item.excerpt.slice(0,460);
        card.append(quoteLabel,quote);
      }
      if (Array.isArray(item.outline) && item.outline.every(text=>typeof text==='string')) {
        const outline = document.createElement('p');
        outline.className = 'original-outline';
        outline.textContent = '该页二级标题：' + item.outline.slice(0,15).join(' → ');
        card.append(outline);
      }
      reading.append(card);
    });
    const diagrams = side.overview.querySelector('.compare-diagram-types');
    diagrams.replaceChildren();
    if (Array.isArray(data.diagramTypes)) data.diagramTypes.slice(0,8).forEach(item => {
      if (!item || !validTarget(item.target) || !Number.isSafeInteger(item.count) || item.count < 1 ||
          typeof item.label !== 'string' || typeof item.description !== 'string') return;
      const link = evidenceLink(side, item.target, item.label.slice(0,50) + ' ' + item.count + ' 张 · 看图');
      link.title += '。' + item.description.slice(0,250);
      diagrams.append(link);
    });
    const note = document.createElement('p');
    note.className = 'compare-diagram-description';
    note.textContent = '流程／关系图看步骤或依赖；时序图看谁调用谁；状态图看状态变化。点击类型可看这份 Wiki 的原图，图多不表示顺序正确。';
    diagrams.append(note);
  }

  function applyMetadata(side, data) {
    const metrics = data.metrics;
    if (!metrics || !['pages', 'codeBlocks', 'diagrams', 'characters'].every(key =>
      Number.isSafeInteger(metrics[key]) && metrics[key] >= 0 && metrics[key] < 1000000000
    )) return;
    side.metadata = metrics;
    const paired = Array.isArray(data.pairedDiagrams) ? data.pairedDiagrams.filter(item =>
      item && typeof item.topic === 'string' && validTarget(item.target) &&
      typeof item.source === 'string' && item.source.length < 30000 &&
      ['kind','page','heading'].every(key => typeof item[key] === 'string')
    ).slice(0,10) : [];
    publishDiagrams(side, paired);
    renderStyle(side, data);
    side.overview.querySelectorAll('[data-metric]').forEach(el => {
      el.textContent = metrics[el.dataset.metric].toLocaleString('zh-CN');
    });
    const nav = side.overview.querySelector('.compare-evidence');
    nav.replaceChildren();
    if (Array.isArray(data.evidence)) data.evidence.slice(0, 2).forEach(item => {
      if (!item || !/^[a-zA-Z][a-zA-Z0-9_-]{0,100}$/.test(item.target) ||
          typeof item.label !== 'string') return;
      nav.append(evidenceLink(side, item.target, item.label.slice(0,70)));
    });
    difference();
  }

  function load(side, tool) {
    if (!Object.hasOwn(TOOLS, tool)) return;
    clearTimeout(side.timer);
    side.tool = tool;
    side.instance = side.name + '-' + (++sequence);
    side.ready = false;
    side.metadata = null;
    side.style = null;
    side.pendingTarget = null;
    publishDiagrams(side);
    side.ratio = 0;
    side.select.value = tool;
    side.progress.textContent = '0%';
    side.open.href = TOOLS[tool].file;
    side.frame.title = (side.name === 'left' ? '左侧 ' : '右侧 ') + TOOLS[tool].name + ' 完整 Wiki';
    side.frame.setAttribute('aria-busy', 'true');
    side.status.hidden = false;
    side.status.textContent = '正在加载 ' + TOOLS[tool].name + ' 全文…';
    resetOverview(side);
    // Both the path and message destination are limited to the five bundled readers.
    side.frame.src = TOOLS[tool].file + '?embed=1&frame=' + side.instance;
    side.timer = setTimeout(() => {
      if (side.ready) return;
      side.status.textContent = '未能连接到这份 Wiki。请用上方“单独阅读”查看原文，或重新选择工具重试。';
      side.frame.setAttribute('aria-busy', 'false');
    }, 12000);
  }

  function chooseCase(value, notify = true) {
    selectedCase = CASES.has(value) ? value : '';
    document.querySelectorAll('[data-case]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.case === selectedCase));
    });
    if (notify && selectedCase) Object.values(sides).forEach(side => {
      send(side, 'case', { caseId: selectedCase });
    });
    updateURL();
  }

  function readRoute() {
    const params = new URLSearchParams(location.search);
    const hash = new URLSearchParams(location.hash.slice(1));
    const warnings = [];
    ['left', 'right'].forEach((name, index) => {
      const value = params.get(name) || hash.get(name) || (index ? 'devinwiki' : 'local-skill');
      const tool = Object.hasOwn(TOOLS, value) ? value : (index ? 'devinwiki' : 'local-skill');
      if (tool !== value) warnings.push('未知工具已恢复默认选择。');
      load(sides[name], tool);
    });
    const requested = hash.get('case') || params.get('case') || '';
    if (requested && !CASES.has(requested)) warnings.push('没有找到该主题，当前显示全文。');
    routeMessage.textContent = [...new Set(warnings)].join(' ');
    routeMessage.hidden = !warnings.length;
    chooseCase(requested, false);
  }

  window.addEventListener('message', event => {
    const side = Object.values(sides).find(item => event.source === item.frame.contentWindow);
    const data = event.data;
    if (!side || (location.protocol !== 'file:' && event.origin !== location.origin) ||
        !data || data.channel !== CHANNEL || data.instance !== side.instance ||
        data.tool !== side.tool || !RECEIVED.has(data.type)) return;
    if (data.type === 'ready') {
      const firstReady = !side.ready;
      side.ready = true;
      clearTimeout(side.timer);
      side.status.hidden = true;
      side.frame.setAttribute('aria-busy', 'false');
      applyMetadata(side, data);
      if (firstReady && side.pendingTarget) {
        send(side,'navigate',{target:side.pendingTarget});
        side.pendingTarget = null;
      } else if (firstReady && selectedCase) send(side, 'case', { caseId: selectedCase });
    } else if (data.type === 'progress' && Number.isFinite(data.ratio)) {
      side.ratio = Math.min(1, Math.max(0, data.ratio));
      side.progress.textContent = Math.round(side.ratio * 100) + '%';
      if (data.userInitiated === true) syncLeader = side;
      if (sync.checked && !data.suppressed && syncLeader === side) {
        send(sides[side.name === 'left' ? 'right' : 'left'], 'scroll', { ratio: side.ratio });
      }
    } else if (data.type === 'navigation') {
      side.status.hidden = true;
    } else if (data.type === 'search' && data.active === true && sync.checked) {
      sync.checked = false;
      routeMessage.hidden = false;
      routeMessage.textContent = '搜索会改变页面长度，已关闭进度同步；两侧搜索互不影响。';
    } else if (data.type === 'error' && typeof data.message === 'string') {
      side.status.hidden = false;
      side.status.textContent = data.message.slice(0, 200) + ' 可使用目录或“单独阅读”继续。';
    }
  });

  Object.values(sides).forEach(side => {
    side.select.addEventListener('change', () => {
      load(side, side.select.value);
      syncLeader = null;
      updateURL();
    });
    side.frame.addEventListener('load', () => send(side, 'hello'));
    side.frame.addEventListener('error', () => {
      side.status.hidden = false;
      side.status.textContent = '这份 Wiki 加载失败，请使用“单独阅读”或重新选择工具。';
    });
  });
  document.getElementById('swap-tools').addEventListener('click', () => {
    const left = sides.left.tool;
    load(sides.left, sides.right.tool);
    load(sides.right, left);
    syncLeader = null;
    updateURL();
  });
  document.getElementById('jump-readers').addEventListener('click', () => document.getElementById('compare-readers').scrollIntoView({block:'start',behavior:'instant'}));
  document.getElementById('jump-style').addEventListener('click',()=> {
    const overview = document.getElementById('compare-overview');
    overview.open = true;
    overview.querySelectorAll('.overview-evidence').forEach(el=>{el.open=true;});
    overview.scrollIntoView({block:'start',behavior:'instant'});
  });
  document.querySelectorAll('[data-case]').forEach(button => {
    button.addEventListener('click', () => chooseCase(button.dataset.case));
  });
  sync.addEventListener('change', () => {
    syncLeader = null;
    if (!sync.checked) return;
    syncLeader = sides.left;
    send(sides.right, 'scroll', { ratio: sides.left.ratio });
  });
  window.addEventListener('hashchange', () => {
    const value = new URLSearchParams(location.hash.slice(1)).get('case') || '';
    routeMessage.hidden = !value || CASES.has(value);
    routeMessage.textContent = routeMessage.hidden ? '' : '没有找到该主题，当前保留全文阅读。';
    chooseCase(value);
  });
  readRoute();
})();
