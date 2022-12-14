/*
Nivel 1: Audio, Informática, Hogar
Nivel 2: Parlantes, Torres, Inear, Onear, Portable, etc
*/

export const lvOneCat = [
  {
    name: 'Audio',
    id: 1,
    route: '/categorias/audio'
  },
  {
    name: 'Informática',
    id: 2,
    route: '/categorias/informatica'
  },
  {
    name: 'Hogar',
    id: 3,
    route: '/categorias/hogar'
  },
  {
    name: 'Discontinuos',
    id: 4,
    route: '/categorias/discontinuos'
  }
]
 /* Los ID de las categorías de 2º nivel comienzan en 101 */
export const lvTwoCat = [
  {
    name: 'Parlantes',
    desc: 'Productos preparados para los más variados usos, pero todos con la misma calidad.',
    id: 101,
    parent: 1,
    route: '/categorias/parlantes',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
    mobileImg: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'Torres de sonido',
    desc: 'Productos portátiles, potentes y de diseño cómodo',
    id: 102,
    parent: 1,
    route: '/categorias/torres-de-sonido',
    hidden: false,
    cover: '/images/categories/cover/torres.png',
    img: '/images/categories/banner/parlantes.jpg',
    mobileImg: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'Auriculares In‑ear',
    desc: 'Cancelación de ruido y la mejor calidad de sonido.',
    id: 103,
    parent: 1,
    route: '/categorias/in-ear',
    hidden: false,
    cover: '/images/categories/cover/inear.png',
    img: '/images/categories/banner/parlantes.jpg',
    mobileImg: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'Auriculares On‑ear',
    desc: 'Diseño clásico. Disfrutá tu música donde sea, como sea.',
    id: 104,
    parent: 1,
    route: '/categorias/on-ear',
    hidden: false,
    cover: '/images/categories/cover/onear.png',
    img: '/images/categories/banner/parlantes.jpg',
    mobileImg: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'Portable',
    desc: 'Llevá tu música donde quiera que vayas.',
    id: 105,
    parent: 1,
    route: '/categorias/portable',
    hidden: false,
    cover: '/images/categories/cover/portable.png',
    img: '/images/categories/banner/parlantes.jpg',
    mobileImg: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'Tablets',
    desc: 'Películas, libros, series, música y más en un sólo dispositivo.',
    id: 106,
    parent: 2,
    route: '/categorias/tablets',
    hidden: false,
    cover: '/images/categories/cover/tablets.png',
    img: '/images/categories/banner/parlantes.jpg',
    mobileImg: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'Notebooks',
    desc: "Trabajar desde cualquier sitio ahora es más fácil.",
    id: 107,
    parent: 2,
    route: '/categorias/notebooks',
    hidden: false,
    cover: '/images/categories/cover/notebooks.png',
    img: '/images/categories/banner/parlantes.jpg',
    mobileImg: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'TV',
    desc: "Disfrutá tus series y películas como nunca antes.", 
    id: 108,
    parent: 3,
    route: '/categorias/tv',
    hidden: false,
    cover: '/images/categories/cover/tv.png',
    img: '/images/categories/banner/parlantes.jpg',
    mobileImg: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'Gaming',
    desc: 'Competí y ganá con Constrictor.',
    id: 109,
    parent: 2,
    route: 'https://www.constrictor.com.ar/',
    hidden: false,
    cover: '/images/categories/cover/gaming.png',
    img: '/images/categories/banner/parlantes.jpg',
    mobileImg: '/images/categories/banner/parlantes.jpg'
  },
  {
    name: 'Discontinuos',
    desc: 'Productos que ya no se distribuyen comercialmente',
    id: 110,
    parent: 4,
    route: '/categorias/discontinuos',
    hidden: true,
    cover: '',
    img: '',
    mobileImg: ''
  },
]