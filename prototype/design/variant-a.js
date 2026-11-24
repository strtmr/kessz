/* PROTOTYPE — throwaway. Variant A "Galerie" (chosen direction): light, centred header with the
 * silhouette + lettering lockup, horizontal nav, photo grids, two-column piece page with the form below.
 * Round 2: upscale refinement — more whitespace, refined type, violet only as accent, quieter buttons. */
K.variants.A = {
  name: 'Galerie', css: 'variant-a.css',
  render(page, ctx) {
    // Violet brush "Wisch" behind the first word of page/section headlines (h1/h2 only, never grid titles).
    const W = t => t.replace(/^(\S+)/, '<span class="a-wipe">$1</span>');
    const card = p => `
      <a class="a-card is-${p.status}" href="${K.pieceLink(p)}">
        <div class="a-card-img"><img src="${K.img(p.id)}" alt="${p.title}" loading="lazy"></div>
        <div class="a-card-cap">
          <span class="a-label">${p.serial}${p.status !== 'verfuegbar' ? ` · <span class="a-st">${K.STATUS[p.status]}</span>` : ''}</span>
          <span class="a-title">${p.title}</span>
          <span class="a-price">${K.priceText(p)}</span>
        </div>
      </a>`;
    const header = `
      <header class="a-header">
        <div class="a-brand">
          <a class="a-logo" href="${K.link('start')}">${K.lockup()}</a>
          <p class="a-tagline">Handgefertigter Schmuck</p>
        </div>
        <button class="a-menu-btn" aria-expanded="false" aria-controls="a-nav"
          onclick="const h=this.closest('.a-header');h.classList.toggle('is-open');this.setAttribute('aria-expanded',h.classList.contains('is-open'))">
          <span class="a-burger" aria-hidden="true"></span>Menü</button>
        <nav class="a-nav" id="a-nav">
          ${K.categories.map(c => `<a href="${K.catLink(c)}" ${page === 'kategorie' && ctx.cat === c ? 'aria-current="page"' : ''}>${c.name}</a>`).join('')}
          <a href="#ueber">Über KESSZ</a><a href="#kontakt">Kontakt</a>
        </nav>
      </header>`;
    const footer = `
      <footer class="a-footer">
        ${K.lockup('a-footer-logo')}
        <nav>${K.footerNav()}</nav>
        <small>© KESSZ · Handgefertigter Schmuck</small>
      </footer>`;

    let main = '';
    if (page === 'start') {
      main = `
        <section class="a-intro">
          <div class="a-intro-text">
            <p class="a-label">Einzelstücke aus der Werkstatt</p>
            <h1>${W('Draht, Perle, Stein – von Hand gefertigt.')}</h1>
            <p>Jedes Stück entsteht einzeln und gibt es genau einmal. Was Ihnen gefällt, fragen Sie einfach an – oder lassen sich etwas nach Ihren Wünschen anfertigen.</p>
            <a class="a-link" href="${K.catLink(K.categories[0])}">Zur Kollektion</a>
          </div>
          <figure class="a-intro-img"><img src="${K.img(160)}" alt=""></figure>
        </section>
        <section class="a-section">
          <header class="a-section-head"><h2>${W('Neu')}</h2><a class="a-link a-link-quiet" href="${K.catLink(K.categories[0])}">Alle Stücke</a></header>
          <div class="a-strip">${K.newest(8).map(card).join('')}</div>
        </section>
        <section class="a-section">
          <header class="a-section-head"><h2>${W('Kategorien')}</h2></header>
          <div class="a-tiles">
            ${K.categories.map(c => { const first = K.pieces.find(p => K.catOf(p) === c);
              return `<a class="a-tile" href="${K.catLink(c)}"><div class="a-card-img"><img src="${K.img(first.id)}" alt="" loading="lazy"></div>
                <span class="a-title">${c.name}</span><span class="a-label">${K.count(c)} Stücke</span></a>`; }).join('')}
          </div>
        </section>
        <section class="a-wish">
          <p class="a-label">Schmuck nach Wunsch</p>
          <h2>${W('Ihr Stück, nach Ihrer Idee')}</h2>
          <p>Ein Stück ist schon verkauft, oder Sie haben eine eigene Idee? Ich fertige gern etwas für Sie an.</p>
          <a class="a-link" href="#schmuck-nach-wunsch">Mehr erfahren</a>
        </section>`;
    }
    if (page === 'kategorie') {
      const c = ctx.cat;
      main = `
        <nav class="a-crumbs"><a href="${K.link('start')}">Start</a><span>/</span>${c.name}</nav>
        <section class="a-cat-head"><p class="a-label">Kategorie</p><h1>${W(c.name)}</h1><p>${c.intro}</p></section>
        ${c.subs.length > 1 ? `<nav class="a-chips">${c.subs.map(s => `<a href="#${s.slug}">${s.name}</a>`).join('')}</nav>` : ''}
        ${c.subs.map(s => `
          <section class="a-sub" id="${s.slug}">
            <header class="a-sub-head"><h2>${W(s.name)}</h2><p>${s.intro}</p></header>
            <div class="a-grid">${K.subPieces(s.slug).map(card).join('')}</div>
          </section>`).join('')}`;
    }
    if (page === 'stueck') {
      const p = ctx.piece, s = K.sub(p.sub);
      main = `
        <nav class="a-crumbs"><a href="${K.link('start')}">Start</a><span>/</span><a href="${K.catLink(s.cat)}">${s.cat.name}</a><span>/</span>${s.name}</nav>
        <article class="a-piece">
          <div class="a-gallery" data-gallery>
            <div class="a-card-img"><img data-main src="${K.img(p.images[0])}" alt="${p.title}"></div>
            ${p.images.length > 1 ? `<div class="a-thumbs">${p.images.map((id, i) => `<a href="#" data-thumb="${K.img(id)}" class="${i ? '' : 'is-active'}"><img src="${K.img(id)}" alt=""></a>`).join('')}</div>` : ''}
          </div>
          <div class="a-details">
            <p class="a-label">Nr. ${p.serial}</p>
            <h1>${W(p.title)}</h1>
            <p class="a-status is-${p.status}">${K.STATUS[p.status]}</p>
            <p class="a-bigprice">${K.priceText(p)}</p>
            ${p.price != null ? `<p class="a-vat">${K.vatLine()}</p>` : ''}
            <p class="a-desc">${p.description}</p>
            <dl><dt>Material</dt><dd>${p.material}</dd><dt>Maße</dt><dd>${p.size}</dd><dt>Kategorie</dt><dd>${s.cat.name} · ${s.name}</dd></dl>
            <a class="a-btn" href="#anfrage">${K.cta(p)}</a>
          </div>
        </article>
        <section class="a-enq-wrap"><p class="a-label">Anfrage</p><h2>${W(K.cta(p))}</h2>${K.form(p)}</section>
        <section class="a-section">
          <header class="a-section-head"><h2>${W('Mehr ' + s.name)}</h2><a class="a-link a-link-quiet" href="${K.catLink(s.cat)}#${s.slug}">Alle ansehen</a></header>
          <div class="a-strip">${K.subPieces(p.sub).filter(x => x !== p).map(card).join('')}</div>
        </section>`;
    }
    return `${header}<main class="a-main">${main}</main>${footer}`;
  },
};
