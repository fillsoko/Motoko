export interface Bike {
  name: string;
  category: string;
  engine: string;
  power: string;
  weight: string;
  seat: string;
  ripeUrl: string;
}

export const bikes: Bike[] = [
  {
    name: 'BMW R 1250 GS',
    category: 'Adventure',
    engine: '1254 cc Boxer Twin',
    power: '136 PS',
    weight: '249 kg',
    seat: '850 mm',
    ripeUrl: '#',
  },
  {
    name: 'Ducati Scrambler 800',
    category: 'Urban',
    engine: '803 cc L-Twin',
    power: '73 PS',
    weight: '189 kg',
    seat: '790 mm',
    ripeUrl: '#',
  },
  {
    name: 'Triumph Speed Triple 1200',
    category: 'Sport',
    engine: '1160 cc Triple',
    power: '180 PS',
    weight: '198 kg',
    seat: '830 mm',
    ripeUrl: '#',
  },
];
