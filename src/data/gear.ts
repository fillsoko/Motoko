export interface GearItem {
  nameDe: string;
  nameEn: string;
  descDe: string;
  descEn: string;
  included: boolean;
  price?: number;
  icon: string;
}

export const gear: GearItem[] = [
  {
    nameDe: 'Helm',
    nameEn: 'Helmet',
    descDe: 'Hochwertige Integralhelme in verschiedenen Größen. Auf Wunsch auch Jethelme verfügbar.',
    descEn: 'High-quality full-face helmets in various sizes. Open-face helmets available on request.',
    included: true,
    icon: 'helmet',
  },
  {
    nameDe: 'Motorradjacke',
    nameEn: 'Riding Jacket',
    descDe: 'Textil- und Lederjacken mit CE-Protektoren. Herren und Damen, Größe S bis XXL.',
    descEn: 'Textile and leather jackets with CE protectors. Men and women, size S to XXL.',
    included: false,
    price: 15,
    icon: 'jacket',
  },
  {
    nameDe: 'Tankrucksack',
    nameEn: 'Tank Bag',
    descDe: 'Magnetische Tankrucksäcke mit Kartenfach und Smartphone-Halterung. Ideal für Tagestouren.',
    descEn: 'Magnetic tank bags with map compartment and smartphone holder. Ideal for day trips.',
    included: false,
    price: 10,
    icon: 'bag',
  },
  {
    nameDe: 'Handyhalterung',
    nameEn: 'Phone Mount',
    descDe: 'Vibrationsdämpfende Lenkerhalterung mit USB-Ladeanschluss. Passend für alle gängigen Smartphones.',
    descEn: 'Vibration-dampening handlebar mount with USB charging port. Fits all common smartphones.',
    included: true,
    icon: 'phone',
  },
];
