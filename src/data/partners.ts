export interface Partner {
  name: string;
  descDe: string;
  descEn: string;
  url: string;
  category: string;
}

export const partners: Partner[] = [
  {
    name: 'RIBE',
    descDe: 'Unsere Buchungsplattform für sichere Online-Reservierungen mit Versicherung.',
    descEn: 'Our booking platform for secure online reservations with insurance.',
    url: 'https://www.ribeme.com',
    category: 'Booking',
  },
  {
    name: 'Komoot',
    descDe: 'Routenplanung und Navigation für alle unsere Touren.',
    descEn: 'Route planning and navigation for all our tours.',
    url: 'https://www.komoot.com',
    category: 'Navigation',
  },
  {
    name: 'Hessenpark',
    descDe: 'Freilichtmuseum im Taunus — beliebter Zwischenstopp auf unseren Tagestouren.',
    descEn: 'Open-air museum in the Taunus — popular stopover on our day tours.',
    url: 'https://www.hessenpark.de',
    category: 'Destinations',
  },
  {
    name: 'Nürburgring',
    descDe: 'Die legendäre Nordschleife — Höhepunkt unserer Eifel-Tour.',
    descEn: 'The legendary Nordschleife — highlight of our Eifel tour.',
    url: 'https://www.nuerburgring.de',
    category: 'Destinations',
  },
  {
    name: 'Louis',
    descDe: 'Europas Nr. 1 für Motorradbekleidung und Zubehör.',
    descEn: "Europe's #1 for motorcycle clothing and accessories.",
    url: 'https://www.louis.eu',
    category: 'Gear',
  },
  {
    name: 'Hotel Nizza',
    descDe: 'Motorradfreundliches Hotel im Herzen von Frankfurt.',
    descEn: 'Motorcycle-friendly hotel in the heart of Frankfurt.',
    url: 'https://www.hotelnizza.de',
    category: 'Hotels',
  },
];
