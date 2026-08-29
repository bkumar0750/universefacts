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
  },
  {
    id: 'milky-way-black-holes',
    label: 'Stellar Black Holes in Milky Way',
    value: '100',
    numericTarget: 100,
    unit: 'Million Black Holes',
    isEstimate: true,
    statusLabel: 'Estimated',
    source: {
      name: 'NASA',
      url: 'https://science.nasa.gov/universe/black-holes/',
      articleTitle: 'Stellar Mass Black Hole Population Models'
    },
    description: 'Astrophysical models predict approximately 100 million stellar-mass black holes scattered throughout our home galaxy.'
  },
  {
    id: 'speed-of-light',
    label: 'Speed of Light in Vacuum (c)',
    value: '299,792.458',
    numericTarget: 299792,
    unit: 'km/s',
    isEstimate: false,
    statusLabel: 'Observed',
    source: {
      name: 'Peer-Reviewed Literature',
      url: 'https://www.bipm.org/en/measurement-units/',
      articleTitle: 'CODATA Recommended Values of Fundamental Physical Constants'
    },
    description: 'The fundamental cosmic speed limit at which all massless particles and gravitational waves travel in vacuum.'
  },
  {
    id: 'cmb-temp',
    label: 'Cosmic Radiation Background Temp',
    value: '2.72548',
    numericTarget: 2.7,
    unit: 'Kelvin',
    isEstimate: false,
    statusLabel: 'Measured',
    source: {
      name: 'ESA',
      url: 'https://www.esa.int/Planck',
      articleTitle: 'ESA Planck CMB Thermal Spectrum Measurements'
    },
    description: 'The uniform thermal background radiation remnant left behind by recombination 380,000 years after the Big Bang.'
  },
  {
    id: 'hubble-constant',
    label: 'Hubble Expansion Constant (H0)',
    value: '67.4',
    numericTarget: 67.4,
    unit: 'km/s / Mpc',
    isEstimate: true,
    statusLabel: 'Measured',
    source: {
      name: 'ESA',
      url: 'https://www.esa.int/Planck',
      articleTitle: 'Planck Cosmological Parameters 2018'
    },
    description: 'The rate of cosmic metric space expansion measured per megaparsec distance from Earth.'
  }
];

