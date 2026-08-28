import type { Planet } from '../types';
import { PLANET_IMAGES } from './sources';

export const planetsData: Planet[] = [
  {
    id: 'earth',
    name: 'Earth',
    type: 'Terrestrial',
    subtitle: 'Our Blue Marble & Only Known Haven for Life',
    summary: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 70.8% of its surface is covered by oceans, while 29.2% consists of continents and islands.',
    image: PLANET_IMAGES.earth.imageUrl,
    heroImage: PLANET_IMAGES.earth.imageUrl,
    physical: {
      diameter: '12,742 km',
      mass: '5.972 × 10²⁴ kg',
      gravity: '9.807 m/s²',
      averageTemp: '15°C (288 K)',
      surfaceArea: '510.1 million km²',
      density: '5.514 g/cm³',
      escapeVelocity: '11.186 km/s',
      radius: '6,371 km'
    },
    orbit: {
      distanceFromSun: '149.6 million km (1 AU)',
      distanceFromEarth: '0 km',
      orbitalPeriod: '365.256 days',
      orbitalSpeed: '29.78 km/s',
      eccentricity: '0.0167',
      axialTilt: '23.44°',
      dayLength: '23h 56m 4s'
    },
    atmosphere: {
      composition: ['78.08% Nitrogen (N₂)', '20.95% Oxygen (O₂)', '0.93% Argon', '0.04% Carbon Dioxide (CO₂)', 'Trace Water Vapor'],
      pressure: '101.325 kPa (1 atm)',
      description: 'Earth’s thick nitrogen-oxygen atmosphere protects the surface from meteoroids, blocks harmful solar ultraviolet radiation, and maintains stable temperatures through the natural greenhouse effect.'
    },
    surface: {
      geology: 'Active plate tectonics continuously reshape Earth’s crust through volcanoes, earthquakes, and mountain-building. Liquid water covers ~71% of the surface in deep abyssal basins.',
      features: ['Pacific Ocean Basin', 'Himalayan Mountain Range', 'Mariana Trench (10,994m depth)', 'Amazon Basin', 'Antarctic Ice Sheet']
    },
    compositionLayers: [
      {
        name: 'Crust',
        depth: '0 - 70 km',
        description: 'Rigid outer shell composed of silicate rocks. Continental crust is thicker (30-50 km) while oceanic crust is denser and thinner (5-10 km).',
        color: '#8b5cf6'
      },
      {
        name: 'Mantle',
        depth: '70 - 2,890 km',
        description: 'Semi-solid silicate rock layer comprising ~84% of Earth’s volume. Convective currents in the mantle drive tectonic plate movements.',
        color: '#ec4899'
      },
      {
        name: 'Outer Core',
        depth: '2,890 - 5,150 km',
        description: 'Liquid iron-nickel alloy at temperatures between 4,000°C and 5,000°C. Dynamo motion inside generates Earth’s protective magnetosphere.',
        color: '#f97316'
      },
      {
        name: 'Inner Core',
        depth: '5,150 - 6,371 km',
        description: 'Solid sphere of iron and nickel maintained under intense gravitational pressures of over 3.3 million atmospheres.',
        color: '#eab308'
      }
    ],
    moonCount: 1,
    moons: ['Moon (Luna)'],
    notableMissions: ['ISS', 'Landsat 9', 'Sentinel-6', 'Terra', 'Aqua', 'GRACE-FO'],
    verifiedFacts: [
      {
        fact: 'Earth is the only planet in the Solar System with active plate tectonics that recycle carbon and maintain climate balance.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/earth/' }
      },
      {
        fact: 'Earth’s magnetic field extends tens of thousands of kilometers into space, shielding our atmosphere from solar wind erosion.',
        source: { name: 'NOAA', url: 'https://www.ngdc.noaa.gov/geomag/' }
      },
      {
        fact: 'Gravity is not uniform across Earth’s surface due to shape variations, ocean trenches, and deep mass concentrations.',
        source: { name: 'ESA', url: 'https://www.esa.int/Applications/Observing_the_Earth/GOCE' }
      },
      {
        fact: 'Earth’s rotation is gradually slowing down by approximately 1.7 milliseconds per century due to tidal friction from the Moon.',
        source: { name: 'USGS', url: 'https://www.usgs.gov/' }
      },
      {
        fact: 'Liquid ocean water on Earth has existed continuously for over 3.8 billion years.',
        source: { name: 'Peer-Reviewed Literature', url: 'https://www.nature.com/' }
      }
    ],
    sources: [
      { name: 'NASA', url: 'https://science.nasa.gov/earth/facts/' },
      { name: 'ESA', url: 'https://www.esa.int/Applications/Observing_the_Earth' },
      { name: 'NOAA', url: 'https://www.noaa.gov/' }
    ],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'Terrestrial',
    subtitle: 'The Sun-Scorched Swift Planet',
    summary: 'Mercury is the smallest planet in the Solar System and closest to the Sun. It experiences the most extreme temperature swings of any planet.',
    image: PLANET_IMAGES.mercury.imageUrl,
    physical: {
      diameter: '4,879 km',
      mass: '3.301 × 10²³ kg',
      gravity: '3.7 m/s²',
      averageTemp: '167°C (-180°C to 430°C)',
      density: '5.427 g/cm³',
      escapeVelocity: '4.25 km/s',
      radius: '2,439.7 km'
    },
    orbit: {
      distanceFromSun: '57.9 million km (0.39 AU)',
      orbitalPeriod: '87.97 days',
      orbitalSpeed: '47.36 km/s',
      eccentricity: '0.2056',
      axialTilt: '0.034°',
      dayLength: '58.65 Earth days'
    },
    atmosphere: {
      composition: ['42% Oxygen', '29% Sodium', '22% Hydrogen', '6% Helium', '0.5% Potassium'],
      pressure: '10⁻¹⁴ bar (Surface Exosphere)',
      description: 'Mercury has an extremely thin exosphere consisting of atoms blasted off its surface by solar wind and micrometeorite impacts.'
    },
    surface: {
      geology: 'Heavily cratered, ancient terrain resembling Earth’s Moon, interspersed with smooth volcanic plains and massive lobate scarps.',
      features: ['Caloris Basin (1,550 km diameter)', 'Rembrandt Basin', 'Discovery Rupes']
    },
    moonCount: 0,
    moons: [],
    notableMissions: ['Mariner 10', 'MESSENGER', 'BepiColombo'],
    verifiedFacts: [
      {
        fact: 'Despite being closest to the Sun, Mercury is NOT the hottest planet in the Solar System (Venus is hotter).',
        source: { name: 'NASA', url: 'https://science.nasa.gov/mercury/' }
      },
      {
        fact: 'Permanently shadowed craters at Mercury’s poles contain abundant water ice.',
        source: { name: 'NASA', url: 'https://www.nasa.gov/mission_pages/messenger/main/' }
      },
      {
        fact: 'Mercury has a metallic iron core that makes up roughly 85% of its radius.',
        source: { name: 'Peer-Reviewed Literature', url: 'https://www.nature.com/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/mercury/facts/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'Terrestrial',
    subtitle: 'Earth\'s Toxic Twin with Runaway Greenhouse Effect',
    summary: 'Venus is the second planet from the Sun. It is the hottest planet in our solar system, shrouded in thick clouds of sulfuric acid under crushing atmosphere.',
    image: PLANET_IMAGES.venus.imageUrl,
    physical: {
      diameter: '12,104 km',
      mass: '4.867 × 10²⁴ kg',
      gravity: '8.87 m/s²',
      averageTemp: '464°C (737 K)',
      density: '5.243 g/cm³',
      escapeVelocity: '10.36 km/s',
      radius: '6,051.8 km'
    },
    orbit: {
      distanceFromSun: '108.2 million km (0.72 AU)',
      orbitalPeriod: '224.7 days',
      orbitalSpeed: '35.02 km/s',
      eccentricity: '0.0067',
      axialTilt: '177.3° (Retrograde)',
      dayLength: '243 Earth days'
    },
    atmosphere: {
      composition: ['96.5% Carbon Dioxide (CO₂)', '3.5% Nitrogen (N₂)', '0.015% Sulfur Dioxide'],
      pressure: '92 bar (92 times Earth’s sea level pressure)',
      description: 'Super-dense carbon dioxide atmosphere producing extreme runaway greenhouse effect. Sulfuric acid clouds completely obscure the surface.'
    },
    surface: {
      geology: 'Volcanic landscape dominated by basaltic plains, thousands of volcanoes, and large plateau highlands called coronae.',
      features: ['Maat Mons volcano', 'Maxwell Montes', 'Aphrodite Terra', 'Ishtar Terra']
    },
    moonCount: 0,
    moons: [],
    notableMissions: ['Venera 7', 'Magellan', 'Venus Express', 'Akatsuki', 'DAVINCI+ (Upcoming)', 'VERITAS (Upcoming)'],
    verifiedFacts: [
      {
        fact: 'Venus rotates backwards (retrograde rotation) compared to most planets; the Sun rises in the west and sets in the east.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/venus/' }
      },
      {
        fact: 'A single day on Venus (243 Earth days) lasts longer than a full Venusian year (225 Earth days).',
        source: { name: 'NASA', url: 'https://science.nasa.gov/venus/facts/' }
      },
      {
        fact: 'Surface pressure on Venus is equivalent to being 900 meters underwater on Earth.',
        source: { name: 'ESA', url: 'https://www.esa.int/Science_Technology/Space_Science/Venus_Express' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/venus/facts/' }, { name: 'ESA', url: 'https://www.esa.int/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'Terrestrial',
    subtitle: 'The Red Planet & Target for Human Exploration',
    summary: 'Mars is the fourth planet from the Sun. Known for its reddish iron-oxide dust, thin atmosphere, giant extinct volcanoes, and ancient dry river valleys.',
    image: PLANET_IMAGES.mars.imageUrl,
    physical: {
      diameter: '6,779 km',
      mass: '6.417 × 10²³ kg',
      gravity: '3.721 m/s²',
      averageTemp: '-63°C (210 K)',
      density: '3.933 g/cm³',
      escapeVelocity: '5.027 km/s',
      radius: '3,389.5 km'
    },
    orbit: {
      distanceFromSun: '227.9 million km (1.52 AU)',
      orbitalPeriod: '687 Earth days',
      orbitalSpeed: '24.07 km/s',
      eccentricity: '0.0934',
      axialTilt: '25.19°',
      dayLength: '24h 37m 22s (1 Sol)'
    },
    atmosphere: {
      composition: ['95.32% Carbon Dioxide', '2.6% Nitrogen', '1.9% Argon', '0.16% Oxygen', '0.08% Carbon Monoxide'],
      pressure: '0.61 kPa (Less than 1% of Earth)',
      description: 'Thin carbon dioxide atmosphere causing dust storms that can cover the entire planet for months.'
    },
    surface: {
      geology: 'Iron oxide (rust) rich soil. Features colossal shield volcanoes, deep canyons, polar ice caps made of water ice and frozen carbon dioxide.',
      features: ['Olympus Mons (21.9 km height)', 'Valles Marineris (4,000 km long)', 'Gale Crater', 'Jezero Crater']
    },
    moonCount: 2,
    moons: ['Phobos', 'Deimos'],
    notableMissions: ['Viking 1 & 2', 'Mars Reconnaissance Orbiter', 'Curiosity', 'ISRO Mangalyaan (MOM)', 'Perseverance Rover', 'Ingenuity Helicopter', 'Hope Orbiter'],
    verifiedFacts: [
      {
        fact: 'Mars hosts Olympus Mons, the largest volcano in the Solar System, three times taller than Mount Everest.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/mars/' }
      },
      {
        fact: 'ISRO’s Mars Orbiter Mission (Mangalyaan) made India the first nation to reach Mars orbit on its maiden attempt in 2014.',
        source: { name: 'ISRO', url: 'https://www.isro.gov.in/pslv-c25-mars-orbiter-mission.html' }
      },
      {
        fact: 'NASA’s Perseverance rover successfully produced pure oxygen from Mars’ atmospheric carbon dioxide using MOXIE.',
        source: { name: 'NASA', url: 'https://mars.nasa.gov/technology/moxie/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/mars/' }, { name: 'ISRO', url: 'https://www.isro.gov.in/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'Gas Giant',
    subtitle: 'King of Planets & Cosmic Shield',
    summary: 'Jupiter is the largest planet in our solar system, containing more than double the mass of all other planets combined. Famous for its Great Red Spot storm.',
    image: PLANET_IMAGES.jupiter.imageUrl,
    physical: {
      diameter: '139,820 km',
      mass: '1.898 × 10²⁷ kg',
      gravity: '24.79 m/s²',
      averageTemp: '-110°C (163 K)',
      density: '1.326 g/cm³',
      escapeVelocity: '59.5 km/s',
      radius: '69,911 km'
    },
    orbit: {
      distanceFromSun: '778.5 million km (5.20 AU)',
      orbitalPeriod: '11.86 Earth years',
      orbitalSpeed: '13.07 km/s',
      eccentricity: '0.0489',
      axialTilt: '3.13°',
      dayLength: '9h 55m 30s'
    },
    atmosphere: {
      composition: ['89.8% Hydrogen (H₂)', '10.2% Helium', 'Trace Methane, Ammonia, Water Vapor'],
      description: 'Swirling bands of cloud belts containing ammonia crystals, ammonium hydrosulfide, and violent anticyclonic storms.'
    },
    surface: {
      geology: 'Gas giant with no solid surface. Deep inside, hydrogen transitions into liquid metallic hydrogen under immense pressures.',
      features: ['Great Red Spot (Storm active for >350 years)', 'Galilean Moons System', 'Strongest magnetosphere in Solar System']
    },
    moonCount: 95,
    moons: ['Ganymede', 'Europa', 'Io', 'Callisto', 'Amalthea', 'Himalia'],
    notableMissions: ['Pioneer 10', 'Voyager 1 & 2', 'Galileo', 'Juno', 'JUICE (ESA)', 'Europa Clipper (NASA)'],
    verifiedFacts: [
      {
        fact: 'Jupiter’s magnetic field is 20,000 times stronger than Earth’s and creates intense radio emission auroras.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/jupiter/' }
      },
      {
        fact: 'Jupiter’s moon Ganymede is larger than the planet Mercury and is the only moon in the Solar System with its own magnetic field.',
        source: { name: 'ESA', url: 'https://www.esa.int/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/jupiter/facts/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'Gas Giant',
    subtitle: 'The Crown Jewel of the Solar System',
    summary: 'Saturn is the sixth planet from the Sun, renowned for its extensive, brilliant ring system composed primarily of water ice particles.',
    image: PLANET_IMAGES.saturn.imageUrl,
    physical: {
      diameter: '116,460 km',
      mass: '5.683 × 10²⁶ kg',
      gravity: '10.44 m/s²',
      averageTemp: '-140°C (133 K)',
      density: '0.687 g/cm³ (Less dense than water)',
      escapeVelocity: '35.5 km/s',
      radius: '58,232 km'
    },
    orbit: {
      distanceFromSun: '1.433 billion km (9.58 AU)',
      orbitalPeriod: '29.45 Earth years',
      orbitalSpeed: '9.68 km/s',
      eccentricity: '0.0565',
      axialTilt: '26.73°',
      dayLength: '10h 33m 38s'
    },
    atmosphere: {
      composition: ['96.3% Hydrogen', '3.25% Helium', 'Trace Methane, Ammonia, Ethane'],
      description: 'Upper atmosphere cloud bands driven by 1,800 km/h winds and featuring a persistent hexagonal storm at its north pole.'
    },
    surface: {
      geology: 'Gas giant composed primarily of hydrogen and helium gas/liquid layers surrounding a dense rock-ice core.',
      features: ['Ring System (7 main rings, thousands of ringlets)', 'North Polar Hexagon', 'Titan Liquid Methane Lakes']
    },
    moonCount: 146,
    moons: ['Titan', 'Enceladus', 'Mimas', 'Iapetus', 'Rhea', 'Dione', 'Tethys'],
    notableMissions: ['Pioneer 11', 'Voyager 1 & 2', 'Cassini-Huygens'],
    verifiedFacts: [
      {
        fact: 'Saturn is the only planet in our Solar System whose average density is less than that of liquid water (it would float in a giant bathtub).',
        source: { name: 'NASA', url: 'https://science.nasa.gov/saturn/' }
      },
      {
        fact: 'Saturn’s moon Titan has a thick atmosphere and liquid methane/ethane lakes, rivers, and seas on its surface.',
        source: { name: 'ESA', url: 'https://www.esa.int/' }
      },
      {
        fact: 'Enceladus shoots geysers of liquid water, ice, and organic molecules hundreds of kilometers into space from a subsurface ocean.',
        source: { name: 'NASA', url: 'https://www.nasa.gov/cassini' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/saturn/facts/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'Ice Giant',
    subtitle: 'The Tilted Sideways Ice Giant',
    summary: 'Uranus is the seventh planet from the Sun. It has the coldest planetary atmosphere in the Solar System and orbits tilted almost entirely on its side.',
    image: PLANET_IMAGES.uranus.imageUrl,
    physical: {
      diameter: '50,724 km',
      mass: '8.681 × 10²⁵ kg',
      gravity: '8.69 m/s²',
      averageTemp: '-195°C (Lowest: -224°C)',
      density: '1.270 g/cm³',
      escapeVelocity: '21.3 km/s',
      radius: '25,362 km'
    },
    orbit: {
      distanceFromSun: '2.871 billion km (19.22 AU)',
      orbitalPeriod: '84 Earth years',
      orbitalSpeed: '6.80 km/s',
      eccentricity: '0.0472',
      axialTilt: '97.77° (Orbits on its side)',
      dayLength: '17h 14m'
    },
    atmosphere: {
      composition: ['82.5% Hydrogen', '15.2% Helium', '2.3% Methane'],
      description: 'Methane gas absorbs red light, giving Uranus its cyan-blue hue. Contains icy clouds of ammonia and hydrogen sulfide.'
    },
    surface: {
      geology: 'Ice giant with no solid surface. Mantle consists of hot, dense fluid of water, ammonia, and methane ice ("icy mantle").',
      features: ['Dark Narrow Rings (13 known rings)', 'Extreme 42-year polar seasons', 'Miranda chaos terrain']
    },
    moonCount: 28,
    moons: ['Titania', 'Oberon', 'Umbriel', 'Ariel', 'Miranda'],
    notableMissions: ['Voyager 2'],
    verifiedFacts: [
      {
        fact: 'Uranus has an extreme axial tilt of 97.8°, causing each pole to get 42 years of continuous sunlight followed by 42 years of darkness.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/uranus/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/uranus/facts/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'Ice Giant',
    subtitle: 'The Supersonic Winds Boundary of our Solar System',
    summary: 'Neptune is the eighth and farthest known major planet from the Sun. It is a deep-blue icy world with supersonic winds exceeding 2,100 km/h.',
    image: PLANET_IMAGES.neptune.imageUrl,
    physical: {
      diameter: '49,244 km',
      mass: '1.024 × 10²⁶ kg',
      gravity: '11.15 m/s²',
      averageTemp: '-200°C (73 K)',
      density: '1.638 g/cm³',
      escapeVelocity: '23.5 km/s',
      radius: '24,622 km'
    },
    orbit: {
      distanceFromSun: '4.495 billion km (30.07 AU)',
      orbitalPeriod: '164.8 Earth years',
      orbitalSpeed: '5.43 km/s',
      eccentricity: '0.0086',
      axialTilt: '28.32°',
      dayLength: '16h 6m'
    },
    atmosphere: {
      composition: ['80% Hydrogen', '19% Helium', '1.5% Methane'],
      description: 'Vivid blue atmosphere driven by internal geothermal heat producing supersonic storms and dynamic white cirrus clouds.'
    },
    surface: {
      geology: 'Ice giant composed of water, ammonia, and methane slush over a small rocky core.',
      features: ['Great Dark Spot', 'Triton Cryovolcanoes', 'Dynamic atmospheric bands']
    },
    moonCount: 16,
    moons: ['Triton', 'Proteus', 'Nereid'],
    notableMissions: ['Voyager 2'],
    verifiedFacts: [
      {
        fact: 'Neptune’s winds are the fastest recorded in the Solar System, reaching speeds of over 2,100 km/h (1,300 mph).',
        source: { name: 'NASA', url: 'https://science.nasa.gov/neptune/' }
      },
      {
        fact: 'Neptune’s largest moon, Triton, orbits in the opposite direction of Neptune’s rotation (retrograde orbit) and features active nitrogen cryovolcanoes.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/neptune/moons/triton/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/neptune/facts/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'pluto',
    name: 'Pluto',
    type: 'Dwarf Planet',
    subtitle: 'Heart of the Kuiper Belt',
    summary: 'Pluto is a dwarf planet in the Kuiper Belt, discovered in 1930. Reclassified in 2006, it revealed spectacular nitrogen ice glaciers when visited by New Horizons in 2015.',
    image: PLANET_IMAGES.pluto.imageUrl,
    physical: {
      diameter: '2,376 km',
      mass: '1.303 × 10²² kg',
      gravity: '0.62 m/s²',
      averageTemp: '-229°C',
      density: '1.854 g/cm³',
      escapeVelocity: '1.21 km/s',
      radius: '1,188.3 km'
    },
    orbit: {
      distanceFromSun: '5.9 billion km (39.48 AU)',
      orbitalPeriod: '248 Earth years',
      orbitalSpeed: '4.74 km/s',
      eccentricity: '0.2488',
      axialTilt: '122.53°',
      dayLength: '153.3 hours (6.4 Earth days)'
    },
    atmosphere: {
      composition: ['99% Nitrogen', 'Trace Methane & Carbon Monoxide'],
      description: 'Thin seasonal atmosphere that expands when closer to the Sun and freezes onto the surface when farther away.'
    },
    surface: {
      geology: 'Nitrogen, methane, and water ice crust. Features mountains of water ice floating on nitrogen ice glaciers.',
      features: ['Sputnik Planitia (Heart-shaped glacier)', 'Tenzing Montes (3.4km water-ice mountains)']
    },
    moonCount: 5,
    moons: ['Charon', 'Styx', 'Nix', 'Kerberos', 'Hydra'],
    notableMissions: ['New Horizons'],
    verifiedFacts: [
      {
        fact: 'Pluto and its largest moon Charon form a binary system; Charon is so large that the center of gravity (barycenter) lies outside Pluto itself.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/pluto/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/pluto/facts/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'ceres',
    name: 'Ceres',
    type: 'Dwarf Planet',
    subtitle: 'The Largest Object in the Main Asteroid Belt',
    summary: 'Ceres is the only dwarf planet located in the main Asteroid Belt between Mars and Jupiter. It accounts for one-third of the belt’s total mass.',
    image: PLANET_IMAGES.ceres.imageUrl,
    physical: {
      diameter: '940 km',
      mass: '9.39 × 10²⁰ kg',
      gravity: '0.27 m/s²',
      averageTemp: '-105°C',
      density: '2.16 g/cm³',
      radius: '470 km'
    },
    orbit: {
      distanceFromSun: '413 million km (2.77 AU)',
      orbitalPeriod: '4.6 Earth years',
      dayLength: '9 hours 4m'
    },
    atmosphere: {
      composition: ['Transient Water Vapor Exosphere'],
      description: 'Sublimating water ice creates a faint, temporary atmosphere of water vapor.'
    },
    surface: {
      geology: 'Cratered ice-rock mixture with bright salt spots (sodium carbonate deposits).',
      features: ['Occator Crater (Bright salt spots)', 'Ahuna Mons (Ice volcano)']
    },
    moonCount: 0,
    moons: [],
    notableMissions: ['Dawn'],
    verifiedFacts: [
      {
        fact: 'NASA’s Dawn spacecraft discovered bright sodium carbonate deposits inside Occator Crater, evidence of brine ocean activity under the crust.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/ceres/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/ceres/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'eris',
    name: 'Eris',
    type: 'Dwarf Planet',
    subtitle: 'The Massive Distant Kuiper Object',
    summary: 'Eris is one of the largest known dwarf planets in our solar system, slightly smaller in diameter than Pluto but ~27% more massive.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Eris_and_dysnomia2.jpg/512px-Eris_and_dysnomia2.jpg',
    physical: {
      diameter: '2,326 km',
      mass: '1.66 × 10²² kg',
      gravity: '0.82 m/s²',
      averageTemp: '-243°C',
      density: '2.52 g/cm³',
      radius: '1,163 km'
    },
    orbit: {
      distanceFromSun: '10.1 billion km (67.67 AU)',
      orbitalPeriod: '558 Earth years',
      dayLength: '25.9 hours'
    },
    atmosphere: {
      composition: ['Frozen Methane & Nitrogen'],
      description: 'Atmosphere freezes completely onto surface at aphelion.'
    },
    surface: {
      geology: 'Highly reflective surface (~96% albedo) covered in frozen methane ice.',
      features: ['Dysnomia moon interaction']
    },
    moonCount: 1,
    moons: ['Dysnomia'],
    notableMissions: [],
    verifiedFacts: [
      {
        fact: 'The discovery of Eris in 2005 prompted the International Astronomical Union (IAU) to formalize the definition of a planet in 2006.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/eris/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/eris/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'haumea',
    name: 'Haumea',
    type: 'Dwarf Planet',
    subtitle: 'The Rapidly Spinning Ringed Ellipsoid',
    summary: 'Haumea is a dwarf planet located beyond Neptune. Its exceptionally fast rotation gives it an elongated football-like shape.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Eris_and_dysnomia2.jpg/512px-Eris_and_dysnomia2.jpg',
    physical: {
      diameter: '1,632 km (elongated axis ~2,100 km)',
      mass: '4.01 × 10²¹ kg',
      gravity: '0.44 m/s²',
      averageTemp: '-241°C',
      radius: '816 km'
    },
    orbit: {
      distanceFromSun: '6.45 billion km (43.13 AU)',
      orbitalPeriod: '284 Earth years',
      dayLength: '3.9 hours'
    },
    atmosphere: { composition: ['None detected'], description: 'No measurable atmosphere.' },
    surface: { geology: 'Crystalline water ice shell surrounding a dense rocky interior.', features: ['Ring System', 'Dark Red Surface Spot'] },
    moonCount: 2,
    moons: ['Hiʻiaka', 'Namaka'],
    notableMissions: [],
    verifiedFacts: [
      {
        fact: 'Haumea rotates once every 3.9 hours, making it one of the fastest spinning large objects in the Solar System.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/haumea/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/haumea/' }],
    lastUpdated: '2026-08-01'
  },
  {
    id: 'makemake',
    name: 'Makemake',
    type: 'Dwarf Planet',
    subtitle: 'The Brilliant Methane Ice World of the Kuiper Belt',
    summary: 'Makemake is the second-brightest Kuiper Belt object seen from Earth after Pluto.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Eris_and_dysnomia2.jpg/512px-Eris_and_dysnomia2.jpg',
    physical: {
      diameter: '1,430 km',
      mass: '3.1 × 10²¹ kg',
      gravity: '0.5 m/s²',
      averageTemp: '-243°C',
      radius: '715 km'
    },
    orbit: {
      distanceFromSun: '6.85 billion km (45.79 AU)',
      orbitalPeriod: '305 Earth years',
      dayLength: '22.5 hours'
    },
    atmosphere: { composition: ['Transient Methane/Nitrogen'], description: 'Extremely faint atmospheric freeze-out.' },
    surface: { geology: 'Frozen methane and ethane pellets coat the reddish surface.', features: ['MK2 Moon (S/2015 136472)'] },
    moonCount: 1,
    moons: ['MK2'],
    notableMissions: [],
    verifiedFacts: [
      {
        fact: 'Makemake was discovered in March 2005 by a team led by Mike Brown at Palomar Observatory.',
        source: { name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/makemake/' }
      }
    ],
    sources: [{ name: 'NASA', url: 'https://science.nasa.gov/dwarf-planets/makemake/' }],
    lastUpdated: '2026-08-01'
  }
];
