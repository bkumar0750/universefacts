import type { TimelineEvent } from '../types';

export const timelineData: TimelineEvent[] = [
  {
    id: 'big-bang',
    timeAgo: '13.8 Billion Years Ago',
    yearsAgoValue: 13800000000,
    title: 'The Big Bang & Rapid Inflation',
    category: 'Cosmic',
    description: 'The origin of spacetime, matter, and energy from an extremely hot, dense singularity. Cosmic inflation expanded space exponentially in a tiny fraction of a second.',
    significance: 'Created all fundamental forces, radiation, space, and subatomic particle matter of our universe.',
    status: 'Theory',
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/' }]
  },
  {
    id: 'cmb-recombination',
    timeAgo: '13.799 Billion Years Ago (380,000 Yrs Post-Bang)',
    yearsAgoValue: 13799000000,
    title: 'Recombination & Cosmic Microwave Background',
    category: 'Cosmic',
    description: 'Electrons bound with protons to form neutral hydrogen atoms. Space became transparent to light, releasing the snapshot radiation seen today as the Cosmic Microwave Background (CMB).',
    significance: 'Oldest observable electromagnetic light signature in the universe.',
    status: 'Measured',
    sources: [{ name: 'ESA', url: 'https://www.esa.int/Planck' }]
  },
  {
    id: 'first-stars',
    timeAgo: '13.6 Billion Years Ago',
    yearsAgoValue: 13600000000,
    title: 'Cosmic Dawn & Population III Stars',
    category: 'Stellar',
    description: 'Gravity pulled primordial hydrogen and helium into the first hypermassive Population III stars, lighting up the cosmic dark ages and initiating reionization.',
    significance: 'Synthesized first heavy elements (carbon, oxygen, iron) via stellar nucleosynthesis.',
    status: 'Modelled',
    sources: [{ name: 'NASA', url: 'https://webbtelescope.org/' }]
  },
  {
    id: 'first-galaxies',
    timeAgo: '13.4 Billion Years Ago',
    yearsAgoValue: 13400000000,
    title: 'First Proto-Galaxies Form',
    category: 'Stellar',
    description: 'Small star clusters coalesced under dark matter filaments to build the earliest dwarf and spiral galaxies.',
    significance: 'Building blocks of large galaxy structures like the Milky Way.',
    status: 'Observed',
    sources: [{ name: 'NASA', url: 'https://webbtelescope.org/' }]
  },
  {
    id: 'milky-way-formation',
    timeAgo: '12.5 Billion Years Ago',
    yearsAgoValue: 12500000000,
    title: 'Milky Way Galaxy Assembly',
    category: 'Stellar',
    description: 'Proto-galaxies merged to assemble the thick disk and halo of our home Milky Way galaxy.',
    significance: 'Established the galactic environment containing our Sun.',
    status: 'Observed',
    sources: [{ name: 'ESA', url: 'https://www.esa.int/Gaia' }]
  },
  {
    id: 'solar-system-birth',
    timeAgo: '4.6 Billion Years Ago',
    yearsAgoValue: 4600000000,
    title: 'Birth of the Solar System & Sun',
    category: 'Planetary',
    description: 'A giant molecular cloud collapsed due to a nearby supernova shockwave, forming the proto-Sun and a circumstellar protoplanetary accretion disk.',
    significance: 'Began accretion of planets, asteroids, and comets.',
    status: 'Measured',
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/solar-system/' }]
  },
  {
    id: 'earth-moon-formation',
    timeAgo: '4.5 Billion Years Ago',
    yearsAgoValue: 4500000000,
    title: 'Earth Accretion & Giant Moon Impact',
    category: 'Planetary',
    description: 'Early proto-Earth collided with a Mars-sized planet named Theia. Debris ejected into orbit consolidated to form Earth’s Moon.',
    significance: 'Stabilized Earth’s axial tilt and established ocean tide mechanics.',
    status: 'Modelled',
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/moon/' }]
  },
  {
    id: 'life-origin',
    timeAgo: '3.8 Billion Years Ago',
    yearsAgoValue: 3800000000,
    title: 'First Single-Celled Abiogenesis Life',
    category: 'Biological',
    description: 'Self-replicating RNA/DNA hydrothermal ocean organisms emerged, giving rise to single-celled prokaryotes and cyanobacteria.',
    significance: 'Initiated biological evolution and atmospheric oxygenation.',
    status: 'Measured',
    sources: [{ name: 'Peer-Reviewed Literature', url: 'https://www.nature.com/' }]
  },
  {
    id: 'space-age',
    timeAgo: '1957 AD - Present',
    yearsAgoValue: 70,
    title: 'Humanity Enters the Space Age',
    category: 'Human Spaceflight',
    description: 'Sputnik launch (1957), Apollo 11 Moon landing (1969), ISS assembly, Mars Rovers, Chandrayaan-3 south pole landing, and JWST deep fields.',
    significance: 'Humanity transitions into a multi-planetary spacefaring civilization.',
    status: 'Observed',
    sources: [{ name: 'NASA', url: 'https://www.nasa.gov/' }, { name: 'ISRO', url: 'https://www.isro.gov.in/' }]
  }
];
