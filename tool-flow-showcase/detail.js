(() => {
  'use strict';

  const tools = {
    local: {
      name: 'Local Skill', subtitle: '状态机控制的多阶段 Wiki 生产线',
      summary: '先建立安全源码清单，再由不同 Worker 完成识别、规划和逐页写作；最后统一校验，通过后才发布完整 Wiki。',
      product: '../local-skill.html', source: '',
      steps: [
        ['仓库准备','确定可读取的仓库文件，排除密钥、二进制、生成目录和符号链接。',['Git','inventory.py','analyze_repo.py']],
        ['核心识别','找出入口、核心文件和主题分组，为后续目录规划准备材料。',['runtime.py','identify_core','summary','classifier']],
        ['目录规划','根据源码摘要形成章节和页面，并冻结目录，避免写作途中随意改结构。',['overview Worker','runtime.py envelope','action','submit']],
        ['Writer 页面生成','读取当前页面所需的跨文件证据，写正文、图表与源码引用，再提交验收。',['search_code.py','action: read/search/inspect','宿主 Read/Glob/Grep','runtime.py submit']],
        ['校验发布','组装所有页面，检查结构、引用、行号和 Mermaid；通过后整体发布。',['assemble_wiki.py','validate_wiki.py','publish_wiki.py','ops_store.py']]
      ],
      arrows: [['source-index.json','安全文件清单'],['runtime.py','核心分组与摘要'],['outline freeze','冻结页面目录'],['candidate → validator','候选 Wiki 进入校验']],
      keyModule: 'Writer 页面生成模块',
      keyDescription: 'Writer 不是拿到整个仓库后自由发挥，而是领取一个页面任务，通过受控读取和搜索补齐证据，生成 Markdown 后交给运行器验收。',
      calls: [
        ['runtime.py envelope','领取当前页面的提示、优先路径、动作额度和一次性 Worker token。','页面任务信封'],
        ['search_code.py','根据前置 rewrite 关键词自动寻找最相关的源码窗口。','Top 10 相关代码片段'],
        ['runtime.py action: read/search/inspect','受安全索引约束地读取文件、搜索文字，或检查符号、导入和统计信息。','有记录的源码观察结果'],
        ['宿主 Read / Glob / Grep','在 Codex 或 Claude Code 中继续做只读探索；不得修改仓库源码。','补充跨文件证据'],
        ['runtime.py submit','提交页面 Markdown；运行器检查格式、内容门禁和引用。','已接受页面或返工原因']
      ],
      example: ['https://github.com/cpu0x00/Ghost/tree/bf67313c','状态机划分执行、内存、Fiber、API 解析等页面，再由 Writer 分页写作。','20 页 .deepwiki Wiki；示例《Execution Architecture and Payload Lifecycle》'],
      boundary: '当前自动校验能证明引用位置存在和格式合规，但仍不能完全替代“这句话是否被源码充分支持”的人工事实核查。',
      sources: ['本地 deepwiki:generate 0.12.0：SKILL.md、workflow.md、worker-contract.md。','实现：runtime.py、inventory.py、search_code.py、assemble_wiki.py、validate_wiki.py、publish_wiki.py。']
    },
    deepwiki: {
      name: 'deepwiki-open', subtitle: '先建立代码索引，再按页面检索生成',
      summary: '仓库先被切成可检索的代码片段。模型规划 Wiki 目录后，每个页面用自己的主题重新查找相关源码，再生成正文。',
      product: '../deepwiki-open.html', source: 'https://github.com/AsyncFuncAI/deepwiki-open',
      steps: [
        ['仓库读取','克隆远端仓库或读取本地目录，统一应用文件包含、排除和大小规则。',['GitPython Repo','read_all_documents']],
        ['代码索引','切分源码并转换成可按相关性搜索的材料，保存到本地索引库。',['AdalFlow','embedding model','LocalDB','FAISSRetriever']],
        ['目录规划','模型读取文件树、README 和检索材料，输出章节与页面清单。',['build_structure_prompt','research_chat','text model']],
        ['Page Writer','按页面主题检索代码，构造写作提示，调用模型；失败时按页面重试。',['build_page_prompt','RAG.acall / research_chat','_generate_page_with_retry','TaskRegistry']],
        ['整理展示','转换源码引用、保存缓存，再由网页端渲染 Markdown 与 Mermaid。',['post_process_wiki_content','save_wiki_cache','Next.js','Mermaid']]
      ],
      arrows: [['read_all_documents','过滤后的源码文档'],['LocalDB + FAISS','可搜索的代码片段'],['WikiTask','正式页面清单'],['post_process + cache','带链接的 Wiki 页面']],
      keyModule: 'Page Writer 页面生成模块',
      keyDescription: '每个页面都有独立主题和相关文件。Writer 先取回相关代码，再把代码片段、页面主题和写作规则一起交给模型。',
      calls: [
        ['build_page_prompt','把页面标题、相关文件和引用格式要求拼成写作提示。','页面写作 Prompt'],
        ['research_chat / RAG.acall','根据页面主题从 FAISS 索引取回相关代码，并调用文本模型。','模型生成的页面 Markdown'],
        ['_generate_page_with_retry','捕获临时失败并按配置重试；耗尽后保留错误占位。','成功页面或错误页'],
        ['TaskRegistry + Semaphore','限制整仓任务和单仓页面并发，避免同时调用过多模型。','受控页面任务'],
        ['post_process_wiki_content','把模型输出中的文件引用转换成真实仓库链接。','可跳转引用']
      ],
      example: ['https://github.com/cpu0x00/Ghost/tree/bf67313c','先索引源码，再为“内存隐藏”“Fiber 执行”等页面分别取回相关代码。','13 页 Wiki；示例《Memory Hiding with Large Page Allocation》'],
      boundary: '检索到“相关代码”不等于已经覆盖完整执行链；跨文件步骤没有被召回时，Writer 仍可能漏掉关键条件。',
      sources: ['本地 deepwiki-open：api/rag/pipeline.py、api/rag/rag.py。','Wiki 流程：api/services/wiki/tasks.py、prompts.py、content.py、io.py。']
    },
    openwiki: {
      name: 'OpenWiki', subtitle: '可恢复页面队列与源码说法记录',
      summary: '规划 Agent 先提交正式页面计划，页面 Worker 再从可恢复队列逐页领取任务、搜索源码、写页并提交关键说法的证据。',
      product: '../openwiki.html', source: 'https://github.com/langchain-ai/openwiki',
      steps: [
        ['开始运行','固定 Git 根目录和当前快照，创建或恢复已有任务。',['Git','openwiki_begin','.openwikiignore']],
        ['提交计划','规划 Agent 使用宿主只读工具探索仓库，提交最终页面路径。',['ls / glob','grep','read_file','openwiki_submit_plan']],
        ['页面队列','把计划保存为有序 PageJob；每次返回第一个待处理页面。',['page manifest','run state','openwiki_next_page']],
        ['Page Worker','研究当前主题、写唯一分配页面，并提交新增、确认或撤回的说法。',['read_file / grep','write_file / edit_file','openwiki_inspect_page_claims','openwiki_submit_page']],
        ['统一收尾','检查链接、删除项、索引、来源记录和运行元数据，完成后才报告成功。',['wiki-link-validator','Claims reconciliation','openwiki_finish']]
      ],
      arrows: [['openwiki_begin','固定快照与恢复状态'],['openwiki_submit_plan','持久化正式页面计划'],['openwiki_next_page','领取当前 PageJob'],['openwiki_finish','完成全局校验与索引']],
      keyModule: 'Page Worker 页面生成模块',
      keyDescription: 'Worker 由宿主 Agent 执行。OpenWiki 自己提供生命周期工具，源码阅读和页面写入则使用宿主原生工具。',
      calls: [
        ['openwiki_next_page','领取当前页面主题、路径以及需要重新核查的说法。','一个待处理 PageJob'],
        ['ls / glob / grep / read_file','查看目录、定位实现并读取当前主题需要的源码。','页面事实材料'],
        ['write_file / edit_file','只写当前分配的 Wiki 页面，不能直接修改运行元数据。','页面 Markdown'],
        ['openwiki_inspect_page_claims','仅在主动修改已有说法时查看该页完整 Claim 集。','已有说法与来源'],
        ['openwiki_submit_page','提交页面和稀疏的新增、确认、撤回决定。','已完成页面与更新后的 Claim']
      ],
      example: ['https://github.com/cpu0x00/Ghost/tree/bf67313c','规划器建立架构与概念页面，Worker 依次领取 Loader、API 解析和 Fiber 页面。','15 个 Markdown 页面；示例《Loader Pipeline (End-to-End Execution Flow)》'],
      boundary: '存在源码 Claim 仍不等于结论必然正确；如果 Worker 把条件或顺序理解错，来源可能存在但不能充分证明整句话。',
      sources: ['本地 OpenWiki 0.5：src/integrations/core/session-manager.ts、protocol.ts。','MCP 流程说明：dist/integrations/mcp/server.js；生成与校验位于 src/generation、src/claims、src/okf。']
    },
    codewiki: {
      name: 'CodeWiki', subtitle: '语法依赖图与分层模块 Agent',
      summary: '先通过语法解析识别函数、类和调用关系，再把相关组件组成模块树，最后由 Agent 从叶子模块向上生成架构文档。',
      product: '../codewiki.html', source: 'https://github.com/FSoft-AI4Code/CodeWiki',
      steps: [
        ['扫描源码','按语言支持范围和 Git 忽略规则筛选仓库文件。',['RepoAnalyzer','GitIgnoreFilter','GitPython']],
        ['依赖分析','解析函数、类和调用关系，形成组件清单与依赖图。',['tree-sitter language pack','DependencyGraphBuilder','NetworkX']],
        ['模块分组','根据依赖关系聚合模块，保存初始树和可继续扩展的运行树。',['cluster_modules','first_module_tree.json','module_tree.json']],
        ['Module Agent','先写叶子模块，复杂模块可继续拆分；上层文档读取子模块文档汇总。',['read_code_components','str_replace_editor','generate_sub_module_documentation','PydanticAI / caw']],
        ['校验导出','检查预期模块文档是否齐全，编辑时验证 Mermaid，最后导出成品。',['validate_generated_docs','Mermaid validator','Jinja2 / HTML generator']]
      ],
      arrows: [['RepoAnalyzer','受支持的源码集合'],['tree-sitter + NetworkX','组件和调用依赖图'],['cluster_modules','可处理的模块树'],['validator + renderer','完整 Markdown / HTML']],
      keyModule: 'Module Agent 文档生成模块',
      keyDescription: 'Agent 不直接自由读取所有文本，而是优先读取静态分析生成的组件；所有文档写入统一经过编辑器，以便同时检查路径和 Mermaid。',
      calls: [
        ['read_code_components','按组件 ID 读取函数、类或其他代码单元的精确源码。','模块源码上下文'],
        ['str_replace_editor view','查看仓库或已有文档；仓库目录只允许读取。','补充文件内容'],
        ['str_replace_editor create / replace','创建或修改模块 Markdown；写入后自动触发 Mermaid 检查。','模块文档'],
        ['generate_sub_module_documentation','当模块仍过大时创建子模块并启动新的 Agent 会话。','更细的模块树与子文档'],
        ['PydanticAI / caw','前者连接 API 模型，后者调用本地 Codex 或 Claude CLI。','Agent 推理与工具调用']
      ],
      example: ['https://github.com/cpu0x00/Ghost/tree/bf67313c','解析 C/C++ 组件和依赖，把构建、加载、内存与 Fiber 关系汇总为架构文档。','1 个《Ghost Repository Architecture》总览页'],
      boundary: '流程依赖语法解析器支持的文件类型。未被解析的文件不会进入组件图，因此“没有生成”不能直接解释为仓库没有内容。',
      sources: ['本地 CodeWiki：dependency_analyzer/analysis/repo_analyzer.py、documentation_generator.py。','Agent 工具：read_code_components.py、str_replace_editor.py、caw_toolkit.py、pydantic_ai_backend.py。']
    },
    devin: {
      name: 'DevinWiki', subtitle: '提交链接后返回托管 Wiki',
      summary: '用户只需要提交 GitHub 仓库链接。目录规划、源码检索、Writer 和校验都在在线服务内部完成，本次无法核查具体工具。',
      product: '../devinwiki.html', source: 'https://deepwiki.com',
      steps: [
        ['提交链接','输入公开 GitHub 地址；私有仓库需要授权。',['GitHub','浏览器','仓库授权']],
        ['读取仓库','服务接收仓库；具体克隆、过滤和快照工具未公开。',['Devin / DeepWiki 服务','内部工具未公开']],
        ['目录与 Writer','服务内部规划目录并生成页面；模型、检索、Agent 和 Writer 工具未公开。',['内部模型：未测','Writer 工具：未公开','检索工具：未公开']],
        ['校验发布','服务内部整理引用、图表和页面；具体校验与重试工具未公开。',['校验工具：未公开','发布工具：未公开']],
        ['在线阅读','返回带目录、正文、图表和源码链接的托管页面。',['deepwiki.com','浏览器']]
      ],
      arrows: [['GitHub URL','仓库地址与授权'],['内部流程未公开','无法确认中间材料'],['内部流程未公开','只能观察最终结果'],['托管服务','在线 Wiki URL']],
      keyModule: '服务端 Writer 模块',
      keyDescription: '本次只能确认服务最终生成了 Wiki，无法从成品反推出 Writer 使用了哪些内部工具。下面明确区分“已确认”和“未公开”。',
      calls: [
        ['GitHub 仓库访问','已确认：服务能够读取公开仓库或已授权私有仓库。','仓库输入'],
        ['目录规划工具','未公开：无法确认是否由单模型、多 Agent 或确定性程序完成。','未知'],
        ['源码检索工具','未公开：无法确认是全文搜索、语法分析、向量检索还是组合方式。','未知'],
        ['Writer 模型与工具','未公开：无法确认模型名称、上下文组织和可调用工具。','未知'],
        ['事实校验与重试','未公开：托管成品不能证明服务是否逐条核对源码。','未知']
      ],
      example: ['https://github.com/cpu0x00/Ghost/tree/bf67313c','用户提交链接后等待服务处理；中间 Writer 和校验工具不可见。','16 页托管 Wiki；示例《Overview》《System Architecture》《Execution Flow》'],
      boundary: '“未公开”不表示服务没有该能力，只表示本次缺少代码或运行证据，不能像本地工具一样写出具体组件名。',
      sources: ['用户侧可见入口：deepwiki.com。','本次保存的 Ghost 托管 Wiki 成品；服务端实现未公开。']
    }
  };

  const id = document.body.dataset.tool;
  const profile = tools[id];
  if (!profile) return;

  document.title = profile.name + ' 完整生成流程';
  document.querySelector('[data-title]').textContent = profile.name + '：' + profile.subtitle;
  document.querySelector('[data-summary]').textContent = profile.summary;
  document.querySelector('[data-product]').href = profile.product;
  const source = document.querySelector('[data-source]');
  if (profile.source) source.href = profile.source;
  else source.hidden = true;
  if (id === 'devin') source.textContent = '打开在线服务';

  document.querySelectorAll('[data-tool-link]').forEach(link => {
    if (link.dataset.toolLink === id) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const flow = document.querySelector('[data-flow]');
  profile.steps.forEach((step, index) => {
    const node = document.createElement('article');
    node.className = 'flow-node';
    node.innerHTML = '<span class="number">0' + (index + 1) + '</span><h3>' + step[0] + '</h3><p class="function">' + step[1] + '</p><div class="calls"><b>模块调用</b><div class="chips">' + step[2].map(value => '<code>' + value + '</code>').join('') + '</div></div>';
    flow.append(node);
    if (index < profile.arrows.length) {
      const arrow = document.createElement('div');
      arrow.className = 'flow-arrow';
      arrow.innerHTML = '<strong>→</strong><b>' + profile.arrows[index][0] + '</b><small>' + profile.arrows[index][1] + '</small>';
      flow.append(arrow);
    }
  });

  const example = document.querySelector('[data-example]');
  example.innerHTML = '<article><label>输入</label><h3>Ghost 仓库快照</h3><code>' + profile.example[0] + '</code></article><span>→</span><article><label>处理</label><h3>' + profile.name + '</h3><p>' + profile.example[1] + '</p></article><span>→</span><article><label>输出</label><h3>Wiki 成品</h3><p>' + profile.example[2] + '</p><a href="' + profile.product + '">打开实际成品</a></article>';

  document.querySelector('[data-module-title]').textContent = profile.keyModule;
  document.querySelector('[data-module-description]').textContent = profile.keyDescription;
  document.querySelector('[data-call-body]').innerHTML = profile.calls.map(row => '<tr><td><code>' + row[0] + '</code></td><td>' + row[1] + '</td><td>' + row[2] + '</td></tr>').join('');
  document.querySelector('[data-boundary]').textContent = profile.boundary;
  document.querySelector('[data-sources]').innerHTML = profile.sources.map(item => '<li>' + item + '</li>').join('');
})();
