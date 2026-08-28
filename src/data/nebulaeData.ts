import type { Nebula } from '../types';

export const nebulaeData: Nebula[] = [
  {
    id: 'orion-nebula',
    name: 'Orion Nebula (M42)',
    type: 'Emission',
    constellation: 'Orion',
    distance: '1,344 Light Years',
    size: '24 Light Years across',
    description: 'The closest massive star-forming region to Earth, visible to the naked eye as a fuzzy patch in Orion’s sword.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/' }, { name: 'ESA', url: 'https://www.esa.int/' }]
  },
  {
    id: 'eagle-nebula',
    name: 'Eagle Nebula (M16 / Pillars of Creation)',
    type: 'Emission',
    constellation: 'Serpens',
    distance: '5,700 Light Years',
    size: '70 × 55 Light Years',
    description: 'Home to the famous "Pillars of Creation", towering columns of interstellar hydrogen gas and dust sculpting newly birthed stars.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'NASA', url: 'https://webbtelescope.org/' }]
  },
  {
    id: 'carina-nebula',
    name: 'Carina Nebula (NGC 3372)',
    type: 'Emission',
    constellation: 'Carina',
    distance: '8,500 Light Years',
    size: '460 Light Years across',
    description: 'One of the largest diffuse nebulae in our sky, containing hypergiant stars like Eta Carinae, four times larger and brighter than Orion.',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'ESO', url: 'https://www.eso.org/' }]
  },
  {
    id: 'crab-nebula',
    name: 'Crab Nebula (M1)',
    type: 'Supernova Remnant',
    constellation: 'Taurus',
    distance: '6,500 Light Years',
    size: '11 Light Years across',
    description: 'The expanding filamentary remnant of a historical supernova observed by Chinese, Arab, and Native American astronomers in 1054 AD. Powered by a central pulsar.',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'NASA', url: 'https://hubblesite.org/' }]
  },
  {
    id: 'ring-nebula',
    name: 'Ring Nebula (M57)',
    type: 'Planetary',
    constellation: 'Lyra',
    distance: '2,570 Light Years',
    size: '1.3 Light Years across',
    description: 'A glowing barrel-shaped planetary nebula ejected by a dying Sun-like star as it shrank into a white dwarf remnant.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
    sources: [{ name: 'NASA', url: 'https://webbtelescope.org/' }]
  }
];
