import type { ScientificSource } from '../types';

export type CosmicRandomFact = {
  id: string;
  fact: string;
  category: string;
  source: ScientificSource;
};

export const randomFacts: CosmicRandomFact[] = [
  {
    id: 'venus-rotation',
    fact: 'Venus rotates so slowly that one Venusian rotation (243 Earth days) takes longer than its year (225 Earth days).',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://science.nasa.gov/venus/facts/' }
  },
  {
    id: 'neutron-star-density',
    fact: 'A single teaspoon of neutron star material would weigh approximately 6 billion tons on Earth—equivalent to the weight of Mount Everest.',
    category: 'Stars',
    source: { name: 'NASA', url: 'https://science.nasa.gov/astrophysics/focus-areas/black-holes' }
  },
  {
    id: 'chandrayaan-sulfur',
    fact: 'ISRO’s Pragyan rover on Chandrayaan-3 confirmed the presence of Sulfur (S) near the lunar south pole using Laser-Induced Breakdown Spectroscopy.',
    category: 'Missions',
    source: { name: 'ISRO', url: 'https://www.isro.gov.in/Chandrayaan3_Details.html' }
  },
  {
    id: 'saturn-density',
    fact: 'Saturn is the only planet in our solar system less dense than water; if you had a bathtub large enough, Saturn would float.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://science.nasa.gov/saturn/facts/' }
  },
  {
    id: 'olympus-mons',
    fact: 'Olympus Mons on Mars is 21.9 km tall—nearly three times the height of Mount Everest—and covers an area the size of Arizona.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://science.nasa.gov/mars/' }
  },
  {
    id: 'footprints-moon',
    fact: 'Astronaut footprints on the Moon will remain preserved for millions of years because the Moon has no atmosphere, liquid water, or wind erosion.',
    category: 'Moon',
    source: { name: 'NASA', url: 'https://science.nasa.gov/moon/' }
  },
  {
    id: 'light-from-sun',
    fact: 'Photons generated in the Sun’s core take between 10,000 and 170,000 years to reach the surface, but only 8 minutes and 20 seconds to travel to Earth.',
    category: 'Sun',
    source: { name: 'ESA', url: 'https://www.esa.int/' }
  },
  {
    id: 'space-silence',
    fact: 'Space is completely silent because sound waves require a physical medium (like air or water) to travel through, which open space lacks.',
    category: 'Universe',
    source: { name: 'NASA', url: 'https://www.nasa.gov/' }
  },
  {
    id: 'diamond-rain',
    fact: 'Deep inside icy giant planets Neptune and Uranus, extreme pressure crushes methane molecules into pure diamond rain falling towards their cores.',
    category: 'Exoplanets & Giants',
    source: { name: 'Peer-Reviewed Literature', url: 'https://www.nature.com/articles/s41550-017-0219-9' }
  },
  {
    id: 'milky-way-speed',
    fact: 'Our entire Solar System orbits the center of the Milky Way galaxy at a speed of ~828,000 km/h, taking ~230 million years to complete one orbit.',
    category: 'Galaxies',
    source: { name: 'NASA', url: 'https://science.nasa.gov/galaxies/milky-way/' }
  }
];
