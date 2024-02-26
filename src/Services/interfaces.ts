export interface Province {
    id: number,
    name: string,
    locations: string[]
}

export interface Spot {
    id: number,
    name: string,
    address: string,
    link: string|null,
    telephone: string|null,
    materials: string[]
}
