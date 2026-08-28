// ─── AUTHENTIC ISRO MISSIONS DATABASE ─────────────────────────────────────────
// Sourced directly from ISRO Official Mission Database & Spacecraft Gallery:
// https://www.isro.gov.in/ISRO_EN/SpacecraftMissions.html
// Copyright Policy: https://www.isro.gov.in/Copyright_Policy.html

export interface ISROMission {
  id: string;
  name: string;
  agency: 'ISRO';
  launchDate: string;
  status: 'Active' | 'Completed' | 'Planned' | 'Extended Mission';
  destination: string;
  rocket: string;
  description: string;
  majorDiscoveries: string[];
  image: string;
  sourceUrl: string;
  officialGalleryUrl?: string;
  lastVerified: string;
}

export const ISRO_MISSIONS: ISROMission[] = [
  {
    id: 'chandrayaan-3',
    name: 'Chandrayaan-3',
    agency: 'ISRO',
    launchDate: '14 July 2023',
    status: 'Completed',
    destination: 'Moon (Lunar South Pole - Shiv Shakti Point)',
    rocket: 'LVM3-M4',
    description: 'Historic lunar exploration mission. On August 23, 2023, Vikram lander successfully executed a soft landing near the lunar south pole, making India the 4th country to land on the Moon and the 1st near the lunar south pole.',
    majorDiscoveries: [
      'First-ever direct in-situ measurement of lunar south pole soil temperature profile (ChaSTE experiment).',
      'Unambiguous detection of elemental Sulfur (S) near the south pole by Pragyan rover\'s LIBS payload.',
      'Detection of iron, calcium, titanium, chromium, manganese, and aluminum in lunar regolith.',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chandrayaan-3_Lander_Vikram.jpg/1024px-Chandrayaan-3_Lander_Vikram.jpg',
    sourceUrl: 'https://www.isro.gov.in/Chandrayaan3_New.html',
    officialGalleryUrl: 'https://www.isro.gov.in/ISRO_EN/chandrayaan3_gallery.html',
    lastVerified: '27 Aug 2026',
  },
  {
    id: 'aditya-l1',
    name: 'Aditya-L1',
    agency: 'ISRO',
    launchDate: '2 September 2023',
    status: 'Active',
    destination: 'Sun-Earth Lagrange Point 1 (L1)',
    rocket: 'PSLV-C57',
    description: 'India\'s first dedicated solar observatory spacecraft, positioned in a halo orbit around Sun-Earth L1 (~1.5 million km from Earth) to observe the solar corona, chromosphere, and solar wind.',
    majorDiscoveries: [
      'Continuous uninterrupted observation of solar eruptive phenomena and Coronal Mass Ejections (CMEs).',
      'SUIT payload captured first full-disk ultraviolet images of the Sun in 200-400 nm wavelength band.',
      'In-situ measurement of solar wind proton and alpha particle distributions at L1.',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Aditya-L1_Spacecraft_Model.jpg/1024px-Aditya-L1_Spacecraft_Model.jpg',
    sourceUrl: 'https://www.isro.gov.in/Aditya_L1.html',
    lastVerified: '27 Aug 2026',
  },
  {
    id: 'mars-orbiter-mission',
    name: 'Mars Orbiter Mission (Mangalyaan)',
    agency: 'ISRO',
    launchDate: '5 November 2013',
    status: 'Completed',
    destination: 'Mars Orbit',
    rocket: 'PSLV-C25',
    description: 'India\'s maiden interplanetary mission. Mangalyaan entered Martian orbit on September 24, 2014, making ISRO the 4th space agency to reach Mars and the 1st to succeed on its maiden attempt.',
    majorDiscoveries: [
      'Complete full-disk imagery of Mars, including far-side observations of moon Phobos.',
      'Discovered that Martian exospheric dust extends thousands of kilometers high into space during global dust storms.',
      'Mapped atmospheric escape rates of Argon gas from Mars.',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mars_Orbiter_Mission_spacecraft_model.jpg/1024px-Mars_Orbiter_Mission_spacecraft_model.jpg',
    sourceUrl: 'https://www.isro.gov.in/ISRO_EN/MOM.html',
    lastVerified: '27 Aug 2026',
  },
  {
    id: 'chandrayaan-2',
    name: 'Chandrayaan-2',
    agency: 'ISRO',
    launchDate: '22 July 2019',
    status: 'Extended Mission',
    destination: 'Moon Orbit',
    rocket: 'GSLV Mk III-M1',
    description: 'Advanced lunar orbiter carrying 8 high-resolution scientific payloads. The orbiter continues to operate in a 100 km lunar polar orbit, delivering ultra-high resolution maps.',
    majorDiscoveries: [
      'Unambiguous confirmation of H2O water ice in permanently shadowed lunar polar craters using Dual Frequency Synthetic Aperture Radar (DFSAR).',
      'Discovered presence of Argon-40 in the lunar exosphere.',
      'Mapped subsurface water ice down to several meters depth.',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chandrayaan-2_Orbiter_model.jpg/1024px-Chandrayaan-2_Orbiter_model.jpg',
    sourceUrl: 'https://www.isro.gov.in/ISRO_EN/SpacecraftMissions.html',
    lastVerified: '27 Aug 2026',
  },
  {
    id: 'astrosat',
    name: 'AstroSat',
    agency: 'ISRO',
    launchDate: '28 September 2015',
    status: 'Active',
    destination: 'Low Earth Orbit (650 km)',
    rocket: 'PSLV-C30',
    description: 'India\'s first multi-wavelength space telescope, observing the universe simultaneously in Ultraviolet, Optical, and X-ray spectral bands.',
    majorDiscoveries: [
      'Discovered extreme UV light from a galaxy 9.3 billion light-years away (AUDFs01).',
      'Measured magnetic field strength of neutron star GRO J1008-57.',
      'Observed black hole binary system binary mergers.',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Astrosat_spacecraft_model.jpg/1024px-Astrosat_spacecraft_model.jpg',
    sourceUrl: 'https://www.isro.gov.in/ISRO_EN/SpacecraftMissions.html',
    lastVerified: '27 Aug 2026',
  },
  {
    id: 'gaganyaan',
    name: 'Gaganyaan (TV-D1 & Crew Module)',
    agency: 'ISRO',
    launchDate: '21 October 2023 (TV-D1 test flight)',
    status: 'Planned',
    destination: 'Low Earth Orbit (400 km)',
    rocket: 'Human-Rated LVM3 (HLVM3)',
    description: 'India\'s Human Spaceflight Programme designed to demonstrate human spaceflight capability by launching a crew of 3 astronauts to a 400 km orbit for a 3-day mission and returning safely.',
    majorDiscoveries: [
      'Successful test of Crew Escape System (CES) at supersonic conditions (TV-D1).',
      'Successful qualification of CE20 cryogenic engine for human rating.',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Gaganyaan_Crew_Module.jpg/1024px-Gaganyaan_Crew_Module.jpg',
    sourceUrl: 'https://www.isro.gov.in/ISRO_EN/SpacecraftMissions.html',
    lastVerified: '27 Aug 2026',
  },
];
