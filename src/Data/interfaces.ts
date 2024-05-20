interface Province {
  id: number;
  name: string;
  locations: string[];
}

interface Spot {
  id: number;
  name: string;
  address: string;
  link: string | null;
  telephone: string | null;
  materials: string[];
}

interface Locality {
  id: number;
  name: string;
  spots: Spot[] | [];
}

export type { Province, Spot, Locality };