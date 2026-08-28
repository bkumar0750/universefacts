import type { SpaceMission } from '../types';

export const missionsData: SpaceMission[] = [
  {
    id: 'james-webb',
    name: 'James Webb Space Telescope (JWST)',
    agency: 'NASA',
    launchDate: 'December 25, 2021',
    destination: 'Sun-Earth L2 Lagrange Point (1.5M km from Earth)',
    status: 'Active',
    description: 'The premier space science observatory in the world. Equipped with a 6.5-meter beryllium primary mirror and infrared detectors to study the first stars, galaxies, and exoplanet atmospheres.',
    majorDiscoveries: [
      'Imaged the earliest, most distant galaxies formed just 300 million years after the Big Bang',
      'Detected water vapor, methane, and carbon dioxide in exoplanet atmospheres like WASP-96b and K2-18b',
      'Captured unprecedented infrared views of Carina, Southern Ring, and Pillars of Creation nebulae'
    ],
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
    officialUrl: 'https://webbtelescope.org/',
    sources: [{ name: 'NASA', url: 'https://webbtelescope.org/' }, { name: 'ESA', url: 'https://www.esa.int/Science_Technology/Space_Science/Webb' }]
  },
  {
    id: 'chandrayaan-3',
    name: 'Chandrayaan-3',
    agency: 'ISRO',
    launchDate: 'July 14, 2023',
    destination: 'Lunar South Pole Region (70°S Latitude)',
    status: 'Completed',
    description: 'ISRO’s historic lunar mission that made India the first nation in human history to land near the lunar south pole and the fourth nation to soft-land on the Moon.',
    majorDiscoveries: [
      'In-situ elemental composition confirmation of sulfur (S), iron (Fe), calcium (Ca), and titanium (Ti) in south polar soil using LIBS & APXS',
      'First-ever direct thermal conductivity profile measurement of topsoil near the lunar south pole via ChaSTE payload',
      'Successful "hop experiment" of Vikram lander proving future lunar sample return launch capability'
    ],
    image: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=1200&auto=format&fit=crop',
    officialUrl: 'https://www.isro.gov.in/Chandrayaan3_Details.html',
    sources: [{ name: 'ISRO', url: 'https://www.isro.gov.in/Chandrayaan3_Details.html' }]
  },
  {
    id: 'aditya-l1',
    name: 'Aditya-L1',
    agency: 'ISRO',
    launchDate: 'September 2, 2023',
    destination: 'Sun-Earth Lagrange Point 1 (L1)',
    status: 'Active',
    description: 'India’s first dedicated solar observatory mission placed in a halo orbit around L1 to study coronal heating, solar wind acceleration, coronal mass ejections (CMEs), and space weather.',
    majorDiscoveries: [
      'Captured high-resolution solar magnetic field dynamics and full-disk solar UV images via SUIT instrument',
      'Continuous real-time coronal mass ejection early warnings for space weather forecasting'
    ],
    image: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=1200&auto=format&fit=crop',
    officialUrl: 'https://www.isro.gov.in/Aditya_L1.html',
    sources: [{ name: 'ISRO', url: 'https://www.isro.gov.in/Aditya_L1.html' }]
  },
  {
    id: 'mangalyaan',
    name: 'Mars Orbiter Mission (Mangalyaan / MOM)',
    agency: 'ISRO',
    launchDate: 'November 5, 2013',
    destination: 'Mars Orbit',
    status: 'Completed',
    description: 'ISRO’s maiden interplanetary mission. Made India the first Asian nation to reach Mars orbit and the first nation in the world to do so on its very first attempt.',
    majorDiscoveries: [
      'Mapped full-disk Martian surface ice/cloud dynamics and seasonal dust storm patterns',
      'Captured spectacular full-globe high-resolution photographs of Mars and its moon Deimos'
    ],
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
    officialUrl: 'https://www.isro.gov.in/pslv-c25-mars-orbiter-mission.html',
    sources: [{ name: 'ISRO', url: 'https://www.isro.gov.in/' }]
  },
  {
    id: 'perseverance-rover',
    name: 'Perseverance Rover & Ingenuity',
    agency: 'NASA',
    launchDate: 'July 30, 2020',
    destination: 'Jezero Crater, Mars',
    status: 'Active',
    description: 'Advanced robotic laboratory exploring an ancient river delta in Jezero Crater to search for signs of past microbial life and cache rock core samples.',
    majorDiscoveries: [
      'Ingenuity performed 72 historic powered controlled flights in Mars’ thin atmosphere',
      'Extracted & sealed 24+ pristine rock core samples for future Mars Sample Return',
      'MOXIE payload demonstrated producing breathable oxygen directly from Martian carbon dioxide'
    ],
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
    officialUrl: 'https://mars.nasa.gov/mars2020/',
    sources: [{ name: 'NASA', url: 'https://mars.nasa.gov/mars2020/' }]
  },
  {
    id: 'voyager-1',
    name: 'Voyager 1 & 2',
    agency: 'NASA',
    launchDate: 'September 5, 1977',
    destination: 'Interstellar Space',
    status: 'Active',
    description: 'Humanity’s farthest operating space probes. Voyager 1 entered interstellar space in August 2012, followed by Voyager 2 in November 2018.',
    majorDiscoveries: [
      'First close-up reconnaissance of Jupiter, Saturn, Uranus, and Neptune',
      'Discovered active cryovolcanism on Io and ring structures around outer planets',
      'Directly measured interstellar plasma density beyond the heliopause solar wind boundary'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    officialUrl: 'https://voyager.jpl.nasa.gov/',
    sources: [{ name: 'NASA', url: 'https://voyager.jpl.nasa.gov/' }]
  },
  {
    id: 'hubble-telescope',
    name: 'Hubble Space Telescope (HST)',
    agency: 'NASA',
    launchDate: 'April 24, 1990',
    destination: 'Low Earth Orbit (540 km altitude)',
    status: 'Active',
    description: 'Revolutionary optical and UV space telescope that transformed modern astronomy for over three decades.',
    majorDiscoveries: [
      'Pinpointed the expansion rate of the universe (Hubble constant) and discovered dark energy accelerating expansion',
      'Captured famous Hubble Deep Fields revealing thousands of galaxies in a speck of dark sky'
    ],
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    officialUrl: 'https://hubblesite.org/',
    sources: [{ name: 'NASA', url: 'https://hubblesite.org/' }, { name: 'ESA', url: 'https://www.spacetelescope.org/' }]
  }
];
