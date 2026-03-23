export interface Bike {
  name: string;
  nickname?: string;
  category: string;
  engine: string;
  power: string;
  weight: string;
  seat: string;
  year: number;
  pricePerDay: number;
  ripeUrl?: string;
  slug: string;
  images?: string[];
  overview: string;
  rideNote: string;
  highlights: string[];
}

export function generateSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export const bikes: Bike[] = [
  {
    name: 'Honda F6C Gold Wing Valkyrie',
    nickname: 'Gorilla',
    category: 'Cruiser',
    engine: '1832 cc Flat-6',
    power: '115 PS',
    weight: '340 kg',
    seat: '150 cm+',
    year: 2014,
    pricePerDay: 200,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/8242-honda-gl-goldwing-gl-custom-2015',
    slug: 'honda-gl-goldwing-valkyrie',
    images: ['hero.webp', 'gallery-1.webp', 'gallery-2.webp', 'gallery-3.webp', 'gallery-4.webp'],
    overview:
      'Die F6C Gold Wing Valkyrie ist Hondas muskuloser Power-Cruiser auf Gold-Wing-Basis: 1.8 Liter Flat-6, Wellenantrieb, tiefer Schwerpunkt und massiver Durchzug schon knapp ueber Leerlauf. Sie verbindet die Souveraenitaet einer Langstreckenmaschine mit einem deutlich reduzierteren, selbstbewussteren Cruiser-Auftritt.',
    rideNote:
      'Auf der Strasse fuehlt sich die Valkyrie satt, ruhig und fuer ihre Groesse erstaunlich leichtfuesig an. Sie passt besonders gut zu entspannten, kraftvollen Landstrassenetappen und langen Tagen im Sattel.',
    highlights: ['1832 cc Flat-6 auf Gold-Wing-Basis', 'Wellenantrieb und tiefes Sitzniveau', 'Massiver Drehmoment-Charakter fuer entspannte Cruiser-Rides'],
  },
  {
    name: 'BMW R 1200 GS',
    nickname: 'GS',
    category: 'Adventure',
    engine: '1170 cc Boxer Twin',
    power: '109 PS',
    weight: '244 kg',
    seat: '170 cm+',
    year: 2010,
    pricePerDay: 100,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/6110-bmw-r-1200-2010',
    slug: 'bmw-r-1200-gs',
    overview:
      'Die R 1200 GS ist der moderne Klassiker unter den Reiseenduros. Der luft-/ölgekühlte Boxer mit 1170 Kubik, Telelever/Paralever-Layout und aufrechter Ergonomie macht sie zu einer der vielseitigsten Maschinen überhaupt.',
    rideNote:
      'Sie fährt sich neutral, transparent und enorm vertrauenerweckend. Für Taunus, Schwarzwald oder längere Alpenetappen ist sie genau dann stark, wenn Komfort und Kontrolle gleich wichtig sind.',
    highlights: ['1170 cc Boxer-Twin mit sattem Mittendrehmoment', 'Reiseenduro-Ergonomie mit breitem Lenker', 'Sehr stabil bei langen Tagesetappen und wechselndem Belag'],
  },
  {
    name: 'BMW K 1300 R',
    category: 'Naked',
    engine: '1293 cc Inline-4',
    power: '170 PS',
    weight: '243 kg',
    seat: '170 cm+',
    year: 2009,
    pricePerDay: 130,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/6111-bmw-k-1300-2009',
    slug: 'bmw-k-1300-r',
    overview:
      'Die K 1300 R ist BMWs High-Performance-Naked-Bike mit längs eingebautem Reihenvierzylinder, viel Spitzenleistung und markanter Front. Sie kombiniert brutalen Durchzug mit einer erstaunlich stabilen, langstreckentauglichen Plattform.',
    rideNote:
      'Das Motorrad fühlt sich schnell, lang und satt an. Wer kräftige Beschleunigung, präzise Linien und ein souveränes Autobahn- oder Landstraßentempo sucht, findet hier das passende Werkzeug.',
    highlights: ['1293 cc Reihenvierer mit sehr starker Spitzenleistung', 'Paralever/Wellenantrieb für souveräne Stabilität', 'Sportliches Naked-Bike mit Touren-Reserven'],
  },
  {
    name: 'Buell XB12 SCG',
    nickname: 'Black Edition',
    category: 'Naked',
    engine: '1202 cc V-Twin',
    power: '101 PS',
    weight: '179 kg',
    seat: '150 cm+',
    year: 2006,
    pricePerDay: 130,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/6112-buell-xb12-2009',
    slug: 'buell-xb12-scg',
    overview:
      'Die XB12SCG ist Buells radikaler Streetfighter mit kurzem Radstand, tiefem Sitz und dem charakteristischen Thunderstorm-V2. Typisch Buell sind das Fuel-in-Frame-Konzept, das Öl im Schwingenarm und die markante ZTL-Einzelscheibenbremse vorne.',
    rideNote:
      'Sie fährt sich kompakt, direkt und mechanisch roh. Wer Charakter, Punch aus dem V2-Keller und ein sehr eigenständiges Naked-Bike sucht, bekommt hier etwas, das sich klar vom Mainstream absetzt.',
    highlights: ['1203 cc Thunderstorm-V2 mit starkem Low-End', 'Sehr niedrige Sitzhöhe und kompakter 52-Zoll-Radstand', 'Typische Buell-Architektur mit ZTL-Bremse und Fuel-in-Frame'],
  },
  {
    name: 'Kawasaki Zephyr 1100',
    category: 'Classic',
    engine: '1062 cc Inline-4',
    power: '91 PS',
    weight: '256 kg',
    seat: '170 cm+',
    year: 1993,
    pricePerDay: 70,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/6113-kawasaki-zephyr-1100-1993',
    slug: 'kawasaki-zephyr-1100',
    overview:
      'Die Zephyr 1100 ist Kawasakis große Retro-Naked mit klassischem Luftkühl-Inline-Four und bewusst analogem Auftritt. Technisch steht sie für entspanntes Big-Bike-Fahren mit viel Schwungmasse, breitem Lenker und ehrlicher Mechanik.',
    rideNote:
      'Sie belohnt einen runden Fahrstil mehr als hektische Inputs. Perfekt für entspannte Landstraßenrunden, bei denen Klang, Sitzposition und klassisches Vierzylinder-Gefühl im Vordergrund stehen.',
    highlights: ['1062 cc luftgekühlter Reihenvierer', 'Retro-Naked-Bike mit klassischer Sitzposition', 'Souveräner, analoger Charakter statt Elektronik-Overkill'],
  },
  {
    name: 'Ducati 900 SS',
    nickname: 'Nuda',
    category: 'Supersport',
    engine: '904 cc L-Twin',
    power: '76 PS',
    weight: '188 kg',
    seat: '150 cm+',
    year: 1997,
    pricePerDay: 130,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/6114-ducati-900-1997',
    slug: 'ducati-900-ss',
    overview:
      'Die 900 SS steht für die klassische luftgekühlte Ducati-Schule: 904 Kubik L-Twin, desmodromische Ventilsteuerung, Trockenkupplung und ein direkter, sportlicher Grundcharakter. Sie ist keine anonyme Supersportlerin, sondern eine Maschine mit sehr eigener Handschrift.',
    rideNote:
      'Am meisten Spaß macht sie, wenn man sauber auf Linie fährt und den V2 aus den Kurven arbeiten lässt. Sie fühlt sich leicht, fokussiert und angenehm mechanisch an.',
    highlights: ['904 cc luftgekühlter Desmo-L-Twin', 'Trockenkupplung und klassischer Ducati-Charakter', 'Schlanke, fokussierte Supersport-Geometrie der 90er'],
  },
  {
    name: 'Husqvarna Vitpilen 701',
    nickname: 'Marge',
    category: 'Naked',
    engine: '693 cc Single',
    power: '74 PS',
    weight: '154 kg',
    seat: '170 cm+',
    year: 2020,
    pricePerDay: 100,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/6115-husqvarna-vitpilen-2020',
    slug: 'husqvarna-vitpilen-701',
    overview:
      'Die Vitpilen 701 ist Husqvarnas puristische Interpretation eines modernen Roadsters: leicht, minimalistisch und von einem drehmomentstarken Einzylinder angetrieben. Technisch bringt sie WP-Fahrwerk, Brembo-Komponenten und eine sehr schlanke, sportliche Ergonomie mit.',
    rideNote:
      'Sie fühlt sich spielerisch, direkt und city-tauglich an, kann aber auf kurvigen Straßen richtig wach werden. Vor allem für Fahrer, die Leichtigkeit und Design mit echter Dynamik verbinden wollen.',
    highlights: ['692.7 cc Einzylinder mit ca. 75 PS', 'Leichtes Chassis mit WP- und Brembo-Hardware', 'Klares, modernes Roadster-Layout mit viel Frontgefühl'],
  },
  {
    name: 'Triumph Speed Triple',
    nickname: 'Speedy',
    category: 'Naked',
    engine: '1050 cc Triple',
    power: '129 PS',
    weight: '210 kg',
    seat: '160 cm+',
    year: 2006,
    pricePerDay: 100,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/6116-triumph-speed-triple-2006',
    slug: 'triumph-speed-triple',
    overview:
      'Die Speed Triple 1050 ist eine der prägenden Naked Bikes ihrer Zeit. Der Dreizylinder liefert den typischen Triumph-Mix aus Druck im mittleren Bereich, markantem Sound und einer sportlichen, aber alltagstauglichen Sitzposition.',
    rideNote:
      'Sie wirkt lebendig, direkt und sehr charakterstark, ohne nervös zu sein. Ideal für schnelle Landstraßen, kurze Sprints und Fahrer, die ein echtes Naked-Bike mit Persönlichkeit wollen.',
    highlights: ['1050 cc Dreizylinder mit starkem Mittelbereich', 'Sportliches Naked-Bike mit aufrechter Kontrolle', 'Typischer Triumph-Triple-Sound und lineare Leistungsentfaltung'],
  },
  {
    name: 'Triumph Rocket 3R',
    category: 'Cruiser',
    engine: '2458 cc Triple',
    power: '165 PS',
    weight: '317 kg',
    seat: '160 cm+',
    year: 2020,
    pricePerDay: 220,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/6117-triumph-rocket-iii-2020',
    slug: 'triumph-rocket-3r',
    overview:
      'Die Rocket 3 R ist ein Extremfall im besten Sinn: 2458 Kubik Dreizylinder, Wellenantrieb, Aluminium-Chassis und ein Drehmomentniveau, das in jeder Fahrstufe sofort präsent ist. Trotz der schieren Größe ist das Fahrwerk hochwertig und deutlich dynamischer, als man zunächst erwartet.',
    rideNote:
      'Dieses Bike fährt man nicht wegen Zahlen allein, sondern wegen des Erlebnisses. Der Schub aus dem Stand und aus dem mittleren Bereich ist monumental, bleibt aber kontrollierbar und erstaunlich kultiviert.',
    highlights: ['2458 cc Dreizylinder mit überragendem Drehmoment', 'Showa/Brembo-Setup auf sehr hohem Niveau', 'Muscle-Roadster mit Wellenantrieb und echter Langstrecken-Souveränität'],
  },
  {
    name: 'KTM 1290 Super Duke R EVO',
    nickname: 'The Beast',
    category: 'Naked',
    engine: '1301 cc V-Twin',
    power: '180 PS',
    weight: '191 kg',
    seat: '170 cm+',
    year: 2023,
    pricePerDay: 180,
    slug: 'ktm-1290-super-duke-r-evo',
    images: ['hero.webp', 'gallery-1.webp', 'gallery-2.webp', 'gallery-3.webp', 'gallery-4.webp', 'gallery-5.webp'],
    overview:
      'Die KTM 1290 Super Duke R EVO ist das kompromisslose Hyper-Naked-Bike aus Mattighofen: 1.301 Kubik V-Twin mit 180 PS, Semi-aktives WP-Fahrwerk, TFT-Display mit Schraeglagenanzeige und ein ganzes Arsenal an Fahrhilfen. Sie ist gebaut, um auf der Strasse zu dominieren.',
    rideNote:
      'Der V-Twin schiebt brutal aus jeder Drehzahl, das Chassis ist messerscharf und das semi-aktive Fahrwerk passt sich in Echtzeit an. Sie verlangt Respekt, belohnt aber mit einem Fahrerlebnis, das seinesgleichen sucht.',
    highlights: ['1301 cc V-Twin mit 180 PS und 140 Nm', 'Semi-aktives WP-Fahrwerk mit automatischer Daempfungsanpassung', 'Kurven-ABS, Traktionskontrolle und Launch Control serienmässig'],
  },
  {
    name: 'Moto Guzzi Le Mans 1000',
    nickname: 'La Rossa',
    category: 'Supersport',
    engine: '949 cc V-Twin',
    power: '81 PS',
    weight: '215 kg',
    seat: '160 cm+',
    year: 1987,
    pricePerDay: 130,
    slug: 'moto-guzzi-le-mans-1000',
    images: ['hero.webp', 'gallery-1.webp', 'gallery-2.webp'],
    overview:
      'Die Le Mans 1000 ist das letzte Kapitel der legendaeren Moto-Guzzi-Le-Mans-Baureihe: laengs eingebauter 949-Kubik-V-Twin, Kardanantrieb, Tonti-Rohrrahmen und eine kompromisslose Sportler-Ergonomie mit Halbschale. Sie steht fuer eine Epoche, in der italienische Sportmotorraeder noch mechanisch, eigensinnig und unverwechselbar waren.',
    rideNote:
      'Auf der Strasse spuert man den Kardanmoment beim Gasgeben, hoert den markanten Klang des laengs liegenden V2 und bekommt ein Fahrgefuehl, das sich grundlegend von allem Japanischen unterscheidet. Sie belohnt einen bewussten, fliessenden Fahrstil.',
    highlights: ['949 cc luftgekuehlter V-Twin mit Kardanantrieb', 'Tonti-Doppelschleifen-Stahlrahmen mit Halbschalenverkleidung', 'Letzte Evolution der klassischen Le-Mans-Linie (1976–1993)'],
  },
  {
    name: 'Harley-Davidson Road King',
    nickname: 'Road King',
    category: 'Touring',
    engine: '1449 cc V-Twin',
    power: '63 PS',
    weight: '340 kg',
    seat: '160 cm+',
    year: 2001,
    pricePerDay: 150,
    ripeUrl: 'https://www.ribeme.com/de/motorrad/mieten/8250-harley-davidson-flh-2001',
    slug: 'harley-davidson-flh',
    images: ['hero.webp', 'gallery-1.webp', 'gallery-2.webp', 'gallery-3.webp'],
    overview:
      'Die Road King verkoerpert die klassische Harley-Davidson Touring-Welt: grosser Twin-Cam-V2, tiefer Sitz, viel Schwungmasse und ein sehr gelassenes, souveraenes Fahrgefuehl. Sie ist gebaut fuer ruhigen Druck, lange Etappen und den typischen amerikanischen V-Twin-Flow.',
    rideNote:
      'Am wohlsten fuehlt sie sich bei gleichmaessigem Tempo, weitem Blick und viel Zeit auf dem Motorrad. Wer entspannt cruisen und das klassische Big-Twin-Gefuehl erleben will, ist hier richtig.',
    highlights: ['1450 cc Twin Cam 88 V-Twin mit Einspritzung', 'Klassische Road-King-Ergonomie mit tiefer Sitzposition', 'Belt Drive und gelassener Big-Twin-Charakter'],
  },
];
