import type { Star } from '../types';

export const starsData: Star[] = [
  {
    id: 'sun',
    name: 'The Sun (Sol)',
    type: 'Yellow Star',
    constellation: 'N/A (Center of Solar System)',
    distanceFromEarth: '149.6 million km (8.3 light minutes)',
    mass: '1.989 × 10³⁰ kg (1 Solar Mass)',
    radius: '696,340 km (109 Earth radii)',
    temperature: '5,500°C (Surface) / 15 million°C (Core)',
    luminosity: '1 L☉ (3.828 × 10²6 Watts)',
    description: 'G-type main-sequence star powering Earth’s climate, weather, ocean currents, and photosynthesis through hydrogen nuclear fusion.',
    evolutionStage: 'Main Sequence (Currently ~4.6 billion years old).',
    image: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=1000&auto=format&fit=crop',
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/sun/' }, { name: 'ISRO', url: 'https://www.isro.gov.in/Aditya_L1.html' }]
  },
  {
    id: 'proxima-centauri',
    name: 'Proxima Centauri',
    type: 'Red Dwarf',
    constellation: 'Centaurus',
    distanceFromEarth: '4.246 Light Years',
    mass: '0.122 Solar Masses',
    radius: '0.154 Solar Radii',
    temperature: '3,042 K',
    luminosity: '0.0017 L☉',
    description: 'The closest known star to our Sun. An M-type red dwarf star orbited by at least two exoplanets, including Proxima Centauri b in its habitable zone.',
    evolutionStage: 'Main Sequence Red Dwarf (Will burn hydrogen for trillions of years due to slow convection fusion).',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop',
    sources: [{ name: 'ESA', url: 'https://www.esa.int/' }]
  },
  {
    id: 'betelgeuse',
    name: 'Betelgeuse (Alpha Orionis)',
    type: 'Supergiant',
    constellation: 'Orion',
    distanceFromEarth: '642.5 Light Years',
    mass: '16.5-19 Solar Masses',
    radius: '764 Solar Radii (~1,000 times Sun)',
    temperature: '3,500 K',
    luminosity: '126,000 L☉',
    description: 'A massive red supergiant in Orion’s shoulder nearing the end of its life, expected to explode as a dramatic supernova within 100,000 years.',
    evolutionStage: 'Post-Main Sequence Red Supergiant (Carbon/Oxygen core fusion phase).',
    image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1000&auto=format&fit=crop',
    sources: [{ name: 'NASA', url: 'https://www.nasa.gov/' }]
  },
  {
    id: 'sirius',
    name: 'Sirius A & B (Dog Star)',
    type: 'Blue Giant',
    constellation: 'Canis Major',
    distanceFromEarth: '8.6 Light Years',
    mass: '2.06 Solar Masses',
    radius: '1.71 Solar Radii',
    temperature: '9,940 K',
    luminosity: '25.4 L☉',
    description: 'The brightest star in Earth’s night sky. A binary system consisting of a main-sequence A-type blue-white star and a faint white dwarf companion (Sirius B).',
    evolutionStage: 'Main Sequence (Sirius A) + Stellar Remnant White Dwarf (Sirius B).',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1000&auto=format&fit=crop',
    sources: [{ name: 'NASA', url: 'https://hubblesite.org/' }]
  },
  {
    id: 'vy-canis-majoris',
    name: 'VY Canis Majoris',
    type: 'Supergiant',
    constellation: 'Canis Major',
    distanceFromEarth: '3,900 Light Years',
    mass: '17 Solar Masses',
    radius: '1,420 Solar Radii',
    temperature: '3,490 K',
    luminosity: '270,000 L☉',
    description: 'One of the largest known stars in the universe. If placed at the center of our solar system, its surface would extend beyond Jupiter’s orbit.',
    evolutionStage: 'Red Hypergiant nearing core collapse.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop',
    sources: [{ name: 'Peer-Reviewed Literature', url: 'https://arxiv.org/' }]
  }
];
