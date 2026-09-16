(() => {
  'use strict';
  const DATA = window.WIKI_AUDIT_DATA;
  const TOOLS = ['local-skill', 'devinwiki', 'deepwiki-open', 'openwiki', 'codewiki'];
  const NAMES = {'local-skill':'Local Skill', devinwiki:'DevinWiki', 'deepwiki-open':'DeepWiki Open', openwiki:'OpenWiki', codewiki:'CodeWiki'};
  const CATEGORIES = [
    {id:'interface-contract', name:'用法写错', plain:'Wiki 给出的命令、参数或输入，照着操作会失败', explain:'文档告诉读者“这样输入就能用”，但程序实际不接受这种写法。', tag:'接口用法'},
    {id:'capability-scope', name:'把能力说大了', plain:'只在部分情况有效，却写成所有情况都有效', explain:'程序只在某条路径或某些条件下提供能力，Wiki 却省略条件，给人“始终有效”的印象。', tag:'能力范围'},
    {id:'control-flow', name:'执行顺序画错', plain:'流程图或正文把步骤先后、分支关系写反', explain:'代码明明先做 A 再做 B，Wiki 却画成先 B 后 A，或把依次执行画成同时执行。', tag:'执行流程'},
    {id:'error-semantics', name:'出错后会怎样写错', plain:'程序报错、继续执行或返回原值，被 Wiki 讲成另一种结果', explain:'错误发生后，程序究竟停止、继续还是返回旧值，会直接影响读者判断；Wiki 在这里描述错了。', tag:'失败处理'},
    {id:'state-semantics', name:'中间状态和最终结果混淆', plain:'程序暂时保存了什么，与最后是否成功被混为一谈', explain:'过程中出现一个临时结果，不代表最终请求成功；Wiki 没有把“中间发生什么”和“最后结果是什么”分开。', tag:'状态变化'},
    {id:'evidence-mismatch', name:'引用没有证明结论', plain:'链接能打开，但指向的代码不是文中所说的实现', explain:'引用位置真实存在，却没有执行 Wiki 所描述的功能，读者无法用这段代码验证结论。', tag:'证据对应'},
    {id:'pipeline-contract', name:'生成步骤前后规则冲突', plain:'前一步选中的文件，后一步又全部排除，导致生成停止', explain:'像前一位同事把材料放进文件夹，后一位同事按另一套规则把材料全部丢掉，最终没有内容可以继续写。', tag:'生成故障 · 单列'},
    {id:'review-notes', name:'需要补充说明', plain:'内容没有写全，但现有文字本身不一定错误', explain:'缺少边界或风险提示可以改进，但不能把“没有提到”直接判成“写错了”。', tag:'不计事实错误'}
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
  const contentCount = cases.filter((item) => item.kind !== 'pipeline' && item.category !== 'review-notes').length;
  const pipelineCount = cases.filter((item) => item.kind === 'pipeline').length;
  $('audit-count').textContent = contentCount + ' 个内容案例 · ' + pipelineCount + ' 类运行故障';
  $('status-legend').innerHTML = Object.keys(STATUS).map((status) => '<span>' + pill(status) + esc(STATUS[status].meaning) + '</span>').join('');
  let selected = cases.find((item) => item.id === 'ghost-build-order') || cases[0];
  let category = selected.category;
  let query = '';
  let tableOnly = false;
  let left = 'local-skill';
  let right = 'devinwiki';

  function matchesQuery(item) {
    return !query || [item.repo, item.title, item.sourceFact, item.plainExample || ''].join(' ').toLocaleLowerCase().includes(query);
  }
  function filteredCases(id) {
    return cases.filter((item) => item.category === id && (!tableOnly || item.fromTable) && matchesQuery(item));
  }
  function categoryCards() {
    $('category-grid').innerHTML = CATEGORIES.filter((item) => item.id !== 'review-notes').map((item) => {
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
  function judgmentLabel(result) {
    if (selected.kind === 'pipeline') return '这次运行怎样了';
    if (result.status === 'error') return '差别在哪';
    if (result.status === 'correct') return '为什么这条写对了';
    if (result.status === 'partial' || result.status === 'not-covered') return '写到了什么，还没说明什么';
    return '为什么暂时不能判断';
  }
  function quoteCard(tool) {
    const result = toolRecord(tool);
    let body = '<div class="quote-explanation"><strong>' + judgmentLabel(result) + '</strong><p>' + esc(result.explanation) + '</p>' + (selected.kind !== 'pipeline' && result.status !== 'no-output' && result.status !== 'unverified' ? '<button class="source-jump" type="button" data-show-source>看带中文说明的源码</button>' : '') + '</div>';
    if (result.quote) {
      body += result.quoteZh ? '<span class="quote-label">' + (selected.kind === 'pipeline' || result.status === 'no-output' ? '原始运行记录的中文直译' : 'Wiki 原话的中文直译 · 不改动原意') + '</span><blockquote class="quote-translation">' + esc(result.quoteZh) + '</blockquote>' : '';
      body += '<span class="quote-label">' + (selected.kind === 'pipeline' || result.status === 'no-output' ? '原始运行记录' : result.status === 'not-covered' ? '相关原文 · 未说明本条具体问题' : 'Wiki 原文摘录') + '</span><pre class="original-quote">' + esc(result.quote) + '</pre>';
    } else {
      body += '<p class="no-quote">' + (result.status === 'no-output' ? '本次该仓没有可读取的成品，不能展示原文对照。' : result.status === 'not-covered' ? '未找到针对这条具体问题的原文说明；不补写或虚构一段“正确答案”。' : '本条没有可引用的对应原文，不将缺证据解释为没有问题。') + '</p>';
    }
    body += '<p class="quote-location">' + (selected.kind === 'pipeline' || result.status === 'no-output' ? '记录位置：' : '原文位置：') + esc(result.wikiLabel || '没有对应位置') + (safeURL(result.wikiUrl) ? ' · ' + link(result.wikiUrl, '打开对应 Wiki') : '') + '</p>';
    return '<article class="quote-card ' + esc(result.status) + '"><header class="quote-card-header"><h4>' + NAMES[tool] + '</h4>' + pill(result.status, selected.kind === 'pipeline') + '</header><div class="quote-content">' + body + '</div></article>';
  }
  function sourceSnippets() {
    const snippets = (DATA.sourceSnippets || {})[selected.id] || [];
    if (!snippets.length) return selected.kind === 'pipeline' ? '<p class="section-caption">本条依据是 Local Skill 的原始失败记录，可在上方选中它查看。其他工具在别的仓库生成成功，不能证明它们不会遇到同样问题。</p>' : '<p class="section-caption">源码入口在上方，打开时保留本页；未缓存的源码不伪造展示。</p>';
    return snippets.map((snippet, index) => {
      const annotations = new Map((snippet.annotations || []).map((item) => [item.line, item.text]));
      const code = snippet.lines.map((text, i) => {
        const n = snippet.start + i;
        const focus = (snippet.highlight || []).includes(n);
        const annotation = annotations.get(n);
        return '<div class="source-row' + (focus ? ' line-focus' : '') + (annotation ? ' is-annotated' : '') + '"><span class="line-no" aria-label="第 ' + n + ' 行">' + n + '</span><code class="source-line-code">' + esc(text) + '</code><div class="source-line-note">' + (annotation ? '<span class="annotation-label">这一步</span>' + esc(annotation) : '') + '</div></div>';
      }).join('');
      return '<article class="source-snippet"><div class="source-summary"><span>源码说明了什么</span><p>' + esc(snippet.summary || snippet.note || '') + '</p></div><details' + (index === 0 ? ' open' : '') + '><summary>' + esc(snippet.title) + '<small>' + esc(snippet.path) + ' · 第 ' + snippet.start + '–' + (snippet.start + snippet.lines.length - 1) + ' 行</small></summary><div class="source-column-head"><span>仓库原代码 · 内容未修改</span><span>中文说明 · 评审添加</span></div><div class="annotated-source">' + code + '</div><div class="source-snippet-note">' + link(snippet.url, '在 GitHub 查看原始代码') + '</div></details></article>';
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
    const isReviewNote = selected.category === 'review-notes';
    const severity = {high:'高', medium:'中', low:'低'}[selected.severity] || '未定级';
    const severityLabel = isReviewNote ? '不计事实错误' : '影响：' + severity;
    const refs = (selected.sourceEvidence || []).map((item) => link(item.url,item.label)).join('');
    $('case-detail').innerHTML = '<div class="case-meta"><span>' + esc(currentCategory.name) + '</span><span> / </span><span>' + esc(selected.repo) + '</span><span class="severity-pill ' + esc(selected.severity) + '">' + severityLabel + '</span><span class="mini-tag ' + (selected.fromTable ? 'table-origin' : '') + '">' + (selected.fromTable ? '表内代表问题' : isReviewNote ? '补充核查' : '同类补充案例') + '</span></div>' +
      '<h2>' + esc(selected.title) + '</h2><div class="plain-definition"><strong>这类问题是什么意思</strong><p>' + esc(currentCategory.explain || currentCategory.plain) + '</p></div><p class="case-impact"><strong>' + (isReviewNote ? '本条结论：' : '会带来什么影响：') + '</strong>' + esc(selected.impact) + '</p>' +
      (selected.plainExample ? '<div class="plain-example"><strong>这个案例里发生了什么</strong><p>' + esc(selected.plainExample) + '</p></div>' : '') +
      '<button class="source-jump case-source-shortcut" type="button" data-show-source>' + (isPipeline ? '跳到下方运行记录' : '跳到下方源码与中文说明') + '</button>' +
      '<section class="skill-fix" aria-label="Skill 优化方向"><strong>Skill 优化方向</strong><p>' + esc(selected.skillFix) + '</p></section>' +
      '<h3 class="five-way-title">五工具在这条检查点上的表现</h3><p class="section-caption">' + (isPipeline ? '本案例没有五工具同批次对照测试，不把未测工具标为通过。' : isReviewNote ? '本条不计事实错误。区分原文已写对的局部事实与尚未覆盖的其他边界，不要求每段文字列出所有风险。' : '“说明正确”只适用于本条；未说明与部分说明均不能当作正确对照。') + '</p>' +
      '<div class="tool-verdicts">' + TOOLS.map((tool) => {
        const result = toolRecord(tool);
        return '<article class="tool-verdict verdict-' + esc(result.status) + '"><h4>' + NAMES[tool] + '</h4>' + pill(result.status,isPipeline) + '<p>' + esc(result.explanation) + '</p><button type="button" data-compare-tool="' + tool + '">放到右侧看原文</button></article>';
      }).join('') + '</div>' +
      '<section class="pair-section" aria-label="两个工具的原文对照"><div class="pair-toolbar"><div><h3 class="pair-title">两两对照原文</h3><p class="section-caption">上方结论对应下方原文。可以更换任意两个工具。</p></div><div class="pair-actions"><label>左侧<select id="pair-left" aria-label="左侧对照工具">' + toolOptions(left) + '</select></label><button class="small-button" id="pair-swap" type="button" aria-label="交换左右工具">交换</button><label>右侧<select id="pair-right" aria-label="右侧对照工具">' + toolOptions(right) + '</select></label></div></div><div class="pair-grid" id="pair-grid"></div>' +
      (selected.repoSlug === 'cpu0x00/Ghost' ? '<p><a class="small-button" id="pair-full-reader" href="compare.html">在完整 Wiki 中左右对读</a></p>' : '') + '</section>' +
      '<section class="source-panel" id="source-evidence"><h3 class="source-panel-title">' + (isPipeline ? '运行记录说明了什么' : '源码怎么做，旁边用中文解释') + '</h3><p class="source-fact">' + esc(selected.sourceFact) + '</p><p class="section-caption">' + (isPipeline ? '这是生成工具的运行故障，只能用运行记录核对，不能拿 GitHub 仓库源码作证。' : '原代码旁标出关键步骤的意思。中文说明由评审添加，不是仓库原有注释，也不是工具自带的引用。') + '</p>' + (refs ? '<details class="fact-references"><summary>全部原始源码链接</summary><div class="fact-links">' + refs + '</div></details>' : '') + sourceSnippets() + '</section>';
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
    if (event.target.closest('[data-show-source]')) {
      const source = $('source-evidence');
      const first = source.querySelector('details');
      if (first) first.open = true;
      source.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth'});
      return;
    }
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
