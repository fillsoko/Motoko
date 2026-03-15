export interface Post {
  slug: string;
  titleDe: string;
  titleEn: string;
  excerptDe: string;
  excerptEn: string;
  date: string;
  readingTime: string;
  category: string;
  categoryEn: string;
}

export const posts: Post[] = [
  {
    slug: 'taunus-im-herbst',
    titleDe: 'Taunus im Herbst — die schönste Jahreszeit zum Fahren',
    titleEn: 'Taunus in Autumn — the Best Season to Ride',
    excerptDe: 'Wenn sich das Laub verfärbt und die Straßen leer werden, zeigt sich der Taunus von seiner schönsten Seite. Ein Bericht über die perfekte Oktoberfahrt.',
    excerptEn: 'When the leaves change color and the roads clear out, the Taunus shows its most beautiful side. A report on the perfect October ride.',
    date: '2025-10-12',
    readingTime: '5 min',
    category: 'Tourbericht',
    categoryEn: 'Ride Report',
  },
  {
    slug: 'ducati-900-ss-portrait',
    titleDe: 'Ducati 900 SS — Portrait einer Legende',
    titleEn: 'Ducati 900 SS — Portrait of a Legend',
    excerptDe: 'Die Ducati 900 SS von 1997 ist mehr als ein Motorrad — sie ist ein Stück italienische Ingenieurskunst. Warum wir sie „Nuda" nennen.',
    excerptEn: 'The 1997 Ducati 900 SS is more than a motorcycle — it is a piece of Italian engineering artistry. Why we call her "Nuda."',
    date: '2025-09-05',
    readingTime: '4 min',
    category: 'Bike Spotlight',
    categoryEn: 'Bike Spotlight',
  },
  {
    slug: 'alpen-vorbereitung',
    titleDe: 'Alpenüberquerung — So bereitest du dich vor',
    titleEn: 'Crossing the Alps — How to Prepare',
    excerptDe: 'Sieben Tage, 2.200 Kilometer, sechs Pässe. Was du wissen musst, bevor du unsere Alpine Grenzfahrt buchst.',
    excerptEn: 'Seven days, 2,200 kilometers, six passes. What you need to know before booking our Alpine Border Tour.',
    date: '2025-07-20',
    readingTime: '7 min',
    category: 'Ratgeber',
    categoryEn: 'Guide',
  },
  {
    slug: 'saison-2026-vorschau',
    titleDe: 'Saison 2026 — Was kommt Neues',
    titleEn: 'Season 2026 — What Is New',
    excerptDe: 'Neue Bikes, neue Touren, neue Partnerschaften. Ein Ausblick auf die kommende Saison bei motoko.',
    excerptEn: 'New bikes, new tours, new partnerships. A preview of the upcoming season at motoko.',
    date: '2026-02-15',
    readingTime: '3 min',
    category: 'News',
    categoryEn: 'News',
  },
];
