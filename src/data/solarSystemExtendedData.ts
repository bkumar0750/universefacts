export interface InterstellarVisitor {
  id: string;
  name: string;
  designation: string;
  discoveryDate: string;
  origin: string;
  eccentricity: number;
  speedKMperSec: number;
  description: string;
  sourceUrl: string;
}

export interface NearEarthObject {
  id: string;
  name: string;
  category: 'Near-Earth Asteroid' | 'Near-Earth Comet' | 'Potentially Hazardous Asteroid';
  diameterMeters: number;
  closeApproachDate: string;
  missDistanceKM: number;
  missDistanceLD: number; // Lunar Distances
  velocityKMperSec: number;
  isHazardous: boolean;
  scientificNotes: string;
}

export interface LagrangePointData {
  id: string;
  name: string;
  position: string;
  stability: 'Stable' | 'Unstable (Station-keeping required)';
  description: string;
  famousSpacecraft: string[];
}

export interface SonificationTrack {
  id: string;
  title: string;
  target: string;
  dataType: string;
  description: string;
  freqHz: number;
  source: string;
}

export interface SolarSystemRecord {
  id: string;
  category: string;
  recordTitle: string;
  holder: string;
  value: string;
  dateOrSource: string;
  details: string;
}

export interface NASAImageItem {
  id: string;
  title: string;
  target: string;
  imageType: 'Real Spacecraft' | 'Satellite/Telescopic' | 'Radar Image' | 'Infrared' | 'False Color' | 'Scientific Visualization' | 'Artist Concept';
  url: string;
  caption: string;
  credit: string;
  sourceUrl: string;
}

// ☄️ INTERSTELLAR VISITORS DATA
export const INTERSTELLAR_VISITORS: InterstellarVisitor[] = [
  {
    id: 'oumuamua',
    name: '1I/ʻOumuamua',
    designation: '1I/2017 U1',
    discoveryDate: 'October 19, 2017 (Pan-STARRS 1)',
    origin: 'Interstellar Space (Direction of Vega)',
    eccentricity: 1.20,
    speedKMperSec: 87.7,
    description: 'The first confirmed interstellar object detected passing through our Solar System. Exhibited highly elongated shape (10:1 ratio) and non-gravitational acceleration likely caused by outgassing of volatile carbon monoxide ice.',
    sourceUrl: 'https://science.nasa.gov/solar-system/comets/1i-oumuamua/'
  },
  {
    id: 'borisov',
    name: '2I/Borisov',
    designation: 'C/2019 Q4',
    discoveryDate: 'August 30, 2019 (Gennadiy Borisov)',
    origin: 'Interstellar Space (Direction of Cassiopeia)',
    eccentricity: 3.36,
    speedKMperSec: 32.2,
    description: 'The first confirmed interstellar comet. Displayed a prominent dust coma and cyanogen tail rich in CO gas, proving icy planetesimals formed around other stars share similar chemical ingredients to our own Solar System comets.',
    sourceUrl: 'https://science.nasa.gov/solar-system/comets/2i-borisov/'
  }
];

// 🪨 NEAR-EARTH OBJECTS DATA
export const NEAR_EARTH_OBJECTS: NearEarthObject[] = [
  {
    id: 'apophis',
    name: '99942 Apophis',
    category: 'Potentially Hazardous Asteroid',
    diameterMeters: 370,
    closeApproachDate: 'April 13, 2029',
    missDistanceKM: 31600,
    missDistanceLD: 0.08,
    velocityKMperSec: 7.4,
    isHazardous: true,
    scientificNotes: 'Will safely pass within 31,600 km of Earth surface—closer than geostationary communication satellites! Visible to the naked eye from Europe and Africa. Zero collision risk for the next 100+ years.',
  },
  {
    id: 'bennu-neo',
    name: '101955 Bennu',
    category: 'Potentially Hazardous Asteroid',
    diameterMeters: 492,
    closeApproachDate: 'September 2182 (Potential)',
    missDistanceKM: 300000,
    missDistanceLD: 0.78,
    velocityKMperSec: 6.2,
    isHazardous: true,
    scientificNotes: 'Visited by NASA OSIRIS-REx probe, which collected samples and returned them to Earth in Sept 2023. Contains abundant water-bearing minerals and carbon molecules.',
  },
  {
    id: 'toutatis',
    name: '4179 Toutatis',
    category: 'Near-Earth Asteroid',
    diameterMeters: 5400,
    closeApproachDate: 'December 2012',
    missDistanceKM: 6900000,
    missDistanceLD: 18.0,
    velocityKMperSec: 11.8,
    isHazardous: false,
    scientificNotes: 'Elongated contact binary tumbling irregularly through space. Imaged in high detail by Goldstone radar and China Chang\'e 2 probe.',
  }
];

// ⚖️ LAGRANGE POINTS DATA
export const LAGRANGE_POINTS_DATA: LagrangePointData[] = [
  {
    id: 'l1',
    name: 'L1 (Lagrange Point 1)',
    position: '1.5 Million km in front of Earth (toward Sun)',
    stability: 'Unstable (Station-keeping required)',
    description: 'Provides an uninterrupted view of the Sun. Ideal for solar observatories.',
    famousSpacecraft: ['SOHO (Solar and Heliospheric Observatory)', 'DSCOVR (Deep Space Climate Observatory)']
  },
  {
    id: 'l2',
    name: 'L2 (Lagrange Point 2)',
    position: '1.5 Million km behind Earth (away from Sun)',
    stability: 'Unstable (Station-keeping required)',
    description: 'Shielded from Sun and Earth light. Perfect for deep space infrared astronomy.',
    famousSpacecraft: ['JWST (James Webb Space Telescope)', 'Gaia Observatory', 'Euclid Telescope']
  },
  {
    id: 'l3',
    name: 'L3 (Lagrange Point 3)',
    position: 'Directly opposite Earth on the other side of the Sun',
    stability: 'Unstable (Station-keeping required)',
    description: 'Hidden behind the Sun. Popular in sci-fi as the location of a "Counter-Earth".',
    famousSpacecraft: ['None currently deployed']
  },
  {
    id: 'l4',
    name: 'L4 (Leading Lagrange Point)',
    position: '60° ahead of Earth in its orbital path',
    stability: 'Stable',
    description: 'Gravitational vortex that accumulates dust and Trojan asteroids.',
    famousSpacecraft: ['NASA Lucy Mission (Exploring Jupiter L4 Trojans)']
  },
  {
    id: 'l5',
    name: 'L5 (Trailing Lagrange Point)',
    position: '60° behind Earth in its orbital path',
    stability: 'Stable',
    description: 'Gravitational pocket trapping asteroids trailing the planet orbit.',
    famousSpacecraft: ['NASA Lucy Mission (Exploring Jupiter L5 Trojans)']
  }
];

// 📻 DATA SONIFICATION TRACKS
export const SONIFICATION_TRACKS: SonificationTrack[] = [
  {
    id: 'track-jupiter',
    title: 'Jupiter Magnetosphere Whistler Waves',
    target: 'Jupiter System',
    dataType: 'Radio Emission Plasma Waves (Juno Waves Instrument)',
    description: 'Lightning discharges in Jupiter high atmosphere create electromagnetic plasma waves that whistle through the magnetosphere.',
    freqHz: 440,
    source: 'NASA Juno Mission Data'
  },
  {
    id: 'track-saturn',
    title: 'Saturn Kilometric Radiation (SKR)',
    target: 'Saturn Rings & Magnetosphere',
    dataType: 'Radio Signals (Cassini Radio Wave Instrument)',
    description: 'Natural high-frequency radio waves generated by Saturn polar auroras sonified into human audible range.',
    freqHz: 650,
    source: 'NASA Cassini Mission Data'
  },
  {
    id: 'track-sun',
    title: 'Solar Core Acoustic Oscillations',
    target: 'The Sun',
    dataType: 'Helioseismology Acoustic Waves (SOHO MDI)',
    description: 'Convection currents inside the Sun generate massive low-frequency sound waves that speed up audio by 42,000 times.',
    freqHz: 220,
    source: 'NASA SOHO Helioseismology'
  }
];

// 🏆 SOLAR SYSTEM RECORDS DATABASE
export const SOLAR_SYSTEM_RECORDS: SolarSystemRecord[] = [
  {
    id: 'rec-1',
    category: 'Planet Size',
    recordTitle: 'Largest Planet',
    holder: 'Jupiter',
    value: '139,822 km diameter (317.8 Earth masses)',
    dateOrSource: 'NASA Planetary Fact Sheet',
    details: 'More than 2x as massive as all other planets in the Solar System combined.'
  },
  {
    id: 'rec-2',
    category: 'Temperature',
    recordTitle: 'Hottest Planet Surface',
    holder: 'Venus',
    value: '465°C average surface temperature',
    dateOrSource: 'NASA Venus Overview',
    details: 'Hotter than Mercury despite being twice as far from the Sun, due to runaway carbon dioxide greenhouse trapping.'
  },
  {
    id: 'rec-3',
    category: 'Volcano',
    recordTitle: 'Largest Known Volcano',
    holder: 'Olympus Mons (Mars)',
    value: '21.9 km height (3x taller than Mt Everest)',
    dateOrSource: 'USGS Astrogeology',
    details: 'Spans 600 km across—wide enough to cover the entire state of Arizona.'
  },
  {
    id: 'rec-4',
    category: 'Canyon',
    recordTitle: 'Deepest Planetary Canyon System',
    holder: 'Valles Marineris (Mars)',
    value: '4,000 km long, up to 7 km deep',
    dateOrSource: 'NASA Mars Express',
    details: 'Stretches across one-fifth of Mars circumference—10x longer and 4x deeper than the Grand Canyon.'
  },
  {
    id: 'rec-5',
    category: 'Distance',
    recordTitle: 'Most Distant Human Spacecraft',
    holder: 'Voyager 1',
    value: 'Over 24 Billion km (162 AU)',
    dateOrSource: 'NASA JPL Telemetry Live',
    details: 'Launched in 1977; crossed the heliopause into interstellar space in August 2012.'
  },
  {
    id: 'rec-6',
    category: 'Wind Speed',
    recordTitle: 'Fastest Planetary Winds',
    holder: 'Neptune',
    value: 'Up to 2,100 km/h (Supersonic)',
    dateOrSource: 'Voyager 2 Atmospheric Data',
    details: 'Winds blow frozen methane clouds westward against the planet rotation at 5x the speed of sound.'
  }
];

// 📸 OFFICIAL NASA IMAGE GALLERY DATA
export const OFFICIAL_NASA_IMAGES: NASAImageItem[] = [
  {
    id: 'img-1',
    title: 'Earth & Moon viewed by Voyager 1',
    target: 'Earth & Moon',
    imageType: 'Real Spacecraft',
    url: 'https://images-assets.nasa.gov/image/PIA00013/PIA00013~orig.jpg',
    caption: 'First photo of Earth and Moon in a single frame taken by Voyager 1 from 11.66 million km away in 1977.',
    credit: 'NASA / JPL-Caltech',
    sourceUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA00013'
  },
  {
    id: 'img-2',
    title: 'Jupiter Great Red Spot in False Color',
    target: 'Jupiter',
    imageType: 'False Color',
    url: 'https://images-assets.nasa.gov/image/PIA21974/PIA21974~orig.jpg',
    caption: 'JunoCam enhanced false-color rendering emphasizing turbulent clouds surrounding Jupiter 350-year storm.',
    credit: 'NASA / JPL-Caltech / SwRI / MSSS',
    sourceUrl: 'https://www.jpl.nasa.gov/images/pia21974-jupiters-great-red-spot'
  },
  {
    id: 'img-3',
    title: 'Magellan Radar Topography Map of Venus',
    target: 'Venus',
    imageType: 'Radar Image',
    url: 'https://images-assets.nasa.gov/image/PIA00104/PIA00104~orig.jpg',
    caption: 'Global radar map of Venus surface revealing lava plains and volcanoes through dense clouds.',
    credit: 'NASA / JPL-Caltech',
    sourceUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA00104'
  },
  {
    id: 'img-4',
    title: 'JWST Infrared View of Neptune Rings',
    target: 'Neptune',
    imageType: 'Infrared',
    url: 'https://images-assets.nasa.gov/image/STScI-01GF45V43W7PBRS8XCPV89G0A2/STScI-01GF45V43W7PBRS8XCPV89G0A2~orig.jpg',
    caption: 'James Webb Space Telescope NIRCam image capturing Neptune faint dusty rings and high-altitude methane ice clouds.',
    credit: 'NASA / ESA / CSA / STScI',
    sourceUrl: 'https://webbtelescope.org/contents/media/images/2022/047/01GF45V43W7PBRS8XCPV89G0A2'
  },
  {
    id: 'img-5',
    title: 'Artist Concept of NASA Psyche Spacecraft',
    target: '16 Psyche',
    imageType: 'Artist Concept',
    url: 'https://images-assets.nasa.gov/image/PIA24888/PIA24888~orig.jpg',
    caption: 'Illustration of NASA Psyche spacecraft approaching the 220-km metal-rich asteroid in deep space.',
    credit: 'NASA / JPL-Caltech / ASU',
    sourceUrl: 'https://www.jpl.nasa.gov/images/pia24888-artist-concept-of-psyche-spacecraft'
  }
];
