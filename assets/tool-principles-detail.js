(() => {
  'use strict';

  const profiles = {
    'local-skill': {
      name: 'Local Skill', accent: '#276b59', soft: '#e7f1ed', visibility: '本地流程可完整检查',
      title: '状态机把读代码、分页面、写作和发布串成一条可恢复生产线',
      summary: '它不是一次性让模型写完整 Wiki，而是先固定文件范围，再让多个 Worker 分阶段工作，最后统一校验并原子发布。',
      tags: ['deepwiki:generate 0.12.0', 'Python 状态机', 'Codex / Claude Code', '输出 .deepwiki/'],
      raw: 'local-skill.html', repo: '', repoLabel: '',
      flow: [
        {title:'接收本地仓库', text:'只分析当前 Git 工作树，先确定哪些文件可以安全读取。', tools:['Git','inventory.py','analyze_repo.py']},
        {title:'识别核心代码', text:'状态机安排核心文件识别、摘要和分类，形成稳定的页面分组。', tools:['runtime.py','identify_core','summary','classifier']},
        {title:'规划 Wiki 目录', text:'Overview Worker 读取源码和检索结果，提出章节；目录冻结后不再随意改变。', tools:['Codex 子 Agent','envelope','action','submit']},
        {title:'逐页写作', text:'Writer 按页面读取相关源码，生成机制说明、流程图和引用；失败按统一规则重试。', tools:['search_code.py','writer Worker','translation Worker']},
        {title:'校验并发布', text:'先组装候选 Wiki，再检查结构、引用、行号和 Mermaid，通过后整体替换旧产物。', tools:['assemble_wiki.py','validate_wiki.py','publish_wiki.py','ops_store.py']}
      ],
      arrows: [
        ['inventory.py + analyze_repo.py','把仓库变成安全文件清单和规模分析'],
        ['runtime.py + Worker 协议','按固定阶段领取任务，防止步骤乱序'],
        ['search_code.py + action','为每页补充相关源码证据'],
        ['assemble / validate / publish','只有完整校验通过才发布成品']
      ],
      toolGroups: [
        ['流程控制',['runtime.py｜推进阶段、重试和恢复','run_registry.py｜避免重复任务互相覆盖']],
        ['源码读取',['inventory.py｜过滤密钥、二进制和生成目录','read / glob / grep｜宿主提供的只读探索','search_code.py｜稳定检索相关代码窗口']],
        ['模型工作',['Codex 子 Agent / Claude Worker｜执行摘要、规划、写页和翻译','envelope / action / submit｜记录 Worker 的真实动作']],
        ['校验发布',['validate_wiki.py｜检查结构和源码引用','publish_wiki.py｜成功后整体发布','ops_store.py｜保存耗时、告警和失败记录']]
      ],
      boundary: '校验可以确认“引用位置存在、格式合规”，但不能自动证明整句话的推理完全正确，因此仍需源码事实审查。',
      example: {input:'github.com/cpu0x00/Ghost @ bf67313c', middle:'状态机识别入口、内存分配、Fiber 调度等主题，再由 Writer 分页生成。', output:'20 页 .deepwiki Wiki；示例页《Execution Architecture and Payload Lifecycle》。'},
      evidence:['本地 Skill：SKILL.md、workflow.md、worker-contract.md。','实现脚本：inventory.py、analyze_repo.py、runtime.py、search_code.py、assemble_wiki.py、validate_wiki.py、publish_wiki.py、ops_store.py。']
    },
    'deepwiki-open': {
      name: 'deepwiki-open', accent: '#91613f', soft: '#f4eade', visibility: '本地流程可检查',
      title: '先把代码做成可检索材料，再按页面反复取回相关片段写 Wiki',
      summary: '它的重点是代码索引：先切分源码并建立检索库，模型规划目录后，每写一页都重新寻找相关代码。',
      tags: ['Python / FastAPI', 'AdalFlow + FAISS', '页面任务与重试', '网页端 Next.js'],
      raw: 'deepwiki-open.html', repo: 'https://github.com/AsyncFuncAI/deepwiki-open', repoLabel: '工具仓库',
      flow: [
        {title:'接收仓库地址', text:'克隆远端仓库或读取本地目录，并应用包含、排除和大小规则。', tools:['GitPython Repo','read_all_documents']},
        {title:'建立代码索引', text:'把源码切成片段，转换成可按相关性检索的材料并保存到本地。', tools:['AdalFlow','embedding model','LocalDB','FAISSRetriever']},
        {title:'规划 Wiki 结构', text:'模型根据文件树、README 和检索材料生成章节与页面清单。', tools:['WikiTask','structure prompt','text generation model']},
        {title:'逐页检索写作', text:'每个页面按自己的主题重新检索代码，失败页面按配置重试。', tools:['RAG.acall','TaskRegistry','asyncio.Semaphore','page retry']},
        {title:'整理并展示', text:'把引用转换成仓库链接，保存缓存，再由网页端渲染 Markdown 和 Mermaid。', tools:['post_process_wiki_content','save_wiki_cache','Next.js','Mermaid']}
      ],
      arrows: [
        ['GitPython + read_all_documents','把仓库转换成过滤后的源码文档'],
        ['AdalFlow + LocalDB','保存可以检索的代码片段'],
        ['RAG.acall','按当前页面主题取回相关源码'],
        ['post_process + cache','补全引用链接并保存最终页面']
      ],
      toolGroups: [
        ['仓库读取',['GitPython Repo｜克隆或定位仓库','read_all_documents｜统一应用文件过滤并切分']],
        ['代码检索',['AdalFlow｜组织索引流程','embedding model｜转换代码片段','LocalDB + FAISSRetriever｜保存并按相关性搜索']],
        ['任务调度',['WikiTask / TaskRegistry｜管理整仓任务','asyncio.Semaphore｜限制仓库和页面并发','page retry｜失败页面重试']],
        ['生成展示',['RAG.acall｜把相关代码交给模型','post_process_wiki_content｜整理源码引用','save_wiki_cache + Next.js + Mermaid｜保存并展示']]
      ],
      boundary: '检索只保证“找到了看起来相关的片段”，不保证片段足以支持整段结论；召回不足时，页面仍可能遗漏跨文件步骤。',
      example: {input:'github.com/cpu0x00/Ghost @ bf67313c', middle:'先索引 Ghost 源码，再为“内存隐藏”“Fiber 执行”等页面分别检索相关代码。', output:'13 页 Wiki、约 47.1K 成品 Token；示例页《Memory Hiding with Large Page Allocation》。'},
      evidence:['本地仓库：api/rag/pipeline.py、api/rag/rag.py。','Wiki 服务：api/services/wiki/tasks.py、content.py、io.py。','公开仓库：github.com/AsyncFuncAI/deepwiki-open。']
    },
    openwiki: {
      name: 'OpenWiki', accent: '#35677f', soft: '#e7f0f4', visibility: '本地流程可检查',
      title: '文档 Agent 先提交页面计划，再从可恢复队列逐页完成并登记源码依据',
      summary: '它把 Wiki 当成一组可以暂停和恢复的页面任务。每页领取后，Agent 自己搜索源码、写内容并提交关键说法的证据。',
      tags: ['OpenWiki 0.5', 'Node.js 22+', 'Deep Agents JS', '可恢复页面队列'],
      raw: 'openwiki.html', repo: 'https://github.com/langchain-ai/openwiki', repoLabel: '工具仓库',
      flow: [
        {title:'开始仓库任务', text:'确认 Git 根目录、当前快照和忽略规则，创建或恢复一次 Wiki 运行。', tools:['Git','openwiki_begin','.openwikiignore']},
        {title:'探索并提交计划', text:'规划 Agent 查看目录、搜索和读取源码，提交最终页面路径和主题。', tools:['ls','glob','grep','read_file','openwiki_submit_plan']},
        {title:'按队列领取页面', text:'页面任务保存到本地状态中；中断后可以从未完成页面继续。', tools:['openwiki_next_page','page manifest','run state']},
        {title:'写页并登记证据', text:'页面 Worker 继续读取源码，写当前页面，并给重要说法绑定 repo:// 来源。', tools:['read_file','grep','write_file / edit_file','openwiki_submit_page']},
        {title:'统一收尾', text:'检查链接、事实来源和过期内容，生成索引与运行元数据。', tools:['claims reconciliation','wiki-link-validator','openwiki_finish']}
      ],
      arrows: [
        ['openwiki_begin','固定本次仓库快照并恢复已有状态'],
        ['openwiki_submit_plan','把规划结果变成正式页面队列'],
        ['openwiki_next_page','一次只领取当前待写页面'],
        ['openwiki_submit_page + finish','提交页面证据并完成全局检查']
      ],
      toolGroups: [
        ['生命周期工具',['openwiki_begin｜开始或恢复任务','openwiki_submit_plan｜提交页面计划','openwiki_next_page｜领取下一页','openwiki_submit_page / finish｜提交并收尾']],
        ['源码探索',['ls / glob｜查看目录与文件','grep｜查找实现','read_file｜读取目标源码']],
        ['内容与证据',['write_file / edit_file｜只写分配到的 Wiki 页面','Claim sources｜把关键说法绑定源码','openwiki_inspect_page_claims｜必要时检查已有证据']],
        ['质量与运行',['Deep Agents JS｜运行规划与页面 Agent','run state / page manifest｜支持恢复','wiki-link-validator｜检查页面跳转','可选 Mermaid + jsdom｜检查图表']]
      ],
      boundary: '“绑定了源码来源”不等于“结论一定正确”；如果 Agent 对源码条件理解错了，来源仍可能存在但不足以证明那句话。',
      example: {input:'github.com/cpu0x00/Ghost @ bf67313c', middle:'规划器创建架构和概念页面，Worker 依次领取 Loader、API 解析、Fiber 等主题并记录来源。', output:'15 个 Markdown 页面；示例页《Loader Pipeline (End-to-End Execution Flow)》。'},
      evidence:['本地仓库：src/integrations/core/session-manager.ts、protocol.ts。','生成链路：src/generation、src/agent、src/claims、src/okf。','公开仓库：github.com/langchain-ai/openwiki。']
    },
    codewiki: {
      name: 'CodeWiki', accent: '#99731e', soft: '#f6efd9', visibility: '本地流程可检查',
      title: '先用语法和依赖分析建立模块树，再让 Agent 从底层模块向上写架构文档',
      summary: '它先把函数、类和调用关系变成结构化组件，再按模块层级生成文档，因此更偏向架构关系和跨文件依赖。',
      tags: ['Python 3.12+', 'tree-sitter', 'NetworkX', 'PydanticAI / caw'],
      raw: 'codewiki.html', repo: 'https://github.com/FSoft-AI4Code/CodeWiki', repoLabel: '工具仓库',
      flow: [
        {title:'扫描源码仓库', text:'按支持的语言和 Git 忽略规则筛选文件，建立待分析清单。', tools:['RepoAnalyzer','GitIgnoreFilter','GitPython']},
        {title:'解析代码结构', text:'识别函数、类和调用关系，形成代码组件与依赖图。', tools:['tree-sitter language pack','call graph','NetworkX']},
        {title:'生成模块树', text:'把彼此相关的组件聚成模块，并保存初始树和可继续修改的运行树。', tools:['cluster_modules','first_module_tree.json','module_tree.json']},
        {title:'Agent 分层写文档', text:'先写叶子模块，再用子模块文档汇总上层；复杂模块可以继续拆分。', tools:['read_code_components','str_replace_editor','generate_sub_module_documentation','PydanticAI / caw']},
        {title:'检查并导出', text:'检查预期文档是否齐全，编辑时即时验证 Mermaid，最后导出 Markdown 或 HTML。', tools:['validate_generated_docs','Mermaid validator','Jinja2 / HTML generator']}
      ],
      arrows: [
        ['RepoAnalyzer + GitIgnoreFilter','把仓库缩小为支持分析的源码集合'],
        ['tree-sitter + NetworkX','把文本代码转换成组件和调用关系'],
        ['cluster_modules','根据依赖关系组成模块层级'],
        ['Agent tools + validator','读取精确组件、写文档并检查完整性']
      ],
      toolGroups: [
        ['静态分析',['RepoAnalyzer｜扫描仓库','GitIgnoreFilter｜应用忽略规则','tree-sitter｜识别代码结构','NetworkX / call graph｜记录依赖关系']],
        ['模块组织',['cluster_modules｜聚合相关组件','first_module_tree.json｜固定初始处理顺序','module_tree.json｜保存 Agent 可扩展的模块树']],
        ['Agent 工具',['read_code_components｜按组件编号取源码','str_replace_editor｜统一写文档并触发图表检查','generate_sub_module_documentation｜拆分复杂模块']],
        ['模型与输出',['PydanticAI｜API 模型后端','caw｜调用本地 Codex / Claude CLI','validate_generated_docs｜检查缺页','Mermaid validator + Jinja2｜验证并导出']]
      ],
      boundary: '静态语法分析依赖语言支持范围；未被解析器识别的文件不会进入组件图。本轮某些 Go 仓没有产物，只能说明本次版本和识别链路未覆盖。',
      example: {input:'github.com/cpu0x00/Ghost @ bf67313c', middle:'先识别 C/C++ 函数和调用，再把构建、加载、内存和 Fiber 关系汇总为仓库总览。', output:'1 个《Ghost Repository Architecture》总览页，约 6.2K 成品 Token。'},
      evidence:['本地仓库：dependency_analyzer/analysis/repo_analyzer.py。','生成链路：documentation_generator.py、read_code_components.py、str_replace_editor.py、caw_backend.py、pydantic_ai_backend.py。','公开仓库：github.com/FSoft-AI4Code/CodeWiki。']
    },
    devinwiki: {
      name: 'DevinWiki', accent: '#70577c', soft: '#eee8f1', visibility: '用户侧可见，服务内部不可审计',
      title: '用户提交 GitHub 链接，在线服务处理后直接返回可浏览的托管 Wiki',
      summary: '它对使用者最简单：不需要在本地安装生成链路。但本次只能确认输入和成品，不能从页面风格反推内部模型、检索或校验工具。',
      tags: ['GitHub 仓库链接', '在线服务', '浏览器阅读', '内部工具未公开'],
      raw: 'devinwiki.html', repo: 'https://deepwiki.com', repoLabel: '在线服务',
      flow: [
        {title:'提交仓库链接', text:'用户提供公开 GitHub 地址；私有仓库需要完成相应授权。', tools:['GitHub','浏览器','仓库访问授权']},
        {title:'服务读取仓库', text:'从用户侧只能确认服务接收了仓库；具体克隆、过滤和快照策略本次不可见。', tools:['Devin / DeepWiki 服务','内部工具未公开']},
        {title:'服务生成 Wiki', text:'目录规划、源码检索、模型调用、拆页和重试均在服务内部完成。', tools:['内部模型未公开','内部 Agent 未公开','内部检索未公开']},
        {title:'服务发布页面', text:'生成结果成为带目录、正文、图表和源码跳转的托管站点。', tools:['DeepWiki 托管页面','Markdown / 图表渲染方式未核实']},
        {title:'浏览最终成品', text:'用户通过网页阅读和跳转；本次评测从已有页面提取内容进行源码核查。', tools:['浏览器','deepwiki.com','评测侧内容提取']}
      ],
      arrows: [
        ['GitHub URL + 授权','把仓库交给在线服务'],
        ['服务内部工具未公开','不能确认怎样选择代码和安排模型'],
        ['服务内部发布流程未公开','只能观察最终托管页面'],
        ['浏览器','用户直接阅读目录、正文和图表']
      ],
      toolGroups: [
        ['用户侧输入',['GitHub｜提供仓库链接','仓库授权｜访问私有代码时需要','浏览器与网络｜提交和查看结果']],
        ['服务侧处理',['Devin / DeepWiki 服务｜确认存在','仓库读取工具｜未公开','检索与代码分析工具｜未公开']],
        ['模型与调度',['模型名称｜本次未测','Agent 数量和分工｜未公开','重试与缓存策略｜未公开']],
        ['输出',['deepwiki.com｜托管 Wiki','目录、正文、图表、源码链接｜成品可观察','内部事实校验｜未公开']]
      ],
      boundary: '“未公开”不是说该工具没有这些能力，而是本次没有公开源码或运行证据，不能像本地工具一样列出具体内部组件。',
      example: {input:'github.com/cpu0x00/Ghost @ bf67313c', middle:'用户提交链接后等待服务处理；中间选择文件、调用模型和校验方式本次不可见。', output:'16 页托管 Wiki；示例页《Overview》《System Architecture》《Execution Flow》。'},
      evidence:['用户侧在线服务：deepwiki.com。','本次评测保存的 Ghost 托管 Wiki 成品。','服务内部实现未公开，因此不列出未经证实的工具名。']
    }
  };

  const currentId = document.body.dataset.tool;
  const current = profiles[currentId];
  if (!current) return;

  document.documentElement.style.setProperty('--accent', current.accent);
  document.documentElement.style.setProperty('--accent-soft', current.soft);
  document.title = current.name + ' 生成原理 · 五工具 Wiki 对比';
  document.querySelector('[data-role="eyebrow"]').textContent = current.visibility;
  document.querySelector('[data-role="title"]').textContent = current.name + '：' + current.title;
  document.querySelector('[data-role="summary"]').textContent = current.summary;
  document.querySelector('[data-role="raw-link"]').href = current.raw;
  const repoLink = document.querySelector('[data-role="repo-link"]');
  if (current.repo) {
    repoLink.href = current.repo;
    repoLink.textContent = current.repoLabel;
  }
  else repoLink.hidden = true;

  const meta = document.querySelector('[data-role="meta"]');
  current.tags.forEach(tag => {
    const span = document.createElement('span');
    span.textContent = tag;
    meta.append(span);
  });

  document.querySelectorAll('[data-tool-link]').forEach(link => {
    link.classList.toggle('active', link.dataset.toolLink === currentId);
    if (link.dataset.toolLink === currentId) link.setAttribute('aria-current', 'page');
  });

  const flow = document.querySelector('[data-role="flow"]');
  current.flow.forEach((step, index) => {
    const node = document.createElement('article');
    node.className = 'flow-node';
    const tools = step.tools.map(tool => '<code>' + tool + '</code>').join('');
    node.innerHTML = '<span class="step-number">0' + (index + 1) + '</span><h3>' + step.title + '</h3><p>' + step.text + '</p><div class="node-tools">' + tools + '</div>';
    flow.append(node);
    if (index < current.arrows.length) {
      const arrow = document.createElement('div');
      arrow.className = 'flow-arrow';
      arrow.innerHTML = '<div class="arrow-line">→</div><b>' + current.arrows[index][0] + '</b><small>' + current.arrows[index][1] + '</small>';
      flow.append(arrow);
    }
  });

  const example = document.querySelector('[data-role="example"]');
  example.innerHTML = [
    '<article class="example-card"><span>实际输入</span><h3>Ghost 仓库快照</h3><code>' + current.example.input + '</code><p>五个工具使用同一个仓库和同一份代码快照。</p></article>',
    '<div class="example-arrow">→</div>',
    '<article class="example-card"><span>中间发生什么</span><h3>' + current.name + ' 的处理</h3><p>' + current.example.middle + '</p></article>',
    '<div class="example-arrow">→</div>',
    '<article class="example-card"><span>最终输出</span><h3>可阅读的 Wiki</h3><p>' + current.example.output + '</p><a href="' + current.raw + '">打开实际成品</a></article>'
  ].join('');

  const toolMap = document.querySelector('[data-role="tool-map"]');
  current.toolGroups.forEach(group => {
    const article = document.createElement('article');
    article.className = 'tool-group';
    article.innerHTML = '<h3>' + group[0] + '</h3><ul>' + group[1].map(item => {
      const parts = item.split('｜');
      return '<li><code>' + parts[0] + '</code><span>' + (parts[1] || '') + '</span></li>';
    }).join('') + '</ul>';
    toolMap.append(article);
  });
  document.querySelector('[data-role="boundary"]').textContent = current.boundary;
  document.querySelector('[data-role="evidence"]').innerHTML = current.evidence.map(item => '<li>' + item + '</li>').join('');

  const select = document.querySelector('[data-role="compare-select"]');
  Object.entries(profiles).forEach(([id, profile]) => {
    if (id === currentId) return;
    const option = document.createElement('option');
    option.value = id;
    option.textContent = profile.name;
    select.append(option);
  });

  const renderComparison = () => {
    const otherId = select.value;
    const other = profiles[otherId];
    const result = document.querySelector('[data-role="compare-result"]');
    result.innerHTML = [current, other].map(profile => '<article class="compare-column"><h3>' + profile.name + '</h3><p><strong>主要方法：</strong>' + profile.summary + '</p><p><strong>Ghost 成品：</strong>' + profile.example.output + '</p><p><strong>已知边界：</strong>' + profile.boundary + '</p></article>').join('');
    const read = document.querySelector('[data-role="compare-read"]');
    read.href = 'compare.html?left=' + encodeURIComponent(currentId) + '&right=' + encodeURIComponent(otherId);
    read.textContent = '打开 ' + current.name + ' / ' + other.name + ' 成品对读';
  };
  select.addEventListener('change', renderComparison);
  renderComparison();
})();
