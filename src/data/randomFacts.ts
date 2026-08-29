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
    fact: 'Venus rotates so slowly that one Venusian day (243 Earth days) takes longer than its year (225 Earth days). It also spins clockwise, opposite to most planets.',
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
    fact: 'ISRO’s Pragyan rover on Chandrayaan-3 confirmed the presence of elemental Sulfur (S) near the lunar south pole using its Laser-Induced Breakdown Spectroscopy instrument.',
    category: 'ISRO & Missions',
    source: { name: 'ISRO', url: 'https://www.isro.gov.in/Chandrayaan3_Details.html' }
  },
  {
    id: 'saturn-density',
    fact: 'Saturn is the only planet in our solar system less dense than liquid water (0.687 g/cm³); if placed in a massive bathtub ocean, Saturn would float.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://science.nasa.gov/saturn/facts/' }
  },
  {
    id: 'olympus-mons',
    fact: 'Olympus Mons on Mars is 21.9 km (72,000 ft) tall—nearly three times the height of Mount Everest—and covers an area roughly the size of the state of Arizona.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://science.nasa.gov/mars/' }
  },
  {
    id: 'footprints-moon',
    fact: 'Astronaut footprints on the Moon will remain preserved for millions of years because the Moon has no atmosphere, liquid water, or wind erosion to erase them.',
    category: 'Earth & Moon',
    source: { name: 'NASA', url: 'https://science.nasa.gov/moon/' }
  },
  {
    id: 'light-from-sun',
    fact: 'Photons generated in the Sun’s core take between 10,000 and 170,000 years to diffuse outward to its surface, but only 8 minutes and 20 seconds to travel from the surface to Earth.',
    category: 'Stars',
    source: { name: 'ESA', url: 'https://www.esa.int/' }
  },
  {
    id: 'space-silence',
    fact: 'Space is completely silent because sound waves require a physical atomic medium (like gas, liquid, or solid) to travel through, which the cosmic vacuum lacks.',
    category: 'Universe',
    source: { name: 'NASA', url: 'https://www.nasa.gov/' }
  },
  {
    id: 'diamond-rain',
    fact: 'Deep inside icy giants Neptune and Uranus, extreme planetary pressure crushes methane molecules into literal diamond rain falling toward their core.',
    category: 'Exoplanets & Giants',
    source: { name: 'Peer-Reviewed Literature', url: 'https://www.nature.com/articles/s41550-017-0219-9' }
  },
  {
    id: 'milky-way-speed',
    fact: 'Our Solar System orbits the supermassive black hole at the center of the Milky Way galaxy at ~828,000 km/h, taking ~230 million years to complete one Galactic Year.',
    category: 'Galaxies',
    source: { name: 'NASA', url: 'https://science.nasa.gov/galaxies/milky-way/' }
  },
  {
    id: 'mangalyaan-isro',
    fact: 'ISRO’s Mars Orbiter Mission (Mangalyaan) made India the first nation to reach Martian orbit on its maiden attempt, executed at a record budget of $74 million.',
    category: 'ISRO & Missions',
    source: { name: 'ISRO', url: 'https://www.isro.gov.in/pslv-c25-mars-orbiter-mission' }
  },
  {
    id: 'betelgeuse-size',
    fact: 'If the red supergiant star Betelgeuse were placed at the center of our Solar System, its surface would engulf Mercury, Venus, Earth, Mars, and extend past Jupiter.',
    category: 'Stars',
    source: { name: 'ESA', url: 'https://esahubble.org/' }
  },
  {
    id: 'hd-189733b-glass-rain',
    fact: 'Exoplanet HD 189733b experiences extreme weather where liquid glass (silicates) rains sideways at howling wind speeds exceeding 8,700 km/h (Mach 7).',
    category: 'Exoplanets & Giants',
    source: { name: 'NASA', url: 'https://exoplanets.nasa.gov/' }
  },
  {
    id: 'sagittarius-a-image',
    fact: 'The Event Horizon Telescope (EHT) captured the first direct shadow image of Sagittarius A*, our galaxy’s 4.1-million-solar-mass central black hole, in May 2022.',
    category: 'Black Holes',
    source: { name: 'NSF / EHT', url: 'https://eventhorizontelescope.org/' }
  },
  {
    id: 'james-webb-deepest-view',
    fact: 'NASA’s James Webb Space Telescope (JWST) can observe light emitted over 13.5 billion years ago, capturing early galaxies formed when the universe was in its infancy.',
    category: 'ISRO & Missions',
    source: { name: 'NASA', url: 'https://webb.nasa.gov/' }
  },
  {
    id: 'moon-drifting-away',
    fact: 'Tidal interactions cause Earth’s Moon to slowly spiral away from Earth at a rate of approximately 3.8 centimeters (1.5 inches) per year.',
    category: 'Earth & Moon',
    source: { name: 'NASA', url: 'https://moon.nasa.gov/' }
  },
  {
    id: 'valles-marineris',
    fact: 'Mars’s Valles Marineris canyon system stretches over 4,000 km long and 7 km deep—spanning the distance from Los Angeles to New York.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://www.jpl.nasa.gov/' }
  },
  {
    id: 'magnetar-magnetic-field',
    fact: 'Magnetars possess magnetic fields up to 1 trillion times stronger than Earth’s field—strong enough to dissolve atomic electron clouds from thousands of miles away.',
    category: 'Stars',
    source: { name: 'NASA', url: 'https://chandra.harvard.edu/' }
  },
  {
    id: 'andromeda-collision',
    fact: 'The Andromeda Galaxy (M31) is speeding toward the Milky Way at 110 km/s. In ~4.5 billion years, the two galaxies will merge to form a giant galaxy named "Milkdromeda".',
    category: 'Galaxies',
    source: { name: 'NASA', url: 'https://hubblesite.org/' }
  },
  {
    id: 'voyager-interstellar',
    fact: 'Launched in 1977, Voyager 1 is the farthest human-made object in history, traveling over 24 billion kilometers from Earth and carrying the Golden Record.',
    category: 'ISRO & Missions',
    source: { name: 'NASA', url: 'https://voyager.jpl.nasa.gov/' }
  },
  {
    id: '55-cancri-e-diamond',
    fact: 'Carbon-rich super-Earth exoplanet 55 Cancri e (Janssen) is believed to have a crust and mantle composed heavily of diamond and graphite due to intense heat and pressure.',
    category: 'Exoplanets & Giants',
    source: { name: 'NASA', url: 'https://exoplanetarchive.ipac.caltech.edu/' }
  },
  {
    id: 'great-red-spot',
    fact: 'Jupiter’s Great Red Spot is an anticyclonic storm larger than Earth that has raged continuously for at least 350 years, with winds exceeding 430 km/h.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://www.nasa.gov/mission_pages/juno/main/index.html' }
  },
  {
    id: 'aditya-l1-solar',
    fact: 'ISRO’s Aditya-L1 spacecraft orbits the Sun-Earth Lagrange Point 1 (1.5 million km from Earth) to provide continuous, uninterrupted monitoring of solar storms.',
    category: 'ISRO & Missions',
    source: { name: 'ISRO', url: 'https://www.isro.gov.in/Aditya_L1.html' }
  },
  {
    id: 'ton-618-ultramassive',
    fact: 'Ultramassive black hole TON 618 weighs an estimated 66 billion times the mass of our Sun, with an event horizon so vast it could fit 11 solar systems side-by-side.',
    category: 'Black Holes',
    source: { name: 'Peer-Reviewed Literature', url: 'https://arxiv.org/' }
  },
  {
    id: 'cosmic-microwave-background',
    fact: 'About 1% of the static "snow" on old analog TVs tuned between channels is left-over thermal radiation from the Cosmic Microwave Background—the echo of the Big Bang.',
    category: 'Universe',
    source: { name: 'ESA', url: 'https://www.esa.int/Planck' }
  },
  {
    id: 'mercury-temperature-swings',
    fact: 'Because Mercury has virtually no atmosphere to retain thermal energy, its surface temperature swings wildly from 430°C (800°F) in daylight to -180°C (-290°F) at night.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://science.nasa.gov/mercury/' }
  },
  {
    id: 'uranus-tilted-orbit',
    fact: 'Uranus rotates on its side with an extreme axial tilt of 97.8 degrees—likely caused by a titanic collision with an Earth-sized protoplanet billions of years ago.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://science.nasa.gov/uranus/' }
  },
  {
    id: 'stellar-nurseries-orion',
    fact: 'The Orion Nebula (M42) is the closest star-forming region to Earth (1,344 light-years away), where over 700 stars are currently being born inside glowing gas clouds.',
    category: 'Stars',
    source: { name: 'NASA', url: 'https://hubblesite.org/' }
  },
  {
    id: 'time-dilation-black-hole',
    fact: 'According to General Relativity, gravity curves spacetime so intensely near a supermassive black hole that 1 hour spent near its event horizon equals years far away.',
    category: 'Black Holes',
    source: { name: 'NASA', url: 'https://science.nasa.gov/astrophysics/' }
  },
  {
    id: 'earth-lightning-strikes',
    fact: 'Planet Earth experiences approximately 100 lightning strikes per second worldwide, delivering nearly 4 billion electric discharges into the atmosphere every year.',
    category: 'Earth & Moon',
    source: { name: 'NOAA', url: 'https://www.noaa.gov/' }
  },
  {
    id: 'proxima-centauri-b',
    fact: 'At 4.24 light-years away, Proxima Centauri b is the closest known exoplanet to Earth, orbiting inside the habitable zone of its parent red dwarf star.',
    category: 'Exoplanets & Giants',
    source: { name: 'ESO', url: 'https://www.eso.org/' }
  },
  {
    id: 'sun-mass-fraction',
    fact: 'The Sun contains 99.86% of all the mass in the entire Solar System, with gas giant Jupiter holding most of the remaining 0.14%.',
    category: 'Stars',
    source: { name: 'NASA', url: 'https://science.nasa.gov/sun/' }
  },
  {
    id: 'observable-universe-galaxies',
    fact: 'Hubble and JWST deep-field observations estimate that the observable universe contains between 100 billion and 2 trillion galaxies across space.',
    category: 'Galaxies',
    source: { name: 'NASA', url: 'https://www.nasa.gov/' }
  },
  {
    id: 'multiverse-inflation',
    fact: 'Inflationary cosmology models suggest that eternal inflation could generate an infinite "multiverse" of bubble universes, each governed by unique physical laws.',
    category: 'Universe',
    source: { name: 'Peer-Reviewed Literature', url: 'https://www.scientificamerican.com/' }
  },
  {
    id: 'dark-energy-matter',
    fact: 'Everything we can observe in the universe (stars, planets, gas, life) accounts for only ~5% of its energy density; 68% is Dark Energy and 27% is Dark Matter.',
    category: 'Universe',
    source: { name: 'ESA', url: 'https://www.esa.int/' }
  },
  {
    id: 'astronomical-unit-definition',
    fact: 'One Astronomical Unit (1 AU) is ~149.6 million km (93 million miles), representing the mean distance from Earth to the Sun—a fundamental yardstick for planetary distances.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://science.nasa.gov/' }
  },
  {
    id: 'hubble-ultra-deep-field',
    fact: 'The Hubble Ultra Deep Field image revealed nearly 10,000 galaxies inside a tiny patch of sky equivalent to the size of a single grain of sand held at arm’s length.',
    category: 'Galaxies',
    source: { name: 'NASA', url: 'https://hubblesite.org/' }
  },
  {
    id: 'wasp-76b-iron-rain',
    fact: 'Ultra-hot Jupiter exoplanet WASP-76b reaches temperatures above 2,400°C on its dayside, vaporizing elemental iron which is then blown by winds to condense as iron rain on its nightside.',
    category: 'Exoplanets & Giants',
    source: { name: 'ESO', url: 'https://www.eso.org/' }
  },
  {
    id: 'solar-wind-heliosphere',
    fact: 'The solar wind streams charged plasma at 400 to 800 km/s, carving out a protective bubble in interstellar space called the heliosphere that shields Earth from interstellar cosmic rays.',
    category: 'Stars',
    source: { name: 'NASA', url: 'https://science.nasa.gov/heliophysics/' }
  },
  {
    id: 'enceladus-water-geysers',
    fact: 'Saturn’s moon Enceladus erupts giant ice geysers hundreds of kilometers into space from a global liquid ocean beneath its icy crust, containing organic compounds necessary for life.',
    category: 'Earth & Moon',
    source: { name: 'NASA', url: 'https://science.nasa.gov/saturn/moons/enceladus/' }
  },
  {
    id: 'isro-astrosat',
    fact: 'ISRO’s Astrosat is India’s first multi-wavelength space satellite observatory, simultaneously monitoring cosmic X-ray and ultraviolet emissions from black holes and binary star systems.',
    category: 'ISRO & Missions',
    source: { name: 'ISRO', url: 'https://www.isro.gov.in/astrosat.html' }
  },
  {
    id: 'tarantula-nebula-mass',
    fact: 'The Tarantula Nebula (30 Doradus) in the Large Magellanic Cloud is the largest and most active star-forming region in the Local Group, spanning over 1,000 light-years across.',
    category: 'Stars',
    source: { name: 'ESA', url: 'https://esahubble.org/' }
  },
  {
    id: 'voyager-golden-record',
    fact: 'Voyager 1 & 2 carry gold-plated copper phonograph records containing 115 images, spoken greetings in 55 human languages, and music of Earth as a cosmic time capsule.',
    category: 'ISRO & Missions',
    source: { name: 'NASA', url: 'https://voyager.jpl.nasa.gov/' }
  },
  {
    id: 'fast-radio-bursts',
    fact: 'Fast Radio Bursts (FRBs) release as much radio energy in a single millisecond as the Sun emits in three full days, originating from ultra-magnetized neutron stars billions of light-years away.',
    category: 'Universe',
    source: { name: 'Peer-Reviewed Literature', url: 'https://arxiv.org/' }
  },
  {
    id: 'titan-methane-lakes',
    fact: 'Saturn’s moon Titan is the only body in the Solar System besides Earth with liquid surface lakes and rivers—composed of liquid methane and ethane flowing at -179°C.',
    category: 'Earth & Moon',
    source: { name: 'NASA', url: 'https://science.nasa.gov/saturn/moons/titan/' }
  },
  {
    id: 'pulsar-precision-clocks',
    fact: 'Millisecond pulsars are rapidly rotating neutron stars spinning up to 716 times per second with rotational stability so precise that their signals rival Earth’s finest atomic clocks.',
    category: 'Stars',
    source: { name: 'NSF / EHT', url: 'https://www.nsf.gov/' }
  },
  {
    id: 'great-attractor-gravity',
    fact: 'The Great Attractor is a massive gravitational focal center in deep space pulling the Milky Way and thousands of surrounding galaxies toward it at speeds over 600 kilometers per second.',
    category: 'Galaxies',
    source: { name: 'Peer-Reviewed Literature', url: 'https://arxiv.org/' }
  },
  {
    id: 'oort-cloud-boundary',
    fact: 'The Oort Cloud is an immense spherical shell of icy protoplanetary comets surrounding our Solar System, extending up to 100,000 AU (1.5 light-years) halfway to the nearest star system.',
    category: 'Planets',
    source: { name: 'NASA', url: 'https://science.nasa.gov/solar-system/oort-cloud/' }
  },
  {
    id: 'crab-nebula-supernova',
    fact: 'The Crab Nebula (M1) is the glowing supernova remnant of a massive star explosion recorded by ancient Chinese and Arab astronomers in 1054 AD, bright enough to be seen in daylight for 23 days.',
    category: 'Stars',
    source: { name: 'NASA', url: 'https://hubblesite.org/' }
  },
  {
    id: 'cosmic-neutrino-background',
    fact: 'Trillions of relic cosmic neutrinos left over from the first second of the Big Bang stream through every human body every second at nearly the speed of light without touching a single atom.',
    category: 'Universe',
    source: { name: 'ESA', url: 'https://www.esa.int/' }
  }
];



