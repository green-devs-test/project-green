import { Locality } from "./interfaces";
import { MATERIALS } from "./materials";

const locationsBuenosAires: Locality[] = [
  {
    id: 1,
    name: 'San Telmo',
    spots: [
      {
        id: 1,
        name: 'Punto Verde Plaza Rosario Vera Peñaloza',
        address: 'Av. San Juan y Chacabuco',
        link: 'https://maps.app.goo.gl/Tffg5QyDLWhpYwT19',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'La Boca',
    spots: [
      {
        id: 1,
        name: 'Punto Verde Barrio Rodrigo Bueno',
        address: 'Av. España 1800',
        link: 'https://maps.app.goo.gl/SV8RBxSYZ8oRgr6Z9',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Balvanera',
    spots: [
      {
        id: 1,
        name: 'Punto Verde Plaza 1 de Mayo',
        address: 'Hipólito Yrigoyen y Pasco',
        link: 'https://maps.app.goo.gl/9omtAHuJhJGXaPNA6',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
      {
        id: 2,
        name: 'Punto Verde Plaza Manzana 66',
        address: 'Moreno y Jujuy',
        link: 'https://maps.app.goo.gl/wBQa3dRi7mLQTQgr9',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
    ],
  },
];

export default locationsBuenosAires;