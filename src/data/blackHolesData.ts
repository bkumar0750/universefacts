import type { BlackHole } from '../types';

export const blackHolesData: BlackHole[] = [
  {
    id: 'sagittarius-a',
    name: 'Sagittarius A* (Sgr A*)',
    type: 'Supermassive',
    mass: '4.154 Million Solar Masses',
    location: 'Galactic Center of Milky Way',
    distanceFromEarth: '26,670 Light Years',
    eventHorizonRadius: '12 Million km (0.08 AU)',
    description: 'The supermassive black hole anchoring the center of our Milky Way galaxy. Directly imaged by the Event Horizon Telescope (EHT) collaboration in May 2022.',
    isObserved: true,
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'ESO', url: 'https://www.eso.org/' }, { name: 'NASA', url: 'https://science.nasa.gov/universe/black-holes/' }]
  },
  {
    id: 'm87-star',
    name: 'M87* (Messier 87 Central Black Hole)',
    type: 'Supermassive',
    mass: '6.5 Billion Solar Masses',
    location: 'Center of Elliptical Galaxy Virgo A (M87)',
    distanceFromEarth: '53.5 Million Light Years',
    eventHorizonRadius: '19 Billion km (120 AU)',
    description: 'The first black hole ever directly imaged in human history (April 2019). Shoots a relativistic plasma jet over 5,000 light years into deep space.',
    isObserved: true,
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'NSF / EHT', url: 'https://eventhorizontelescope.org/' }]
  },
  {
    id: 'cygnus-x1',
    name: 'Cygnus X-1',
    type: 'Stellar-mass',
    mass: '21.2 Solar Masses',
    location: 'Constellation Cygnus',
    distanceFromEarth: '7,200 Light Years',
    eventHorizonRadius: '60 km',
    description: 'The first generally accepted stellar-mass black hole confirmed in 1971. In a tight binary orbit with a blue supergiant star HDE 226868.',
    isObserved: true,
    image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'NASA', url: 'https://chandra.harvard.edu/' }]
  },
  {
    id: 'ton-618',
    name: 'TON 618',
    type: 'Supermassive',
    mass: '66 Billion Solar Masses',
    location: 'Constellation Canes Venatici',
    distanceFromEarth: '18.2 Billion Light Years',
    eventHorizonRadius: '390 Billion km (2,600 AU)',
    description: 'An ultramassive black hole powering a hyperluminous quasar. One of the most massive black holes ever detected in the observable universe.',
    isObserved: true,
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'Peer-Reviewed Literature', url: 'https://arxiv.org/' }]
  },
  {
    id: 'gaia-bh1',
    name: 'Gaia BH1',
    type: 'Stellar-mass',
    mass: '9.6 Solar Masses',
    location: 'Constellation Ophiuchus',
    distanceFromEarth: '1,560 Light Years',
    eventHorizonRadius: '28 km',
    description: 'The closest known black hole to Earth, discovered by ESA’s Gaia astrometry satellite tracking the orbital motion of a Sun-like host star.',
    isObserved: true,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'ESA', url: 'https://www.esa.int/Gaia' }]
  }
];
