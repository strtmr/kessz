/* PROTOTYPE — throwaway. Renders ?page=start|kategorie|stueck × ?variant=A|B|C and the floating switcher.
 * Switching updates the URL (replaceState) and re-renders, so every state is shareable and reload-stable.
 * Would be hidden in production; this whole folder never ships. */
(function () {
  const VARIANTS = ['A', 'B', 'C'];
  const PAGES = [['start', 'Start'], ['kategorie', 'Kategorie'], ['stueck', 'Stück']];
  const app = document.getElementById('app');
  const css = document.getElementById('variant-css');

  function params() { return new URLSearchParams(location.search); }

  function render() {
    const q = params();
    const variant = VARIANTS.includes(q.get('variant')) ? q.get('variant') : 'A';
    const page = PAGES.some(([k]) => k === q.get('page')) ? q.get('page') : 'start';
    K.variant = variant;
    const v = K.variants[variant];
    document.body.className = 'v-' + variant.toLowerCase() + ' page-' + page;
    css.href = v.css;
    const ctx = { cat: K.cat(q.get('cat')), piece: K.piece(q.get('piece')) };
    app.innerHTML = v.render(page, ctx);
    document.title = `KESSZ prototype – ${variant} ${v.name} – ${page}`;
    renderSwitcher(variant, page, v.name);
  }

  function go(changes) {
    const q = params();
    for (const [k, val] of Object.entries(changes)) q.set(k, val);
    history.replaceState(null, '', '?' + q);
    render();
    window.scrollTo(0, 0);
  }

  function cycle(dir) {
    const cur = K.variant, i = VARIANTS.indexOf(cur);
    go({ variant: VARIANTS[(i + dir + VARIANTS.length) % VARIANTS.length] });
  }

  let bar;
  function renderSwitcher(variant, page, name) {
    if (!bar) { bar = document.createElement('nav'); bar.className = 'proto-switcher'; bar.setAttribute('aria-label', 'Prototype switcher'); document.body.appendChild(bar); }
    bar.innerHTML = `
      <div class="ps-group">
        <button data-ps="prev" title="Vorherige Variante (←)">←</button>
        <span class="ps-label"><span class="ps-tag">${variant}</span> ${name}</span>
        <button data-ps="next" title="Nächste Variante (→)">→</button>
      </div>
      <div class="ps-group">
        ${PAGES.map(([k, l]) => `<button data-ps-page="${k}" aria-pressed="${k === page}">${l}</button>`).join('')}
      </div>`;
  }

  document.addEventListener('click', e => {
    const ps = e.target.closest('[data-ps]');
    if (ps) return cycle(ps.dataset.ps === 'next' ? 1 : -1);
    const pg = e.target.closest('[data-ps-page]');
    if (pg) return go({ page: pg.dataset.psPage });

    // Shared design behaviours (all variants)
    const thumb = e.target.closest('[data-thumb]');
    if (thumb) {
      e.preventDefault();
      const gal = thumb.closest('[data-gallery]');
      gal.querySelector('[data-main]').src = thumb.dataset.thumb;
      gal.querySelectorAll('[data-thumb]').forEach(t => t.classList.toggle('is-active', t === thumb));
    }
    const filter = e.target.closest('[data-filter]');
    if (filter) {
      const root = filter.closest('[data-filter-root]');
      root.dataset.only = filter.dataset.filter;
      root.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', b === filter));
    }
  });

  document.addEventListener('submit', e => {
    if (!e.target.matches('[data-enquiry]')) return;
    e.preventDefault();
    const b = e.target.querySelector('.enq-submit');
    b.textContent = 'Prototyp – nicht gesendet ✓';
    b.disabled = true;
  });

  document.addEventListener('keydown', e => {
    if (e.target.closest('input, textarea, select, [contenteditable]') || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowLeft') cycle(-1);
    if (e.key === 'ArrowRight') cycle(1);
  });

  render();
})();
