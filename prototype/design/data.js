/* PROTOTYPE — throwaway.
 * PLACEHOLDER DATA: category/subcategory names, intro texts, piece titles, prices,
 * serial numbers, materials and dates are invented. Real data comes from the
 * legacy DB dump. Only the photos are real (legacy gallery, referenced in place).
 */
window.K = window.K || {};

K.categories = [
  { slug: 'halsketten', name: 'Halsketten',
    intro: 'Ketten aus feinem Draht, Perlen und Stein – jede ein Einzelstück.',
    subs: [
      { slug: 'drahtketten', name: 'Drahtketten',
        intro: 'Mehrreihige Ketten aus hauchdünnem Edelstahldraht, auf dem Glas- und Steinperlen zu schweben scheinen.' },
      { slug: 'perlenketten', name: 'Perlenketten',
        intro: 'Klassische Perlenketten, neu gedacht: Muschelkern-, Glas- und Süßwasserperlen in ungewöhnlichen Farben.' },
    ] },
  { slug: 'anhaenger', name: 'Anhänger',
    intro: 'Stein und Glas an Lederband oder Draht.',
    subs: [
      { slug: 'steinanhaenger', name: 'Steinanhänger',
        intro: 'Donuts und Scheiben aus Stein und Glas, an Lederband oder Draht.' },
    ] },
  { slug: 'ohrringe', name: 'Ohrringe',
    intro: 'Leicht zu tragen, mit Haken aus Edelstahl oder Silber.',
    subs: [
      { slug: 'ohrhaenger', name: 'Ohrhänger', intro: 'Leichte Ohrhänger mit einer einzelnen Perle.' },
      { slug: 'filz', name: 'Filz & Perle', intro: 'Handgefilzte Kugeln, bestickt mit winzigen Glasperlen.' },
    ] },
  { slug: 'armbaender', name: 'Armbänder',
    intro: 'Elastisch oder mit Magnetverschluss.',
    subs: [
      { slug: 'perlenarmbaender', name: 'Perlenarmbänder', intro: 'Perlen auf Draht oder elastischem Band, in Größen von 16 bis 20 cm.' },
    ] },
];

// [id (legacy gallery id), sub, title, price|null, status, material, size, extra image ids]
K.pieces = [
  [1,   'drahtketten',     'Bergkristall-Wolke',      168, 'verfuegbar', 'Bergkristall, Edelstahldraht', 'ca. 46 cm', [2, 3]],
  [130, 'drahtketten',     'Funkenflug',              142, 'verkauft',   'Glasperlen, Edelstahldraht', 'ca. 48 cm', [131]],
  [20,  'drahtketten',     'Korallenrot',              96, 'reserviert', 'Glasperlen, Edelstahldraht', 'ca. 44 cm', [21]],
  [160, 'drahtketten',     'Drei Perlen am Draht',   null, 'verfuegbar', 'Muschelkernperlen, Edelstahldraht', 'ca. 45 cm', [161, 162]],
  [5,   'drahtketten',     'Nebel',                   118, 'verfuegbar', 'Glas, Edelstahldraht', 'ca. 46 cm', []],
  [140, 'drahtketten',     'Herbstlaub',              124, 'verkauft',   'Glasperlen, Edelstahldraht', 'ca. 47 cm', []],
  [60,  'perlenketten',    'Muschelperle Silbergrau', 138, 'verfuegbar', 'Muschelkernperlen, Silberverschluss', 'ca. 45 cm', [61]],
  [90,  'perlenketten',    'Lavendel',                112, 'verfuegbar', 'Glasperlen, Silber 925', 'ca. 50 cm', []],
  [110, 'perlenketten',    'Mitternacht',             155, 'verkauft',   'Hämatit, Silber 925', 'ca. 48 cm', []],
  [25,  'perlenketten',    'Schneeweiß',             null, 'verfuegbar', 'Süßwasserperlen', 'ca. 42 cm', []],
  [70,  'steinanhaenger',  'Lapis-Donut',              48, 'verfuegbar', 'Lapislazuli, Lederband', 'Ø 3 cm', [71]],
  [80,  'steinanhaenger',  'Jade am Lederband',        54, 'reserviert', 'Jade, Lederband', 'Ø 3,5 cm', []],
  [120, 'steinanhaenger',  'Achatscheibe',             46, 'verkauft',   'Achat, Edelstahldraht', 'Ø 4 cm', []],
  [150, 'ohrhaenger',      'Koralle, rund',            38, 'verfuegbar', 'Schaumkoralle, Edelstahl', 'Länge 4 cm', [151]],
  [155, 'ohrhaenger',      'Tropfen',                  34, 'verfuegbar', 'Glas, Silber 925', 'Länge 3,5 cm', []],
  [30,  'ohrhaenger',      'Silberperle',              32, 'verkauft',   'Silber 925', 'Länge 3 cm', []],
  [100, 'filz',            'Filzkiesel Taubenblau',    42, 'verfuegbar', 'Merinowolle, Glasperlen, Edelstahl', 'Länge 6 cm', [101]],
  [105, 'filz',            'Filzkiesel Flieder',       42, 'verkauft',   'Merinowolle, Glasperlen, Edelstahl', 'Länge 6 cm', []],
  [115, 'perlenarmbaender','Sandfarben',               36, 'verfuegbar', 'Glasperlen, elastisches Band', '18 cm', []],
  [125, 'perlenarmbaender','Violett-Mix',              39, 'verfuegbar', 'Amethyst, Glasperlen', '18 cm', []],
  [145, 'perlenarmbaender','Graphit',                  39, 'reserviert', 'Hämatit, Magnetverschluss', '19 cm', []],
].map(([id, sub, title, price, status, material, size, extra]) => ({
  id, sub, title, price, status, material, size,
  serial: 'K-' + String(id).padStart(4, '0'),   // placeholder serial number
  images: [id, ...extra],
  added: id,                                      // placeholder "published" order
  description: 'Platzhaltertext: Wie das Stück entstanden ist, wie es sich trägt und was es besonders macht. Zwei, drei Sätze aus der Werkstatt.',
}));
