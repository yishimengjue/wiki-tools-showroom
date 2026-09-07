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

  ['left', 'right'].forEach(name => {
    sides[name] = {
      name,
      frame: document.getElementById(name + '-frame'),
      select: document.getElementById(name + '-tool'),
      status: document.getElementById(name + '-status'),
      open: document.getElementById(name + '-open'),
      progress: document.getElementById(name + '-progress'),
      overview: document.getElementById('overview-' + name),
      tool: '', instance: '', ready: false, metadata: null, ratio: 0, timer: null
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
    output.textContent = describe('codeBlocks', '代码块') + '；' + describe('diagrams', '图表') +
      '。体量或侧重不同，不代表细节覆盖更多或事实更准确。';
  }

  function resetOverview(side) {
    side.overview.querySelector('.overview-tool').textContent = TOOLS[side.tool].name;
    side.overview.querySelectorAll('[data-metric]').forEach(el => { el.textContent = '待加载'; });
    side.overview.querySelector('.compare-evidence').replaceChildren();
    difference();
  }

  function applyMetadata(side, data) {
    const metrics = data.metrics;
    if (!metrics || !['pages', 'codeBlocks', 'diagrams', 'characters'].every(key =>
      Number.isSafeInteger(metrics[key]) && metrics[key] >= 0 && metrics[key] < 1000000000
    )) return;
    side.metadata = metrics;
    side.overview.querySelectorAll('[data-metric]').forEach(el => {
      el.textContent = metrics[el.dataset.metric].toLocaleString('zh-CN');
    });
    const nav = side.overview.querySelector('.compare-evidence');
    nav.replaceChildren();
    if (Array.isArray(data.evidence)) data.evidence.slice(0, 2).forEach(item => {
      if (!item || !/^[a-zA-Z][a-zA-Z0-9_-]{0,100}$/.test(item.target) ||
          typeof item.label !== 'string') return;
      const link = document.createElement('a');
      link.href = TOOLS[side.tool].file + '?embed=1#' + item.target;
      link.textContent = item.label.slice(0, 70);
      link.title = '在' + (side.name === 'left' ? '左' : '右') + '侧定位原文';
      link.addEventListener('click', event => {
        event.preventDefault();
        send(side, 'navigate', { target: item.target });
      });
      nav.append(link);
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
      if (firstReady && selectedCase) send(side, 'case', { caseId: selectedCase });
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
