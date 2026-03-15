export interface BikeAvailability {
  bikeSlug: string;
  bikeName: string;
  availableMonths: number[];
  notesDe?: string;
  notesEn?: string;
}

export const availability: BikeAvailability[] = [
  {
    bikeSlug: 'honda-gl-goldwing-valkyrie',
    bikeName: 'Honda GL Goldwing Valkyrie',
    availableMonths: [4, 5, 6, 7, 8, 9, 10],
    notesDe: 'Nur Saison April–Oktober',
    notesEn: 'Seasonal April–October only',
  },
  {
    bikeSlug: 'bmw-r-1200-gs',
    bikeName: 'BMW R 1200 GS',
    availableMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    notesDe: 'Ganzjährig bei trockenem Wetter',
    notesEn: 'Year-round in dry weather',
  },
  {
    bikeSlug: 'bmw-k-1300-r',
    bikeName: 'BMW K 1300 R',
    availableMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    bikeSlug: 'buell-xb12-scg',
    bikeName: 'Buell XB12 SCG',
    availableMonths: [4, 5, 6, 7, 8, 9, 10],
  },
  {
    bikeSlug: 'kawasaki-zephyr-1100',
    bikeName: 'Kawasaki Zephyr 1100',
    availableMonths: [4, 5, 6, 7, 8, 9],
    notesDe: 'Klassiker — nur Hauptsaison',
    notesEn: 'Classic — peak season only',
  },
  {
    bikeSlug: 'ducati-900-ss',
    bikeName: 'Ducati 900 SS',
    availableMonths: [4, 5, 6, 7, 8, 9, 10],
  },
  {
    bikeSlug: 'husqvarna-vitpilen-701',
    bikeName: 'Husqvarna Vitpilen 701',
    availableMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    bikeSlug: 'triumph-speed-triple',
    bikeName: 'Triumph Speed Triple',
    availableMonths: [3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    bikeSlug: 'triumph-rocket-3r',
    bikeName: 'Triumph Rocket 3R',
    availableMonths: [4, 5, 6, 7, 8, 9, 10],
    notesDe: 'Sehr beliebt — früh buchen',
    notesEn: 'Very popular — book early',
  },
];
