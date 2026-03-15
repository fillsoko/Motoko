export interface Tour {
  name: string;
  duration: string;
  distance: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  description: string;
  itinerary: string[];
  komootUrl: string;
}

export const tours: Tour[] = [
  {
    name: 'Taunus Rundfahrt',
    duration: '1 Tag',
    distance: '180 km',
    difficulty: 'Easy',
    description:
      'Entspannte Tagestour durch den Taunus mit Panoramastraßen, dem Großen Feldberg und einer Pause am Hessenpark.',
    itinerary: [
      'Frankfurt — Oberursel — Großer Feldberg',
      'Feldberg — Schmitten — Hessenpark',
      'Usingen — Bad Homburg — Frankfurt',
    ],
    komootUrl: 'https://www.komoot.com/tour/1234567890',
  },
  {
    name: 'Odenwald Explorer',
    duration: '1 Tag',
    distance: '220 km',
    difficulty: 'Moderate',
    description:
      'Kurvenreiche Strecken durch den Odenwald, vorbei an der Veste Otzberg und dem Felsenmeer bei Reichenbach.',
    itinerary: [
      'Frankfurt — Darmstadt — Veste Otzberg',
      'Otzberg — Reichenbach — Felsenmeer',
      'Lindenfels — Bensheim — Frankfurt',
    ],
    komootUrl: 'https://www.komoot.com/tour/1234567891',
  },
  {
    name: 'Rhein & Mosel Weekend',
    duration: '2 Tage',
    distance: '420 km',
    difficulty: 'Moderate',
    description:
      'Zwei Tage entlang des Rheins und der Mosel. Übernachtung in Koblenz, Burgen, Weinberge und die Loreley.',
    itinerary: [
      'Tag 1: Frankfurt — Rüdesheim — Loreley — Koblenz (210 km)',
      'Tag 2: Koblenz — Moseltal — Cochem — Nürburgring — Frankfurt (210 km)',
    ],
    komootUrl: 'https://www.komoot.com/tour/1234567892',
  },
  {
    name: 'Eifel & Nürburgring',
    duration: '2 Tage',
    distance: '480 km',
    difficulty: 'Challenging',
    description:
      'Sportliche Zweitagestour durch die Eifel mit einer Runde auf der Nordschleife und Vulkanlandschaften.',
    itinerary: [
      'Tag 1: Frankfurt — Bad Münstereifel — Nürburgring — Adenau (240 km)',
      'Tag 2: Adenau — Maare — Gerolstein — Limburg — Frankfurt (240 km)',
    ],
    komootUrl: 'https://www.komoot.com/tour/1234567893',
  },
  {
    name: 'Schwarzwald Klassiker',
    duration: '3 Tage',
    distance: '750 km',
    difficulty: 'Moderate',
    description:
      'Drei Tage durch den Schwarzwald mit der Schwarzwaldhochstraße, dem Titisee und Freiburg als Wendepunkt.',
    itinerary: [
      'Tag 1: Frankfurt — Heidelberg — Baden-Baden — Schwarzwaldhochstraße (250 km)',
      'Tag 2: Schwarzwaldhochstraße — Titisee — Freiburg — Feldberg (200 km)',
      'Tag 3: Feldberg — Triberg — Freudenstadt — Stuttgart — Frankfurt (300 km)',
    ],
    komootUrl: 'https://www.komoot.com/tour/1234567894',
  },
  {
    name: 'Alpine Grenzfahrt',
    duration: '7 Tage',
    distance: '2200 km',
    difficulty: 'Challenging',
    description:
      'Die große Tour: Von Frankfurt über die Alpen nach Österreich und Norditalien. Pässe, Seen und legendäre Bergstraßen.',
    itinerary: [
      'Tag 1: Frankfurt — Stuttgart — Bodensee — Lindau (350 km)',
      'Tag 2: Lindau — Arlbergpass — Innsbruck (200 km)',
      'Tag 3: Innsbruck — Brennerpass — Dolomiten — Bozen (250 km)',
      'Tag 4: Bozen — Stilfser Joch — Meran (180 km)',
      'Tag 5: Meran — Timmelsjoch — Inntal — Garmisch (280 km)',
      'Tag 6: Garmisch — Zugspitzregion — Allgäu — Ulm (300 km)',
      'Tag 7: Ulm — Schwäbische Alb — Würzburg — Frankfurt (350 km)',
    ],
    komootUrl: 'https://www.komoot.com/tour/1234567895',
  },
];
