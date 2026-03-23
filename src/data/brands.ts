export interface Brand {
  name: string;
  logo: string;
  preserveColor: boolean;
}

export const brands: Brand[] = [
  { name: 'BMW', logo: '/images/logos/bmw.svg', preserveColor: true },
  { name: 'Buell', logo: '/images/logos/buell.svg', preserveColor: false },
  { name: 'Ducati', logo: '/images/logos/ducati.svg', preserveColor: true },
  { name: 'Harley-Davidson', logo: '/images/logos/harley-davidson.svg', preserveColor: false },
  { name: 'Honda', logo: '/images/logos/honda.svg', preserveColor: false },
  { name: 'Husqvarna', logo: '/images/logos/husqvarna.svg', preserveColor: false },
  { name: 'Kawasaki', logo: '/images/logos/kawasaki.svg', preserveColor: false },
  { name: 'KTM', logo: '/images/logos/ktm.svg', preserveColor: false },
  { name: 'Moto Guzzi', logo: '/images/logos/moto-guzzi.svg', preserveColor: false },
  { name: 'Triumph', logo: '/images/logos/triumph.svg', preserveColor: false },
].sort((a, b) => a.name.localeCompare(b.name));
