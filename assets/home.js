(() => {
  'use strict';
  const data = window.WIKI_TRAINING_DATA;
  if (!data) return;
  const names = {'local-skill':'Local Skill',devinwiki:'DevinWiki','deepwiki-open':'DeepWiki Open',openwiki:'OpenWiki',codewiki:'CodeWiki'};
  const labels = {yes:'有',partial:'部分',fix:'需纠错',missing:'未见',no_artifact:'无成品'};
  const materials = {
    A:['读懂局部代码','Local 的函数机制说明，例如 Flask 参数转换；仍需补连续实现代码。'],
    B:['正确调用接口','Local 的参数、默认值和返回值说明，例如 Flask 参数保存规则。'],
    C:['预测数据变化','Local 的输入转换和取值规则，例如 Flask 布尔值与多值参数处理。'],
    D:['处理失败边界','Local 的出错条件与返回说明，例如 sqlx 失败路径；错误部分须先纠正。'],
    E:['判断状态和顺序','Local 的生命周期、临时状态与流程图，例如 Ghost 构建顺序。'],
    F:['跨文件定位','Local 的调用链、字段传递与模块关系，例如 Flask 响应处理链。'],
    G:['按上下文补代码','需加工成“前文＋缺口＋后文＋答案”；不是有介绍文字就已有补全样本。'],
    H:['按测试检查代码','Local 的测试输入和预期说明，例如 Flask 参数解析测试。'],
    I:['核验实际运行','验证保障：运行记录、环境及结果，不是模型的原子能力。'],
    J:['追溯源码证据','验证保障：Local 的文件、符号和行号引用，供事实核对。']
  };
  const create = (tag, text, className) => {
    const el = document.createElement(tag);
    if (text != null) el.textContent = text;
    if (className) el.className = className;
    return el;
  };
  const head = document.querySelector('#training-matrix thead');
  const header = create('tr');
  header.append(create('th','能力 / Local 对应素材'));
  data.tools.forEach(tool => header.append(create('th',names[tool] + ' · ' + data.available[tool] + ' 份')));
  head.append(header);
  const body = document.querySelector('#training-matrix tbody');
  data.dimensions.forEach(([id]) => {
    const row = create('tr');
    row.id = 'ability-' + id;
    const title = create('th');
    title.scope = 'row';
    title.append(create('strong',id + ' ' + materials[id][0]),create('small',materials[id][1]));
    row.append(title);
    data.tools.forEach(tool => {
      const cell = create('td');
      const button = create('button',null,'material-cell');
      button.type = 'button';
      button.dataset.ability = id;
      button.dataset.tool = tool;
      button.setAttribute('aria-label',names[tool] + ' / ' + materials[id][0] + '，查看七仓依据');
      Object.entries(data.counts[id][tool]).forEach(([status,count]) => {
        if (!count || status === 'no_artifact') return;
        button.append(create('span',labels[status] + ' ' + count,'material-' + status));
      });
      cell.append(button);
      row.append(cell);
    });
    body.append(row);
  });
  const container = document.getElementById('training-evidence');
  document.getElementById('training-matrix').addEventListener('click',event => {
    const button = event.target.closest('[data-ability]');
    if (!button) return;
    const id = button.dataset.ability;
    const tool = button.dataset.tool;
    document.querySelectorAll('.material-cell').forEach(el => el.setAttribute('aria-pressed',String(el === button)));
    container.replaceChildren();
    container.hidden = false;
    const title = create('div',null,'training-evidence-heading');
    const close = create('button','收起依据','button');
    close.type = 'button';
    close.addEventListener('click',()=>{container.hidden=true;button.focus();});
    title.append(create('h3',names[tool] + ' / ' + materials[id][0]),close);
    container.append(title,create('p','下面是七仓同一能力的具体判定。Wiki 摘录用于展示材料，源码链接用于核查；“有”只针对这些检查点，不代表整篇正确。','scope-note'));
    const grid = create('div',null,'training-evidence-grid');
    data.repositories.forEach(repo => {
      const cell = repo.tools[tool].cells[id];
      const card = create('article');
      const heading = create('h4',repo.name + ' · ' + labels[cell.status]);
      card.append(heading,create('p',cell.finding));
      if (cell.correctionCase) {
        const correction = create('a','查看原文与源码对照');
        correction.href = 'issues-compare.html#case=' + cell.correctionCase;
        card.append(correction);
      }
      const details = create('details');
      details.append(create('summary','检查点、原文与源码'));
      details.append(create('p',cell.checkpoint));
      cell.excerpts.forEach(excerpt => {
        details.append(create('small',excerpt.label),create('blockquote',excerpt.quote));
      });
      cell.sources.forEach(source => {
        if (!source.url.startsWith('https://github.com/' + repo.slug + '/blob/' + repo.commit + '/')) return;
        const link = create('a',source.label);
        link.href = source.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        details.append(link);
      });
      card.append(details);
      grid.append(card);
    });
    container.append(grid);
    container.scrollIntoView({block:'start',behavior:'instant'});
  });
  const localIssues = data.repositories.filter(repo => Object.entries(repo.tools['local-skill'].cells).some(([id,cell]) => 'ABCDEFH'.includes(id) && cell.status === 'fix')).length;
  document.getElementById('local-fact-count').textContent = localIssues + '/7';
})();
