import type { CosmicStat } from '../types';

export const cosmicStats: CosmicStat[] = [
  {
    id: 'age-universe',
    label: 'Age of Universe',
    value: '13.787',
    numericTarget: 13.8,
    unit: 'Billion Years',
    isEstimate: true,
    statusLabel: 'Measured',
    source: {
      name: 'NASA',
      url: 'https://www.nasa.gov/mission_pages/planck/news/planck20130321.html',
      articleTitle: 'Planck Mission Cosmic Microwave Background Measurement'
    },
    description: 'Based on Planck satellite cosmic microwave background radiation measurements (±0.020 billion years).'
  },
  {
    id: 'known-planets',
    label: 'Confirmed Exoplanets',
    value: '5,600+',
    numericTarget: 5600,
    unit: 'Confirmed Worlds',
    isEstimate: false,
    statusLabel: 'Observed',
    source: {
      name: 'NASA',
      url: 'https://exoplanetarchive.ipac.caltech.edu/',
      articleTitle: 'NASA Exoplanet Archive'
    },
    description: 'Officially confirmed extrasolar planets cataloged by space observatories like Kepler, TESS, and ground observatories.'
  },
  {
    id: 'solar-planets',
    label: 'Planets in Solar System',
    value: '8',
    numericTarget: 8,
    unit: 'Major Planets',
    isEstimate: false,
    statusLabel: 'Observed',
    source: {
      name: 'NASA',
      url: 'https://science.nasa.gov/solar-system/planets/',
      articleTitle: 'IAU 2006 Resolution B5 Definition of a Planet'
    },
    description: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune (excluding dwarf planets like Pluto).'
  },
  {
    id: 'known-moons',
    label: 'Known Solar Moons',
    value: '290+',
    numericTarget: 290,
    unit: 'Confirmed Moons',
    isEstimate: false,
    statusLabel: 'Observed',
    source: {
      name: 'NASA',
      url: 'https://science.nasa.gov/solar-system/moons/',
      articleTitle: 'NASA Solar System Exploration - Moons'
    },
    description: 'Total confirmed moons orbiting major planets and dwarf planets in our solar system.'
  },
  {
    id: 'estimated-stars',
    label: 'Estimated Stars in Universe',
    value: '100',
    numericTarget: 100,
    unit: 'Sextillion Stars',
    isEstimate: true,
    statusLabel: 'Estimated',
    source: {
      name: 'ESA',
      url: 'https://www.esa.int/Science_Technology/Space_Science/How_many_stars_are_there_in_the_Universe',
      articleTitle: 'ESA Science - Star Population Models'
    },
    description: 'Calculated by multiplying the estimated 2 trillion galaxies by the average 100 billion stars per galaxy.'
  },
  {
    id: 'estimated-galaxies',
    label: 'Discovered & Estimated Galaxies',
    value: '2',
    numericTarget: 2,
    unit: 'Trillion Galaxies',
    isEstimate: true,
    statusLabel: 'Modelled',
    source: {
      name: 'NASA',
      url: 'https://www.nasa.gov/feature/goddard/2016/hubble-reveals-observable-universe-contains-10-times-more-galaxies-than-thought',
      articleTitle: 'Hubble Deep Field Galaxy Census Model'
    },
    description: 'Hubble Space Telescope 3D census estimates up to 2 trillion galaxies within the observable universe.'
  },
  {
    id: 'observable-diameter',
    label: 'Observable Universe Diameter',
    value: '93',
    numericTarget: 93,
    unit: 'Billion Light Years',
    isEstimate: true,
    statusLabel: 'Measured',
    source: {
      name: 'Peer-Reviewed Literature',
      url: 'https://arxiv.org/abs/astro-ph/0310808',
      articleTitle: 'Gott et al. - A Map of the Universe'
    },
    description: 'Comoving spatial diameter calculated accounting for cosmic expansion since the Big Bang.'
  }
];
