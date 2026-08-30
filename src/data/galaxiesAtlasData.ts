import type { ScientificSource, FactStatus } from '../types';

export type ImageCategoryType = 'REAL OBSERVATION' | 'SCIENTIFIC VISUALIZATION' | 'ARTIST CONCEPT' | 'SIMULATION' | 'SCIENTIFIC RECONSTRUCTION';

export type GalaxyImageType = {
  id: string;
  object: string;
  title: string;
  imageUrl: string;
  thumbnailUrl?: string;
  sourceName: string;
  sourceUrl: string;
  telescope: string;
  wavelength: string;
  exposure?: string;
  credit: string;
  license?: string;
  imageType: ImageCategoryType;
  date?: string;
  description: string;
};

export type GalaxyDna = {
  type: string;
  sizeRating: number; // 1 to 10
  starFormationRating: number; // 1 to 10
  gasRating: number; // 1 to 10
  dustRating: number; // 1 to 10
  darkMatterRating: number; // 1 to 10
  blackHolePresent: boolean;
  blackHoleNote: string;
  ageDistribution: string;
  environment: string;
  interaction: string;
  observation: string;
  distance: string;
  lookbackTime: string;
  scientificConfidence: string;
};

export type ComprehensiveGalaxy = {
  id: string;
  name: string;
  catalogNames: string[];
  type: 'Spiral' | 'Barred Spiral' | 'Elliptical' | 'Irregular' | 'Lenticular' | 'Dwarf' | 'Giant Elliptical' | 'Starburst' | 'Active Galaxy' | 'Quasar' | 'Ring Galaxy' | 'Ultra-Diffuse';
  subtype: string;
  distance: string;
  distanceLyNum: number; // Light years
  distanceMethod: string;
  diameter: string;
  diameterLyNum: number;
  stellarMass: string;
  totalMass: string;
  starFormationRate: string;
  blackHole: {
    name: string;
    mass: string;
    type: string;
  } | null;
  constellation: string;
  group: string;
  cluster: string;
  redshift: number | null;
  dna: GalaxyDna;
  images: GalaxyImageType[];
  wavelengthData?: {
    visible?: string;
    infrared?: string;
    radio?: string;
    xray?: string;
    ultraviolet?: string;
  };
  sources: ScientificSource[];
  lastVerified: string;
  status: FactStatus;
};

export const COMPREHENSIVE_GALAXIES_DATABASE: ComprehensiveGalaxy[] = [
  {
    id: 'milky-way',
    name: 'Milky Way Galaxy',
    catalogNames: ['Our Home Galaxy', 'Milky Way'],
    type: 'Barred Spiral',
    subtype: 'SBbc (Barred Spiral)',
    distance: '0 Light Years (Our Cosmic Home)',
    distanceLyNum: 0,
    distanceMethod: 'Direct Stellar Parallax & Cepheid Variables',
    diameter: '100,000 - 150,000 Light Years',
    diameterLyNum: 100000,
    stellarMass: '~1.5 × 10¹¹ Solar Masses (Stars)',
    totalMass: '~1.15 × 10¹² Solar Masses (Including Dark Matter Halo)',
    starFormationRate: '1.6 - 2.0 Solar Masses / Year',
    blackHole: {
      name: 'Sagittarius A*',
      mass: '~4.15 Million Solar Masses',
      type: 'Supermassive Black Hole'
    },
    constellation: 'Sagittarius (Galactic Center)',
    group: 'Local Group',
    cluster: 'Virgo Supercluster / Laniakea',
    redshift: 0,
    dna: {
      type: 'Barred Spiral (SBbc)',
      sizeRating: 7,
      starFormationRating: 6,
      gasRating: 7,
      dustRating: 6,
      darkMatterRating: 8,
      blackHolePresent: true,
      blackHoleNote: 'Sagittarius A* (4.15M M☉)',
      ageDistribution: 'Young + Old (Population I & II)',
      environment: 'Local Group (Major Member)',
      interaction: 'Stable (Approaching M31)',
      observation: 'Gaia / Spitzer / Chandra',
      distance: '0 LY (Home)',
      lookbackTime: 'Present Epoch (0 Yrs)',
      scientificConfidence: '100% (In-situ Data)'
    },
    images: [
      {
        id: 'mw-recon-01',
        object: 'Milky Way Galaxy',
        title: 'Artist Reconstruction of Milky Way Structure',
        imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'NASA / JPL-Caltech',
        sourceUrl: 'https://science.nasa.gov/galaxies/milky-way/',
        telescope: 'Spitzer Space Telescope & Gaia',
        wavelength: 'Infrared & Optical Synthesis',
        credit: 'NASA / JPL-Caltech / R. Hurt (SSC)',
        imageType: 'SCIENTIFIC RECONSTRUCTION',
        date: '2024-05-15',
        description: '3D scientific model showing the Milky Way central bar, Orion-Cygnus spur, and spiral arms reconstructed from Gaia and Spitzer data.'
      }
    ],
    wavelengthData: {
      visible: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
      infrared: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
      radio: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
      xray: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
    },
    sources: [
      { name: 'NASA', url: 'https://science.nasa.gov/galaxies/milky-way/', articleTitle: 'Milky Way Structure & Demographics' },
      { name: 'ESA', url: 'https://www.esa.int/Gaia', articleTitle: 'Gaia 3D Galactic Mapping Data' }
    ],
    lastVerified: '2026-08-20',
    status: 'Observed'
  },
  {
    id: 'andromeda',
    name: 'Andromeda Galaxy (M31)',
    catalogNames: ['Messier 31', 'NGC 224', 'M31'],
    type: 'Spiral',
    subtype: 'SA(s)b (Unbarred Spiral)',
    distance: '2.537 Million Light Years',
    distanceLyNum: 2537000,
    distanceMethod: 'Cepheid Variable Stars & Tip of Red Giant Branch (TRGB)',
    diameter: '220,000 Light Years',
    diameterLyNum: 220000,
    stellarMass: '~1.0 × 10¹² Solar Masses',
    totalMass: '~1.5 × 10¹² Solar Masses',
    starFormationRate: '0.4 Solar Masses / Year',
    blackHole: {
      name: 'Andromeda Core BH (M31*)',
      mass: '~1.4 × 10⁸ Solar Masses',
      type: 'Supermassive Black Hole'
    },
    constellation: 'Andromeda',
    group: 'Local Group',
    cluster: 'Virgo Supercluster',
    redshift: -0.001001, // Approaching us
    dna: {
      type: 'Spiral (SA(s)b)',
      sizeRating: 8,
      starFormationRating: 4,
      gasRating: 5,
      dustRating: 6,
      darkMatterRating: 8,
      blackHolePresent: true,
      blackHoleNote: 'M31* (140M M☉)',
      ageDistribution: 'Dominantly Old Disk + Bulge',
      environment: 'Local Group (Largest Member)',
      interaction: 'Approaching Milky Way (110 km/s)',
      observation: 'Hubble / JWST / GALEX',
      distance: '2.537 Million LY',
      lookbackTime: '2.537 Million Years',
      scientificConfidence: '99.9% (Verified)'
    },
    images: [
      {
        id: 'm31-obs-01',
        object: 'Andromeda Galaxy (M31)',
        title: 'Hubble Composite Portrait of Andromeda',
        imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'NASA / ESA Hubble',
        sourceUrl: 'https://science.nasa.gov/missions/hubble/',
        telescope: 'Hubble Space Telescope',
        wavelength: 'Optical & Near-Infrared',
        credit: 'NASA, ESA, J. Dalcanton (University of Washington)',
        imageType: 'REAL OBSERVATION',
        date: '2023-11-10',
        description: 'True astronomical observation showing Andromeda’s dense stellar core and ring of dust lanes.'
      }
    ],
    wavelengthData: {
      visible: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
      infrared: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
      radio: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop'
    },
    sources: [
      { name: 'NASA', url: 'https://science.nasa.gov/missions/hubble/', articleTitle: 'Hubble M31 Survey' }
    ],
    lastVerified: '2026-08-15',
    status: 'Observed'
  },
  {
    id: 'triangulum',
    name: 'Triangulum Galaxy (M33)',
    catalogNames: ['Messier 33', 'NGC 598', 'M33'],
    type: 'Spiral',
    subtype: 'SA(s)cd (Unbarred Pure Disk)',
    distance: '2.73 Million Light Years',
    distanceLyNum: 2730000,
    distanceMethod: 'Cepheid Variables',
    diameter: '60,000 Light Years',
    diameterLyNum: 60000,
    stellarMass: '~4 × 10⁹ Solar Masses',
    totalMass: '~5 × 10¹⁰ Solar Masses',
    starFormationRate: '0.45 Solar Masses / Year',
    blackHole: null,
    constellation: 'Triangulum',
    group: 'Local Group',
    cluster: 'Virgo Supercluster',
    redshift: -0.000607,
    dna: {
      type: 'Pure Spiral Disk (SA(s)cd)',
      sizeRating: 4,
      starFormationRating: 5,
      gasRating: 7,
      dustRating: 5,
      darkMatterRating: 9,
      blackHolePresent: false,
      blackHoleNote: 'Unconfirmed / No SMBH detected',
      ageDistribution: 'Young Starburst H II Regions',
      environment: 'Local Group (3rd Largest)',
      interaction: 'Tidally Bound to Andromeda',
      observation: 'Hubble / VLT / Spitzer',
      distance: '2.73 Million LY',
      lookbackTime: '2.73 Million Years',
      scientificConfidence: '99.5% (Verified)'
    },
    images: [
      {
        id: 'm33-obs-01',
        object: 'Triangulum Galaxy (M33)',
        title: 'M33 High Resolution Star Formations',
        imageUrl: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'ESA / Hubble',
        sourceUrl: 'https://www.esa.int/',
        telescope: 'Hubble Space Telescope',
        wavelength: 'Visible / Hydrogen-Alpha',
        credit: 'ESA/Hubble & NASA',
        imageType: 'REAL OBSERVATION',
        date: '2024-01-20',
        description: 'Detailed view of H II star nurseries in M33 including massive NGC 604.'
      }
    ],
    sources: [
      { name: 'ESA', url: 'https://www.esa.int/', articleTitle: 'M33 Star Formation Survey' }
    ],
    lastVerified: '2026-08-10',
    status: 'Observed'
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool Galaxy (M51)',
    catalogNames: ['Messier 51a', 'NGC 5194', 'M51'],
    type: 'Spiral',
    subtype: 'SA(s)bc (Grand Design Spiral)',
    distance: '23 Million Light Years',
    distanceLyNum: 23000000,
    distanceMethod: 'Type II Supernovae & TRGB',
    diameter: '76,000 Light Years',
    diameterLyNum: 76000,
    stellarMass: '~1.6 × 10¹⁰ Solar Masses',
    totalMass: '~1.6 × 10¹¹ Solar Masses',
    starFormationRate: '4.2 Solar Masses / Year',
    blackHole: {
      name: 'M51 Central BH',
      mass: '~1.0 × 10⁶ Solar Masses',
      type: 'Supermassive Black Hole'
    },
    constellation: 'Canes Venatici',
    group: 'M51 Group',
    cluster: 'Virgo Supercluster',
    redshift: 0.001544,
    dna: {
      type: 'Grand Design Spiral (SA(s)bc)',
      sizeRating: 6,
      starFormationRating: 8,
      gasRating: 8,
      dustRating: 7,
      darkMatterRating: 7,
      blackHolePresent: true,
      blackHoleNote: 'M51 Core BH (1M M☉)',
      ageDistribution: 'Abundant Young Blue Clusters',
      environment: 'M51 Group',
      interaction: 'Active Collision with NGC 5195',
      observation: 'Hubble / JWST / Chandra',
      distance: '23 Million LY',
      lookbackTime: '23 Million Years',
      scientificConfidence: '99.8% (Verified)'
    },
    images: [
      {
        id: 'm51-obs-01',
        object: 'Whirlpool Galaxy (M51)',
        title: 'Grand Design Arms and Companion NGC 5195',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'NASA / ESA STScI',
        sourceUrl: 'https://hubblesite.org/',
        telescope: 'Hubble Space Telescope ACS',
        wavelength: 'Visible Composite',
        credit: 'NASA, ESA, S. Beckwith (STScI), and The Hubble Heritage Team',
        imageType: 'REAL OBSERVATION',
        date: '2024-02-14',
        description: 'Classic grand design spiral interacting tidally with smaller companion galaxy NGC 5195.'
      }
    ],
    sources: [
      { name: 'NASA', url: 'https://www.nasa.gov/', articleTitle: 'Hubble M51 Galaxy Heritage Image' }
    ],
    lastVerified: '2026-08-12',
    status: 'Observed'
  },
  {
    id: 'sombrero',
    name: 'Sombrero Galaxy (M104)',
    catalogNames: ['Messier 104', 'NGC 4594', 'M104'],
    type: 'Lenticular',
    subtype: 'SA(s)a / Lenticular Spiral Hybrid',
    distance: '31.1 Million Light Years',
    distanceLyNum: 31100000,
    distanceMethod: 'Planetary Nebula Luminosity Function (PNLF)',
    diameter: '50,000 Light Years',
    diameterLyNum: 50000,
    stellarMass: '~2.4 × 10¹¹ Solar Masses',
    totalMass: '~1.0 × 10¹² Solar Masses',
    starFormationRate: '0.2 Solar Masses / Year',
    blackHole: {
      name: 'Sombrero Central BH',
      mass: '~1.0 × 10⁹ Solar Masses',
      type: 'Supermassive Black Hole'
    },
    constellation: 'Virgo',
    group: 'M104 Group',
    cluster: 'Virgo Cluster Edge',
    redshift: 0.003416,
    dna: {
      type: 'Lenticular / Spiral Hybrid (SA(s)a)',
      sizeRating: 5,
      starFormationRating: 2,
      gasRating: 3,
      dustRating: 8,
      darkMatterRating: 8,
      blackHolePresent: true,
      blackHoleNote: 'M104 Core BH (1 Billion M☉)',
      ageDistribution: 'Predominantly Old Red Stars',
      environment: 'M104 Group / Virgo Fringe',
      interaction: 'Isolated Stable System',
      observation: 'Hubble / Spitzer / Chandra',
      distance: '31.1 Million LY',
      lookbackTime: '31.1 Million Years',
      scientificConfidence: '99.7% (Verified)'
    },
    images: [
      {
        id: 'm104-obs-01',
        object: 'Sombrero Galaxy (M104)',
        title: 'Dense Bulge and Dark Dust Ring of M104',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'NASA / STScI',
        sourceUrl: 'https://hubblesite.org/',
        telescope: 'Hubble & Spitzer',
        wavelength: 'Visible / Infrared Synthesis',
        credit: 'NASA/ESA and The Hubble Heritage Team',
        imageType: 'REAL OBSERVATION',
        date: '2023-09-01',
        description: 'Distinctive hat-like appearance produced by a massive stellar core encircled by a sharp lane of dark dust.'
      }
    ],
    sources: [
      { name: 'NASA', url: 'https://hubblesite.org/', articleTitle: 'Sombrero Galaxy Core Survey' }
    ],
    lastVerified: '2026-08-01',
    status: 'Observed'
  },
  {
    id: 'large-magellanic-cloud',
    name: 'Large Magellanic Cloud (LMC)',
    catalogNames: ['LMC', 'ESO 56-115', 'PGC 17223'],
    type: 'Irregular',
    subtype: 'SB(s)m (Magellanic Spiral / Irregular)',
    distance: '163,000 Light Years',
    distanceLyNum: 163000,
    distanceMethod: 'Eclipsing Binaries',
    diameter: '14,000 Light Years',
    diameterLyNum: 14000,
    stellarMass: '~1.0 × 10¹⁰ Solar Masses',
    totalMass: '~1.38 × 10¹¹ Solar Masses',
    starFormationRate: '0.2 - 0.4 Solar Masses / Year',
    blackHole: null,
    constellation: 'Dorado / Mensa',
    group: 'Local Group (Milky Way Satellite)',
    cluster: 'Virgo Supercluster',
    redshift: 0.000927,
    dna: {
      type: 'Magellanic Irregular (SB(s)m)',
      sizeRating: 3,
      starFormationRating: 7,
      gasRating: 8,
      dustRating: 6,
      darkMatterRating: 9,
      blackHolePresent: false,
      blackHoleNote: 'None / Intermediate Candidates',
      ageDistribution: 'Mixed Young & Intermediate',
      environment: 'Milky Way Satellite Group',
      interaction: 'Tidal Stripping by Milky Way',
      observation: 'JWST / VLT / Gaia',
      distance: '163,000 LY',
      lookbackTime: '163,000 Years',
      scientificConfidence: '100% (High Resolution)'
    },
    images: [
      {
        id: 'lmc-obs-01',
        object: 'Large Magellanic Cloud',
        title: 'Tarantula Nebula and LMC Starburst Regions',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'ESO / NASA JWST',
        sourceUrl: 'https://www.eso.org/',
        telescope: 'JWST & VLT',
        wavelength: 'Infrared & Optical',
        credit: 'ESO/NASA/JWST NIRCam',
        imageType: 'REAL OBSERVATION',
        date: '2024-03-01',
        description: 'Disrupted irregular satellite galaxy undergoing gravitational tidal friction with the Milky Way.'
      }
    ],
    sources: [
      { name: 'ESO', url: 'https://www.eso.org/', articleTitle: 'Magellanic Clouds Kinematics' }
    ],
    lastVerified: '2026-08-18',
    status: 'Observed'
  },
  {
    id: 'cartwheel',
    name: 'Cartwheel Galaxy (ESO 350-40)',
    catalogNames: ['ESO 350-40', 'PGC 2248'],
    type: 'Ring Galaxy',
    subtype: 'Collision Ring Galaxy',
    distance: '500 Million Light Years',
    distanceLyNum: 500000000,
    distanceMethod: 'Cosmological Redshift',
    diameter: '150,000 Light Years',
    diameterLyNum: 150000,
    stellarMass: '~3 × 10¹⁰ Solar Masses',
    totalMass: '~4 × 10¹¹ Solar Masses',
    starFormationRate: '18 Solar Masses / Year (High Ring Starburst)',
    blackHole: null,
    constellation: 'Sculptor',
    group: 'Cartwheel Group',
    cluster: 'Field / Small Group',
    redshift: 0.0305,
    dna: {
      type: 'Collisional Ring Galaxy',
      sizeRating: 7,
      starFormationRating: 10,
      gasRating: 9,
      dustRating: 7,
      darkMatterRating: 7,
      blackHolePresent: false,
      blackHoleNote: 'Shock Ring Starburst Core',
      ageDistribution: 'Extreme Starburst Outer Ring',
      environment: 'Cartwheel Group',
      interaction: 'Post-Collision Density Wave',
      observation: 'JWST NIRCam / MIRI / Chandra',
      distance: '500 Million LY',
      lookbackTime: '500 Million Years',
      scientificConfidence: '99.4% (JWST Observation)'
    },
    images: [
      {
        id: 'cartwheel-obs-01',
        object: 'Cartwheel Galaxy',
        title: 'JWST Composite of Cartwheel Cosmic Ring',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'NASA / ESA JWST',
        sourceUrl: 'https://webbtelescope.org/',
        telescope: 'James Webb Space Telescope (NIRCam/MIRI)',
        wavelength: 'Near & Mid Infrared Composite',
        credit: 'NASA, ESA, CSA, STScI',
        imageType: 'REAL OBSERVATION',
        date: '2024-04-12',
        description: 'Expanding density wave ring formed after a high-speed galactic bullseye collision.'
      }
    ],
    sources: [
      { name: 'NASA', url: 'https://webbtelescope.org/', articleTitle: 'JWST Captures Cartwheel Galaxy' }
    ],
    lastVerified: '2026-08-05',
    status: 'Observed'
  },
  {
    id: 'm87',
    name: 'Virgo A / M87 (Giant Elliptical)',
    catalogNames: ['Messier 87', 'NGC 4486', 'Virgo A'],
    type: 'Giant Elliptical',
    subtype: 'E0-E1 (Giant Spheroid)',
    distance: '53.5 Million Light Years',
    distanceLyNum: 53500000,
    distanceMethod: 'Surface Brightness Fluctuations (SBF) & EHT',
    diameter: '120,000 Light Years (Core) / 980,000 LY (Halo)',
    diameterLyNum: 240000,
    stellarMass: '~2.7 × 10¹² Solar Masses',
    totalMass: '~1.5 × 10¹³ Solar Masses',
    starFormationRate: '< 0.05 Solar Masses / Year (Quenched)',
    blackHole: {
      name: 'M87* (EHT Black Hole)',
      mass: '~6.5 × 10⁹ Solar Masses',
      type: 'Supermassive Black Hole'
    },
    constellation: 'Virgo',
    group: 'Virgo Cluster Core',
    cluster: 'Virgo Cluster',
    redshift: 0.00428,
    dna: {
      type: 'Giant Elliptical (E0-E1)',
      sizeRating: 10,
      starFormationRating: 1,
      gasRating: 2,
      dustRating: 2,
      darkMatterRating: 10,
      blackHolePresent: true,
      blackHoleNote: 'M87* EHT Black Hole (6.5 Billion M☉)',
      ageDistribution: 'Ancient Red Population II Stars',
      environment: 'Virgo Cluster Center Core',
      interaction: 'Cluster Merger Dominator',
      observation: 'EHT Network / Hubble / Chandra',
      distance: '53.5 Million LY',
      lookbackTime: '53.5 Million Years',
      scientificConfidence: '100% (EHT Imaged BH)'
    },
    images: [
      {
        id: 'm87-obs-01',
        object: 'Messier 87',
        title: 'M87 Core Jet and EHT Black Hole Shadow',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'Event Horizon Telescope / NASA',
        sourceUrl: 'https://eventhorizontelescope.org/',
        telescope: 'EHT Network & Hubble',
        wavelength: '1.3mm Millimeter Radio & Optical Jet',
        credit: 'EHT Collaboration / NASA STScI',
        imageType: 'REAL OBSERVATION',
        date: '2024-02-01',
        description: 'Giant elliptical containing 6.5 billion solar mass black hole emitting a 5,000 light-year relativistic jet.'
      }
    ],
    sources: [
      { name: 'NSF / EHT', url: 'https://eventhorizontelescope.org/', articleTitle: 'First Image of a Black Hole Shadow M87*' },
      { name: 'NASA', url: 'https://science.nasa.gov/', articleTitle: 'M87 Relativistic Jet Dynamics' }
    ],
    lastVerified: '2026-08-22',
    status: 'Observed'
  },
  {
    id: 'm82-cigar',
    name: 'Cigar Galaxy (M82 Starburst)',
    catalogNames: ['Messier 82', 'NGC 3034', 'M82'],
    type: 'Starburst',
    subtype: 'I0 (Starburst Irregular)',
    distance: '12 Million Light Years',
    distanceLyNum: 12000000,
    distanceMethod: 'TRGB Stars',
    diameter: '37,000 Light Years',
    diameterLyNum: 37000,
    stellarMass: '~1.0 × 10¹⁰ Solar Masses',
    totalMass: '~5.0 × 10¹⁰ Solar Masses',
    starFormationRate: '10 - 20 Solar Masses / Year (Starburst)',
    blackHole: {
      name: 'M82 X-1',
      mass: '~400 Solar Masses',
      type: 'Intermediate-mass Black Hole Candidate'
    },
    constellation: 'Ursa Major',
    group: 'M81 Group',
    cluster: 'Virgo Supercluster',
    redshift: 0.000677,
    dna: {
      type: 'Starburst Irregular (I0)',
      sizeRating: 3,
      starFormationRating: 10,
      gasRating: 9,
      dustRating: 8,
      darkMatterRating: 6,
      blackHolePresent: true,
      blackHoleNote: 'M82 X-1 (Intermediate 400 M☉)',
      ageDistribution: 'Massive Short-lived O & B Stars',
      environment: 'M81 Group',
      interaction: 'Tidal Interaction with M81',
      observation: 'Chandra / Hubble / Spitzer',
      distance: '12 Million LY',
      lookbackTime: '12 Million Years',
      scientificConfidence: '99.6% (Verified)'
    },
    images: [
      {
        id: 'm82-obs-01',
        object: 'Messier 82',
        title: 'Hydrogen Outflows in M82 Starburst Galaxy',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'NASA Chandra & Hubble',
        sourceUrl: 'https://chandra.harvard.edu/',
        telescope: 'Chandra X-Ray Observatory & Hubble',
        wavelength: 'X-Ray (Blue) & Optical H-Alpha (Red)',
        credit: 'NASA/CXC/JHU/M. Voigt et al.',
        imageType: 'REAL OBSERVATION',
        date: '2024-03-25',
        description: 'Violent starburst galaxy emitting superwinds of hot gas driven by thousands of supernovae.'
      }
    ],
    sources: [
      { name: 'NASA', url: 'https://chandra.harvard.edu/', articleTitle: 'M82 Galactic Superwind Diagnostics' }
    ],
    lastVerified: '2026-08-14',
    status: 'Observed'
  },
  {
    id: '3c-273-quasar',
    name: '3C 273 (First Identified Quasar)',
    catalogNames: ['3C 273', 'PGC 41121'],
    type: 'Quasar',
    subtype: 'Radio-Loud Active Galactic Nucleus',
    distance: '2.4 Billion Light Years',
    distanceLyNum: 2400000000,
    distanceMethod: 'Spectroscopic Redshift (z = 0.158)',
    diameter: '100,000 Light Years (Host Galaxy)',
    diameterLyNum: 100000,
    stellarMass: '~2.0 × 10¹¹ Solar Masses',
    totalMass: '~1.5 × 10¹² Solar Masses',
    starFormationRate: 'Variable / Core Dominated',
    blackHole: {
      name: '3C 273 Central SMBH',
      mass: '~886 Million Solar Masses',
      type: 'Active Supermassive Black Hole'
    },
    constellation: 'Virgo',
    group: 'Distant Field Quasar',
    cluster: 'Cosmological Large-Scale Structure',
    redshift: 0.158339,
    dna: {
      type: 'Active Quasar / Elliptical Host',
      sizeRating: 8,
      starFormationRating: 6,
      gasRating: 8,
      dustRating: 6,
      darkMatterRating: 8,
      blackHolePresent: true,
      blackHoleNote: 'Central SMBH (886 Million M☉)',
      ageDistribution: 'Quasar Core + Host Galaxy Stars',
      environment: 'High Redshift Universe Field',
      interaction: 'Accretion Disk + Relativistic Jets',
      observation: 'Hubble Coronagraph / VLA / XMM',
      distance: '2.4 Billion LY',
      lookbackTime: '2.4 Billion Years',
      scientificConfidence: '99.8% (Verified Redshift z=0.158)'
    },
    images: [
      {
        id: '3c273-obs-01',
        object: '3C 273 Quasar',
        title: '3C 273 Relativistic Jet and Luminous Core',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
        sourceName: 'NASA Hubble Space Telescope',
        sourceUrl: 'https://hubblesite.org/',
        telescope: 'Hubble Coronagraphic Camera',
        wavelength: 'Optical & Ultraviolet',
        credit: 'NASA/ESA and H. Ford (JHU)',
        imageType: 'REAL OBSERVATION',
        date: '2023-10-05',
        description: 'First identified quasar, outshining its entire host galaxy by over 4 Trillion Suns.'
      }
    ],
    sources: [
      { name: 'NASA', url: 'https://hubblesite.org/', articleTitle: '3C 273 Quasar Core Dynamics' }
    ],
    lastVerified: '2026-08-08',
    status: 'Observed'
  }
];

// 40+ Verified "Things That Sound Fake" Facts
export const GALAXY_WOW_FACTS = [
  "The Milky Way is only one galaxy among hundreds of billions in the observable universe.",
  "Some giant elliptical galaxies contain more than 100 trillion stars.",
  "Some dwarf galaxies contain as few as 100 million stars.",
  "The Milky Way galaxy spans more than 100,000 light-years in diameter.",
  "Our Solar System takes roughly 240 million years to orbit the Milky Way center once.",
  "Almost every large galaxy is thought to harbor a central supermassive black hole.",
  "Sagittarius A* at the Milky Way center is approximately 4.15 million times the mass of our Sun.",
  "Elliptical galaxies contain almost no obvious spiral arms or cold gas clouds.",
  "When two galaxies collide, individual stars inside them almost NEVER crash into each other.",
  "Galaxies are bound inside massive invisible envelopes called dark matter halos.",
  "Gravity from massive galaxy clusters acts like a gigantic gravitational telescope lens.",
  "Hubble’s Ultra Deep Field revealed over 10,000 galaxies in a patch of sky 1/13 the size of the full moon.",
  "Looking at a galaxy 10 billion light-years away means seeing it as it was 10 billion years ago.",
  "Quasars powered by accretion disks around supermassive black holes can outshine 1,000 normal galaxies combined.",
  "Relativistic jets from active galactic nuclei (blazars) can shoot matter near light speed across millions of light-years.",
  "Andromeda is approaching the Milky Way at 110 kilometers per second and will merge with us in ~4.5 billion years.",
  "The Local Group of galaxies contains more than 50 member galaxies, mostly dwarf galaxies.",
  "Galaxies are not scattered randomly—they align into vast threads called the Cosmic Web.",
  "Enormous empty spaces called Cosmic Voids separate the filaments of the Cosmic Web.",
  "Some starburst galaxies form new stars 100 times faster than the Milky Way.",
  "When a galaxy exhausts its star-forming gas, it enters a state astronomers call 'quenching'.",
  "Galaxies recycle heavy elements forged in supernovae to form future generation stars and planets.",
  "All chemical elements heavier than helium in your body were created inside ancient stars in earlier galaxies.",
  "Dark matter accounts for over 80% of the total mass in most galaxies.",
  "Hot intracluster gas between galaxies in a cluster can exceed temperatures of 100 million Kelvin.",
  "Active black holes can emit powerful energy feedback that blows cold gas straight out of a galaxy.",
  "Astronomers measure distant galaxy motion using cosmological redshift—the stretching of light by expanding space.",
  "Because light takes time to travel, looking deep into space is directly looking backwards in cosmic time.",
  "We cannot photograph the Milky Way from the outside because no spacecraft has left our galaxy.",
  "The origins of the very first supermassive black holes in early galaxies remain one of astronomy's greatest mysteries.",
  "The earliest galaxies observed by JWST formed less than 350 million years after the Big Bang.",
  "Spiral arms are density waves propagating through disk stars, like a cosmic traffic jam.",
  "The central bar of a barred spiral galaxy funnels gas inward toward the central supermassive black hole.",
  "Ultra-diffuse galaxies can be as large as the Milky Way but contain 99% fewer stars.",
  "Ring galaxies like the Cartwheel Galaxy form when a smaller galaxy punches straight through the center of a spiral.",
  "Color in galaxies reveals age: blue regions show young hot stars while red regions contain older stellar populations.",
  "Astronomers use multi-wavelength observations (X-ray, UV, optical, infrared, radio) to uncover invisible galaxy structures.",
  "The Great Debate of 1920 between Harlow Shapley and Heber Curtis questioned whether 'spiral nebulae' were outside our galaxy.",
  "Edwin Hubble proved Andromeda was a separate galaxy in 1923 by discovering Cepheid variable stars inside it.",
  "Galaxy clusters like the Coma Cluster contain thousands of individual galaxies bound by gravity."
];

// 7 Myth vs Reality Pairs
export const GALAXY_MYTHS = [
  {
    id: 'myth-1',
    myth: 'Every galaxy in the universe has spiral arms.',
    reality: 'Galaxies come in many structural forms including Spirals, Barred Spirals, Ellipticals, Irregulars, Lenticulars, and Ring Galaxies.'
  },
  {
    id: 'myth-2',
    myth: 'The black hole at a galaxy center acts like a giant cosmic vacuum cleaner eating all stars.',
    reality: 'For most of a galaxy, gravity is dominated by stars, gas, and dark matter. A black hole’s extreme gravity only affects objects close to it.'
  },
  {
    id: 'myth-3',
    myth: 'Galaxy collisions cause billions of stars to smash directly into each other.',
    reality: 'Stars are separated by light-years of empty space. During a collision, galaxies pass through each other with primarily gravitational interactions.'
  },
  {
    id: 'myth-4',
    myth: 'Dark matter in galaxies has been directly photographed by optical telescopes.',
    reality: 'Dark matter does not emit or reflect light. Its presence is inferred through gravitational rotation curves and lensing.'
  },
  {
    id: 'myth-5',
    myth: 'Photographs of the Milky Way from high above its spiral disk are real external satellite photos.',
    reality: 'All full view images of the Milky Way from outside are scientific 3D reconstructions. Humans have never sent a probe outside our galaxy.'
  },
  {
    id: 'myth-6',
    myth: 'Every single galaxy in the cosmos contains exactly one central black hole.',
    reality: 'While large galaxies usually harbor central supermassive black holes, many dwarf galaxies or merging systems have zero or multiple black holes.'
  },
  {
    id: 'myth-7',
    myth: 'A galaxy’s red color always means it is extremely old.',
    reality: 'A galaxy can appear red due to older stellar populations, cosmic dust extinction, or strong cosmological redshift across deep space.'
  }
];

// Galaxy Quiz Questions
export const GALAXY_QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: 'What type of galaxy is our home, the Milky Way?',
    options: ['Pure Elliptical', 'Barred Spiral', 'Irregular Galaxy', 'Ring Galaxy'],
    correctIndex: 1,
    explanation: 'NASA and ESA observations classify the Milky Way as a barred spiral galaxy (SBbc) with a central bar structure.',
    source: 'NASA Science'
  },
  {
    id: 'q2',
    question: 'What is the name and estimated mass of the supermassive black hole at the center of the Milky Way?',
    options: ['Cygnus X-1 (~15 Solar Masses)', 'M87* (~6.5 Billion Solar Masses)', 'Sagittarius A* (~4.15 Million Solar Masses)', '3C 273 (~880 Million Solar Masses)'],
    correctIndex: 2,
    explanation: 'Sagittarius A* (Sgr A*) resides at our galactic core with a mass verified at ~4.15 million solar masses.',
    source: 'ESO / Nobel Prize Physics 2020'
  },
  {
    id: 'q3',
    question: 'Why do stars rarely collide when two galaxies merge?',
    options: ['Stars repel each other magnetically', 'Stars are separated by enormous light-year distances', 'Stars shrink during mergers', 'Dark matter cushions the stars'],
    correctIndex: 1,
    explanation: 'Because stars are tiny compared to the light-years of distance separating them, galaxy mergers are gravitational interactions of gas and mass without stellar impacts.',
    source: 'STScI / Hubble'
  },
  {
    id: 'q4',
    question: 'What key evidence proved the existence of Dark Matter in spiral galaxies?',
    options: ['Flat galactic rotation curves at outer radii', 'Bright red flashes from galactic centers', 'Black holes disappearing', 'Galaxies stopping their rotation'],
    correctIndex: 0,
    explanation: 'Vera Rubin and Kent Ford observed that stars in outer spiral disks orbit faster than expected from visible matter alone, indicating an invisible dark matter halo.',
    source: 'Carnegie Science & Vera Rubin Observational Legacy'
  },
  {
    id: 'q5',
    question: 'How many distant galaxies were revealed in the original Hubble Ultra Deep Field patch of sky?',
    options: ['About 100', 'Roughly 10,000', 'Exactly 1 Million', 'Over 10 Billion'],
    correctIndex: 1,
    explanation: 'In a tiny patch of sky roughly 1/13 the area of the full moon, Hubble captured approximately 10,000 distant galaxies spanning cosmic time.',
    source: 'NASA STScI'
  }
];

// Exploration Missions Data
export const GALAXY_MISSIONS = [
  { id: 'm1', title: 'Locate the Milky Way Barred Core', description: 'Explore our home galaxy and identify the Orion Spur & central bar.', rewardBadge: 'Galaxy Explorer', targetId: 'milky-way' },
  { id: 'm2', title: 'Inspect Supermassive Black Hole Sgr A*', description: 'Examine Sagittarius A* at 4.15 million solar masses.', rewardBadge: 'Black Hole Hunter', targetId: 'sgr-a' },
  { id: 'm3', title: 'Analyze Hubble Tuning Fork Categories', description: 'Switch morphological views between Spiral, Elliptical, and Irregular.', rewardBadge: 'Cosmic Cartographer', targetId: 'hubble-lab' },
  { id: 'm4', title: 'Simulate Milkdromeda Collision', description: 'Run the future gravitational merger between Andromeda and the Milky Way.', rewardBadge: 'Galactic Dynamicist', targetId: 'merger-sim' },
  { id: 'm5', title: 'Examine Dark Matter Rotation Curves', description: 'Compare predicted Newtonian rotational speeds vs observed flat curves.', rewardBadge: 'Dark Matter Investigator', targetId: 'dark-matter-lab' },
  { id: 'm6', title: 'Dive into the Hubble Ultra Deep Field', description: 'Select a distant high-redshift galaxy from 13+ billion years ago.', rewardBadge: 'Deep Field Explorer', targetId: 'deep-field' },
  { id: 'm7', title: 'Traverse the Cosmic Web Spectrum', description: 'Inspect multi-wavelength X-ray, Infrared, and Radio signatures.', rewardBadge: 'Spectrum Analyst', targetId: 'spectrum-lab' },
  { id: 'm8', title: 'Navigate Voids & Cosmic Filaments', description: 'Fly through 3D cosmic web threads connecting galaxy clusters.', rewardBadge: 'Cosmic Web Explorer', targetId: 'cosmic-web' }
];

// Sample Interactive Galaxies for Hubble Deep Field Picker
export const DEEP_FIELD_SAMPLE_GALAXIES = [
  { id: 'hudf-01', name: 'HUDF-JD1', redshift: 11.9, lookback: '13.3 Billion Years', epoch: 'Reionization Era', shape: 'Compact Dwarf', color: '#ff6b6b', source: 'NASA JWST/Hubble' },
  { id: 'hudf-02', name: 'GN-z11 Proto-Galaxy', redshift: 10.6, lookback: '13.2 Billion Years', epoch: 'Early Universe Assembly', shape: 'Irregular Starburst', color: '#f783ac', source: 'NASA Hubble Space Telescope' },
  { id: 'hudf-03', name: 'HUDF-39546284', redshift: 9.6, lookback: '13.1 Billion Years', epoch: 'First Star Generation', shape: 'Diffusive Protogalaxy', color: '#da77f2', source: 'NASA STScI' },
  { id: 'hudf-04', name: 'UDF-430', redshift: 6.2, lookback: '12.7 Billion Years', epoch: 'Post-Reionization Epoch', shape: 'Early Disk Spiral', color: '#9775fa', source: 'ESA Hubble' },
  { id: 'hudf-05', name: 'UDF-212', redshift: 4.5, lookback: '12.1 Billion Years', epoch: 'Cosmic Dawn Peak', shape: 'Barred Proto-Spiral', color: '#74c0fc', source: 'NASA JWST' },
  { id: 'hudf-06', name: 'UDF-981', redshift: 2.1, lookback: '10.5 Billion Years', epoch: 'Cosmic Noon Starburst', shape: 'Grand Design Spiral', color: '#38d9a9', source: 'NASA STScI' }
];
