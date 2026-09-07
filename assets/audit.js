(() => {
  'use strict';
  const DATA = window.WIKI_AUDIT_DATA;
  const TOOLS = ['local-skill', 'devinwiki', 'deepwiki-open', 'openwiki', 'codewiki'];
  const NAMES = {'local-skill':'Local Skill', devinwiki:'DevinWiki', 'deepwiki-open':'DeepWiki Open', openwiki:'OpenWiki', codewiki:'CodeWiki'};
  const CATEGORIES = [
    {id:'interface-contract', name:'接口契约失真', plain:'命令、参数或输入用法写错', tag:'接口用法'},
    {id:'capability-scope', name:'能力边界误判', plain:'把局部能力说成整体保证', tag:'能力范围'},
    {id:'control-flow', name:'控制流建模错误', plain:'步骤先后、分支或依赖画错', tag:'执行流程'},
    {id:'error-semantics', name:'异常处理语义错误', plain:'把出错后的处理方式讲错', tag:'失败处理'},
    {id:'state-semantics', name:'状态变化建模错误', plain:'混淆中间状态与最终结果', tag:'状态变化'},
    {id:'evidence-mismatch', name:'事实与证据错配', plain:'引用真实，但没指到所说的实现', tag:'证据对应'},
    {id:'pipeline-contract', name:'跨阶段契约冲突', plain:'生成阶段采用不兼容的规则', tag:'生成故障 · 单列'}
  ];
  const STATUS = {
    error:{label:'有此问题', meaning:'同一检查点存在明确错误'},
    correct:{label:'说明正确', meaning:'明确说明，且与源码相符'},
    partial:{label:'部分说明', meaning:'提到相关过程，但关键环节不完整'},
    'not-covered':{label:'未说明此点', meaning:'所查原文未给出这条具体说明'},
    unverified:{label:'尚未核查', meaning:'证据不足，不作正确或错误判断'},
    'no-output':{label:'本轮无成品', meaning:'本次该仓没有可比较的产物'},
    'not-applicable':{label:'不适用', meaning:'不属于这个检查点的适用范围'}
  };
  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = (value) => {
    if (!value) return '';
    if (/^https:\/\/(github\.com|deepwiki\.com)\//.test(value)) return value;
    if (/^(local-skill|devinwiki|deepwiki-open|openwiki|codewiki|compare|issues-compare)\.html([?#][a-zA-Z0-9=&_#.%/-]*)?$/.test(value)) return value;
    return '';
  };
  const link = (url, label) => safeURL(url) ? '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(label) + ' ↗</a>' : esc(label);
  const pill = (status, pipeline) => {
    const item = STATUS[status] || STATUS.unverified;
    const label = pipeline && status === 'error' ? '发生中断' : item.label;
    return '<span class="status-pill status-' + esc(status) + '">' + esc(label) + '</span>';
  };
  if (!DATA || !Array.isArray(DATA.cases) || DATA.cases.length === 0) {
    $('audit-count').textContent = '核查记录未载入';
    $('case-detail').innerHTML = '<p class="empty-state">未找到核查数据。请将网页与 assets 文件夹一起打开；本页不会用空白代替“说明正确”。</p>';
    return;
  }
  const cases = DATA.cases;
  const contentCount = cases.filter((item) => item.kind !== 'pipeline').length;
  const pipelineCount = cases.length - contentCount;
  $('audit-count').textContent = contentCount + ' 个内容案例 · ' + pipelineCount + ' 类运行故障';
  $('status-legend').innerHTML = Object.keys(STATUS).map((status) => '<span>' + pill(status) + esc(STATUS[status].meaning) + '</span>').join('');
  let selected = cases.find((item) => item.id === 'ghost-build-order') || cases[0];
  let category = selected.category;
  let query = '';
  let tableOnly = false;
  let left = 'local-skill';
  let right = 'devinwiki';

  function matchesQuery(item) {
    return !query || [item.repo, item.title, item.sourceFact].join(' ').toLocaleLowerCase().includes(query);
  }
  function filteredCases(id) {
    return cases.filter((item) => item.category === id && (!tableOnly || item.fromTable) && matchesQuery(item));
  }
  function categoryCards() {
    $('category-grid').innerHTML = CATEGORIES.map((item) => {
      const count = filteredCases(item.id).length;
      return '<button class="category-card ' + (item.id === 'pipeline-contract' ? 'pipeline-category' : '') + '" type="button" data-category="' + item.id + '" aria-pressed="' + (category === item.id) + '"><span class="category-kicker"><span>' + esc(item.tag) + '</span><span class="category-count">' + count + ' 案例</span></span><strong>' + esc(item.name) + '</strong><small>' + esc(item.plain) + '</small></button>';
    }).join('');
  }
  function listCases() {
    const visible = filteredCases(category);
    $('case-count').textContent = visible.length + ' / ' + cases.filter((item) => item.category === category).length;
    $('case-list').innerHTML = visible.length ? visible.map((item, i) => '<button type="button" class="case-button" data-case="' + esc(item.id) + '" aria-current="' + (selected && selected.id === item.id) + '"><span class="case-number">' + String(i + 1).padStart(2,'0') + '</span><span><strong>' + esc(item.title) + '</strong><small>' + esc(item.repo) + '</small><span class="mini-tags"><span class="mini-tag ' + (item.fromTable ? 'table-origin' : '') + '">' + (item.fromTable ? '表内代表问题' : '同类补充案例') + '</span>' + (item.kind === 'pipeline' ? '<span class="mini-tag">不计入成品错误</span>' : '') + '</span></span><span class="case-arrow">›</span></button>').join('') : '<p class="empty-state">当前筛选下没有案例。可清空搜索或取消“只看表中七个代表问题”。</p>';
  }
  function toolOptions(current) {
    return TOOLS.map((tool) => '<option value="' + tool + '" ' + (current === tool ? 'selected' : '') + '>' + NAMES[tool] + '</option>').join('');
  }
  function toolRecord(tool) {
    return selected.tools[tool] || {status:'unverified', explanation:'这条检查点尚未完成核查。'};
  }
  function quoteCard(tool) {
    const result = toolRecord(tool);
    let body = '';
    if (result.quote) {
      body += result.quoteZh ? '<span class="quote-label">中文直译 · 不改写原文</span><blockquote class="quote-translation">' + esc(result.quoteZh) + '</blockquote>' : '';
      body += '<span class="quote-label">' + (selected.kind === 'pipeline' || result.status === 'no-output' ? '原始运行记录' : result.status === 'not-covered' ? '相关原文 · 未说明本条具体问题' : 'Wiki 原文摘录') + '</span><pre class="original-quote">' + esc(result.quote) + '</pre>';
    } else {
      body += '<p class="no-quote">' + (result.status === 'no-output' ? '本次该仓没有可读取的成品，不能展示原文对照。' : result.status === 'not-covered' ? '未找到针对这条具体问题的原文说明；不补写或虚构一段“正确答案”。' : '本条没有可引用的对应原文，不将缺证据解释为没有问题。') + '</p>';
    }
    body += '<p class="quote-location">原文位置：' + esc(result.wikiLabel || '没有对应位置') + (safeURL(result.wikiUrl) ? ' · ' + link(result.wikiUrl, '打开对应 Wiki') : '') + '</p>';
    body += '<p class="quote-explanation"><strong>本条判断：</strong>' + esc(result.explanation) + '</p>';
    return '<article class="quote-card ' + esc(result.status) + '"><header class="quote-card-header"><h4>' + NAMES[tool] + '</h4>' + pill(result.status, selected.kind === 'pipeline') + '</header><div class="quote-content">' + body + '</div></article>';
  }
  function sourceSnippets() {
    const snippets = (DATA.sourceSnippets || {})[selected.id] || [];
    if (!snippets.length) return selected.kind === 'pipeline' ? '<p class="section-caption">这是生成器的运行故障，不是 GitHub 仓库行为。左侧原始失败记录是本条依据，不能拿别的工具在其他仓成功来证明其不会发生。</p>' : '<p class="section-caption">源码入口在上方，打开时保留本页；未缓存的源码不伪造展示。</p>';
    return snippets.map((snippet) => {
      const code = snippet.lines.map((text, i) => {
        const n = snippet.start + i;
        const focus = (snippet.highlight || []).includes(n);
        return '<span class="code-line' + (focus ? ' line-focus' : '') + '"><span class="line-no">' + n + '</span>' + esc(text) + '</span>';
      }).join('');
      return '<details><summary>' + esc(snippet.title) + ' · ' + esc(snippet.path) + '</summary><pre class="source-code"><code>' + code + '</code></pre><div class="source-snippet-note">' + esc(snippet.note || '从对应仓库快照原样截取；不是任一工具的生成内容。') + link(snippet.url, '打开 GitHub 对应行') + '</div></details>';
    }).join('');
  }
  function pairView() {
    $('pair-left').value = left;
    $('pair-right').value = right;
    $('pair-grid').innerHTML = quoteCard(left) + quoteCard(right);
    const action = $('pair-full-reader');
    if (action) action.href = 'compare.html?left=' + left + '&right=' + right + '#case=' + encodeURIComponent(selected.id);
  }
  function selectPairTool(side, tool) {
    if (!TOOLS.includes(tool)) return;
    if (side === 'left') {
      if (tool === right) right = left;
      left = tool;
    } else {
      if (tool === left) left = right;
      right = tool;
    }
    pairView();
  }
  function detail() {
    if (!selected) {
      $('case-detail').innerHTML = '<p class="empty-state">请选择一个有核查记录的案例。</p>';
      return;
    }
    const currentCategory = CATEGORIES.find((item) => item.id === selected.category);
    const isPipeline = selected.kind === 'pipeline';
    const severity = {high:'高', medium:'中', low:'低'}[selected.severity] || '未定级';
    const refs = (selected.sourceEvidence || []).map((item) => link(item.url,item.label)).join('');
    $('case-detail').innerHTML = '<div class="case-meta"><span>' + esc(currentCategory.name) + '</span><span> / </span><span>' + esc(selected.repo) + '</span><span class="severity-pill ' + esc(selected.severity) + '">影响：' + severity + '</span><span class="mini-tag ' + (selected.fromTable ? 'table-origin' : '') + '">' + (selected.fromTable ? '表内代表问题' : '同类补充案例') + '</span></div>' +
      '<h2>' + esc(selected.title) + '</h2><p class="case-impact"><strong>为什么需要关注：</strong>' + esc(selected.impact) + '</p>' +
      '<div class="fact-box"><span class="fact-label">' + (isPipeline ? '运行记录说明了什么' : '源码实际是什么 · 五工具的共同依据') + '</span><p>' + esc(selected.sourceFact) + '</p><div class="fact-links">' + refs + '</div></div>' +
      '<h3 class="five-way-title">五工具在这条问题上的表现</h3><p class="section-caption">' + (isPipeline ? '本案例没有五工具同批次对照测试，不把未测工具标为通过。' : '“说明正确”只适用于本条；未说明与部分说明均不能当作正确对照。') + '</p>' +
      '<div class="tool-verdicts">' + TOOLS.map((tool) => {
        const result = toolRecord(tool);
        return '<article class="tool-verdict"><h4>' + NAMES[tool] + '</h4>' + pill(result.status,isPipeline) + '<p>' + esc(result.explanation) + '</p><button type="button" data-compare-tool="' + tool + '">放到右侧看原文</button></article>';
      }).join('') + '</div>' +
      '<section class="pair-section" aria-label="两个工具的原文对照"><div class="pair-toolbar"><div><h3 class="pair-title">两两对照原文</h3><p class="section-caption">上方结论对应下方原文。可以更换任意两个工具。</p></div><div class="pair-actions"><label>左侧<select id="pair-left" aria-label="左侧对照工具">' + toolOptions(left) + '</select></label><button class="small-button" id="pair-swap" type="button" aria-label="交换左右工具">交换</button><label>右侧<select id="pair-right" aria-label="右侧对照工具">' + toolOptions(right) + '</select></label></div></div><div class="pair-grid" id="pair-grid"></div>' +
      (selected.repoSlug === 'cpu0x00/Ghost' ? '<p><a class="small-button" id="pair-full-reader" href="compare.html">在完整 Wiki 中左右对读</a></p>' : '') + '</section>' +
      '<section class="source-panel"><h3 class="source-panel-title">源码留在当前页核对</h3><p class="section-caption">' + (isPipeline ? '对比原始运行记录，不将生成故障包装成内容错误。' : '同一仓库快照只有一套源码。下方是共同事实依据；上方两栏保留各自 Wiki 的说法和原文位置。不能把我们补充的源码引用算作工具已有引用。') + '</p>' + sourceSnippets() + '</section>' +
      '<div class="skill-fix"><strong>Skill 优化方向</strong><p>' + esc(selected.skillFix) + '</p></div>';
    pairView();
    $('pair-left').addEventListener('change', (event) => {selectPairTool('left', event.target.value);});
    $('pair-right').addEventListener('change', (event) => {selectPairTool('right', event.target.value);});
    $('pair-swap').addEventListener('click', () => {const old = left; left = right; right = old; pairView();});
  }
  function saveHash() {
    const params = new URLSearchParams();
    params.set('category',category);
    if (selected) params.set('case',selected.id);
    history.replaceState(null,'','#' + params.toString());
  }
  function readHash() {
    const params = new URLSearchParams(location.hash.slice(1));
    const requestedCase = cases.find((item) => item.id === params.get('case'));
    const requestedCategory = CATEGORIES.find((item) => item.id === params.get('category'));
    if (requestedCase) {selected = requestedCase; category = requestedCase.category;}
    else if (requestedCategory) {
      category = requestedCategory.id;
      selected = filteredCases(category)[0] || cases.find((item) => item.category === category) || null;
    } else return;
    if (selected && !matchesQuery(selected)) {
      query = '';
      $('case-search').value = '';
    }
    if (selected && tableOnly && !selected.fromTable) {
      tableOnly = false;
      $('table-only').checked = false;
    }
  }
  function render() {categoryCards(); listCases(); detail();}
  function applyFilters() {
    const visible = filteredCases(category);
    if (!selected || !visible.some((item) => item.id === selected.id)) selected = visible[0] || null;
    render();
    saveHash();
  }
  $('category-grid').addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    category = button.dataset.category;
    selected = filteredCases(category)[0] || null;
    render(); saveHash();
  });
  $('case-list').addEventListener('click', (event) => {
    const button = event.target.closest('[data-case]');
    if (!button) return;
    selected = cases.find((item) => item.id === button.dataset.case);
    listCases(); detail(); saveHash();
    if (matchMedia('(max-width:800px)').matches) $('case-detail').scrollIntoView({block:'start',behavior:'smooth'});
  });
  $('case-detail').addEventListener('click', (event) => {
    const button = event.target.closest('[data-compare-tool]');
    if (!button || !TOOLS.includes(button.dataset.compareTool)) return;
    selectPairTool('right', button.dataset.compareTool);
    document.querySelector('.pair-section').scrollIntoView({block:'start',behavior:'smooth'});
  });
  $('case-search').addEventListener('input', (event) => {query = event.target.value.trim().toLocaleLowerCase(); applyFilters();});
  $('table-only').addEventListener('change', (event) => {tableOnly = event.target.checked; applyFilters();});
  window.addEventListener('hashchange', () => {readHash(); render();});
  readHash(); render();
})();
