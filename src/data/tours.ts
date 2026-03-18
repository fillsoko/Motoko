export interface Tour {
  name: string;
  nameEn?: string;
  duration: string;
  distance: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  description: string;
  descriptionEn?: string;
  itinerary?: string[];
  highlights?: string[];
  komootUrl: string;
  komootTourId: string;
}

export const tours: Tour[] = [
  {
    name: 'Tour links rum über den Feldberg dann zu Antonio ab zur A5',
    nameEn: 'Feldberg Loop via Antonio to the A5',
    duration: '1 Tag',
    distance: '71 km',
    difficulty: 'Moderate',
    description:
      'Kurze, fahraktive Runde über den Feldberg mit Fokus auf Höhenmeter, Rhythmus und einer kompakten Taunus-Schleife zurück Richtung A5.',
    descriptionEn:
      'A compact, rider-focused loop over the Feldberg with plenty of elevation, fast rhythm, and a clean return toward the A5.',
    highlights: ['71 km', '1.490 m elevation', 'Taunus / Feldberg'],
    komootUrl:
      'https://www.komoot.com/de-DE/tour/2488946310?ref=itd&share_token=a310VGXIIscRiiHh39MDYBqzoCrfo7wXzc4LjWQ4H4iLoHtsmT&ref=its-qr',
    komootTourId: '2488946310',
  },
  {
    name: 'Mopped Schwarzwald',
    nameEn: 'Black Forest Ride',
    duration: '1 Tag',
    distance: '257 km',
    difficulty: 'Challenging',
    description:
      'Lange Schwarzwald-Runde mit viel Strecke, markanten Anstiegen und dem typischen Mix aus schnellen Waldpassagen und aussichtsreichen Höhenstraßen.',
    descriptionEn:
      'A long Black Forest route with serious mileage, sustained climbing, and the classic mix of flowing forest sections and panoramic ridge roads.',
    highlights: ['257 km', '5.420 m elevation', 'Schwarzwald'],
    komootUrl:
      'https://www.komoot.com/de-DE/tour/1213652569?ref=itd&share_token=atBraaP0zwSz5V6Si8emteujXfMfYI6aB1VOBm9sNDMcQr02t1&ref=its-qr',
    komootTourId: '1213652569',
  },
  {
    name: 'Villa 1 Ring',
    nameEn: 'Villa 1 Ring',
    duration: '1 Tag',
    distance: '261 km',
    difficulty: 'Challenging',
    description:
      'Kräftige Tagestour mit viel Strecke und deutlichem Höhenprofil. Eine Route für Fahrer, die aus Frankfurt heraus direkt in einen langen, kurvenstarken Ride einsteigen wollen.',
    descriptionEn:
      'Demanding full-day route with serious distance and elevation. Built for riders who want to leave Frankfurt and settle straight into a long, committed road day.',
    highlights: ['261 km', '3.010 m elevation', 'Long day ride'],
    komootUrl:
      'https://www.komoot.com/de-DE/tour/2270922983?ref=itd&share_token=aBSbmhpL1rO296MKkKmNiEgBFSuXxltJEPAwUzLIoxyOV8bNcA&ref=its-qr',
    komootTourId: '2270922983',
  },
];
