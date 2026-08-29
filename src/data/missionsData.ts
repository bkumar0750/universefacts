import type { SpaceMission } from '../types';
import type { ExtendedMission } from '../components/missions/MissionCards';

export const EXTENDED_MISSIONS_DATA: ExtendedMission[] = [
  {
    id: 'james-webb',
    name: 'James Webb Space Telescope (JWST)',
    agency: 'NASA',
    partnerAgencies: ['ESA', 'CSA'],
    launchDate: '25 Dec 2021',
    destination: 'Sun-Earth L2 Lagrange Point (1.5M km)',
    status: 'Active',
    missionType: 'Space Telescope',
    distance: '1.5 Million km',
    duration: '20+ Years (Planned)',
    rocket: 'Ariane 5 (VA256)',
    description: 'The premier space science observatory in the world. Equipped with a 6.5-meter beryllium primary mirror and infrared detectors to study early stars, galaxies, and exoplanet atmospheres.',
    majorDiscoveries: [
      'Imaged earliest distant galaxies formed just 280 million years after the Big Bang (MoM-z14)',
      'Detected water vapor, methane, and CO2 in exoplanet atmospheres like WASP-96b and K2-18b',
      'Unprecedented infrared views of Carina, Southern Ring, and Pillars of Creation nebulae'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/James_Webb_Space_Telescope_Mirror_37.jpg/1024px-James_Webb_Space_Telescope_Mirror_37.jpg',
    imageType: 'REAL IMAGE',
    imageCredit: 'NASA / Chris Gunn',
    sourceUrl: 'https://webbtelescope.org/',
    lastVerified: '29 Aug 2026',
    dna: {
      riskLevel: 'CRITICAL (344 single-point failures)',
      scienceScore: 10,
      discoveriesCount: 450,
      dataAvailable: true
    }
  },
  {
    id: 'chandrayaan-3',
    name: 'Chandrayaan-3',
    agency: 'ISRO',
    launchDate: '14 July 2023',
    destination: 'Lunar South Pole (70°S Latitude - Shiv Shakti Point)',
    status: 'Completed',
    missionType: 'Lunar Lander & Rover',
    distance: '384,400 km',
    duration: '14 Lunar Days (Active ops complete)',
    rocket: 'LVM3-M4',
    description: 'ISRO’s historic lunar mission that made India the first nation in human history to soft-land near the lunar south pole and the 4th nation to soft-land on the Moon.',
    majorDiscoveries: [
      'In-situ elemental composition confirmation of sulfur (S), iron (Fe), and titanium (Ti) via LIBS',
      'First direct thermal conductivity profile measurement of topsoil near south pole via ChaSTE',
      'Successful hop experiment of Vikram lander proving lunar sample return launch capability'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chandrayaan-3_Lander_Vikram.jpg/1024px-Chandrayaan-3_Lander_Vikram.jpg',
    imageType: 'REAL IMAGE',
    imageCredit: 'ISRO / Pragyan Rover Camera',
    sourceUrl: 'https://www.isro.gov.in/Chandrayaan3_New.html',
    lastVerified: '29 Aug 2026',
    dna: {
      riskLevel: 'HIGH (Autonomous South Pole Descent)',
      scienceScore: 9,
      discoveriesCount: 35,
      dataAvailable: true
    }
  },
  {
    id: 'aditya-l1',
    name: 'Aditya-L1',
    agency: 'ISRO',
    launchDate: '2 Sept 2023',
    destination: 'Sun-Earth Lagrange Point 1 (L1)',
    status: 'Active',
    missionType: 'Solar Observatory',
    distance: '1.5 Million km',
    duration: '5 Years',
    rocket: 'PSLV-C57',
    description: 'India’s first dedicated solar observatory mission placed in a halo orbit around L1 to study coronal heating, solar wind acceleration, and coronal mass ejections (CMEs).',
    majorDiscoveries: [
      'Captured high-resolution full-disk solar UV images via SUIT instrument',
      'Continuous real-time coronal mass ejection early warnings for space weather forecasting'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Aditya-L1_Spacecraft_Model.jpg/1024px-Aditya-L1_Spacecraft_Model.jpg',
    imageType: 'REAL IMAGE',
    imageCredit: 'ISRO / URSC Bengaluru',
    sourceUrl: 'https://www.isro.gov.in/Aditya_L1.html',
    lastVerified: '29 Aug 2026',
    dna: {
      riskLevel: 'MODERATE',
      scienceScore: 9,
      discoveriesCount: 22,
      dataAvailable: true
    }
  },
  {
    id: 'perseverance-rover',
    name: 'Perseverance Rover & Ingenuity',
    agency: 'NASA',
    launchDate: '30 July 2020',
    destination: 'Jezero Crater, Mars',
    status: 'Active',
    missionType: 'Martian Rover & Helicopter',
    distance: '225 Million km',
    duration: '6+ Years (Operating)',
    rocket: 'Atlas V 541',
    description: 'Advanced robotic laboratory exploring an ancient river delta in Jezero Crater to search for signs of past microbial life and cache rock core samples.',
    majorDiscoveries: [
      'Ingenuity performed 72 historic powered controlled flights in Mars thin atmosphere',
      'Extracted & sealed 24+ pristine rock core samples for future Mars Sample Return',
      'MOXIE payload demonstrated producing oxygen directly from Martian carbon dioxide'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/PIA24264-MarsPerseveranceRover-Selfie-20210406.jpg/1024px-PIA24264-MarsPerseveranceRover-Selfie-20210406.jpg',
    imageType: 'REAL IMAGE',
    imageCredit: 'NASA / JPL-Caltech / MSSS',
    sourceUrl: 'https://mars.nasa.gov/mars2020/',
    lastVerified: '29 Aug 2026',
    dna: {
      riskLevel: 'HIGH (Sky Crane Landing)',
      scienceScore: 10,
      discoveriesCount: 120,
      dataAvailable: true
    }
  },
  {
    id: 'voyager-1',
    name: 'Voyager 1 & 2',
    agency: 'NASA',
    launchDate: '5 Sept 1977',
    destination: 'Interstellar Space',
    status: 'Active',
    missionType: 'Interstellar Probe',
    distance: '24.3 Billion km',
    duration: '48+ Years (Operating)',
    rocket: 'Titan IIIE / Centaur',
    description: 'Humanity’s farthest operating space probes. Voyager 1 entered interstellar space in August 2012, followed by Voyager 2 in November 2018.',
    majorDiscoveries: [
      'First close-up reconnaissance of Jupiter, Saturn, Uranus, and Neptune',
      'Discovered active cryovolcanism on Io and ring structures around outer planets',
      'Directly measured interstellar plasma density beyond the heliopause boundary'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Voyager_spacecraft_model.png/1024px-Voyager_spacecraft_model.png',
    imageType: 'REAL IMAGE',
    imageCredit: 'NASA / JPL-Caltech',
    sourceUrl: 'https://voyager.jpl.nasa.gov/',
    lastVerified: '29 Aug 2026',
    dna: {
      riskLevel: 'HIGH (Interstellar Environment)',
      scienceScore: 10,
      discoveriesCount: 300,
      dataAvailable: true
    }
  },
  {
    id: 'mangalyaan',
    name: 'Mars Orbiter Mission (Mangalyaan)',
    agency: 'ISRO',
    launchDate: '5 Nov 2013',
    destination: 'Mars Orbit',
    status: 'Completed',
    missionType: 'Martian Orbiter',
    distance: '225 Million km',
    duration: '8 Years (Completed)',
    rocket: 'PSLV-C25',
    description: 'ISRO’s maiden interplanetary mission. Made India the first Asian nation to reach Mars orbit and the first nation in the world to do so on its very first attempt.',
    majorDiscoveries: [
      'Mapped full-disk Martian surface ice/cloud dynamics and seasonal dust storm patterns',
      'Captured spectacular full-globe high-resolution photographs of Mars and moon Deimos'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mars_Orbiter_Mission_spacecraft_model.jpg/1024px-Mars_Orbiter_Mission_spacecraft_model.jpg',
    imageType: 'REAL IMAGE',
    imageCredit: 'ISRO / Mars Colour Camera (MCC)',
    sourceUrl: 'https://www.isro.gov.in/ISRO_EN/MOM.html',
    lastVerified: '29 Aug 2026',
    dna: {
      riskLevel: 'HIGH',
      scienceScore: 9,
      discoveriesCount: 40,
      dataAvailable: true
    }
  },
  {
    id: 'euclid',
    name: 'Euclid Space Telescope',
    agency: 'ESA',
    partnerAgencies: ['NASA'],
    launchDate: '1 July 2023',
    destination: 'Sun-Earth L2 Lagrange Point',
    status: 'Active',
    missionType: 'Cosmology Space Telescope',
    distance: '1.5 Million km',
    duration: '6 Years',
    rocket: 'Falcon 9',
    description: 'ESA cosmological space mission mapping the geometry of the Dark Universe by measuring weak gravitational lensing and galaxy clustering across 10 billion light-years.',
    majorDiscoveries: [
      'Released first 208-gigapixel cosmic atlas mosaic capturing 14 million galaxies',
      'Discovered millions of orphan stars drifting between galaxy clusters'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Euclid_spacecraft_model.jpg/1024px-Euclid_spacecraft_model.jpg',
    imageType: 'REAL IMAGE',
    imageCredit: 'ESA / Thales Alenia Space',
    sourceUrl: 'https://www.esa.int/Science_Technology/Space_Science/Euclid',
    lastVerified: '29 Aug 2026',
    dna: {
      riskLevel: 'MODERATE',
      scienceScore: 10,
      discoveriesCount: 85,
      dataAvailable: true
    }
  },
  {
    id: 'hubble',
    name: 'Hubble Space Telescope',
    agency: 'NASA',
    partnerAgencies: ['ESA'],
    launchDate: '24 Apr 1990',
    destination: 'Low Earth Orbit (540 km)',
    status: 'Active',
    missionType: 'Space Telescope',
    distance: '540 km',
    duration: '34+ Years',
    rocket: 'Space Shuttle Discovery (STS-31)',
    description: 'The legendary optical and ultraviolet space observatory that revolutionized humanity’s understanding of the cosmos, from the expansion rate of the universe to deep field galaxies.',
    majorDiscoveries: [
      'Determined the precise age of the universe (13.8 billion years) via Cepheid variable stars',
      'Discovered the accelerating expansion of the universe driven by dark energy',
      'Captured iconic Hubble Deep Field and Pillars of Creation imagery'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HST-SM3B.jpg/1024px-HST-SM3B.jpg',
    imageType: 'REAL IMAGE',
    imageCredit: 'NASA / STS-109 Crew',
    sourceUrl: 'https://science.nasa.gov/mission/hubble/',
    lastVerified: '29 Aug 2026',
    dna: {
      riskLevel: 'MODERATE',
      scienceScore: 10,
      discoveriesCount: 1500,
      dataAvailable: true
    }
  }
];

export const missionsData: SpaceMission[] = EXTENDED_MISSIONS_DATA.map((m) => ({
  id: m.id,
  name: m.name,
  agency: m.agency as any,
  launchDate: m.launchDate,
  destination: m.destination,
  status: m.status as any,
  description: m.description,
  majorDiscoveries: m.majorDiscoveries,
  image: m.image,
  officialUrl: m.sourceUrl,
  sources: [{ name: (['NASA', 'ISRO', 'ESA', 'JAXA'].includes(m.agency) ? m.agency : 'Scientific Institution') as any, url: m.sourceUrl }]
}));
