/* PROTOTYPE — throwaway. Shared helpers for all three variants. */
window.K = window.K || {};
K.variants = {};

K.GALLERY = '../../zzz_legacy/public/gallery/';
K.img = id => `${K.GALLERY}gallery_${id}.jpg`;
K.mood = '../../zzz_legacy/public/images/kessz/kette2.jpg';

/* Logo, traced from the legacy artwork (kept in sync with logo-kessz.svg / logo-silhouette.svg):
 * - lettering: thin wire with bead dots (zzz_legacy/public/images/kessz/kessz_3.png), uses currentColor
 * - silhouette: the maker's outline (kessz_kopf.gif) — black hair, white face, thin neck lines
 * - lockup: silhouette left, lettering right; both black (inverted variant for dark backgrounds). */
K.LETTERING = `<g fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 8 V139"/>
    <path d="M18 118 L42 92"/>
    <path d="M18 116 C40 110 58 118 70 140"/>
    <path d="M70 140 L121 91 C112 84 90 86 80 102 C72 116 76 136 92 143 C102 147 112 145 118 140"/>
    <path d="M118 140 C132 136 136 120 140 108 C144 96 150 92 163 92"/>
    <path d="M153 140 C167 136 171 120 175 108 C179 96 185 92 197 92"/>
    <path d="M197 92 H245 L193 141 H240"/>
  </g>
  <g fill="currentColor">
    <circle cx="17" cy="8" r="6.5"/><circle cx="17" cy="139" r="6.5"/><circle cx="42" cy="92" r="6.5"/>
    <circle cx="70" cy="140" r="6.5"/><circle cx="118" cy="140" r="6.5"/><circle cx="163" cy="92" r="6.5"/>
    <circle cx="153" cy="140" r="6.5"/><circle cx="197" cy="92" r="6.5"/><circle cx="240" cy="140" r="6.5"/>
  </g>`;
K.SILHOUETTE = `<path class="sil-face" fill="var(--sil-face, #fff)" d="M39 146 C33 130 23 112 26 88 C28 74 30 64 31 58 C42 52 52 46 58 46 C68 54 79 72 81 95 C83 112 81 126 76 136 C68 142 60 149 53 149 C47 148 43 145 39 146Z"/>
  <path class="sil-hair" fill="var(--sil-hair, #111)" d="M39 146 C39 146 36.3 141.5 35 139 C33.7 136.5 32.3 134 31 131 C29.7 128 28.2 124.5 27 121 C25.8 117.5 24.5 113.5 24 110 C23.5 106.5 23.7 103.7 24 100 C24.3 96.3 25.3 92.2 26 88 C26.7 83.8 27.3 79 28 75 C28.7 71 29.5 66.8 30 64 C30.5 61.2 31 58 31 58 C31 58 35.5 56.2 38 55 C40.5 53.8 43.5 52.3 46 51 C48.5 49.7 51 47.8 53 47 C55 46.2 56.5 45.8 58 46 C59.5 46.2 60.7 46.5 62 48 C63.3 49.5 64.5 52.5 66 55 C67.5 57.5 69.3 60.3 71 63 C72.7 65.7 74.7 67.8 76 71 C77.3 74.2 78.2 78 79 82 C79.8 86 80.5 90.3 81 95 C81.5 99.7 82 105.2 82 110 C82 114.8 81.7 120.3 81 124 C80.3 127.7 78.8 130 78 132 C77.2 134 76 136 76 136 C76 136 76.2 138.7 77 140 C77.8 141.3 79.2 143 81 144 C82.8 145 85.7 145.8 88 146 C90.3 146.2 92.8 145.8 95 145 C97.2 144.2 99.3 142.8 101 141 C102.7 139.2 103.8 137.3 105 134 C106.2 130.7 108 121 108 121 C108 121 104.7 123.5 103 124 C101.3 124.5 99.3 124.8 98 124 C96.7 123.2 95.7 121.3 95 119 C94.3 116.7 93.8 113.5 94 110 C94.2 106.5 95.2 102.2 96 98 C96.8 93.8 98.2 89.7 99 85 C99.8 80.3 100.7 75.5 101 70 C101.3 64.5 101.5 58.2 101 52 C100.5 45.8 99.7 38.7 98 33 C96.3 27.3 94 22.3 91 18 C88 13.7 84.2 9.7 80 7 C75.8 4.3 70.3 3 66 2 C61.7 1 58.3 0.8 54 1 C49.7 1.2 44.8 1.7 40 3 C35.2 4.3 29.5 6.3 25 9 C20.5 11.7 16.3 15.2 13 19 C9.7 22.8 7 27.3 5 32 C3 36.7 1.8 42 1 47 C0.2 52 -0.2 56.8 0 62 C0.2 67.2 1 73 2 78 C3 83 4.7 87.7 6 92 C7.3 96.3 9 100.3 10 104 C11 107.7 11 111.2 12 114 C13 116.8 14.7 119 16 121 C17.3 123 19 124.3 20 126 C21 127.7 22 131 22 131 C22 131 18.5 132.7 17 133 C15.5 133.3 13 133 13 133 C13 133 11.8 136 12 138 C12.2 140 12.8 142.8 14 145 C15.2 147.2 16.8 149.5 19 151 C21.2 152.5 24.5 153.7 27 154 C29.5 154.3 32 153.8 34 153 C36 152.2 39 149 39 149 C39 149 39 146 39 146Z"/>
  <g class="sil-lines" fill="none" stroke="var(--sil-hair, #111)" stroke-width="1.5" stroke-linecap="round">
    <path d="M39 142 C45 146 50 150 54 149 C60 147 68 141 76 135"/>
    <path d="M39 147 C39 165 38 181 31 196"/>
    <path d="M77 139 C77 160 80 181 95 195"/>
  </g>`;
K.logo = (cls = '') => `<svg class="kessz-logo ${cls}" viewBox="8 0 242 149" role="img" aria-label="kessz">${K.LETTERING}</svg>`;
K.silhouette = (cls = '') => `<svg class="kessz-sil ${cls}" viewBox="0 0 110 198" aria-hidden="true">${K.SILHOUETTE}</svg>`;
// Lockup: ONE combined logo (logo-kessz-lockup.svg) — silhouette joined to the lettering by a baseline wire.
// Add class "is-inverted" for dark backgrounds (avoid if possible).
K.LOCKUP = `<g transform="translate(0 7.3) scale(0.677)">
    <path class="sil-face" fill="var(--sil-face, #fff)" d="M39 146 C33 130 23 112 26 88 C28 74 30 64 31 58 C42 52 52 46 58 46 C68 54 79 72 81 95 C83 112 81 126 76 136 C68 142 60 149 53 149 C47 148 43 145 39 146Z"/>
    <path class="sil-hair" fill="var(--sil-hair, currentColor)" d="M39 146 C39 146 36.3 141.5 35 139 C33.7 136.5 32.3 134 31 131 C29.7 128 28.2 124.5 27 121 C25.8 117.5 24.5 113.5 24 110 C23.5 106.5 23.7 103.7 24 100 C24.3 96.3 25.3 92.2 26 88 C26.7 83.8 27.3 79 28 75 C28.7 71 29.5 66.8 30 64 C30.5 61.2 31 58 31 58 C31 58 35.5 56.2 38 55 C40.5 53.8 43.5 52.3 46 51 C48.5 49.7 51 47.8 53 47 C55 46.2 56.5 45.8 58 46 C59.5 46.2 60.7 46.5 62 48 C63.3 49.5 64.5 52.5 66 55 C67.5 57.5 69.3 60.3 71 63 C72.7 65.7 74.7 67.8 76 71 C77.3 74.2 78.2 78 79 82 C79.8 86 80.5 90.3 81 95 C81.5 99.7 82 105.2 82 110 C82 114.8 81.7 120.3 81 124 C80.3 127.7 78.8 130 78 132 C77.2 134 76 136 76 136 C76 136 76.2 138.7 77 140 C77.8 141.3 79.2 143 81 144 C82.8 145 85.7 145.8 88 146 C90.3 146.2 92.8 145.8 95 145 C97.2 144.2 99.3 142.8 101 141 C102.7 139.2 103.8 137.3 105 134 C106.2 130.7 108 121 108 121 C108 121 104.7 123.5 103 124 C101.3 124.5 99.3 124.8 98 124 C96.7 123.2 95.7 121.3 95 119 C94.3 116.7 93.8 113.5 94 110 C94.2 106.5 95.2 102.2 96 98 C96.8 93.8 98.2 89.7 99 85 C99.8 80.3 100.7 75.5 101 70 C101.3 64.5 101.5 58.2 101 52 C100.5 45.8 99.7 38.7 98 33 C96.3 27.3 94 22.3 91 18 C88 13.7 84.2 9.7 80 7 C75.8 4.3 70.3 3 66 2 C61.7 1 58.3 0.8 54 1 C49.7 1.2 44.8 1.7 40 3 C35.2 4.3 29.5 6.3 25 9 C20.5 11.7 16.3 15.2 13 19 C9.7 22.8 7 27.3 5 32 C3 36.7 1.8 42 1 47 C0.2 52 -0.2 56.8 0 62 C0.2 67.2 1 73 2 78 C3 83 4.7 87.7 6 92 C7.3 96.3 9 100.3 10 104 C11 107.7 11 111.2 12 114 C13 116.8 14.7 119 16 121 C17.3 123 19 124.3 20 126 C21 127.7 22 131 22 131 C22 131 18.5 132.7 17 133 C15.5 133.3 13 133 13 133 C13 133 11.8 136 12 138 C12.2 140 12.8 142.8 14 145 C15.2 147.2 16.8 149.5 19 151 C21.2 152.5 24.5 153.7 27 154 C29.5 154.3 32 153.8 34 153 C36 152.2 39 149 39 149 C39 149 39 146 39 146Z"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M26.4 103.4 C30.5 106.1 33.9 108.9 36.6 108.2 C40.6 106.8 46.0 102.8 51.5 98.7"/>
    <path d="M26.4 106.8 C26.4 120 25.799999999999997 131 21.0 139"/>
    <path d="M52.1 101.4 C52.1 121 58 137 78 139 H153"/>
  </g>

  <g transform="translate(136 0)">
    <g fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 8 V139"/>
    <path d="M18 118 L42 92"/>
    <path d="M18 116 C40 110 58 118 70 140"/>
    <path d="M70 140 L121 91 C112 84 90 86 80 102 C72 116 76 136 92 143 C102 147 112 145 118 140"/>
    <path d="M118 140 C132 136 136 120 140 108 C144 96 150 92 163 92"/>
    <path d="M153 140 C167 136 171 120 175 108 C179 96 185 92 197 92"/>
    <path d="M197 92 H245 L193 141 H240"/>
  </g>
  <g fill="currentColor">
    <circle cx="17" cy="8" r="6.5"/><circle cx="17" cy="139" r="6.5"/><circle cx="42" cy="92" r="6.5"/>
    <circle cx="70" cy="140" r="6.5"/><circle cx="118" cy="140" r="6.5"/><circle cx="163" cy="92" r="6.5"/>
    <circle cx="153" cy="140" r="6.5"/><circle cx="197" cy="92" r="6.5"/><circle cx="240" cy="140" r="6.5"/>
  </g>
  </g>`;
K.lockup = (cls = '') => `<span class="kessz-lockup ${cls}"><svg viewBox="-2 0 390 149" role="img" aria-label="KESSZ">${K.LOCKUP}</svg></span>`;

K.STATUS = { verfuegbar: 'verfügbar', reserviert: 'reserviert', verkauft: 'verkauft' };
const RANK = { verfuegbar: 0, reserviert: 1, verkauft: 2 };

K.sub = slug => { for (const c of K.categories) for (const s of c.subs) if (s.slug === slug) return { ...s, cat: c }; };
K.cat = slug => K.categories.find(c => c.slug === slug) || K.categories[0];
K.catOf = p => K.sub(p.sub).cat;
K.count = cat => K.pieces.filter(p => K.catOf(p) === cat).length;
// Agreed order inside a subcategory: available, reserved, sold — each newest first.
K.sortPieces = list => [...list].sort((a, b) => RANK[a.status] - RANK[b.status] || b.added - a.added);
K.subPieces = slug => K.sortPieces(K.pieces.filter(p => p.sub === slug));
K.newest = n => [...K.pieces].sort((a, b) => b.added - a.added).slice(0, n);
K.piece = serial => K.pieces.find(p => p.serial === serial) || K.pieces[0];
K.siblings = p => { const l = K.subPieces(p.sub), i = l.indexOf(p); return { prev: l[(i - 1 + l.length) % l.length], next: l[(i + 1) % l.length] }; };

K.link = (page, extra = {}) => '?' + new URLSearchParams({ page, variant: K.variant, ...extra });
K.catLink = c => K.link('kategorie', { cat: c.slug });
K.pieceLink = p => K.link('stueck', { piece: p.serial });

K.eur = n => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
K.priceText = p => p.price == null ? 'Preis auf Anfrage' : K.eur(p.price);
K.vatLine = () => `gem. §19 UStG wird keine MwSt. berechnet · zzgl. <a href="#versand">Versand</a>`;
K.cta = p => p.status === 'verkauft' ? 'Ähnliches anfragen' : 'Dieses Stück anfragen';

K.footerLinks = ['Über KESSZ', 'Schmuck nach Wunsch', 'Versand & Verpackung', 'Kontakt', 'Impressum', 'Datenschutz'];
K.footerNav = () => K.footerLinks.map(l => `<a href="#${l.toLowerCase().replace(/[^a-zäöü]+/g, '-')}">${l}</a>`).join('');

// Enquiry form, prefilled with the piece. Non-functional: submit is intercepted.
K.form = (p, cls = '') => {
  const sold = p.status === 'verkauft';
  const ref = `${p.serial} · ${p.title}`;
  const msg = sold
    ? `Guten Tag,\n\ndas Stück ${ref} ist leider verkauft. Könnten Sie mir etwas Ähnliches anfertigen?\n\n`
    : `Guten Tag,\n\nich interessiere mich für ${ref}.\n\n`;
  return `
<form class="enq ${cls}" data-enquiry id="anfrage">
  <p class="enq-ref">${sold ? 'Ähnliches wie' : 'Anfrage zu'} <strong>${ref}</strong></p>
  <input type="hidden" name="piece" value="${p.serial}">
  <label class="enq-field"><span>Name</span><input name="name" autocomplete="name" required></label>
  <label class="enq-field"><span>E-Mail</span><input type="email" name="email" autocomplete="email" required></label>
  <label class="enq-field"><span>Nachricht</span><textarea name="message" rows="6">${msg}</textarea></label>
  <button type="submit" class="enq-submit">Anfrage senden</button>
  <p class="enq-note">Ihre Angaben verwenden wir nur, um Ihre Anfrage zu beantworten. Mehr dazu im <a href="#datenschutz">Datenschutz</a>.</p>
</form>`;
};
