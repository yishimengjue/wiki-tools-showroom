(() => {
  'use strict';
  let queue = Promise.resolve();
  let serial = 0;
  const states = new WeakMap();
  const fit = state => {
    if (!state.svg || !state.figure.isConnected) return;
    if (state.autoFit) state.scale = Math.min(1,(state.view.clientWidth - 24)/state.width);
    state.scale = Math.max(.1,Math.min(3,state.scale));
    state.svg.style.width = state.width * state.scale + 'px';
    state.svg.style.height = state.height * state.scale + 'px';
    state.figure.querySelector('.audit-diagram-scale').textContent = Math.round(state.scale*100)+'%';
  };
  const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(entries=> {
    entries.forEach(entry=>{const state=states.get(entry.target.closest('figure'));if(state)fit(state);});
  }) : null;
  if (window.mermaid) window.mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'neutral',suppressErrorRendering:true});
  function render(container) {
    observer?.disconnect();
    container.querySelectorAll('[data-audit-diagram]').forEach(figure=> {
      const source = window.WIKI_AUDIT_DIAGRAMS?.[figure.dataset.caseId]?.[figure.dataset.auditDiagram]?.source;
      const view = figure.querySelector('.audit-diagram-view');
      if (!source) {view.textContent='未找到完整原图，不按摘录补画。';return;}
      queue = queue.then(async()=> {
        if (!figure.isConnected) return;
        const id = 'audit-original-'+(++serial);
        try {
          if (!window.mermaid) throw new Error('Renderer unavailable');
          const {svg} = await window.mermaid.render(id,source);
          if (!figure.isConnected) return;
          // Only the bundled strict-mode renderer may supply SVG markup.
          view.innerHTML = '<div class="audit-diagram-canvas">'+svg+'</div>';
          const element = view.querySelector('svg');
          const box = element?.getAttribute('viewBox')?.trim().split(/[\s,]+/).map(Number);
          if (box?.length!==4 || !box.every(Number.isFinite) || box[2]<=0 || box[3]<=0) throw new Error('Missing SVG dimensions');
          element.style.maxWidth='none';
          element.setAttribute('role','img');
          element.setAttribute('aria-label',figure.querySelector('figcaption').textContent);
          const state={figure,view,svg:element,width:box[2],height:box[3],scale:1,autoFit:true};
          states.set(figure,state);
          fit(state);
          figure.querySelectorAll('[data-diagram-zoom]').forEach(button=>{button.disabled=false;});
          observer?.observe(view);
        } catch (_) {
          if (figure.isConnected) view.textContent='原图暂未能渲染。可展开原始 Mermaid 定义查看；不自动改写图中的内容。';
        } finally {
          document.getElementById('d'+id)?.remove();
        }
      });
    });
  }
  document.addEventListener('click',event=> {
    const button=event.target.closest('[data-diagram-zoom]');
    if (!button) return;
    const state=states.get(button.closest('figure'));
    if (!state) return;
    state.autoFit=button.dataset.diagramZoom==='fit';
    if (!state.autoFit) state.scale*=button.dataset.diagramZoom==='in'?1.25:.8;
    fit(state);
  });
  window.WIKI_AUDIT_RENDERER={render};
})();
