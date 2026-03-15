export interface Tour {
  name: string;
  nameEn?: string;
  duration: string;
  distance: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  description: string;
  descriptionEn?: string;
  itinerary: string[];
  highlights?: string[];
  komootUrl: string;
  komootTourId: string;
}

export const tours: Tour[] = [
  {
    name: 'Taunus Rundfahrt',
    nameEn: 'Taunus Loop',
    duration: '1 Tag',
    distance: '180 km',
    difficulty: 'Easy',
    description:
      'Entspannte Tagestour durch den Taunus mit Panoramastraßen, dem Großen Feldberg und einer Pause am Hessenpark.',
    descriptionEn:
      'Relaxed day tour through the Taunus with panoramic roads, the Großer Feldberg and a stop at Hessenpark.',
    itinerary: [
      'Frankfurt — Oberursel — Großer Feldberg',
      'Feldberg — Schmitten — Hessenpark',
      'Usingen — Bad Homburg — Frankfurt',
    ],
    highlights: ['Großer Feldberg', 'Hessenpark', 'Panoramastraßen'],
    komootUrl: 'https://www.komoot.com/tour/46968192',
    komootTourId: '46968192',
  },
  {
    name: 'Odenwald Explorer',
    nameEn: 'Odenwald Explorer',
    duration: '1 Tag',
    distance: '220 km',
    difficulty: 'Moderate',
    description:
      'Kurvenreiche Strecken durch den Odenwald, vorbei an der Veste Otzberg und dem Felsenmeer bei Reichenbach.',
    descriptionEn:
      'Winding roads through the Odenwald, past Veste Otzberg castle and the Felsenmeer boulder field near Reichenbach.',
    itinerary: [
      'Frankfurt — Darmstadt — Veste Otzberg',
      'Otzberg — Reichenbach — Felsenmeer',
      'Lindenfels — Bensheim — Frankfurt',
    ],
    highlights: ['Veste Otzberg', 'Felsenmeer', 'Lindenfels'],
    komootUrl: 'https://www.komoot.com/tour/76033476',
    komootTourId: '76033476',
  },
  {
    name: 'Rhein & Mosel Weekend',
    nameEn: 'Rhine & Moselle Weekend',
    duration: '2 Tage',
    distance: '420 km',
    difficulty: 'Moderate',
    description:
      'Zwei Tage entlang des Rheins und der Mosel. Übernachtung in Koblenz, Burgen, Weinberge und die Loreley.',
    descriptionEn:
      'Two days along the Rhine and Moselle. Overnight in Koblenz, castles, vineyards and the Loreley.',
    itinerary: [
      'Tag 1: Frankfurt — Rüdesheim — Loreley — Koblenz (210 km)',
      'Tag 2: Koblenz — Moseltal — Cochem — Nürburgring — Frankfurt (210 km)',
    ],
    highlights: ['Loreley', 'Koblenz', 'Moseltal'],
    komootUrl: 'https://www.komoot.com/tour/1591569318',
    komootTourId: '1591569318',
  },
  {
    name: 'Eifel & Nürburgring',
    nameEn: 'Eifel & Nürburgring',
    duration: '2 Tage',
    distance: '480 km',
    difficulty: 'Challenging',
    description:
      'Sportliche Zweitagestour durch die Eifel mit einer Runde auf der Nordschleife und Vulkanlandschaften.',
    descriptionEn:
      'Sporty two-day tour through the Eifel with a lap on the Nordschleife and volcanic landscapes.',
    itinerary: [
      'Tag 1: Frankfurt — Bad Münstereifel — Nürburgring — Adenau (240 km)',
      'Tag 2: Adenau — Maare — Gerolstein — Limburg — Frankfurt (240 km)',
    ],
    highlights: ['Nordschleife', 'Vulkaneifel', 'Maare'],
    komootUrl: 'https://www.komoot.com/tour/356215467',
    komootTourId: '356215467',
  },
  {
    name: 'Schwarzwald Klassiker',
    nameEn: 'Black Forest Classic',
    duration: '3 Tage',
    distance: '750 km',
    difficulty: 'Moderate',
    description:
      'Drei Tage durch den Schwarzwald mit der Schwarzwaldhochstraße, dem Titisee und Freiburg als Wendepunkt.',
    descriptionEn:
      'Three days through the Black Forest with the Schwarzwaldhochstraße, Titisee and Freiburg as the turning point.',
    itinerary: [
      'Tag 1: Frankfurt — Heidelberg — Baden-Baden — Schwarzwaldhochstraße (250 km)',
      'Tag 2: Schwarzwaldhochstraße — Titisee — Freiburg — Feldberg (200 km)',
      'Tag 3: Feldberg — Triberg — Freudenstadt — Stuttgart — Frankfurt (300 km)',
    ],
    highlights: ['Schwarzwaldhochstraße', 'Titisee', 'Triberg'],
    komootUrl: 'https://www.komoot.com/tour/79370465',
    komootTourId: '79370465',
  },
  {
    name: 'Alpine Grenzfahrt',
    nameEn: 'Alpine Border Tour',
    duration: '7 Tage',
    distance: '2200 km',
    difficulty: 'Challenging',
    description:
      'Die große Tour: Von Frankfurt über die Alpen nach Österreich und Norditalien. Pässe, Seen und legendäre Bergstraßen.',
    descriptionEn:
      'The grand tour: From Frankfurt across the Alps to Austria and northern Italy. Passes, lakes and legendary mountain roads.',
    itinerary: [
      'Tag 1: Frankfurt — Stuttgart — Bodensee — Lindau (350 km)',
      'Tag 2: Lindau — Arlbergpass — Innsbruck (200 km)',
      'Tag 3: Innsbruck — Brennerpass — Dolomiten — Bozen (250 km)',
      'Tag 4: Bozen — Stilfser Joch — Meran (180 km)',
      'Tag 5: Meran — Timmelsjoch — Inntal — Garmisch (280 km)',
      'Tag 6: Garmisch — Zugspitzregion — Allgäu — Ulm (300 km)',
      'Tag 7: Ulm — Schwäbische Alb — Würzburg — Frankfurt (350 km)',
    ],
    highlights: ['Stilfser Joch', 'Dolomiten', 'Bodensee'],
    komootUrl: 'https://www.komoot.com/tour/233167699',
    komootTourId: '233167699',
  },
];
