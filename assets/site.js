
(() => {
  const generatedDirectoryLinks = [
    '/openwiki/architecture',
    '/openwiki/concepts',
    '/openwiki/workflows'
  ];
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    const isEmptyCitation = href === '';
    const isMissingGeneratedPath = href && generatedDirectoryLinks.some(path => href.endsWith(path));
    if (!isEmptyCitation && !isMissingGeneratedPath) return;
    link.removeAttribute('href');
    link.classList.add('source-link-missing');
    link.title = isEmptyCitation
      ? '原始引用没有可点击地址；仍可按标签中的文件名、符号或行号定位'
      : '原始 Wiki 指向的仓库路径不存在（404）';
    const badge = document.createElement('span');
    badge.className = 'source-link-note';
    badge.textContent = isEmptyCitation ? '原始引用无地址' : '原始链接 404';
    link.insertAdjacentElement('afterend', badge);
  });

  const settleHashTarget = () => {
    if (!location.hash) return;
    let id;
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      return;
    }
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({block:'start'});
  };
  window.addEventListener('hashchange', settleHashTarget);
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      [40, 500, 1400, 2600].forEach(delay => setTimeout(settleHashTarget, delay));
    });
  });

  const input = document.querySelector('#wiki-search');
  if (input) {
    const pages = [...document.querySelectorAll('#wiki-content .wiki-page')];
    const count = document.querySelector('#search-count');
    input.addEventListener('input', () => {
      const query = input.value.trim().toLocaleLowerCase();
      let visible = 0;
      pages.forEach(page => {
        const hit = !query || page.textContent.toLocaleLowerCase().includes(query);
        page.classList.toggle('search-hidden', !hit);
        visible += hit ? 1 : 0;
      });
      if (count) count.textContent = query ? `找到 ${visible} 个页面` : '显示全部页面';
    });
  }

  if (window.mermaid) {
    mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'neutral',flowchart:{htmlLabels:true,useMaxWidth:true}});
    let diagramId = 0;
    const renderDiagram = async (el) => {
      const source = el.textContent;
      try {
        const result = await mermaid.render(`showroom-diagram-${++diagramId}`, source);
        el.innerHTML = result.svg;
        el.classList.remove('pending');
      } catch (error) {
        el.classList.add('failed');
        el.innerHTML = `<pre>${source.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}</pre>`;
      }
      settleHashTarget();
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        renderDiagram(entry.target);
      });
    }, {rootMargin:'600px'});
    document.querySelectorAll('.mermaid').forEach(el => observer.observe(el));
  }
})();
