/*
Nivel 1: Audio, Informática, Hogar
Nivel 2: Parlantes, Torres, Inear, Onear, Portable, etc
*/

export const lvOneCat = [
  {
    name: 'Audio',
    id: 1,
    route: '/'
  },
  {
    name: 'Informática',
    id: 2,
    route: '/'
  },
  {
    name: 'Hogar',
    id: 3,
    route: '/'
  }
]
 /* Los ID de las categorías de 2º nivel comienzan en 101 */
export const lvTwoCat = [
  {
    name: 'Parlantes',
    id: 101,
    parent: 1,
    route: '/',
    hidden: false
  },
  {
    name: 'Torres de sonido',
    id: 102,
    parent: 1,
    route: '/',
    hidden: false
  },
  {
    name: 'Auriculares In-ear',
    id: 103,
    parent: 1,
    route: '/',
    hidden: false
  },
  {
    name: 'Auriculares On-ear',
    id: 104,
    parent: 1,
    route: '/',
    hidden: false
  },
  {
    name: 'Portable',
    id: 105,
    parent: 1,
    route: '/',
    hidden: true
  },
  {
    name: 'Tablets',
    id: 106,
    parent: 2,
    route: '/',
    hidden: false
  },
  {
    name: 'Notebooks',
    id: 107,
    parent: 2,
    route: '/',
    hidden: false
  },
  {
    name: 'TV',
    id: 108,
    parent: 3,
    route: '/',
    hidden: true
  },
]