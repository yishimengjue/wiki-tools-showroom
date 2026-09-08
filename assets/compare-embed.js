(() => {
  'use strict';
  const params = new URLSearchParams(location.search);
  if (params.get('embed') !== '1') return;
  const CHANNEL = 'wiki-compare-v1';
  const COMMANDS = new Set(['hello', 'case', 'navigate', 'scroll']);
  const PROFILES = {
    'local-skill': {
      build: 'ghost-local-build-order', helper: 'ghost-local-unhook-order',
      style: {focus:'按子模块讲机制和维护约束', summary:'维护者视角体现在“修改会影响什么、要检查什么”的说明。部分章节采用固定版式：用途、机制、约束、验证；另一些章节直接复用相同的章节结构。下面给出可跳转的原文例子，不以风格判断准确性。'},
      reading: [
        {page:'page-19', heading:'Purpose', label:'技术说明的固定结构', detail:'这一页按 Purpose、Mechanism、Build Flow、Invariants、Verification 展开，可直接看到“用途—机制—约束—验证”的写法。'},
        {page:'page-20', heading:'Source-Mutating Build Consequences', label:'侧重修改后的影响', detail:'用独立章节说明构建会改变源文件，以及阶段失败的后果，偏向维护者关心的依赖和边界。'}
      ],
      evidence: [['构建章节原文', 'page-19'], ['辅助进程章节原文', 'page-12']]
    },
    devinwiki: {
      build: 'ghost-devin-build-order', helper: 'page-16',
      style: {focus:'用概念说明和组件表组织技术教程', summary:'更像分章节的技术手册：先说明概念，再用组件表、实现说明和不同类型的图展开。同一主题往往同时给总览和细节，而非只给一段摘要。'},
      reading: [
        {page:'page-2', heading:'2. Component Breakdown', label:'用表格拆解模块职责', detail:'组件拆解章节把部件与职责放在一起，可与左侧按子流程分段说明的方式直接比较。'},
        {page:'page-15', heading:'Utility Component Summary', label:'表格式技术参考', detail:'这里按 Component、Type、Purpose 整理辅助部件，便于查某个名字属于什么、用来做什么。'}
      ],
      evidence: [['构建章节原文', 'page-3'], ['辅助进程相关原文', 'page-16']]
    },
    'deepwiki-open': {
      build: 'page-12', helper: 'page-8',
      style: {focus:'把代码片段嵌入长篇实现讲解', summary:'更接近源码讲读：同一页穿插数据结构、函数片段、逐步解释与图表。读者能看到具体代码形式，但篇幅较长，展示了代码也不代表代码或解释都正确。'},
      reading: [
        {page:'page-6', heading:'Core Data Structures', label:'先放结构代码，再解释字段', detail:'查看数据结构章节的代码块和字段说明，直观看到它与以自然语言解释为主的写法有什么区别。'},
        {page:'page-11', heading:'Key Components Summary', label:'长篇讲解后再列组件表', detail:'实现说明之后另列组件汇总表，同一页兼有展开讲解和查阅式总结。'}
      ],
      evidence: [['构建章节原文', 'page-12'], ['辅助进程章节原文', 'page-8']]
    },
    openwiki: {
      build: 'page-14', helper: 'page-9',
      style: {focus:'按阅读任务连接模块、文件和工作流', summary:'更像源码导航与工作流说明：用导航页告诉读者“看什么问题，去哪个页面”，正文经常交代文件之间的关系和失败条件。目录页也包含在原文页数中。'},
      reading: [
        {page:'page-13', heading:'Task-routing map', label:'按问题选择阅读入口', detail:'原文用 Task-routing map 把要了解的事情与页面关联起来，侧重“去哪里找”。'},
        {page:'page-3', heading:'Invariants and failure semantics', label:'单独列约束与失败条件', detail:'类型说明后另列使用前提和失败处理，体现其按源码关系组织说明的方式；这些说法仍需核对。'}
      ],
      evidence: [['构建章节原文', 'page-14'], ['辅助进程章节原文', 'page-9']]
    },
    codewiki: {
      build: 'compare-codewiki-build', helper: 'compare-codewiki-helper',
      style: {focus:'在一篇文档中集中呈现架构、状态和风险', summary:'更像精简的架构说明：把依赖关系、共享状态、边界和维护风险集中到同一页。不必在很多页面之间切换，但不能因此认为每个函数和步骤都讲全了。'},
      reading: [
        {page:'page-1', heading:'Shared State and Ownership', label:'集中说明状态归谁管理', detail:'用独立章节和表格归纳共享状态，而不是将这些信息分散到多个子模块页面。'},
        {page:'page-1', heading:'Maintenance Risks and Known Fragility', label:'单列维护风险清单', detail:'原文集中列出维护风险；这是组织方式的证据，不表示整份文档的每项判断都已验证。'}
      ],
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
  const reading = profile.reading.flatMap((item, index) => {
    const page = document.getElementById(item.page);
    const heading = page && [...page.querySelectorAll('h2, h3')].find(el =>
      !el.closest('.inline-issue') && el.textContent.trim() === item.heading
    );
    if (!heading) return [];
    if (!heading.id) heading.id = 'compare-reading-' + (index + 1);
    let example = heading.nextElementSibling;
    while (example && (example.classList.contains('inline-issue') ||
      (/^H[1-6]$/.test(example.tagName) && Number(example.tagName.slice(1)) > Number(heading.tagName.slice(1))))) example = example.nextElementSibling;
    const excerpt = example && !/^H[1-6]$/.test(example.tagName) ? example.textContent.trim().slice(0,460) : '';
    const outline = [...page.querySelectorAll('h2')].filter(el=>!el.closest('.inline-issue')).map(el=>el.textContent.trim());
    return [{label:item.label, detail:item.detail, heading:item.heading, target:heading.id, excerpt, outline}];
  });
  const repeatedStructure = tool === 'local-skill' ? ['page-5','page-7'].flatMap((id,index)=> {
    const page = document.getElementById(id);
    const heading = page?.querySelector('h2');
    if (!heading) return [];
    if (!heading.id) heading.id = 'compare-style-repeat-' + (index + 1);
    return [{target:heading.id,page:id,title:page.querySelector('h1').textContent.trim(),outline:[...page.querySelectorAll('h2')].filter(el=>!el.closest('.inline-issue')).map(el=>el.textContent.trim())}];
  }) : [];
  // Count authored diagram declarations before the lazy renderer replaces them with SVG.
  const diagramDefinitions = [
    ['flowchart', /^(?:flowchart|graph)\b/i, '流程／关系图', '用方框和箭头表示步骤或依赖；关系箭头不一定表示执行先后。'],
    ['sequence', /^sequenceDiagram\b/i, '调用时序图', '按不同参与者排列调用和返回，侧重谁先联系谁。'],
    ['state', /^stateDiagram(?:-v2)?\b/i, '状态图', '展示对象从一种状态切换到另一种状态，不是代码执行清单。'],
    ['class', /^classDiagram\b/i, '类／结构图', '展示类型、字段或结构之间的关系。']
  ];
  const diagramTypes = new Map();
  const pairedDiagrams = [];
  const topicRecords = (window.WIKI_DIAGRAM_TOPICS || []).filter(topic => topic.tools[tool]);
  [...content.querySelectorAll('.mermaid')].filter(el => !el.closest('.inline-issue')).forEach((el, index) => {
    const original = el.textContent;
    const source = original.split('\n').filter(line => !line.trim().startsWith('%%')).join('\n').trim();
    const definition = diagramDefinitions.find(item => item[1].test(source)) || ['other', null, '其他图表', '未归入以上类型，点击查看原图。'];
    const [kind, , label, description] = definition;
    if (!el.id) el.id = 'compare-diagram-' + (index + 1);
    if (!diagramTypes.has(kind)) diagramTypes.set(kind, {kind, label, description, count:0, target:el.id});
    diagramTypes.get(kind).count += 1;
    const page = el.closest('.wiki-page');
    const previousHeadings = [...page.querySelectorAll('h1,h2,h3,h4')].filter(heading =>
      !heading.closest('.inline-issue') && Boolean(heading.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING)
    );
    const heading = previousHeadings.at(-1)?.textContent.trim();
    topicRecords.forEach(topic => {
      const match = topic.tools[tool];
      if (page.id !== match.page || heading !== match.heading || !match.fragments.every(fragment => original.includes(fragment))) return;
      // Preserve a stable, exact diagram target even if earlier diagrams are inserted later.
      const anchor = document.createElement('span');
      anchor.id = 'paired-diagram-' + topic.id;
      el.before(anchor);
      pairedDiagrams.push({topic:topic.id, target:anchor.id, source:original, kind:label, page:page.id, heading});
    });
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
    style: profile.style,
    reading,
    repeatedStructure,
    diagramTypes: [...diagramTypes.values()],
    pairedDiagrams,
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
    content.querySelectorAll('.compare-current-target').forEach(el=>el.classList.remove('compare-current-target'));
    const highlight = visibleTarget.matches('span[id^="paired-diagram-"]') ? visibleTarget.nextElementSibling : visibleTarget;
    highlight?.classList.add('compare-current-target');
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
