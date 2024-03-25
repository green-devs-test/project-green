export interface Province {
  id: number;
  name: string;
  locations: string[];
}

export interface Spots {
  id: number;
  name: string;
  address: string;
  link: string | null;
  telephone: string | null;
  materials: string[];
}

export interface Locality {
  id: number,
  name: string,
  spots: Spots[] | []
}
