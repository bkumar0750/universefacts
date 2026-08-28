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
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'NASA', url: 'https://hubblesite.org/' }]
  }
];
