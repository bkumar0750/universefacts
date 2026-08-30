import type { Galaxy } from '../types';

export const galaxiesData: Galaxy[] = [
  {
    id: 'milky-way',
    name: 'Milky Way Galaxy',
    type: 'Spiral',
    distance: '0 Light Years (Our Cosmic Home)',
    diameter: '100,000 - 150,000 Light Years',
    starCountEstimate: '100 - 400 Billion Stars',
    description: 'A barred spiral galaxy containing our Solar System. Its core harbors Sagittarius A*, a supermassive black hole of ~4.1 million solar masses.',
    notableFeatures: ['Sagittarius A* Central Supermassive Black Hole', 'Orion-Cygnus Arm (Sun’s location)', 'Perseus Arm & Scutum-Centaurus Arm', 'Magellanic Stream interaction'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Milky_Way_IR_Spitzer.jpg/1280px-Milky_Way_IR_Spitzer.jpg',
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/galaxies/milky-way/' }, { name: 'ESA', url: 'https://www.esa.int/Gaia' }]
  },
  {
    id: 'andromeda',
    name: 'Andromeda Galaxy (M31)',
    type: 'Spiral',
    distance: '2.537 Million Light Years',
    diameter: '220,000 Light Years',
    starCountEstimate: '1 Trillion Stars',
    description: 'The largest member of the Local Group of galaxies. On a collision course with the Milky Way, predicted to merge into "Milkdromeda" in ~4.5 billion years.',
    notableFeatures: ['Double nucleus core', 'Trillion star population', 'Satellite galaxies M32 and M110'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1280px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/missions/hubble/' }]
  },
  {
    id: 'triangulum',
    name: 'Triangulum Galaxy (M33)',
    type: 'Spiral',
    distance: '2.73 Million Light Years',
    diameter: '60,000 Light Years',
    starCountEstimate: '40 Billion Stars',
    description: 'The third-largest member of our Local Group. An unbarred spiral galaxy active with high rates of star formation.',
    notableFeatures: ['NGC 604 massive H II star nursery', 'Bound companion to Andromeda'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/M33_-_Triangulum_Galaxy.jpg/1024px-M33_-_Triangulum_Galaxy.jpg',
    sources: [{ name: 'ESA', url: 'https://www.esa.int/' }]
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool Galaxy (M51)',
    type: 'Spiral',
    distance: '23 Million Light Years',
    diameter: '76,000 Light Years',
    starCountEstimate: '100 Billion Stars',
    description: 'Classic grand-design spiral galaxy interacting with smaller companion galaxy NGC 5195.',
    notableFeatures: ['Grand design spiral structure', 'Strong gravitational tidal interaction'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Messier51_sRGB.jpg/1024px-Messier51_sRGB.jpg',
    sources: [{ name: 'NASA', url: 'https://www.nasa.gov/' }]
  },
  {
    id: 'sombrero',
    name: 'Sombrero Galaxy (M104)',
    type: 'Spiral',
    distance: '31.1 Million Light Years',
    diameter: '50,000 Light Years',
    starCountEstimate: '100 Billion Stars',
    description: 'Distinctive galaxy featuring a bright white core surrounded by thick dark dust lanes, giving it the appearance of a hat.',
    notableFeatures: ['Bulging central core', 'Thick dark dust rim', 'Supermassive 1-billion-solar-mass central black hole'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_subaru_hst.jpg/1024px-M104_ngc4594_sombrero_galaxy_subaru_hst.jpg',
    sources: [{ name: 'NASA', url: 'https://hubblesite.org/' }]
  }
];
