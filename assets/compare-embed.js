(() => {
  'use strict';
  const params = new URLSearchParams(location.search);
  if (params.get('embed') !== '1') return;
  const CHANNEL = 'wiki-compare-v1';
  const COMMANDS = new Set(['hello', 'case', 'navigate', 'scroll']);
  const PROFILES = {
    'local-skill': {
      build: 'ghost-local-build-order', helper: 'ghost-local-unhook-order',
      evidence: [['构建章节原文', 'page-19'], ['辅助进程章节原文', 'page-12']]
    },
    devinwiki: {
      build: 'ghost-devin-build-order', helper: 'page-16',
      evidence: [['构建章节原文', 'page-3'], ['辅助进程相关原文', 'page-16']]
    },
    'deepwiki-open': {
      build: 'page-12', helper: 'page-8',
      evidence: [['构建章节原文', 'page-12'], ['辅助进程章节原文', 'page-8']]
    },
    openwiki: {
      build: 'page-14', helper: 'page-9',
      evidence: [['构建章节原文', 'page-14'], ['辅助进程章节原文', 'page-9']]
    },
    codewiki: {
      build: 'compare-codewiki-build', helper: 'compare-codewiki-helper',
      evidence: [['Build-Time Pipeline 原文', 'compare-codewiki-build'], ['Restore ntdll 原文', 'compare-codewiki-helper']]
    }
  };
  const tool = location.pathname.split('/').pop().replace(/\.html$/, '');
  if (!Object.hasOwn(PROFILES, tool)) return;
  const content = document.getElementById('wiki-content');
  if (!content) return;
  const pages = [...content.querySelectorAll('.wiki-page')];
  const profile = PROFILES[tool];
  const instance = params.get('frame') || '';
  const targetOrigin = location.protocol === 'file:' ? '*' : location.origin;
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'assets/compare.css';
  document.head.append(stylesheet);
  document.body.classList.add('compare-embed');
  document.documentElement.style.scrollBehavior = 'auto';

  function notify(type, fields = {}) {
    if (window.parent === window) return;
    window.parent.postMessage({ channel: CHANNEL, type, tool, instance, ...fields }, targetOrigin);
  }

  if (tool === 'codewiki') {
    const headings = [...content.querySelectorAll('h2, h3')].filter(el => !el.closest('.inline-issue'));
    const build = headings.find(el => el.textContent.trim() === 'Build-Time Pipeline');
    const helper = headings.find(el => /Restore\s+ntdll/i.test(el.textContent));
    if (build) build.id = profile.build;
    if (helper) helper.id = profile.helper;
  }
  // Locate the verified original excerpts, not a summary or an inferred match.
  // A changed/missing excerpt keeps the profile's safe chapter fallback.
  function bindEvidence(kind, pageId, selector, fragments) {
    const page = document.getElementById(pageId);
    if (!page) return;
    const normalize = text => text.replace(/\s/g, '');
    const candidate = [...page.querySelectorAll(selector)].find(element => {
      if (element.closest('.inline-issue')) return false;
      const text = normalize(element.textContent);
      return fragments.every(fragment => text.includes(normalize(fragment)));
    });
    if (!candidate) return;
    if (!candidate.id) candidate.id = 'compare-' + tool + '-' + kind + '-evidence';
    profile[kind] = candidate.id;
  }
  if (tool === 'openwiki') {
    bindEvidence('build', 'page-14', '.mermaid', [
      'A["build_assembly()"] --> B["prepare_src_shellcode()"]',
      'B --> C["build_resource()"]', 'C --> D["build_cpp_src()"]', 'D --> E["link()"]'
    ]);
    bindEvidence('helper', 'page-9', 'li', [
      'Temporary process lifecycle:', 'ReadBufferFromProcess',
      'terminates the spawned audiodg.exe immediately after the read'
    ]);
  } else if (tool === 'deepwiki-open') {
    bindEvidence('build', 'page-12', 'pre', [
      'build_assembly() prepare_src_shellcode() build_resource() build_cpp_src() link()'
    ]);
    bindEvidence('helper', 'page-8', '.mermaid', [
      'U->>R: RetSpoofCall(SysNtTerminateProcess)', 'U->>U: Parse PE headers',
      'U->>R: RetSpoofCall(SysNtProtectVirtualMemory)', 'U->>R: RetSpoofCall(memcpy)'
    ]);
  } else if (tool === 'codewiki') {
    bindEvidence('build', 'page-1', '.mermaid', [
      'Start --> Assemble', 'Assemble --> Read', 'Read --> Keys'
    ]);
    bindEvidence('helper', 'page-1', 'ol', [
      'ReadBufferFromProcess reads an image-sized range',
      'The temporary process is terminated.',
      'FlushNTDLL locates .text in the local image'
    ]);
  } else if (tool === 'devinwiki') {
    bindEvidence('helper', 'page-16', '.mermaid', [
      'A["FlushNTDLL()"] --> B["Locate clean copy of NTDLL"]',
      'B --> C["Replace hooked functions with original versions"]',
      'C --> D["Return to caller with cleaned NTDLL"]'
    ]);
  }
  const singlePageHeadings = pages.length === 1
    ? [...content.querySelectorAll('h2, h3')].filter(el => !el.closest('.inline-issue'))
    : [];
  singlePageHeadings.forEach((heading, index) => {
    if (!heading.id) heading.id = 'compare-section-' + (index + 1);
  });
  const targets = new Set([...content.querySelectorAll('[id]')].map(el => el.id));
  const tocItems = singlePageHeadings.length
    ? singlePageHeadings.map(heading => ({
      target: heading.id, label: heading.textContent.trim(), depth: heading.tagName.slice(1)
    }))
    : [...document.querySelectorAll('.reader-sidebar .wiki-toc a')].map(link => ({
      target: (link.getAttribute('href') || '').slice(1), label: link.textContent.trim(), depth: '2'
    }));
  const searchTexts = new Map();
  let characters = 0;
  let codeBlocks = 0;
  let diagrams = 0;
  pages.forEach(page => {
    const copy = page.cloneNode(true);
    copy.querySelectorAll('.inline-issue, .page-label, .source-link-note, script, style').forEach(el => el.remove());
    searchTexts.set(page, copy.textContent.toLocaleLowerCase());
    diagrams += copy.querySelectorAll('.mermaid').length;
    codeBlocks += [...copy.querySelectorAll('pre')].filter(el =>
      !el.closest('.mermaid') && !el.querySelector('code.language-mermaid')
    ).length;
    copy.querySelectorAll('.mermaid').forEach(el => el.remove());
    characters += copy.textContent.replace(/\s/g, '').length;
  });
  const metadata = {
    metrics: { pages: pages.length, codeBlocks, diagrams, characters },
    evidence: profile.evidence.filter(item => targets.has(item[1])).map(item => ({ label: item[0], target: item[1] }))
  };

  const toolbar = document.createElement('div');
  toolbar.className = 'compare-embed-toolbar';
  toolbar.setAttribute('role', 'region');
  toolbar.setAttribute('aria-label', '这份 Wiki 的目录与搜索');
  const toc = document.createElement('details');
  toc.className = 'compare-embed-toc';
  const tocSummary = document.createElement('summary');
  tocSummary.textContent = '目录 · ' + tocItems.length;
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', '当前 Wiki 章节目录');
  tocItems.forEach(item => {
    const target = item.target;
    if (!targets.has(target)) return;
    const link = document.createElement('a');
    link.href = '#' + target;
    link.textContent = item.label;
    link.dataset.depth = item.depth;
    nav.append(link);
  });
  toc.append(tocSummary, nav);
  const search = document.createElement('input');
  search.type = 'search';
  search.placeholder = '搜索这份全文';
  search.setAttribute('aria-label', '搜索当前 Wiki 正文');
  search.setAttribute('aria-describedby', 'compare-embed-count');
  const count = document.createElement('span');
  count.id = 'compare-embed-count';
  count.className = 'compare-embed-count';
  count.setAttribute('aria-live', 'polite');
  count.textContent = pages.length + ' 页';
  const feedback = document.createElement('p');
  feedback.className = 'compare-embed-feedback';
  feedback.setAttribute('role', 'status');
  feedback.hidden = true;
  toolbar.append(toc, search, count, feedback);
  document.body.prepend(toolbar);
  const empty = document.createElement('p');
  empty.className = 'compare-embed-empty';
  empty.textContent = '没有匹配的原文页面。请更换关键词，或清空搜索恢复全文。';
  empty.hidden = true;
  content.before(empty);

  let suppressionUntil = 0;
  let userIntentUntil = 0;
  let progressPending = false;
  let searchTimer;
  let currentTarget = '';

  function reportProgress() {
    progressPending = false;
    const root = document.scrollingElement || document.documentElement;
    const extent = Math.max(0, root.scrollHeight - window.innerHeight);
    notify('progress', {
      ratio: extent ? Math.min(1, Math.max(0, root.scrollTop / extent)) : 0,
      userInitiated: performance.now() < userIntentUntil,
      suppressed: performance.now() < suppressionUntil
    });
  }

  function queueProgress() {
    if (progressPending) return;
    progressPending = true;
    requestAnimationFrame(reportProgress);
  }

  function applySearch() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    pages.forEach(page => {
      const hit = !query || searchTexts.get(page).includes(query);
      page.classList.toggle('search-hidden', !hit);
      if (hit) visible += 1;
    });
    nav.querySelectorAll('a').forEach(link => {
      const page = document.getElementById(link.getAttribute('href').slice(1)).closest('.wiki-page');
      link.hidden = !!page && page.classList.contains('search-hidden');
    });
    count.textContent = query ? visible + '/' + pages.length + ' 页' : pages.length + ' 页';
    empty.hidden = visible !== 0;
    feedback.hidden = !query;
    feedback.textContent = query ? '按原文页面筛选；目录仅显示匹配页。' : '';
    currentTarget = '';
    notify('search', { active: !!query, visible, total: pages.length });
    queueProgress();
  }

  function scrollToTarget(id, inform = true) {
    if (typeof id !== 'string' || !targets.has(id)) {
      feedback.hidden = false;
      feedback.textContent = '没有找到这个原文位置，请从目录选择章节。';
      notify('error', { message: '原文目标不存在，未跳转或替换内容。' });
      return;
    }
    if (search.value) {
      clearTimeout(searchTimer);
      search.value = '';
      applySearch();
    }
    const target = document.getElementById(id);
    const visibleTarget = target.classList.contains('inline-issue') && target.previousElementSibling
      ? target.previousElementSibling : target;
    const owner = target.closest('.wiki-page');
    nav.querySelectorAll('a').forEach(link => {
      if (link.getAttribute('href') === '#' + id ||
          (!singlePageHeadings.length && owner && link.getAttribute('href') === '#' + owner.id)) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    suppressionUntil = performance.now() + 350;
    userIntentUntil = 0;
    window.scrollTo({ top: Math.max(0, visibleTarget.getBoundingClientRect().top + window.scrollY - toolbar.offsetHeight - 12), behavior: 'instant' });
    currentTarget = id;
    toc.open = false;
    feedback.hidden = !inform;
    if (inform) feedback.textContent = '已定位原文；定位本身不代表该工具存在错误。';
    notify('navigation', { target: id });
    queueProgress();
  }

  function jumpCase(caseId) {
    const id = caseId === 'ghost-build-order' ? profile.build :
      caseId === 'ghost-helper-order' ? profile.helper : null;
    if (!id) return;
    scrollToTarget(id);
  }

  search.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(applySearch, 100);
  });
  document.addEventListener('click', event => {
    const link = event.target.closest && event.target.closest('a[href]');
    if (!link) {
      if (!toc.contains(event.target)) toc.open = false;
      return;
    }
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      let id = href.slice(1);
      try { id = decodeURIComponent(id); } catch (_) { /* Keep a malformed fragment inert. */ }
      scrollToTarget(id);
    } else {
      let url;
      try { url = new URL(href, location.href); } catch (_) { event.preventDefault(); return; }
      if (!['http:', 'https:', 'file:', 'mailto:'].includes(url.protocol)) {
        event.preventDefault();
        return;
      }
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  }, true);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') toc.open = false;
  });
  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(type => {
    window.addEventListener(type, event => {
      if (type === 'keydown' && !['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) return;
      userIntentUntil = performance.now() + 1200;
      suppressionUntil = 0;
      currentTarget = '';
    }, { passive: true });
  });
  window.addEventListener('scroll', queueProgress, { passive: true });
  window.addEventListener('resize', queueProgress);
  window.addEventListener('message', event => {
    const data = event.data;
    if (event.source !== window.parent || window.parent === window ||
        (location.protocol !== 'file:' && event.origin !== location.origin) ||
        !data || data.channel !== CHANNEL || data.instance !== instance ||
        !COMMANDS.has(data.command)) return;
    if (data.command === 'hello') notify('ready', metadata);
    else if (data.command === 'case') jumpCase(data.caseId);
    else if (data.command === 'navigate') scrollToTarget(data.target);
    else if (data.command === 'scroll' && Number.isFinite(data.ratio)) {
      const root = document.scrollingElement || document.documentElement;
      const extent = Math.max(0, root.scrollHeight - window.innerHeight);
      suppressionUntil = performance.now() + 500;
      userIntentUntil = 0;
      currentTarget = '';
      window.scrollTo({ top: Math.min(1, Math.max(0, data.ratio)) * extent, behavior: 'instant' });
      queueProgress();
    }
  });
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(() => {
      if (currentTarget && performance.now() >= userIntentUntil) scrollToTarget(currentTarget, false);
      queueProgress();
    });
    observer.observe(content);
  }
  stylesheet.addEventListener('load', () => {
    if (currentTarget) scrollToTarget(currentTarget, false);
    queueProgress();
  });
  let initialTarget = location.hash.slice(1);
  try { initialTarget = decodeURIComponent(initialTarget); } catch (_) { initialTarget = ''; }
  // The existing Mermaid renderer re-settles location.hash after rendering;
  // embedding owns navigation so later diagrams cannot pull the reader backward.
  if (location.hash) {
    try { history.replaceState(null, '', location.pathname + location.search); } catch (_) { /* Best effort for file origins. */ }
  }
  if (targets.has(initialTarget)) requestAnimationFrame(() => scrollToTarget(initialTarget, false));
  notify('ready', metadata);
  queueProgress();
})();
