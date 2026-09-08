(() => {
  'use strict';
  const topics = window.WIKI_DIAGRAM_TOPICS;
  const bridge = window.WIKI_COMPARE_DIAGRAMS;
  if (!topics?.length || !bridge) return;
  const names = {'local-skill':'Local Skill',devinwiki:'DevinWiki','deepwiki-open':'DeepWiki Open',openwiki:'OpenWiki',codewiki:'CodeWiki'};
  const requested = new URL(location.href).searchParams.get('diagram');
  let topic = topics.find(item => item.id === requested) || topics[0];
  let state = bridge.snapshot();
  let renderQueue = Promise.resolve();
  let serial = 0;
  const cards = {};
  const create = (tag, text, className) => {
    const el = document.createElement(tag);
    if (text != null) el.textContent = text;
    if (className) el.className = className;
    return el;
  };
  if (window.mermaid) window.mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'neutral',flowchart:{htmlLabels:true,useMaxWidth:true}});
  ['left','right'].forEach(side => {
    const root = document.querySelector('[data-diagram-side="' + side + '"]');
    const select = document.getElementById('diagram-' + side + '-tool');
    Object.entries(names).forEach(([id,name]) => {
      const option = create('option',name);
      option.value = id;
      select.append(option);
    });
    cards[side] = {root,select,viewport:root.querySelector('.diagram-viewport'),key:'',epoch:0,record:null,svg:null,zoom:1,fit:true,width:0,height:0};
    select.addEventListener('change',()=>bridge.choose(side,select.value));
    root.querySelector('[data-locate]').addEventListener('click',()=> {
      if (cards[side].record) bridge.locate([{side,target:cards[side].record.target}]);
    });
    root.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click',()=> {
      const card = cards[side];
      card.fit = button.dataset.zoom === 'fit';
      if (!card.fit) card.zoom *= button.dataset.zoom === 'in' ? 1.25 : .8;
      sizeDiagram(card);
    }));
  });

  function sizeDiagram(card) {
    if (!card.svg) return;
    if (card.fit) card.zoom = Math.min(1, (card.viewport.clientWidth - 32) / card.width);
    card.zoom = Math.max(.1,Math.min(3,card.zoom));
    card.svg.style.width = card.width * card.zoom + 'px';
    card.svg.style.height = card.height * card.zoom + 'px';
    card.root.querySelector('.diagram-scale').textContent = Math.round(card.zoom * 100) + '%';
  }

  function renderCard(side) {
    const card = cards[side];
    const current = state[side];
    if (!current) return;
    card.select.value = current.tool;
    const match = topic.tools[current.tool];
    const records = (current.records || []).filter(item => item.topic === topic.id);
    const record = match && records.length === 1 ? records[0] : null;
    const key = JSON.stringify([current.tool,current.ready,topic.id,record?.source]);
    if (key === card.key) return;
    card.key = key;
    const epoch = ++card.epoch;
    card.record = record;
    card.svg = null;
    card.fit = true;
    card.root.querySelector('.diagram-kind').textContent = record?.kind || (current.ready ? '未配对' : '加载中');
    card.root.querySelector('.diagram-location').textContent = record ? record.page.replace('page-','第 ') + ' 页 · ' + record.heading : '';
    card.root.querySelector('.diagram-reading-note').textContent = record ? match.note : '';
    card.root.querySelector('.diagram-source').hidden = !record;
    card.root.querySelector('.diagram-source pre').textContent = record?.source || '';
    card.root.querySelector('.diagram-scale').textContent = '';
    card.root.querySelector('[data-locate]').disabled = !record;
    card.root.querySelectorAll('[data-zoom]').forEach(button=>{button.disabled=true;});
    const message = !current.ready ? '正在读取这份 Wiki 的原图…' : !match ? '本主题尚未为该工具配对原图，不表示它没有相关图表。可选择 Local Skill / DevinWiki，或在下方阅读全文。' : !record ? '没有匹配到预先核对的原图，可能是文件内容已变化。本页不按相似标题猜配，也不补画一张图。' : '正在渲染原始图表…';
    const status = create('p',message,'diagram-status');
    status.setAttribute('role','status');
    card.viewport.replaceChildren(status);
    card.viewport.scrollTo(0,0);
    if (!record) return;
    renderQueue = renderQueue.then(async () => {
      if (epoch !== card.epoch) return;
      try {
        if (!window.mermaid) throw new Error('Renderer unavailable');
        const id = 'paired-original-' + (++serial);
        let result;
        try {
          result = await window.mermaid.render(id,record.source);
        } finally {
          // Mermaid may leave an error SVG outside the target on invalid input.
          document.getElementById('d' + id)?.remove();
        }
        if (epoch !== card.epoch) return;
        const content = create('div',null,'diagram-canvas');
        // Only the bundled strict-mode renderer supplies markup; Wiki text stays text elsewhere.
        content.innerHTML = result.svg;
        const svg = content.querySelector('svg');
        const viewBox = svg?.getAttribute('viewBox')?.trim().split(/[\s,]+/).map(Number);
        if (!svg || viewBox?.length !== 4 || !viewBox.every(Number.isFinite) || viewBox[2] <= 0 || viewBox[3] <= 0) throw new Error('Missing diagram dimensions');
        svg.setAttribute('role','img');
        svg.setAttribute('aria-label',names[current.tool] + ' · ' + topic.title + ' · 原始图表');
        svg.style.maxWidth = 'none';
        card.viewport.replaceChildren(content);
        card.svg = svg;
        card.width = viewBox[2];
        card.height = viewBox[3];
        sizeDiagram(card);
        card.root.querySelectorAll('[data-zoom]').forEach(button=>{button.disabled=false;});
      } catch (_) {
        if (epoch !== card.epoch) return;
        card.viewport.replaceChildren(create('p','原图未能渲染。可展开下方原始定义，或返回全文；本页不会擅自修图。','diagram-status'));
      }
    });
  }

  function update() {
    document.querySelectorAll('[data-diagram-topic]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.diagramTopic === topic.id)));
    document.getElementById('diagram-question').textContent = topic.kind + ' · ' + topic.question;
    const supportedPair = ['left','right'].every(side=>topic.tools[state[side]?.tool]);
    const sameTool = state.left?.tool === state.right?.tool;
    document.getElementById('diagram-comparison-note').textContent = supportedPair && !sameTool ? topic.comparison : sameTool ? '当前两侧为同一工具的同一张图，不是两个工具的效果差异。' : '本组读图提示针对 Local Skill 与 DevinWiki。其他工具尚未在本主题完成配对，不能用空白证明它没有图。';
    const audit = document.getElementById('diagram-audit-link');
    audit.replaceChildren();
    if (topic.auditCase) {
      const link = create('a','查看这两张图的已确认问题与源码依据');
      link.href = 'issues-compare.html#case=' + topic.auditCase;
      audit.append(link);
    }
    ['left','right'].forEach(renderCard);
    document.getElementById('diagram-locate-both').disabled = !cards.left.record || !cards.right.record;
  }

  const tabs = document.getElementById('diagram-topic-tabs');
  topics.forEach(item=> {
    const button = create('button',item.title);
    button.type = 'button';
    button.dataset.diagramTopic = item.id;
    button.addEventListener('click',()=> {
      topic = item;
      const url = new URL(location.href);
      url.searchParams.set('diagram',item.id);
      history.replaceState(null,'',url);
      update();
    });
    tabs.append(button);
  });
  document.getElementById('diagram-default-pair').addEventListener('click',()=> {
    bridge.choose('left','local-skill');
    bridge.choose('right','devinwiki');
  });
  document.getElementById('diagram-locate-both').addEventListener('click',()=>bridge.locate(
    ['left','right'].filter(side=>cards[side].record).map(side=>({side,target:cards[side].record.target}))
  ));
  document.addEventListener('wiki-diagram-state',event=>{state=event.detail;update();});
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(()=>Object.values(cards).forEach(sizeDiagram));
    Object.values(cards).forEach(card=>observer.observe(card.viewport));
  }
  update();
})();
