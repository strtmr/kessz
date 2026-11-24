/* PROTOTYPE — throwaway. Variant B "Samt": dark charcoal like the photo backgrounds, fixed left rail with
 * the full category tree (drawer on mobile), mosaic of new pieces, category as chapters with a sticky
 * subcategory column, piece page as a dark "stage" with the enquiry form folded into the info panel. */
K.variants.B = {
  name: 'Samt', css: 'variant-b.css',
  render(page, ctx) {
    const tree = K.categories.map(c => `
      <li><a href="${K.catLink(c)}" ${page === 'kategorie' && ctx.cat === c ? 'aria-current="page"' : ''}>${c.name}</a>
        <ul>${c.subs.map(s => `<li><a href="${K.catLink(c)}#${s.slug}">${s.name}</a></li>`).join('')}</ul></li>`).join('');
    const rail = `
      <aside class="b-rail">
        <a class="b-logo" href="${K.link('start')}">${K.logo()}</a>
        <details class="b-menu" ${matchMedia('(min-width: 900px)').matches ? 'open' : ''}>
          <summary>Menü</summary>
          <nav><ul class="b-tree">${tree}</ul>
            <ul class="b-more"><li><a href="${K.link('start')}#neu">Neu</a></li><li><a href="#schmuck-nach-wunsch">Schmuck nach Wunsch</a></li><li><a href="#ueber">Über KESSZ</a></li><li><a href="#kontakt">Kontakt</a></li></ul>
          </nav>
        </details>
        <footer class="b-legal">${K.footerNav()}</footer>
      </aside>`;
    const tile = (p, big) => `
      <a class="b-tile ${big ? 'is-big' : ''} is-${p.status}" href="${K.pieceLink(p)}">
        <img src="${K.img(p.id)}" alt="${p.title}" loading="lazy">
        <span class="b-cap"><em>${p.title}</em><span>${p.status === 'verfuegbar' ? K.priceText(p) : K.STATUS[p.status]}</span></span>
      </a>`;

    let main = '';
    if (page === 'start') {
      const n = K.newest(7);
      main = `
        <section class="b-hero">
          <div class="b-hero-text">
            <p class="b-kicker">Handgefertigter Schmuck</p>
            <h1>Draht.<br>Perle.<br><span>Stein.</span></h1>
            <p>Einzelstücke aus der Werkstatt – jedes nur einmal.</p>
          </div>
          <div class="b-hero-img"><img src="${K.mood}" alt=""></div>
        </section>
        <section class="b-block" id="neu">
          <h2 class="b-h2"><span>Neu</span> in der Werkstatt</h2>
          <div class="b-mosaic">${n.map((p, i) => tile(p, i === 0)).join('')}</div>
        </section>
        <section class="b-block b-maker">
          <img src="${K.img(160)}" alt="">
          <blockquote>„Ich arbeite mit Draht, der kaum dicker ist als ein Haar – die Perlen sollen schweben.“
            <footer><a href="#ueber">Über KESSZ →</a></footer></blockquote>
        </section>`;
    }
    if (page === 'kategorie') {
      const c = ctx.cat;
      main = `
        <header class="b-cat-head"><p class="b-kicker">Kategorie</p><h1>${c.name}</h1><p>${c.intro}</p></header>
        ${c.subs.map((s, i) => `
          <section class="b-chapter" id="${s.slug}">
            <div class="b-chapter-side"><span class="b-num">${String(i + 1).padStart(2, '0')}</span><h2>${s.name}</h2><p>${s.intro}</p>
              <small>${K.subPieces(s.slug).length} Stücke</small></div>
            <div class="b-chapter-list">${K.subPieces(s.slug).map(p => tile(p)).join('')}</div>
          </section>`).join('')}`;
    }
    if (page === 'stueck') {
      const p = ctx.piece, s = K.sub(p.sub), sib = K.siblings(p);
      main = `
        <article class="b-stage">
          <div class="b-stage-img" data-gallery>
            <img data-main src="${K.img(p.images[0])}" alt="${p.title}">
            ${p.images.length > 1 ? `<div class="b-thumbs">${p.images.map((id, i) => `<a href="#" data-thumb="${K.img(id)}" class="${i ? '' : 'is-active'}"><img src="${K.img(id)}" alt=""></a>`).join('')}</div>` : ''}
          </div>
          <div class="b-panel">
            <a class="b-back" href="${K.catLink(s.cat)}#${s.slug}">← ${s.cat.name} · ${s.name}</a>
            <h1>${p.title}</h1>
            <p class="b-serial">${p.serial}</p>
            <p class="b-status is-${p.status}"><i></i>${K.STATUS[p.status]}</p>
            <p class="b-price">${K.priceText(p)}</p>
            ${p.price != null ? `<p class="b-vat">${K.vatLine()}</p>` : ''}
            <p class="b-desc">${p.description}</p>
            <dl><div><dt>Material</dt><dd>${p.material}</dd></div><div><dt>Maße</dt><dd>${p.size}</dd></div></dl>
            <details class="b-enq">
              <summary>${K.cta(p)}</summary>
              ${K.form(p)}
            </details>
            <nav class="b-sib"><a href="${K.pieceLink(sib.prev)}">← ${sib.prev.title}</a><a href="${K.pieceLink(sib.next)}">${sib.next.title} →</a></nav>
          </div>
        </article>`;
    }
    return `<div class="b-shell">${rail}<main class="b-main">${main}<footer class="b-foot">${K.logo()}<nav>${K.footerNav()}</nav></footer></main></div>`;
  },
};
