export interface SunLayer {
  id: string;
  name: string;
  depth: string;
  temperature: string;
  process: string;
  description: string;
  source: string;
  sourceUrl: string;
}

export interface SolarSystemZoomStage {
  id: string;
  name: string;
  distanceAU: string;
  distanceKM: string;
  lightTime: string;
  description: string;
  keyObjects: string[];
}

export interface WorldComparisonData {
  id: string;
  name: string;
  category: 'Terrestrial Planet' | 'Gas Giant' | 'Ice Giant' | 'Dwarf Planet' | 'Major Moon';
  diameterKM: number;
  diameterFormatted: string;
  massRelativeEarth: number;
  massFormatted: string;
  gravityMetersPerSecSq: number;
  gravityRelativeEarth: number;
  sunDistanceAU: number;
  sunDistanceFormatted: string;
  orbitalPeriodDays: number;
  orbitalPeriodFormatted: string;
  rotationPeriodHours: number;
  rotationPeriodFormatted: string;
  axialTiltDegrees: number;
  meanTemperatureC: number;
  tempFormatted: string;
  moonCount: number;
  atmosphereGases: string;
  hasRings: boolean;
  ringDescription: string;
  surfaceType: string;
  magneticField: string;
  notableMissions: string;
  imageUrl: string;
  imageCaption: string;
}

export interface AstrobiologyMoon {
  id: string;
  name: string;
  parentBody: string;
  title: string;
  diameterKM: string;
  keyFeature: string;
  known: string[];
  suspected: string[];
  unknown: string[];
  imageUrl: string;
  source: string;
  sourceUrl: string;
}

export interface SolarMissionItem {
  id: string;
  name: string;
  destination: string;
  launchYear: string;
  arrivalYear: string;
  agency: string;
  purpose: string;
  majorDiscoveries: string;
  status: 'Active' | 'Completed' | 'En Route' | 'Planned';
  sourceUrl: string;
  imageUrl: string;
}

export interface SolarSystemWowFact {
  id: string;
  title: string;
  shortFact: string;
  explanation: string;
  category: 'Sun' | 'Planets' | 'Moons' | 'Small Worlds' | 'Orbits & Gravity' | 'Exploration';
  wowLevel?: number;
  targetWorld?: string;
  sourceName: string;
  sourceUrl: string;
  scientificStatus: 'Observed' | 'Measured' | 'Estimated' | 'Modelled' | 'Hypothesis';
}

export interface SolarMythVsReality {
  id: string;
  myth: string;
  reality: string;
  explanation: string;
  sourceName: string;
  sourceUrl: string;
}

export interface GameMission {
  id: number;
  title: string;
  objective: string;
  targetId: string;
  hint: string;
  rewardBadge: string;
}

// ☀️ 1. SUN LAYERS DATA
export const SUN_LAYERS_DATA: SunLayer[] = [
  {
    id: 'core',
    name: 'Core',
    depth: '0 to 0.25 R☉ (0 – 175,000 km)',
    temperature: '~15,000,000°C',
    process: 'Proton-Proton Chain Nuclear Fusion',
    description: 'Under extreme central pressure (250 billion atmospheres), hydrogen nuclei fuse into helium at 600 million tons per second, generating 3.8 × 10²⁶ Watts of continuous power.',
    source: 'NASA Sun Facts',
    sourceUrl: 'https://science.nasa.gov/sun/facts/'
  },
  {
    id: 'radiative',
    name: 'Radiative Zone',
    depth: '0.25 to 0.70 R☉ (175,000 – 490,000 km)',
    temperature: '7,000,000°C down to 2,000,000°C',
    process: 'Radiative Photon Diffusion',
    description: 'Energy slowly travels outward via continuous absorption and re-emission of gamma-ray photons. A single photon takes roughly 100,000 to 200,000 years to cross this dense layer.',
    source: 'NASA Heliophysics',
    sourceUrl: 'https://science.nasa.gov/sun/facts/'
  },
  {
    id: 'convective',
    name: 'Convection Zone',
    depth: '0.70 to 1.00 R☉ (490,000 – 696,000 km)',
    temperature: '2,000,000°C down to 5,500°C',
    process: 'Thermal Convection Currents',
    description: 'Hot plasma cells rise to the surface, cool down, and sink back inside, producing giant boiling plasma columns visible on the surface as solar granules (~1,000 km across).',
    source: 'NASA SOHO Mission',
    sourceUrl: 'https://soho.nascom.nasa.gov/'
  },
  {
    id: 'photosphere',
    name: 'Photosphere',
    depth: '~500 km thick visible surface',
    temperature: '~5,500°C (5,778 K)',
    process: 'Visible Light Emission',
    description: 'The visible surface layer of the Sun from which light escapes into space. Contains dark sunspots caused by intense local magnetic field concentrations.',
    source: 'NASA SDO Mission',
    sourceUrl: 'https://sdo.gsfc.nasa.gov/'
  },
  {
    id: 'chromosphere',
    name: 'Chromosphere',
    depth: '500 to 2,000 km above Photosphere',
    temperature: '4,000°C up to 25,000°C',
    process: 'Magnetic Spicule Jets & Prominences',
    description: 'A glowing pinkish layer dominated by hydrogen-alpha emissions. Fired by spicules—jets of plasma moving at 100,000 km/h reaching heights of 10,000 km.',
    source: 'NASA Sun Overview',
    sourceUrl: 'https://science.nasa.gov/sun/facts/'
  },
  {
    id: 'corona',
    name: 'Corona',
    depth: 'Extends millions of kilometers into space',
    temperature: '1,000,000°C to 3,000,000°C',
    process: 'Coronal Heating & Solar Wind Acceleration',
    description: 'The outermost rarefied atmosphere. Paradoxically 200x hotter than the surface below due to magnetic reconnection nanoflares and Alfvén wave heating.',
    source: 'NASA Parker Solar Probe',
    sourceUrl: 'https://science.nasa.gov/mission/parker-solar-probe/'
  }
];

// ☀️ 2. SUN 10 WOW FACTS
export const SUN_10_WOW_FACTS: SolarSystemWowFact[] = [
  {
    id: 'sun-1',
    title: 'The Sun Owns 99.86% of All Solar System Mass',
    shortFact: 'Out of all the matter in the entire Solar System, planets make up less than 0.14%.',
    explanation: 'Jupiter and Saturn account for most of the remaining 0.14%. Earth is a tiny dust grain orbiting a massive 1.989 × 10³⁰ kg nuclear furnace.',
    category: 'Sun',
    wowLevel: 5,
    sourceName: 'NASA Sun Facts',
    sourceUrl: 'https://science.nasa.gov/sun/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'sun-2',
    title: '1.3 Million Earths Could Fit Inside the Sun',
    shortFact: 'The Sun diameter is ~1.39 million km (109 Earth diameters across).',
    explanation: 'If the Sun were a hollow sphere, you could pour 1,300,000 Earths inside it. By volume, the Sun is truly immense.',
    category: 'Sun',
    wowLevel: 5,
    sourceName: 'NASA Planetary Science',
    sourceUrl: 'https://science.nasa.gov/sun/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'sun-3',
    title: 'Light Takes 8 Minutes 20 Seconds to Reach Earth',
    shortFact: 'When you look at the Sun, you see it as it was 500 seconds ago.',
    explanation: 'Traveling at 299,792 km/s across 149.6 million km of space, photons from the Sun take 8m 20s to hit Earth, 43m to reach Jupiter, and 5.5 hours to hit Pluto.',
    category: 'Sun',
    wowLevel: 5,
    sourceName: 'NASA Earth Facts',
    sourceUrl: 'https://science.nasa.gov/earth/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'sun-4',
    title: 'Our Solar System Has Only One Star',
    shortFact: 'Over 50% of star systems in the Milky Way are binary or multiple star systems.',
    explanation: 'Single-star systems like ours are less common in certain stellar clusters. Having a single stable star helped maintain stable planetary orbits for 4.5B years.',
    category: 'Sun',
    wowLevel: 4,
    sourceName: 'NASA Exoplanet Archive',
    sourceUrl: 'https://exoplanetarchive.ipac.caltech.edu/',
    scientificStatus: 'Observed'
  },
  {
    id: 'sun-5',
    title: 'Sun Gravity Controls Everything Out to 100,000 AU',
    shortFact: 'Every planet, asteroid, comet, and moon orbits around the Sun common center of mass.',
    explanation: 'Even distant comets in the Oort Cloud nearly 2 light-years away remain gravitationally bound to the Sun mass.',
    category: 'Sun',
    wowLevel: 5,
    sourceName: 'NASA Solar System Overview',
    sourceUrl: 'https://science.nasa.gov/solar-system/',
    scientificStatus: 'Modelled'
  },
  {
    id: 'sun-6',
    title: 'The Sun Outer Atmosphere is 200x Hotter Than its Surface',
    shortFact: 'The photosphere is ~5,500°C, but the surrounding Corona reaches over 2,000,000°C.',
    explanation: 'Known as the Coronal Heating Problem, magnetic reconnection waves inject energy directly into the upper atmosphere, boosting temperature millions of degrees.',
    category: 'Sun',
    wowLevel: 5,
    sourceName: 'NASA Parker Solar Probe',
    sourceUrl: 'https://science.nasa.gov/mission/parker-solar-probe/',
    scientificStatus: 'Measured'
  },
  {
    id: 'sun-7',
    title: 'Solar Storms Can Trigger Global Auroras and Grid Disruption',
    shortFact: 'Coronal Mass Ejections (CMEs) blast billions of tons of magnetized plasma into space.',
    explanation: 'When CMEs strike Earth magnetosphere at 2,000 km/s, they create geomagnetic storms, spectacular auroras, and can disrupt satellite electronics and power grids.',
    category: 'Sun',
    wowLevel: 4,
    sourceName: 'NOAA Space Weather Prediction Center',
    sourceUrl: 'https://www.swpc.noaa.gov/',
    scientificStatus: 'Observed'
  },
  {
    id: 'sun-8',
    title: 'The Solar Wind Carries 1.5 Million Tons of Matter Every Second',
    shortFact: 'The Sun continuously blows a supersonic breeze of charged electrons and protons into space.',
    explanation: 'Moving at 300 to 800 km/s, this solar wind carves out the gigantic heliosphere bubble surrounding all 8 planets.',
    category: 'Sun',
    wowLevel: 5,
    sourceName: 'NASA Heliophysics',
    sourceUrl: 'https://science.nasa.gov/heliophysics/',
    scientificStatus: 'Measured'
  },
  {
    id: 'sun-9',
    title: 'The Sun Rotates Differential: Faster at Equator Than Poles',
    shortFact: 'The Sun equator rotates in 25 days, while its poles take 35 days.',
    explanation: 'Because the Sun is a ball of plasma, different latitudes rotate at different speeds. This differential rotation twists solar magnetic field lines, causing sunspot cycles.',
    category: 'Sun',
    wowLevel: 4,
    sourceName: 'NASA SDO Mission',
    sourceUrl: 'https://sdo.gsfc.nasa.gov/',
    scientificStatus: 'Measured'
  },
  {
    id: 'sun-10',
    title: 'In 5 Billion Years, the Sun Will Become a Red Giant',
    shortFact: 'After exhausting core hydrogen, the Sun will expand, engulfing Mercury, Venus, and possibly Earth.',
    explanation: 'Eventually, the outer layers will shed into a colorful planetary nebula, leaving behind a dense white dwarf star about the size of Earth.',
    category: 'Sun',
    wowLevel: 5,
    sourceName: 'NASA Stellar Evolution',
    sourceUrl: 'https://science.nasa.gov/astrophysics/',
    scientificStatus: 'Modelled'
  }
];

// 🚀 3. CONTINUOUS ZOOM-OUT STAGES
export const SOLAR_SYSTEM_ZOOM_STAGES: SolarSystemZoomStage[] = [
  {
    id: 'stage-1',
    name: '1. The Sun',
    distanceAU: '0.00 AU',
    distanceKM: '0 km',
    lightTime: '0 seconds',
    description: 'The central G-type star providing 99.86% of all system mass.',
    keyObjects: ['The Sun (Sol)', 'Solar Corona']
  },
  {
    id: 'stage-2',
    name: '2. Inner Terrestrial Planets',
    distanceAU: '0.39 to 1.52 AU',
    distanceKM: '58M to 228M km',
    lightTime: '3.2 min to 12.7 min',
    description: 'Rocky worlds with solid metal-rock crusts: Mercury, Venus, Earth (with Moon), and Mars.',
    keyObjects: ['Mercury', 'Venus', 'Earth & Moon', 'Mars']
  },
  {
    id: 'stage-3',
    name: '3. Main Asteroid Belt',
    distanceAU: '2.2 to 3.2 AU',
    distanceKM: '329M to 478M km',
    lightTime: '18 min to 26 min',
    description: 'Mostly empty space containing millions of rocky leftovers and dwarf planet Ceres.',
    keyObjects: ['Ceres', 'Vesta', 'Pallas', 'Hygiea']
  },
  {
    id: 'stage-4',
    name: '4. Outer Giant Planets',
    distanceAU: '5.2 to 30.1 AU',
    distanceKM: '778M to 4.5B km',
    lightTime: '43 min to 4.1 hours',
    description: 'Massive gas giants (Jupiter, Saturn) and ice giants (Uranus, Neptune) with vast moon systems.',
    keyObjects: ['Jupiter', 'Saturn', 'Uranus', 'Neptune']
  },
  {
    id: 'stage-5',
    name: '5. Kuiper Belt & Dwarf Planets',
    distanceAU: '30 to 50 AU',
    distanceKM: '4.5B to 7.5B km',
    lightTime: '4.1 to 7.0 hours',
    description: 'A doughnut-shaped disk of frozen ices, home to Pluto, Haumea, Makemake, Eris, and Arrokoth.',
    keyObjects: ['Pluto & Charon', 'Haumea', 'Makemake', 'Eris', 'Arrokoth']
  },
  {
    id: 'stage-6',
    name: '6. Heliopause Boundary',
    distanceAU: '~120 AU',
    distanceKM: '~18 Billion km',
    lightTime: '~16.6 hours',
    description: 'Where solar wind slows down and meets the interstellar plasma stream. Crossed by Voyager 1 & 2.',
    keyObjects: ['Termination Shock', 'Heliosheath', 'Heliopause', 'Voyager 1 & 2 Probes']
  },
  {
    id: 'stage-7',
    name: '7. Oort Cloud & System Edge',
    distanceAU: '2,000 to 100,000 AU',
    distanceKM: '300B to 15 Trillion km',
    lightTime: '11.5 days to 1.58 Light-Years',
    description: 'A theoretical spherical reservoir of trillions of icy cometary nuclei surrounding the Sun.',
    keyObjects: ['Inner Oort Cloud (Hills Cloud)', 'Outer Spherical Oort Cloud', 'Comet Reservoir']
  }
];

// 🌐 4. WORLDS COMPARISON DATA (10 WORLDS)
export const WORLDS_COMPARISON_DATA: WorldComparisonData[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    category: 'Terrestrial Planet',
    diameterKM: 4879,
    diameterFormatted: '4,879 km',
    massRelativeEarth: 0.055,
    massFormatted: '3.30 × 10²³ kg (0.055x Earth)',
    gravityMetersPerSecSq: 3.70,
    gravityRelativeEarth: 0.38,
    sunDistanceAU: 0.39,
    sunDistanceFormatted: '57.9 Million km (0.39 AU)',
    orbitalPeriodDays: 88,
    orbitalPeriodFormatted: '88 Earth Days',
    rotationPeriodHours: 1407.6,
    rotationPeriodFormatted: '58.6 Earth Days (176d Solar Day)',
    axialTiltDegrees: 0.03,
    meanTemperatureC: 167,
    tempFormatted: '-180°C to +430°C',
    moonCount: 0,
    atmosphereGases: 'Exosphere: Oxygen, Sodium, Hydrogen, Helium',
    hasRings: false,
    ringDescription: 'No rings',
    surfaceType: 'Heavily cratered silicates & massive iron core',
    magneticField: 'Weak global dipole (~1% of Earth)',
    notableMissions: 'Mariner 10, MESSENGER, BepiColombo',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA16853/PIA16853~orig.jpg',
    imageCaption: 'NASA MESSENGER enhanced false-color view of Mercury cratered surface.'
  },
  {
    id: 'venus',
    name: 'Venus',
    category: 'Terrestrial Planet',
    diameterKM: 12104,
    diameterFormatted: '12,104 km',
    massRelativeEarth: 0.815,
    massFormatted: '4.87 × 10²⁴ kg (0.815x Earth)',
    gravityMetersPerSecSq: 8.87,
    gravityRelativeEarth: 0.90,
    sunDistanceAU: 0.72,
    sunDistanceFormatted: '108.2 Million km (0.72 AU)',
    orbitalPeriodDays: 224.7,
    orbitalPeriodFormatted: '224.7 Earth Days',
    rotationPeriodHours: 5832.5,
    rotationPeriodFormatted: '243 Earth Days (Retrograde Spin)',
    axialTiltDegrees: 177.3,
    meanTemperatureC: 464,
    tempFormatted: '~465°C (Runaway Greenhouse)',
    moonCount: 0,
    atmosphereGases: '96.5% Carbon Dioxide, 3.5% Nitrogen, Sulfuric Acid Clouds',
    hasRings: false,
    ringDescription: 'No rings',
    surfaceType: 'Volcanic basaltic plains, lava flows, rift valleys',
    magneticField: 'No internal dynamo (induced ionospheric field only)',
    notableMissions: 'Venera series, Magellan, Venus Express, Akatsuki, VERITAS',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00104/PIA00104~orig.jpg',
    imageCaption: 'Magellan radar synthesis of Venus cloud-shrouded volcanic surface.'
  },
  {
    id: 'earth',
    name: 'Earth',
    category: 'Terrestrial Planet',
    diameterKM: 12756,
    diameterFormatted: '12,756 km',
    massRelativeEarth: 1.000,
    massFormatted: '5.972 × 10²⁴ kg (1.00x Earth)',
    gravityMetersPerSecSq: 9.81,
    gravityRelativeEarth: 1.00,
    sunDistanceAU: 1.00,
    sunDistanceFormatted: '149.6 Million km (1.00 AU)',
    orbitalPeriodDays: 365.25,
    orbitalPeriodFormatted: '365.25 Earth Days',
    rotationPeriodHours: 23.93,
    rotationPeriodFormatted: '23h 56m 4s (1 Sidereal Day)',
    axialTiltDegrees: 23.44,
    meanTemperatureC: 15,
    tempFormatted: '-89°C to +58°C (Mean 15°C)',
    moonCount: 1,
    atmosphereGases: '78% Nitrogen, 21% Oxygen, 0.9% Argon, 0.04% CO₂',
    hasRings: false,
    ringDescription: 'No rings',
    surfaceType: '71% Ocean, Continental Granitic & Oceanic Basalt Crust',
    magneticField: 'Strong liquid-core geodynamo magnetosphere',
    notableMissions: 'ISS, Terra, Aqua, Suomi NPP, Landsat, Sentinel',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg',
    imageCaption: 'NASA Blue Marble photorealistic view of Earth active biosphere.'
  },
  {
    id: 'mars',
    name: 'Mars',
    category: 'Terrestrial Planet',
    diameterKM: 6779,
    diameterFormatted: '6,779 km',
    massRelativeEarth: 0.107,
    massFormatted: '6.42 × 10²³ kg (0.107x Earth)',
    gravityMetersPerSecSq: 3.71,
    gravityRelativeEarth: 0.38,
    sunDistanceAU: 1.52,
    sunDistanceFormatted: '227.9 Million km (1.52 AU)',
    orbitalPeriodDays: 687,
    orbitalPeriodFormatted: '687 Earth Days (1.88 Years)',
    rotationPeriodHours: 24.62,
    rotationPeriodFormatted: '24h 37m 22s (1 Sol)',
    axialTiltDegrees: 25.19,
    meanTemperatureC: -63,
    tempFormatted: '-125°C to +20°C (Mean -63°C)',
    moonCount: 2,
    atmosphereGases: '95.3% Carbon Dioxide, 2.6% Nitrogen, 1.9% Argon',
    hasRings: false,
    ringDescription: 'No rings (Phobos may form a ring in ~30M yrs)',
    surfaceType: 'Iron-oxide dust, basaltic rock, giant volcanoes, dry river beds',
    magneticField: 'Localized crustal remanent magnetization patches',
    notableMissions: 'Viking, Pathfinder, Spirit & Opportunity, Curiosity, Perseverance',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA04304/PIA04304~orig.jpg',
    imageCaption: 'NASA Viking mosaic of Mars showing Valles Marineris canyon system.'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    category: 'Gas Giant',
    diameterKM: 139822,
    diameterFormatted: '139,822 km',
    massRelativeEarth: 317.8,
    massFormatted: '1.898 × 10²⁷ kg (317.8x Earth)',
    gravityMetersPerSecSq: 24.79,
    gravityRelativeEarth: 2.53,
    sunDistanceAU: 5.20,
    sunDistanceFormatted: '778.5 Million km (5.20 AU)',
    orbitalPeriodDays: 4333,
    orbitalPeriodFormatted: '11.86 Earth Years',
    rotationPeriodHours: 9.93,
    rotationPeriodFormatted: '9 hours 55 minutes (Fastest Spin)',
    axialTiltDegrees: 3.13,
    meanTemperatureC: -110,
    tempFormatted: '-110°C (at 1 bar pressure level)',
    moonCount: 95,
    atmosphereGases: '89% Hydrogen, 10% Helium, trace Methane & Ammonia',
    hasRings: true,
    ringDescription: 'Faint 4-component dusty ring system (Halo, Main, Gossamer)',
    surfaceType: 'No solid surface (fluid hydrogen-helium envelope)',
    magneticField: 'Immense magnetosphere 20,000x stronger than Earth',
    notableMissions: 'Pioneer 10/11, Voyager 1/2, Galileo, Cassini, Juno',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA22946/PIA22946~orig.jpg',
    imageCaption: 'NASA Juno mission view of Jupiter swirling turbulent cloud bands.'
  },
  {
    id: 'saturn',
    name: 'Saturn',
    category: 'Gas Giant',
    diameterKM: 116460,
    diameterFormatted: '116,460 km',
    massRelativeEarth: 95.2,
    massFormatted: '5.683 × 10²⁶ kg (95.2x Earth)',
    gravityMetersPerSecSq: 10.44,
    gravityRelativeEarth: 1.07,
    sunDistanceAU: 9.58,
    sunDistanceFormatted: '1.43 Billion km (9.58 AU)',
    orbitalPeriodDays: 10759,
    orbitalPeriodFormatted: '29.46 Earth Years',
    rotationPeriodHours: 10.56,
    rotationPeriodFormatted: '10 hours 33 minutes',
    axialTiltDegrees: 26.73,
    meanTemperatureC: -140,
    tempFormatted: '-140°C (at 1 bar pressure level)',
    moonCount: 146,
    atmosphereGases: '96.3% Hydrogen, 3.2% Helium, trace Methane & Ammonia',
    hasRings: true,
    ringDescription: 'Spectacular ice ring system spanning 282,000 km (~10m thick)',
    surfaceType: 'No solid surface (average density 0.687 g/cm³—less than water)',
    magneticField: 'Strong intrinsic dipolar magnetic field aligned with spin axis',
    notableMissions: 'Pioneer 11, Voyager 1/2, Cassini-Huygens',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA14922/PIA14922~orig.jpg',
    imageCaption: 'NASA Cassini spacecraft view of Saturn rings and atmospheric storm bands.'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    category: 'Ice Giant',
    diameterKM: 50724,
    diameterFormatted: '50,724 km',
    massRelativeEarth: 14.5,
    massFormatted: '8.681 × 10²⁵ kg (14.5x Earth)',
    gravityMetersPerSecSq: 8.69,
    gravityRelativeEarth: 0.89,
    sunDistanceAU: 19.22,
    sunDistanceFormatted: '2.87 Billion km (19.22 AU)',
    orbitalPeriodDays: 30687,
    orbitalPeriodFormatted: '84.01 Earth Years',
    rotationPeriodHours: 17.24,
    rotationPeriodFormatted: '17 hours 14 minutes (Retrograde Spin)',
    axialTiltDegrees: 97.77,
    meanTemperatureC: -195,
    tempFormatted: '-195°C down to -224°C (Coldest atmosphere)',
    moonCount: 28,
    atmosphereGases: '83% Hydrogen, 15% Helium, 2.3% Methane (gives cyan tint)',
    hasRings: true,
    ringDescription: '13 dark, narrow icy rings (Epsilon ring is thickest)',
    surfaceType: 'Fluid ice mantle of Water, Ammonia, and Methane ices',
    magneticField: 'Tilted 59° from spin axis and offset from planet center by 1/3 radius',
    notableMissions: 'Voyager 2 (1986 flyby), James Webb Space Telescope',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg',
    imageCaption: 'Voyager 2 true-color cyan image of Uranus smooth atmosphere.'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    category: 'Ice Giant',
    diameterKM: 49244,
    diameterFormatted: '49,244 km',
    massRelativeEarth: 17.1,
    massFormatted: '1.024 × 10²⁶ kg (17.1x Earth)',
    gravityMetersPerSecSq: 11.15,
    gravityRelativeEarth: 1.14,
    sunDistanceAU: 30.05,
    sunDistanceFormatted: '4.50 Billion km (30.05 AU)',
    orbitalPeriodDays: 60190,
    orbitalPeriodFormatted: '164.8 Earth Years',
    rotationPeriodHours: 16.11,
    rotationPeriodFormatted: '16 hours 6 minutes',
    axialTiltDegrees: 28.32,
    meanTemperatureC: -200,
    tempFormatted: '-200°C (Supersonic winds up to 2,100 km/h)',
    moonCount: 16,
    atmosphereGases: '80% Hydrogen, 19% Helium, 1.5% Methane (deep blue color)',
    hasRings: true,
    ringDescription: '5 faint dark rings containing dusty ring arcs (Adams, Le Verrier)',
    surfaceType: 'Water, Ammonia, Methane ice mantle around silicate-iron core',
    magneticField: 'Tilted 47° from spin axis and offset by 13,500 km',
    notableMissions: 'Voyager 2 (1989 flyby), Hubble Space Telescope, JWST',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA01142/PIA01142~orig.jpg',
    imageCaption: 'Voyager 2 view of Neptune showing the Great Dark Spot and white clouds.'
  },
  {
    id: 'ceres',
    name: 'Ceres',
    category: 'Dwarf Planet',
    diameterKM: 950,
    diameterFormatted: '950 km',
    massRelativeEarth: 0.00016,
    massFormatted: '9.39 × 10²⁰ kg (0.00016x Earth)',
    gravityMetersPerSecSq: 0.27,
    gravityRelativeEarth: 0.028,
    sunDistanceAU: 2.77,
    sunDistanceFormatted: '413.7 Million km (2.77 AU)',
    orbitalPeriodDays: 1682,
    orbitalPeriodFormatted: '4.60 Earth Years',
    rotationPeriodHours: 9.07,
    rotationPeriodFormatted: '9 hours 4 minutes',
    axialTiltDegrees: 4.0,
    meanTemperatureC: -105,
    tempFormatted: '-105°C (Sublimating water vapor exosphere)',
    moonCount: 0,
    atmosphereGases: 'Transient exosphere of water vapor from sublimating ice',
    hasRings: false,
    ringDescription: 'No rings',
    surfaceType: 'Clay, carbonates, sodium carbonate bright salt deposits (Occator)',
    magneticField: 'No magnetic field',
    notableMissions: 'NASA Dawn Mission (Orbit 2015-2018)',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA19567/PIA19567~orig.jpg',
    imageCaption: 'NASA Dawn spacecraft global view of dwarf planet Ceres and Occator crater.'
  },
  {
    id: 'pluto',
    name: 'Pluto',
    category: 'Dwarf Planet',
    diameterKM: 2376,
    diameterFormatted: '2,376 km',
    massRelativeEarth: 0.0022,
    massFormatted: '1.30 × 10²² kg (0.0022x Earth)',
    gravityMetersPerSecSq: 0.62,
    gravityRelativeEarth: 0.063,
    sunDistanceAU: 39.48,
    sunDistanceFormatted: '5.91 Billion km (39.48 AU)',
    orbitalPeriodDays: 90560,
    orbitalPeriodFormatted: '247.9 Earth Years',
    rotationPeriodHours: 153.3,
    rotationPeriodFormatted: '6.38 Earth Days (Retrograde Spin)',
    axialTiltDegrees: 122.5,
    meanTemperatureC: -229,
    tempFormatted: '-230°C to -220°C',
    moonCount: 5,
    atmosphereGases: 'Nitrogen, Methane, Carbon Monoxide (sublimates at perihelion)',
    hasRings: false,
    ringDescription: 'No rings',
    surfaceType: 'Nitrogen ice glaciers (Sputnik Planitia), water-ice mountains',
    magneticField: 'No intrinsic magnetic field',
    notableMissions: 'NASA New Horizons (2015 Flyby)',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA19857/PIA19857~orig.jpg',
    imageCaption: 'NASA New Horizons high-resolution portrait of Pluto heart-shaped glacier.'
  }
];

// 🧬 5. ASTROBIOLOGY MOONS (KNOWN VS UNKNOWN)
export const ASTROBIOLOGY_MOONS: AstrobiologyMoon[] = [
  {
    id: 'europa',
    name: 'Europa',
    parentBody: 'Jupiter System',
    title: 'An Ocean Under Ice?',
    diameterKM: '3,122 km',
    keyFeature: 'Global subsurface ocean beneath 15-25 km ice crust containing 2x Earth ocean volume.',
    known: [
      'Smooth ice shell with lineae fracture networks',
      'Strong magnetic induction from conductive fluid subsurface layer',
      'Tidal heating generated by orbital resonance with Io and Ganymede',
      'Surface deposits of salts (magnesium sulfate, sodium chloride)'
    ],
    suspected: [
      'Subsurface ocean depth of 60 to 150 km',
      'Hydrothermal vents on the ocean floor interacting with silicate mantle',
      'Plumes spraying water vapor into space through ice cracks'
    ],
    unknown: [
      'Whether life or prebiotic chemistry exists in the ocean',
      'Exact salinity, pH, and chemical redox balance of ocean water',
      'Thickness variations of the ice shell across polar vs equatorial regions'
    ],
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00502/PIA00502~orig.jpg',
    source: 'NASA Europa Clipper Mission',
    sourceUrl: 'https://www.jpl.nasa.gov/missions/europa-clipper'
  },
  {
    id: 'enceladus',
    name: 'Enceladus',
    parentBody: 'Saturn System',
    title: 'The Moon That Sprays an Ocean Into Space',
    diameterKM: '504 km',
    keyFeature: 'Active cryovolcanic plumes spraying water vapor, ice grains, and organic molecules.',
    known: [
      'Over 100 geysers venting from "Tiger Stripe" fractures at the south pole',
      'Plumes contain H₂O, CO₂, CH₄, NH₃, and complex macromolecular organic compounds',
      'Subsurface ocean is alkaline (pH 9-11) with hydrothermal silica nanoparticles',
      'Cassini flew directly through the plumes and sampled ocean chemistry'
    ],
    suspected: [
      'Active seafloor hydrothermal activity powered by tidal flexure',
      'Global ocean under ice shell ~5-10 km thick at south pole'
    ],
    unknown: [
      'Whether methanogenic or chemosynthetic microbial life exists',
      'Age of the subsurface ocean and how long tidal heating will persist'
    ],
    imageUrl: 'https://images-assets.nasa.gov/image/PIA17202/PIA17202~orig.jpg',
    source: 'NASA Cassini Mission Results',
    sourceUrl: 'https://science.nasa.gov/mission/cassini/'
  },
  {
    id: 'titan',
    name: 'Titan',
    parentBody: 'Saturn System',
    title: 'The Moon with Rivers, Lakes, and Methane Rain',
    diameterKM: '5,149 km',
    keyFeature: 'Dense nitrogen atmosphere (1.45 bar) with a complete hydrological cycle based on liquid methane.',
    known: [
      'Only moon with a dense atmosphere (98.4% N₂, 1.4% CH₄)',
      'Lakes and seas of liquid methane/ethane (Kraken Mare, Ligeia Mare)',
      'Complex atmospheric tholin organic haze created by solar UV photons',
      'Subsurface liquid water-ammonia ocean buried ~100 km deep'
    ],
    suspected: [
      'Cryovolcanism releasing methane gas into the atmosphere',
      'Prebiotic hydrocarbon chemistry operating in liquid methane at -179°C'
    ],
    unknown: [
      'Whether non-water-based life ("life as we do not know it") could exist in methane lakes',
      'Rate of organic exchange between the surface and deep internal ocean'
    ],
    imageUrl: 'https://images-assets.nasa.gov/image/PIA20016/PIA20016~orig.jpg',
    source: 'NASA Dragonfly Mission',
    sourceUrl: 'https://www.jpl.nasa.gov/missions/dragonfly'
  },
  {
    id: 'io',
    name: 'Io',
    parentBody: 'Jupiter System',
    title: 'The Most Volcanically Active World Known',
    diameterKM: '3,643 km',
    keyFeature: 'Over 400 active volcanoes continually resurfacing the moon with silicate lava and sulfur.',
    known: [
      'Extreme tidal dissipation from Jupiter orbital forcing flexes Io ground by 100 meters',
      'Volcanic plumes reach heights of 500 km above the surface',
      'Lava temperatures exceed 1,300°C (hotter than current Earth volcanoes)',
      'Feeds Jupiter plasma torus with 1 ton of sulfur/oxygen ions per second'
    ],
    suspected: [
      'Subsurface global magma ocean beneath the thin lithosphere',
      'Lava lakes with continuous crustal turnover cycles'
    ],
    unknown: [
      'Exact proportion of tidal heating occurring in the asthenosphere vs core',
      'How Io internal thermal budget evolved over 4.5 billion years'
    ],
    imageUrl: 'https://images-assets.nasa.gov/image/PIA02308/PIA02308~orig.jpg',
    source: 'NASA Galileo Mission',
    sourceUrl: 'https://science.nasa.gov/mission/galileo/'
  },
  {
    id: 'ganymede',
    name: 'Ganymede',
    parentBody: 'Jupiter System',
    title: 'The Moon Bigger Than Mercury with its Own Magnetic Field',
    diameterKM: '5,268 km',
    keyFeature: 'Largest moon in the Solar System; only satellite known to possess an internally generated magnetic field.',
    known: [
      'Larger than planet Mercury (5,268 km vs 4,879 km)',
      'Generates its own dipolar magnetic field via liquid metal core dynamo',
      'Subsurface liquid ocean sandwiched between deep ice phases'
    ],
    suspected: [
      'Multiple stacked ocean layers separated by high-pressure ice polymorphs',
      'Auroral belts in its thin oxygen exosphere wobble due to Jupiter magnetosphere'
    ],
    unknown: [
      'Degree of mineral interaction between the deepest ocean layer and rock core',
      'Exact composition of dark cratered terrain vs bright grooved terrain'
    ],
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00716/PIA00716~orig.jpg',
    source: 'ESA JUICE Mission & NASA Juno',
    sourceUrl: 'https://www.esa.int/Science_Exploration/Space_Science/JUICE'
  },
  {
    id: 'triton',
    name: 'Triton',
    parentBody: 'Neptune System',
    title: 'The Moon That Orbits Backward',
    diameterKM: '2,706 km',
    keyFeature: 'Captured Kuiper Belt Object orbiting Neptune in a retrograde direction.',
    known: [
      'Orbits in the opposite direction of Neptune rotation (Retrograde)',
      'Active nitrogen gas geysers erupting 8 km high recorded by Voyager 2',
      'Cantaloupe terrain texture caused by diapirism in crustal ice',
      'Tidal deceleration will cause Triton to crash into Neptune in ~3.6B years'
    ],
    suspected: [
      'Subsurface liquid ocean maintained by radiogenic decay and tidal flexing',
      'Originated in the Kuiper Belt before gravitational capture by Neptune'
    ],
    unknown: [
      'Exact capture mechanism and orbital circularization timescale',
      'Composition of nitrogen-methane frost polar cap seasonal changes'
    ],
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00317/PIA00317~orig.jpg',
    source: 'NASA Voyager 2 Mission',
    sourceUrl: 'https://voyager.jpl.nasa.gov/'
  }
];

// 🚀 6. HISTORIC & ACTIVE SOLAR SYSTEM MISSIONS
export const SOLAR_SYSTEM_MISSIONS: SolarMissionItem[] = [
  {
    id: 'voyager-1',
    name: 'Voyager 1',
    destination: 'Jupiter, Saturn, Heliopause & Interstellar Space',
    launchYear: '1977',
    arrivalYear: '2012 (Crossed Heliopause)',
    agency: 'NASA / JPL',
    purpose: 'Grand Tour of outer planets and interstellar boundary exploration.',
    majorDiscoveries: 'Discovered Jupiter rings, active volcanoes on Io, complex structure of Saturn rings; first spacecraft to enter interstellar space (~162 AU distant).',
    status: 'Active',
    sourceUrl: 'https://voyager.jpl.nasa.gov/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA21752/PIA21752~orig.jpg'
  },
  {
    id: 'voyager-2',
    name: 'Voyager 2',
    destination: 'Jupiter, Saturn, Uranus, Neptune & Interstellar Space',
    launchYear: '1977',
    arrivalYear: '2018 (Crossed Heliopause)',
    agency: 'NASA / JPL',
    purpose: 'Only spacecraft to visit all four outer giant planets (Jupiter, Saturn, Uranus, Neptune).',
    majorDiscoveries: 'Only close flyby of Uranus (1986) and Neptune (1989); discovered Neptune Great Dark Spot, Triton geysers, Uranus 10 new moons and rings.',
    status: 'Active',
    sourceUrl: 'https://voyager.jpl.nasa.gov/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA22849/PIA22849~orig.jpg'
  },
  {
    id: 'cassini',
    name: 'Cassini-Huygens',
    destination: 'Saturn System & Titan Surface',
    launchYear: '1997',
    arrivalYear: '2004 - 2017',
    agency: 'NASA / ESA / ASI',
    purpose: 'Deep orbital study of Saturn, its rings, and landing Huygens probe on Titan.',
    majorDiscoveries: 'Discovered Enceladus ocean plumes, methane lakes on Titan, Saturn hexagonal polar jet, ring particle dynamics; ended in Grand Finale dive into Saturn.',
    status: 'Completed',
    sourceUrl: 'https://science.nasa.gov/mission/cassini/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA03883/PIA03883~orig.jpg'
  },
  {
    id: 'new-horizons',
    name: 'New Horizons',
    destination: 'Pluto System & Kuiper Belt (Arrokoth)',
    launchYear: '2006',
    arrivalYear: '2015 (Pluto), 2019 (Arrokoth)',
    agency: 'NASA / APL',
    purpose: 'First reconnaissance flyby of Pluto and distant Kuiper Belt objects.',
    majorDiscoveries: 'Revealed Pluto nitrogen glaciers, water-ice mountains, complex atmosphere, Charon red polar cap; imaged contact binary Arrokoth at 44 AU.',
    status: 'Active',
    sourceUrl: 'https://science.nasa.gov/mission/new-horizons/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg'
  },
  {
    id: 'juno',
    name: 'Juno',
    destination: 'Jupiter Orbit',
    launchYear: '2011',
    arrivalYear: '2016 - Present',
    agency: 'NASA / JPL',
    purpose: 'Polar orbit investigation of Jupiter gravity field, magnetosphere, and deep atmospheric structure.',
    majorDiscoveries: 'Mapped polar cyclone clusters, measured water abundance in equatorial atmosphere, discovered dilute metallic core.',
    status: 'Active',
    sourceUrl: 'https://www.jpl.nasa.gov/missions/juno',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA21974/PIA21974~orig.jpg'
  },
  {
    id: 'perseverance',
    name: 'Perseverance & Ingenuity',
    destination: 'Mars (Jezero Crater)',
    launchYear: '2020',
    arrivalYear: '2021 - Present',
    agency: 'NASA / JPL',
    purpose: 'Search for ancient signs of biosignatures and collect sealed core samples for future Earth return.',
    majorDiscoveries: 'Confirmed ancient river delta sediments in Jezero crater; Ingenuity helicopter completed 72 powered flights on Mars.',
    status: 'Active',
    sourceUrl: 'https://mars.nasa.gov/mars2020/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA23764/PIA23764~orig.jpg'
  },
  {
    id: 'dawn',
    name: 'Dawn',
    destination: 'Vesta & Ceres (Asteroid Belt)',
    launchYear: '2007',
    arrivalYear: '2011 (Vesta), 2015 (Ceres)',
    agency: 'NASA / JPL',
    purpose: 'First spacecraft to orbit two separate extraterrestrial bodies in a single mission using ion propulsion.',
    majorDiscoveries: 'Proved Ceres is a water-rich dwarf planet with sodium carbonate deposits; mapped Vesta metallic differentiated interior.',
    status: 'Completed',
    sourceUrl: 'https://science.nasa.gov/mission/dawn/',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA19567/PIA19567~orig.jpg'
  },
  {
    id: 'europa-clipper',
    name: 'Europa Clipper',
    destination: 'Jupiter System (Europa Flybys)',
    launchYear: '2024',
    arrivalYear: '2030 (En Route)',
    agency: 'NASA / JPL',
    purpose: 'Perform 49 close flybys of Europa to determine if its subsurface ocean has conditions suitable for life.',
    majorDiscoveries: 'Will measure ice shell thickness, ocean depth, surface organic composition, and active plume activity.',
    status: 'En Route',
    sourceUrl: 'https://www.jpl.nasa.gov/missions/europa-clipper',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA26300/PIA26300~orig.jpg'
  }
];

// 🌠 7. 30+ "THINGS THAT SOUND FAKE BUT ARE TRUE" WOW FACTS
export const SOLAR_SYSTEM_30_WOW_FACTS: SolarSystemWowFact[] = [
  {
    id: 'wow-1',
    title: 'A Day on Venus is Longer Than a Venus Year',
    shortFact: 'Venus takes 243 Earth days to rotate once, but orbits the Sun in only 225 Earth days.',
    explanation: 'Because Venus rotates backward (retrograde) extremely slowly, its sidereal day exceeds its orbital year. Furthermore, the Sun rises in the west and sets in the east.',
    category: 'Planets',
    wowLevel: 5,
    targetWorld: 'Venus',
    sourceName: 'NASA Venus Facts',
    sourceUrl: 'https://science.nasa.gov/venus/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-2',
    title: 'Venus is Hotter Than Mercury (Despite Being Farther From Sun)',
    shortFact: 'Mercury surface hits 430°C, but Venus stays locked at a scorching 465°C day and night.',
    explanation: 'Venus thick 96.5% CO₂ atmosphere generates a runaway greenhouse effect with 93 bar surface pressure—hot enough to melt lead.',
    category: 'Planets',
    wowLevel: 5,
    targetWorld: 'Venus',
    sourceName: 'NASA Planetary Science',
    sourceUrl: 'https://science.nasa.gov/venus/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-3',
    title: 'Jupiter is More Massive Than All Other Planets Combined',
    shortFact: 'At 317.8 Earth masses, Jupiter contains 2.5x the mass of all 7 other planets put together.',
    explanation: 'If Jupiter were 80 times more massive, gravitational pressure would ignition nuclear fusion, turning it into a red dwarf star.',
    category: 'Planets',
    wowLevel: 5,
    targetWorld: 'Jupiter',
    sourceName: 'NASA Jupiter Facts',
    sourceUrl: 'https://science.nasa.gov/jupiter/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-4',
    title: 'Jupiter Moon Ganymede is Larger Than Planet Mercury',
    shortFact: 'Ganymede has a diameter of 5,268 km, making it larger than Mercury (4,879 km).',
    explanation: 'Ganymede is the largest satellite in the Solar System and the only moon known to generate its own internal magnetic field.',
    category: 'Moons',
    wowLevel: 5,
    targetWorld: 'Ganymede',
    sourceName: 'NASA Moons Overview',
    sourceUrl: 'https://science.nasa.gov/jupiter/moons/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-5',
    title: 'Saturn Average Density is Lower Than Water',
    shortFact: 'Saturn has a density of 0.687 g/cm³. If you had a giant bathtub, Saturn would float!',
    explanation: 'Made almost entirely of light hydrogen and helium gases, Saturn is the only planet in the Solar System less dense than liquid water.',
    category: 'Planets',
    wowLevel: 5,
    targetWorld: 'Saturn',
    sourceName: 'NASA Saturn Facts',
    sourceUrl: 'https://science.nasa.gov/saturn/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-6',
    title: 'Uranus Rotates Sideways at a 97.77° Axial Tilt',
    shortFact: 'Uranus essentially rolls along its orbital path like a rolling bowling ball.',
    explanation: 'Likely caused by an Earth-sized protoplanet collision during early formation, Uranus poles experience 42 years of continuous sunlight followed by 42 years of darkness.',
    category: 'Planets',
    wowLevel: 5,
    targetWorld: 'Uranus',
    sourceName: 'NASA Uranus Facts',
    sourceUrl: 'https://science.nasa.gov/uranus/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-7',
    title: 'Neptune Has Winds Blowing Faster Than 2,000 km/h',
    shortFact: 'Supersonic wind speeds on Neptune reach up to 2,100 km/h (580 m/s)—5x faster than Earth extreme hurricanes.',
    explanation: 'Despite receiving less than 1% of Earth solar energy, Neptune internal heat flux drives the fastest atmospheric winds recorded in the Solar System.',
    category: 'Planets',
    wowLevel: 5,
    targetWorld: 'Neptune',
    sourceName: 'NASA Neptune Facts',
    sourceUrl: 'https://science.nasa.gov/neptune/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-8',
    title: 'Pluto and Charon Orbit a Shared Center of Mass Outside Pluto',
    shortFact: 'Charon is so massive relative to Pluto that their barycenter lies in open space between them.',
    explanation: 'Rather than Charon orbiting Pluto, both worlds orbit a common point in space 960 km above Pluto surface, making them a true binary system.',
    category: 'Small Worlds',
    wowLevel: 5,
    targetWorld: 'Pluto',
    sourceName: 'NASA New Horizons',
    sourceUrl: 'https://science.nasa.gov/mission/new-horizons/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-9',
    title: 'Pluto Can Be Closer to the Sun Than Neptune',
    shortFact: 'Due to Pluto eccentric orbit, Pluto was closer to the Sun than Neptune from 1979 to 1999.',
    explanation: 'Pluto 248-year orbit crosses inside Neptune orbit for ~20 years. However, a 3:2 orbital resonance prevents the two worlds from ever colliding.',
    category: 'Orbits & Gravity',
    wowLevel: 4,
    targetWorld: 'Pluto',
    sourceName: 'NASA Planetary Dynamics',
    sourceUrl: 'https://science.nasa.gov/dwarf-planets/pluto/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-10',
    title: 'Neptune Moon Triton Orbits Backward (Retrograde)',
    shortFact: 'Triton is the only large moon in the Solar System that orbits in reverse to its planet spin.',
    explanation: 'This retrograde motion proves Triton was originally an independent Kuiper Belt Object captured by Neptune gravity billions of years ago.',
    category: 'Moons',
    wowLevel: 5,
    targetWorld: 'Triton',
    sourceName: 'NASA Voyager 2 Data',
    sourceUrl: 'https://voyager.jpl.nasa.gov/',
    scientificStatus: 'Observed'
  },
  {
    id: 'wow-11',
    title: 'Jupiter Moon Io Has Over 400 Active Volcanoes',
    shortFact: 'Io is the most volcanically active body in the entire Solar System.',
    explanation: 'Gravitational tidal flexing between Jupiter, Europa, and Ganymede continuously melts Io interior, driving lava plumes 500 km high.',
    category: 'Moons',
    wowLevel: 5,
    targetWorld: 'Io',
    sourceName: 'NASA Galileo Mission',
    sourceUrl: 'https://science.nasa.gov/mission/galileo/',
    scientificStatus: 'Observed'
  },
  {
    id: 'wow-12',
    title: 'Europa Hides a Global Subsurface Ocean Beneath Ice',
    shortFact: 'Europa ocean contains twice as much liquid water as all Earth oceans combined.',
    explanation: 'Squeezed by Jupiter gravity, a 100-km-deep liquid ocean stays warm beneath a 15-25 km thick crust of water ice.',
    category: 'Moons',
    wowLevel: 5,
    targetWorld: 'Europa',
    sourceName: 'NASA Europa Clipper',
    sourceUrl: 'https://www.jpl.nasa.gov/missions/europa-clipper',
    scientificStatus: 'Modelled'
  },
  {
    id: 'wow-13',
    title: 'Saturn Moon Enceladus Sprays Ocean Water into Space',
    shortFact: 'Geysers at Enceladus south pole blast ice crystals and organics hundreds of km into orbit.',
    explanation: 'NASA Cassini probe flew directly through these plumes, detecting water vapor, simple organic molecules, and silica nanoparticles from hydrothermal vents.',
    category: 'Moons',
    wowLevel: 5,
    targetWorld: 'Enceladus',
    sourceName: 'NASA Cassini Data',
    sourceUrl: 'https://science.nasa.gov/mission/cassini/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-14',
    title: 'On Titan, it Rains Liquid Methane into Ethane Lakes',
    shortFact: 'Titan is the only world besides Earth with clouds, rain, rivers, and seas of liquid.',
    explanation: 'At -179°C surface temperature, water acts like solid rock, while methane functions as the atmospheric fluid creating a complete hydrologic cycle.',
    category: 'Moons',
    wowLevel: 5,
    targetWorld: 'Titan',
    sourceName: 'NASA Dragonfly',
    sourceUrl: 'https://www.jpl.nasa.gov/missions/dragonfly',
    scientificStatus: 'Observed'
  },
  {
    id: 'wow-15',
    title: 'Dwarf Planet Ceres May Contain Up to 25% Water Ice by Mass',
    shortFact: 'Ceres contains more fresh water locked inside its mantle than all of Earth rivers and lakes.',
    explanation: 'NASA Dawn spacecraft discovered bright sodium carbonate salt spots (Occator crater) left behind by sublimating subsurface brines.',
    category: 'Small Worlds',
    wowLevel: 4,
    targetWorld: 'Ceres',
    sourceName: 'NASA Dawn Mission',
    sourceUrl: 'https://science.nasa.gov/mission/dawn/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-16',
    title: 'Kuiper Belt World Arrokoth Looks Like Two Snowmen Glued Together',
    shortFact: 'Arrokoth is a contact binary formed by two planetesimals gently touching at low speed.',
    explanation: 'Visited by NASA New Horizons at 44 AU distance on Jan 1, 2019, Arrokoth preserves untouched planetesimal building blocks from 4.5B years ago.',
    category: 'Small Worlds',
    wowLevel: 5,
    targetWorld: 'Arrokoth',
    sourceName: 'NASA New Horizons',
    sourceUrl: 'https://science.nasa.gov/mission/new-horizons/',
    scientificStatus: 'Observed'
  },
  {
    id: 'wow-17',
    title: 'The Main Asteroid Belt is Mostly Empty Space',
    shortFact: 'Movies show dense asteroid fields, but in reality, asteroids are separated by 1 to 3 million km!',
    explanation: 'If you stood on an average asteroid, you could not see another asteroid with the naked eye. Spacecraft traverse the belt with zero risk of random collision.',
    category: 'Small Worlds',
    wowLevel: 4,
    sourceName: 'NASA Asteroids Overview',
    sourceUrl: 'https://science.nasa.gov/asteroids/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-18',
    title: 'The Sun Takes 230 Million Years to Orbit the Milky Way',
    shortFact: 'One "Galactic Year" for the Sun equals 230 million Earth years.',
    explanation: 'Traveling at 792,000 km/h around the Galactic Center, the last time the Sun was in its current position, dinosaurs were just emerging!',
    category: 'Orbits & Gravity',
    wowLevel: 5,
    sourceName: 'NASA Astrophysics',
    sourceUrl: 'https://science.nasa.gov/astrophysics/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-19',
    title: 'Voyager 1 Reached Interstellar Space Before Leaving the Solar System',
    shortFact: 'Voyager 1 crossed the Heliopause in 2012, but will take 300 years to reach the Oort Cloud.',
    explanation: 'The Heliopause is the magnetic boundary of solar wind (~120 AU). The gravitational domain of the Sun extends out to the Oort Cloud (~100,000 AU).',
    category: 'Exploration',
    wowLevel: 5,
    sourceName: 'NASA Voyager Mission',
    sourceUrl: 'https://voyager.jpl.nasa.gov/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-20',
    title: 'Neptune Was Discovered Using Pure Mathematics Before Being Seen',
    shortFact: 'Astronomers predicted Neptune position by analyzing gravitational wobbles in Uranus orbit.',
    explanation: 'French mathematician Urbain Le Verrier calculated its exact location in 1846. Johann Galle pointed a telescope at the spot and found Neptune within 1 degree!',
    category: 'Exploration',
    wowLevel: 5,
    targetWorld: 'Neptune',
    sourceName: 'NASA History Division',
    sourceUrl: 'https://science.nasa.gov/neptune/facts/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-21',
    title: 'Mercury Has Water Ice Sealed in Permanently Shadowed Craters',
    shortFact: 'Despite daytime heat of 430°C, deep polar crater floors remain locked in permanent darkness at -180°C.',
    explanation: 'Radar telemetry from NASA MESSENGER confirmed thick deposits of water ice and frozen organic compounds inside deep polar craters.',
    category: 'Planets',
    wowLevel: 5,
    targetWorld: 'Mercury',
    sourceName: 'NASA MESSENGER Mission',
    sourceUrl: 'https://science.nasa.gov/mission/messenger/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-22',
    title: 'Jupiter, Uranus, and Neptune All Have Ring Systems',
    shortFact: 'Saturn is not the only ringed planet—all four giant planets possess rings.',
    explanation: 'Jupiter has 4 dusty rings, Uranus has 13 narrow dark icy rings, and Neptune has 5 dusty ring arcs, though Saturn remains the brightest.',
    category: 'Planets',
    sourceName: 'NASA Planetary Rings Node',
    sourceUrl: 'https://pds-rings.seti.org/',
    scientificStatus: 'Observed'
  },
  {
    id: 'wow-23',
    title: 'Saturn Rings are Hundreds of Thousands of km Wide, but Only 10 Meters Thick',
    shortFact: 'Proportionally, Saturn main rings are 100 times thinner than a razor blade!',
    explanation: 'Spanning 282,000 km across, the main rings (A, B, C) consist of 99% pure water ice particles ranging from dust grains to house-sized boulders.',
    category: 'Planets',
    targetWorld: 'Saturn',
    sourceName: 'NASA Cassini Mission',
    sourceUrl: 'https://science.nasa.gov/mission/cassini/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-24',
    title: 'Mars Has the Solar System Largest Volcano (Olympus Mons)',
    shortFact: 'Olympus Mons stands 21.9 km tall—nearly 3x higher than Mount Everest!',
    explanation: 'Covering an area the size of Arizona, Olympus Mons grew so large because Mars crust remains stationary over stationary magma hotspots.',
    category: 'Planets',
    wowLevel: 5,
    targetWorld: 'Mars',
    sourceName: 'USGS Astrogeology',
    sourceUrl: 'https://astrogeology.usgs.gov/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-25',
    title: 'Mars Has a Canyon System Long Enough to Stretch Across North America',
    shortFact: 'Valles Marineris is 4,000 km long, 200 km wide, and up to 7 km deep.',
    explanation: 'Formed by tectonic cracking during the uplift of the Tharsis volcanic region, it dwarfs Earth Grand Canyon (446 km long).',
    category: 'Planets',
    wowLevel: 5,
    targetWorld: 'Mars',
    sourceName: 'NASA Mars Exploration',
    sourceUrl: 'https://mars.nasa.gov/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-26',
    title: 'Dwarf Planet Haumea Spins So Fast It Is Shaped Like an Ellipsoid Rugby Ball',
    shortFact: 'Haumea completes one full rotation every 3.9 hours.',
    explanation: 'Centrifugal forces stretching its icy-rock body turn Haumea into a triaxial ellipsoid with an elongated length twice its width.',
    category: 'Small Worlds',
    wowLevel: 4,
    targetWorld: 'Haumea',
    sourceName: 'NASA Dwarf Planets',
    sourceUrl: 'https://science.nasa.gov/dwarf-planets/',
    scientificStatus: 'Measured'
  },
  {
    id: 'wow-27',
    title: 'Comet Tails Always Point Away From the Sun, Not Behind Their Motion',
    shortFact: 'A comet leaving the Sun travels head-first into its own tail!',
    explanation: 'Solar wind and photon radiation pressure push dust and ionized gas outward away from the Sun regardless of the comet flight direction.',
    category: 'Small Worlds',
    wowLevel: 4,
    sourceName: 'NASA Comets Overview',
    sourceUrl: 'https://science.nasa.gov/comets/',
    scientificStatus: 'Observed'
  },
  {
    id: 'wow-28',
    title: 'Jupiter Acts as a Gravitational Slingshot Engine for Comets',
    shortFact: 'Jupiter massive gravity alters small body trajectories, trapping or ejecting them.',
    explanation: 'Rather than acting purely as a shield, Jupiter gravity nudges some comets into inner Solar System orbits while flinging others out into interstellar space.',
    category: 'Orbits & Gravity',
    wowLevel: 4,
    targetWorld: 'Jupiter',
    sourceName: 'NASA JPL Orbital Mechanics',
    sourceUrl: 'https://ssd.jpl.nasa.gov/',
    scientificStatus: 'Modelled'
  },
  {
    id: 'wow-29',
    title: 'Galileo Discovery of Jupiter Moons Proved Earth Is Not the Center of Everything',
    shortFact: 'In 1610, Galileo observed 4 moons orbiting Jupiter, dismantling geocentric astronomy.',
    explanation: 'Seeing celestial bodies orbiting something other than Earth provided empirical evidence for Copernicus heliocentric planetary model.',
    category: 'Exploration',
    wowLevel: 5,
    sourceName: 'NASA History Division',
    sourceUrl: 'https://science.nasa.gov/history/',
    scientificStatus: 'Observed'
  },
  {
    id: 'wow-30',
    title: 'Trojan Asteroids Share Orbits With Planets at Gravitational Lagrange Points L4 and L5',
    shortFact: 'Over 12,000 Trojan asteroids orbit in front of and behind Jupiter in stable gravitational pockets.',
    explanation: 'NASA Lucy mission launched in 2021 to perform the first close-up exploration of Jupiter Trojan asteroids.',
    category: 'Small Worlds',
    wowLevel: 4,
    sourceName: 'NASA Lucy Mission',
    sourceUrl: 'https://www.nasa.gov/mission_pages/lucy/main/index.html',
    scientificStatus: 'Observed'
  }
];

// 🧠 8. MYTH VS REALITY CARDS
export const SOLAR_SYSTEM_MYTH_VS_REALITY: SolarMythVsReality[] = [
  {
    id: 'myth-1',
    myth: 'The Solar System Ends at Neptune or Pluto.',
    reality: 'The Solar System extends past Neptune into the Kuiper Belt, past the Heliopause (~120 AU), and out to the spherical Oort Cloud (~100,000 AU).',
    explanation: 'Neptune is the furthest major planet, but the gravitational domain of the Sun extends nearly 2 light-years to the outer boundary of the Oort Cloud.',
    sourceName: 'NASA Oort Cloud Facts',
    sourceUrl: 'https://science.nasa.gov/solar-system/oort-cloud/'
  },
  {
    id: 'myth-2',
    myth: 'Saturn is the Only Planet With Rings.',
    reality: 'Jupiter, Saturn, Uranus, and Neptune all possess ring systems, as do smaller bodies like dwarf planet Haumea and asteroid Chariklo.',
    explanation: 'Saturn rings are the brightest because they consist of high-albedo water ice, whereas Jupiter, Uranus, and Neptune rings are composed of dark carbonaceous dust and radiation-darkened organics.',
    sourceName: 'NASA Planetary Rings Node',
    sourceUrl: 'https://pds-rings.seti.org/'
  },
  {
    id: 'myth-3',
    myth: 'The Asteroid Belt is Packed With Densely Crowded Space Rocks.',
    reality: 'The Asteroid Belt is mostly empty space. Asteroids are separated by an average distance of 1 to 3 million km.',
    explanation: 'Sci-fi movies depict dodging asteroids side-by-side, but NASA spacecraft traverse the main belt safely without needing collision avoidance maneuvers.',
    sourceName: 'NASA Asteroid Overview',
    sourceUrl: 'https://science.nasa.gov/asteroids/'
  },
  {
    id: 'myth-4',
    myth: 'Planet Nine Has Been Discovered and Confirmed.',
    reality: 'Planet Nine remains a mathematical hypothesis based on orbital clustering of trans-Neptunian objects. No direct optical detection has occurred.',
    explanation: 'Researchers Caltech Batygin and Brown proposed Planet Nine to explain highly inclined Kuiper Belt orbits, but it has not been directly imaged.',
    sourceName: 'NASA Exoplanet / Solar System Research',
    sourceUrl: 'https://science.nasa.gov/solar-system/planet-nine/'
  },
  {
    id: 'myth-5',
    myth: 'Pluto is Just a Frozen Featureless Rock.',
    reality: 'Pluto is a geologically active world with nitrogen glaciers (Sputnik Planitia), water-ice mountains, liquid water ocean candidates, and 5 moons.',
    explanation: 'NASA New Horizons 2015 flyby revealed dynamic surface convection, atmospheric hazes, and a complex binary relationship with Charon.',
    sourceName: 'NASA New Horizons Mission',
    sourceUrl: 'https://science.nasa.gov/mission/new-horizons/'
  }
];

// 🎮 9. EXPLORATION GAME MISSIONS
export const SOLAR_SYSTEM_GAME_MISSIONS: GameMission[] = [
  {
    id: 1,
    title: 'Find the Hottest Planet in the System',
    objective: 'Locate the planet with a 465°C surface locked in a runaway greenhouse effect.',
    targetId: 'venus',
    hint: 'It is the 2nd planet from the Sun with dense carbon dioxide clouds.',
    rewardBadge: '🔥 Extreme Greenhouse Explorer'
  },
  {
    id: 2,
    title: 'Find the Fastest Orbital World',
    objective: 'Identify the inner world completing a full Sun orbit in only 88 Earth days.',
    targetId: 'mercury',
    hint: 'It is the closest planet to the Sun.',
    rewardBadge: '⚡ Orbital Speedmaster'
  },
  {
    id: 3,
    title: 'Find the Largest Moon in the Solar System',
    objective: 'Locate the moon larger than planet Mercury possessing its own magnetic field.',
    targetId: 'ganymede',
    hint: 'It orbits Jupiter and has a diameter of 5,268 km.',
    rewardBadge: '🛰️ Galilean Titan Finder'
  },
  {
    id: 4,
    title: 'Find the Most Volcanically Active World Known',
    objective: 'Locate the moon flexed by tidal forces with over 400 active volcanoes.',
    targetId: 'io',
    hint: 'It is Jupiter innermost Galilean satellite.',
    rewardBadge: '🌋 Geothermal Vulcanist'
  },
  {
    id: 5,
    title: 'Find the World Spraying an Ocean into Space',
    objective: 'Identify the moon venting water geysers from "Tiger Stripe" fractures.',
    targetId: 'enceladus',
    hint: 'It orbits Saturn and was sampled by Cassini.',
    rewardBadge: '🌊 Subsurface Ocean Hydro-Analyst'
  },
  {
    id: 6,
    title: 'Find the Sideways Rotating Planet',
    objective: 'Locate the ice giant with an extreme 97.77° axial tilt rolling along its orbit.',
    targetId: 'uranus',
    hint: 'It is the cyan 7th planet from the Sun.',
    rewardBadge: '🪐 Axial Tilt Navigator'
  },
  {
    id: 7,
    title: 'Find the World With Supersonic 2,000 km/h Winds',
    objective: 'Identify the most distant gas/ice giant with supersonic storm currents.',
    targetId: 'neptune',
    hint: 'It is the deep blue 8th planet discovered via math.',
    rewardBadge: '💨 Supersonic Atmosphere Observer'
  },
  {
    id: 8,
    title: 'Reach the Kuiper Belt Binary System',
    objective: 'Find the dwarf planet system orbiting a shared barycenter outside its primary center.',
    targetId: 'pluto',
    hint: 'Visited by NASA New Horizons in July 2015.',
    rewardBadge: '♇ Binary Barycenter Surveyor'
  }
];
