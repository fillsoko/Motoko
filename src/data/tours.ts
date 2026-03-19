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
    name: 'Feldberg Loop',
    nameEn: 'Feldberg Loop',
    duration: '1 Tag',
    distance: '71 km',
    difficulty: 'Moderate',
    description:
      'Kompakte Taunus-Runde über den Feldberg mit schnellen Wechseln, sauberem Rhythmus und einem direkten Rückweg Richtung Frankfurt.',
    descriptionEn:
      'A compact Taunus loop over the Feldberg with quick transitions, strong rhythm, and a direct return toward Frankfurt.',
    highlights: ['71 km', '1.490 m elevation', 'Taunus / Feldberg'],
    komootUrl:
      'https://www.komoot.com/de-DE/tour/2488946310?ref=itd&share_token=a310VGXIIscRiiHh39MDYBqzoCrfo7wXzc4LjWQ4H4iLoHtsmT&ref=its-qr',
    komootTourId: '2488946310',
  },
  {
    name: 'Schwarzwald Grand Tour',
    nameEn: 'Black Forest Grand Tour',
    duration: '1 Tag',
    distance: '257 km',
    difficulty: 'Challenging',
    description:
      'Lange Schwarzwald-Tagestour mit viel Strecke, markanten Anstiegen und dem typischen Mix aus flüssigen Waldpassagen und weiten Höhenstraßen.',
    descriptionEn:
      'A long Black Forest day ride with serious mileage, sustained climbing, and the classic mix of flowing forest sections and panoramic ridge roads.',
    highlights: ['257 km', '5.420 m elevation', 'Schwarzwald'],
    komootUrl:
      'https://www.komoot.com/de-DE/tour/1213652569?ref=itd&share_token=atBraaP0zwSz5V6Si8emteujXfMfYI6aB1VOBm9sNDMcQr02t1&ref=its-qr',
    komootTourId: '1213652569',
  },
  {
    name: 'Villa One Ring',
    nameEn: 'Villa One Ring',
    duration: '1 Tag',
    distance: '261 km',
    difficulty: 'Challenging',
    description:
      'Anspruchsvolle Tagestour mit viel Strecke und deutlichem Höhenprofil. Ideal für Fahrer, die direkt aus Frankfurt in einen langen, kurvenstarken Ride einsteigen wollen.',
    descriptionEn:
      'A demanding full-day route with serious distance and elevation, built for riders who want to leave Frankfurt and settle straight into a long, committed road day.',
    highlights: ['261 km', '3.010 m elevation', 'Long day ride'],
    komootUrl:
      'https://www.komoot.com/de-DE/tour/2270922983?ref=itd&share_token=aBSbmhpL1rO296MKkKmNiEgBFSuXxltJEPAwUzLIoxyOV8bNcA&ref=its-qr',
    komootTourId: '2270922983',
  },
];
