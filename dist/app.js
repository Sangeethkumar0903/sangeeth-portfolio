(function () {
  const data = window.PORTFOLIO;
  const arrow = '<span aria-hidden="true">↗</span>';
  const byId = (id) => document.getElementById(id);

  function visual(p, large) {
    const inner = p.visual === 'wave'
      ? '<div class="wave" aria-hidden="true"></div>'
      : p.visual === 'nodes'
        ? '<div class="node-map" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>'
        : p.visual === 'commerce'
          ? '<div class="commerce-bars" aria-hidden="true"><i style="--h:38%;--n:.1"></i><i style="--h:72%;--n:.4"></i><i style="--h:56%;--n:.2"></i><i style="--h:88%;--n:.6"></i><i style="--h:64%;--n:.3"></i></div>'
          : '<div class="mock-line accent"></div><div class="mock-line"></div><div class="mock-line short"></div>';
    return `<div class="mock-window" aria-hidden="true"><div class="mock-top"><i></i><i></i><i></i></div><div class="mock-body">${p.visual === 'document' ? inner : ''}<div class="mock-panels"><div class="mock-panel">${inner}</div><div class="mock-panel"><div class="mock-line accent"></div><div class="mock-line short"></div><div class="mock-line"></div></div></div></div></div><span class="placeholder-label">${large ? 'Project media placeholder · replace with approved visual' : 'Visual placeholder'}</span>`;
  }

  function renderHome() {
    const projectRoot = byId('project-list');
    if (!projectRoot) return;
    projectRoot.innerHTML = data.projects.map(p => `<article class="project reveal" style="--accent:var(--${p.accent})"><div class="project-visual"><div class="visual-grid"></div>${visual(p, false)}</div><div class="project-info"><div class="project-meta"><span>${p.eyebrow}</span><span>${p.number} / 04</span></div><h3 class="project-title">${p.title}</h3><p class="project-summary">${p.summary}</p><div class="tags">${p.tech.slice(0,4).map(t => `<span class="tag">${t}</span>`).join('')}</div><a class="project-link" href="/projects/${p.slug}/" aria-label="Read the ${p.title} case study">View case study ${arrow}</a></div></article>`).join('');
    byId('skill-list').innerHTML = data.skills.map(s => `<div class="skill-row"><h3>${s.label}</h3><div class="skill-items">${s.items.map(i => `<span>${i}</span>`).join('')}</div></div>`).join('');
    byId('experience-list').innerHTML = data.experience.map(e => `<article class="timeline-item"><time>${e.period}</time><div><h3>${e.company}</h3><h4>${e.role}</h4><p>${e.body}</p></div></article>`).join('');
  }

  function renderCase() {
    const root = byId('case-root');
    if (!root) return;
    const slug = document.body.dataset.project;
    const p = data.projects.find(item => item.slug === slug);
    if (!p) return;
    document.title = `${p.title} — Sangeeth Kumar`;
    const next = data.projects[(data.projects.indexOf(p) + 1) % data.projects.length];
    root.innerHTML = `<main id="main"><section class="case-hero"><div class="shell"><a class="case-back" href="/#work">← All selected work</a><p class="eyebrow">Case study ${p.number} · ${p.eyebrow}</p><h1 class="case-title">${p.title}</h1><div class="case-intro"><p class="lede">${p.summary}</p><div class="case-meta"><div><small>Role</small><span>Full-stack engineering</span></div><div><small>Focus</small><span>${p.tech.slice(0,3).join(' · ')}</span></div></div></div></div></section><section class="case-visual" style="--accent:var(--${p.accent})"><div class="visual-grid"></div>${visual(p, true)}</section><section class="case-section"><div class="shell case-two"><h2>Context</h2><div class="case-prose"><p>${p.problem}</p><p class="quiet">${p.solution}</p></div></div></section><section class="case-section section-rule"><div class="shell"><div class="case-two"><h2>My contribution</h2><div><p class="case-prose">${p.role}</p><div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div></div></div><div class="architecture">${p.capabilities.map((c,i) => `<div class="architecture-step"><span>0${i+1}</span><strong>${c}</strong></div>`).join('')}</div></div></section><section class="case-section section-rule"><div class="shell"><div class="case-two"><h2>Engineering decisions</h2><div><p class="case-prose">The system was shaped around useful outputs, explicit boundaries, and a dependable path from input to result.</p><div class="decision-list">${p.decisions.map(d => `<article class="decision"><h3>${d[0]}</h3><p>${d[1]}</p></article>`).join('')}</div></div></div></div></section><section class="case-section section-rule"><div class="shell case-two"><h2>Outcome & learning</h2><div class="case-prose"><p>${p.outcome}</p><p class="quiet">${p.learning}</p>${p.github ? `<a class="button button-secondary" href="${p.github}" target="_blank" rel="noreferrer">View GitHub repository ${arrow}</a>` : '<p class="eyebrow">Public repository not supplied</p>'}</div></div></section><section class="case-next"><div class="shell"><small>Next case study</small><h2>${next.title}</h2><a href="/projects/${next.slug}/">Explore project ${arrow}</a></div></section></main>`;
  }

  function interactions() {
    const nav = document.querySelector('.nav');
    const progress = document.querySelector('.progress');
    const menu = document.querySelector('.menu-button');
    const links = document.querySelector('.nav-links');
    const onScroll = () => {
      if (nav) nav.classList.toggle('scrolled', scrollY > 20);
      if (progress) {
        const max = document.documentElement.scrollHeight - innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      }
    };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
    if (menu) menu.addEventListener('click', () => { const open = links.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
    document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links && links.classList.remove('open')));
    const reveal = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); reveal.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
    const orb = document.querySelector('.hero-orb');
    if (orb && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelector('.hero').addEventListener('pointermove', e => { const x=(e.clientX/innerWidth-.5)*24, y=(e.clientY/innerHeight-.5)*24; orb.style.transform=`translate3d(${x}px,${y}px,0)`; });
    }
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  }

  renderHome(); renderCase(); interactions();
})();

