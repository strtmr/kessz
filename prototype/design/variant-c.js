/* PROTOTYPE — throwaway. Variant C "Register": typographic, catalogue-like. Text-first header, "Neu" as a
 * numbered index list, category as a filterable register (rows, not cards), piece page as one narrow
 * column: serial number big, swipeable photo strip, specs, price, form inline, prev/next. */
K.variants.C = {
  name: 'Register', css: 'variant-c.css',
  render(page, ctx) {
    const header = `
      <header class="c-header">
        <a class="c-logo" href="${K.link('start')}">${K.logo()}<span>Handgefertigter Schmuck</span></a>
        <nav class="c-nav">${K.categories.map((c, i) => `<a href="${K.catLink(c)}" ${page === 'kategorie' && ctx.cat === c ? 'aria-current="page"' : ''}><sup>0${i + 1}</sup>${c.name}</a>`).join('')}
          <a href="#ueber">Über</a><a href="#kontakt">Kontakt</a></nav>
      </header>`;
    const row = (p, i) => `
      <a class="c-row is-${p.status}" href="${K.pieceLink(p)}">
        ${i != null ? `<span class="c-idx">${String(i + 1).padStart(2, '0')}</span>` : ''}
        <img src="${K.img(p.id)}" alt="" loading="lazy">
        <span class="c-row-main"><b>${p.title}</b><small>${p.serial} · ${p.material}</small></span>
        <span class="c-row-status">${K.STATUS[p.status]}</span>
        <span class="c-row-price">${K.priceText(p)}</span>
      </a>`;
    const footer = `<footer class="c-footer"><div>${K.logo()}</div><nav>${K.footerNav()}</nav></footer>`;

    let main = '';
    if (page === 'start') {
      main = `
        <section class="c-statement">
          <h1>Schmuck aus <mark>Draht</mark>, <mark>Perle</mark> und <mark>Stein</mark>. Jedes Stück gibt es genau einmal.</h1>
        </section>
        <section class="c-block">
          <h2 class="c-label">Neu</h2>
          <div class="c-list">${K.newest(8).map(row).join('')}</div>
        </section>
        <section class="c-block c-split">
          <div><h2 class="c-label">Register</h2>
            <ol class="c-index">${K.categories.map(c => `<li><a href="${K.catLink(c)}"><span>${c.name}</span><em>${K.count(c)}</em></a>
              <p>${c.subs.map(s => s.name).join(' · ')}</p></li>`).join('')}</ol></div>
          <aside class="c-note"><h2 class="c-label">Schmuck nach Wunsch</h2>
            <p>Etwas ist schon verkauft oder noch nicht erfunden? Schreiben Sie mir, was Ihnen vorschwebt.</p>
            <a href="#schmuck-nach-wunsch">Anfrage stellen →</a></aside>
        </section>`;
    }
    if (page === 'kategorie') {
      const c = ctx.cat;
      main = `
        <section class="c-cat-head"><h1>${c.name}</h1><p>${c.intro}</p></section>
        <div data-filter-root data-only="alle">
          <div class="c-filter" role="group" aria-label="Filter">
            <button data-filter="alle" aria-pressed="true">Alle</button>
            <button data-filter="verfuegbar" aria-pressed="false">Nur verfügbare</button>
          </div>
          ${c.subs.map(s => `
            <section class="c-block c-sub" id="${s.slug}">
              <div class="c-sub-head"><h2>${s.name}</h2><p>${s.intro}</p></div>
              <div class="c-list">${K.subPieces(s.slug).map(p => row(p)).join('')}</div>
            </section>`).join('')}
        </div>`;
    }
    if (page === 'stueck') {
      const p = ctx.piece, s = K.sub(p.sub), sib = K.siblings(p);
      main = `
        <article class="c-piece">
          <nav class="c-crumbs"><a href="${K.catLink(s.cat)}">${s.cat.name}</a> → <a href="${K.catLink(s.cat)}#${s.slug}">${s.name}</a></nav>
          <p class="c-bigserial">${p.serial}</p>
          <h1>${p.title}</h1>
          <div class="c-photos">${p.images.map(id => `<img src="${K.img(id)}" alt="${p.title}">`).join('')}</div>
          ${p.images.length > 1 ? `<p class="c-hint">← wischen für weitere Fotos →</p>` : ''}
          <dl class="c-specs">
            <div><dt>Status</dt><dd class="c-st is-${p.status}">${K.STATUS[p.status]}</dd></div>
            <div><dt>Preis</dt><dd>${K.priceText(p)}</dd></div>
            <div><dt>Material</dt><dd>${p.material}</dd></div>
            <div><dt>Maße</dt><dd>${p.size}</dd></div>
          </dl>
          ${p.price != null ? `<p class="c-vat">${K.vatLine()}</p>` : ''}
          <p class="c-desc">${p.description}</p>
          <section class="c-enq"><h2 class="c-label">${K.cta(p)}</h2>${K.form(p)}</section>
          <nav class="c-sib"><a href="${K.pieceLink(sib.prev)}"><small>vorheriges</small>${sib.prev.serial} ${sib.prev.title}</a>
            <a href="${K.pieceLink(sib.next)}"><small>nächstes</small>${sib.next.serial} ${sib.next.title}</a></nav>
        </article>`;
    }
    return `${header}<main class="c-main">${main}</main>${footer}`;
  },
};
