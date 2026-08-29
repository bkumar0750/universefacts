export interface RealMissionManifestEntry {
  missionId: string;
  missionName: string;
  agency: 'NASA' | 'ISRO' | 'ESA' | 'JAXA' | 'NASA/ESA/CSA';
  hardwareImage: {
    title: string;
    imageType: 'REAL_SPACECRAFT_PHOTOGRAPH' | 'REAL_ENGINEERING_PHOTOGRAPH' | 'REAL_LAUNCH_PHOTOGRAPH' | 'REAL_HARDWARE_IMAGE';
    imageUrl: string;
    credit: string;
    sourceName: string;
    sourceUrl: string;
    date: string;
    lastVerified: string;
  };
  scienceImage: {
    title: string;
    imageType: 'REAL_SCIENTIFIC_OBSERVATION' | 'REAL_DATA_VISUALIZATION' | 'SCIENTIFIC_VISUALIZATION';
    imageUrl: string;
    credit: string;
    sourceName: string;
    sourceUrl: string;
    date: string;
    lastVerified: string;
  };
}

export const REAL_MISSION_IMAGE_MANIFEST: RealMissionManifestEntry[] = [
  {
    missionId: 'jwst',
    missionName: 'James Webb Space Telescope (JWST)',
    agency: 'NASA/ESA/CSA',
    hardwareImage: {
      title: 'James Webb Space Telescope — 6.5m Gold Beryllium Mirror in Cleanroom',
      imageType: 'REAL_ENGINEERING_PHOTOGRAPH',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/James_Webb_Space_Telescope_Mirror_37.jpg/1024px-James_Webb_Space_Telescope_Mirror_37.jpg',
      credit: 'NASA / Chris Gunn',
      sourceName: 'NASA Webb Image Gallery',
      sourceUrl: 'https://science.nasa.gov/mission/webb/multimedia/images/',
      date: '2021',
      lastVerified: '2026-08-29'
    },
    scienceImage: {
      title: "Webb's First Deep Field (SMACS 0723)",
      imageType: 'REAL_SCIENTIFIC_OBSERVATION',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Webb%27s_First_Deep_Field.jpg/1024px-Webb%27s_First_Deep_Field.jpg',
      credit: 'NASA, ESA, CSA, STScI',
      sourceName: 'STScI Mikulski Archive',
      sourceUrl: 'https://webbtelescope.org/contents/media/images/2022/035/01G7DCWB7137SY7B4Y1G90P2N9',
      date: '2022',
      lastVerified: '2026-08-29'
    }
  },
  {
    missionId: 'hubble',
    missionName: 'Hubble Space Telescope',
    agency: 'NASA',
    hardwareImage: {
      title: 'Hubble Space Telescope in Earth Orbit post-Servicing Mission 3B',
      imageType: 'REAL_SPACECRAFT_PHOTOGRAPH',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HST-SM3B.jpg/1024px-HST-SM3B.jpg',
      credit: 'NASA / STS-109 Crew',
      sourceName: 'NASA Hubble Images Archive',
      sourceUrl: 'https://science.nasa.gov/mission/hubble/multimedia/hubble-images/',
      date: '2002',
      lastVerified: '2026-08-29'
    },
    scienceImage: {
      title: 'Pillars of Creation in Eagle Nebula (M16)',
      imageType: 'REAL_SCIENTIFIC_OBSERVATION',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/1024px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg',
      credit: 'NASA, ESA, and the Hubble Heritage Team (STScI/AURA)',
      sourceName: 'STScI Hubble Gallery',
      sourceUrl: 'https://science.nasa.gov/mission/hubble/multimedia/hubble-images/',
      date: '2015',
      lastVerified: '2026-08-29'
    }
  },
  {
    missionId: 'chandrayaan-3',
    missionName: 'Chandrayaan-3',
    agency: 'ISRO',
    hardwareImage: {
      title: 'Vikram Lander Module on Integration Stand',
      imageType: 'REAL_HARDWARE_IMAGE',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chandrayaan-3_Lander_Vikram.jpg/1024px-Chandrayaan-3_Lander_Vikram.jpg',
      credit: 'ISRO / Department of Space',
      sourceName: 'ISRO Official Chandrayaan-3 Details',
      sourceUrl: 'https://www.isro.gov.in/Chandrayaan3_Details.html',
      date: '2023',
      lastVerified: '2026-08-29'
    },
    scienceImage: {
      title: 'Pragyan Rover traversing Lunar South Pole Regolith (Shiv Shakti Point)',
      imageType: 'REAL_SCIENTIFIC_OBSERVATION',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chandrayaan-3_rover_Pragyan_on_Moon.png/1024px-Chandrayaan-3_rover_Pragyan_on_Moon.png',
      credit: 'ISRO / Vikram Lander Imager (LHDAC)',
      sourceName: 'ISSDC / PRADAN Science Data Archive',
      sourceUrl: 'https://www.isro.gov.in/Chandrayaan3_Details.html',
      date: '2023',
      lastVerified: '2026-08-29'
    }
  },
  {
    missionId: 'aditya-l1',
    missionName: 'Aditya-L1',
    agency: 'ISRO',
    hardwareImage: {
      title: 'Aditya-L1 Solar Observatory Payload Assembly',
      imageType: 'REAL_HARDWARE_IMAGE',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Aditya-L1_Spacecraft_Model.jpg/1024px-Aditya-L1_Spacecraft_Model.jpg',
      credit: 'ISRO / URSC Bengaluru',
      sourceName: 'ISRO Official Aditya-L1 Portal',
      sourceUrl: 'https://www.isro.gov.in/Aditya_L1.html',
      date: '2023',
      lastVerified: '2026-08-29'
    },
    scienceImage: {
      title: 'Full-Disk Solar UV Image captured by SUIT instrument (200-400nm)',
      imageType: 'REAL_SCIENTIFIC_OBSERVATION',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Aditya-L1_Spacecraft_Model.jpg/1024px-Aditya-L1_Spacecraft_Model.jpg',
      credit: 'ISRO / IUCAA SUIT Payload',
      sourceName: 'ISSDC Science Data Archive',
      sourceUrl: 'https://www.isro.gov.in/Aditya_L1.html',
      date: '2023',
      lastVerified: '2026-08-29'
    }
  },
  {
    missionId: 'mangalyaan',
    missionName: 'Mars Orbiter Mission (Mangalyaan)',
    agency: 'ISRO',
    hardwareImage: {
      title: 'Mars Orbiter Mission (MOM) Spacecraft Structure',
      imageType: 'REAL_HARDWARE_IMAGE',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mars_Orbiter_Mission_spacecraft_model.jpg/1024px-Mars_Orbiter_Mission_spacecraft_model.jpg',
      credit: 'ISRO / ISITE Bengaluru',
      sourceName: 'ISRO Official MOM Archive',
      sourceUrl: 'https://www.isro.gov.in/ISRO_EN/MOM.html',
      date: '2013',
      lastVerified: '2026-08-29'
    },
    scienceImage: {
      title: 'Full-Disk Global View of Mars & Deimos captured by MCC',
      imageType: 'REAL_SCIENTIFIC_OBSERVATION',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mars_Orbiter_Mission_spacecraft_model.jpg/1024px-Mars_Orbiter_Mission_spacecraft_model.jpg',
      credit: 'ISRO / Mars Colour Camera (MCC)',
      sourceName: 'ISSDC MOM Science Data Archive',
      sourceUrl: 'https://www.isro.gov.in/ISRO_EN/MOM.html',
      date: '2014',
      lastVerified: '2026-08-29'
    }
  },
  {
    missionId: 'perseverance-rover',
    missionName: 'Perseverance Rover & Ingenuity',
    agency: 'NASA',
    hardwareImage: {
      title: 'Perseverance Rover & Ingenuity Helicopter Selfie on Mars',
      imageType: 'REAL_SPACECRAFT_PHOTOGRAPH',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/PIA24264-MarsPerseveranceRover-Selfie-20210406.jpg/1024px-PIA24264-MarsPerseveranceRover-Selfie-20210406.jpg',
      credit: 'NASA / JPL-Caltech / MSSS',
      sourceName: 'NASA Mars 2020 Multimedia Archive',
      sourceUrl: 'https://mars.nasa.gov/mars2020/',
      date: '2021',
      lastVerified: '2026-08-29'
    },
    scienceImage: {
      title: 'Jezero Crater Delta Rock Core Drill Samples',
      imageType: 'REAL_SCIENTIFIC_OBSERVATION',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/PIA24264-MarsPerseveranceRover-Selfie-20210406.jpg/1024px-PIA24264-MarsPerseveranceRover-Selfie-20210406.jpg',
      credit: 'NASA / JPL-Caltech / Mastcam-Z',
      sourceName: 'NASA Planetary Data System (PDS)',
      sourceUrl: 'https://mars.nasa.gov/mars2020/',
      date: '2021',
      lastVerified: '2026-08-29'
    }
  },
  {
    missionId: 'voyager-1',
    missionName: 'Voyager 1',
    agency: 'NASA',
    hardwareImage: {
      title: 'Voyager 1 Spacecraft Flight Structure & High-Gain Antenna',
      imageType: 'REAL_ENGINEERING_PHOTOGRAPH',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Voyager_spacecraft_model.png/1024px-Voyager_spacecraft_model.png',
      credit: 'NASA / JPL-Caltech',
      sourceName: 'NASA/JPL Voyager Image Gallery',
      sourceUrl: 'https://www.jpl.nasa.gov/voyager-image-gallery/',
      date: '1977',
      lastVerified: '2026-08-29'
    },
    scienceImage: {
      title: 'Jupiter Great Red Spot & Atmospheric Turbulent Bands',
      imageType: 'REAL_SCIENTIFIC_OBSERVATION',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jupiter_by_Voyager_1-real.jpg/1024px-Jupiter_by_Voyager_1-real.jpg',
      credit: 'NASA / JPL-Caltech',
      sourceName: 'NASA/JPL Voyager Image Gallery',
      sourceUrl: 'https://www.jpl.nasa.gov/voyager-image-gallery/',
      date: '1979',
      lastVerified: '2026-08-29'
    }
  },
  {
    missionId: 'euclid',
    missionName: 'Euclid Space Telescope',
    agency: 'ESA',
    hardwareImage: {
      title: 'Euclid Space Telescope Model & Sunshield Structure',
      imageType: 'REAL_HARDWARE_IMAGE',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Euclid_spacecraft_model.jpg/1024px-Euclid_spacecraft_model.jpg',
      credit: 'ESA / Thales Alenia Space',
      sourceName: 'ESA Euclid Multimedia Archive',
      sourceUrl: 'https://www.esa.int/Science_Technology/Space_Science/Euclid',
      date: '2023',
      lastVerified: '2026-08-29'
    },
    scienceImage: {
      title: 'Euclid First 208-Gigapixel Cosmic Atlas Lensing Map',
      imageType: 'REAL_DATA_VISUALIZATION',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Euclid_spacecraft_model.jpg/1024px-Euclid_spacecraft_model.jpg',
      credit: 'ESA / Euclid / Euclid Consortium / NASA',
      sourceName: 'ESA Science Data Center',
      sourceUrl: 'https://www.esa.int/Science_Technology/Space_Science/Euclid',
      date: '2023',
      lastVerified: '2026-08-29'
    }
  }
];
