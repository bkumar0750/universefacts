export type GalaxyDiscovery2026 = {
  id: string;
  title: string;
  date: string; // e.g. "August 2026"
  objectName: string;
  category: 'BLACK HOLE' | 'EARLY UNIVERSE' | 'DARK MATTER' | 'MILKY WAY' | 'STARBURST' | 'SUPERNOVA' | 'TAXONOMY';
  summary: string;
  whyItMatters: string;
  scientificStatus: 'ACTIVE RESEARCH' | 'CONFIRMED OBSERVATION' | 'DEBATED MODEL';
  telescope: string;
  imageUrl: string;
  imageType: 'REAL OBSERVATION' | 'SCIENTIFIC RECONSTRUCTION' | 'ARTIST CONCEPT';
  credit: string;
  sourceName: string;
  sourceUrl: string;
  metrics?: {
    distance?: string;
    redshift?: number;
    mass?: string;
    cosmicAge?: string;
  };
  keyQuestion?: string;
  knownUnknown?: {
    whatWeKnow: string[];
    whatWeDontKnow: string[];
  };
};

export const GALAXIES_2026_DISCOVERIES: GalaxyDiscovery2026[] = [
  {
    id: 'abell2744-qso1-early-bh',
    title: 'The Black Hole May Have Formed Before Its Host Galaxy',
    date: 'May 2026',
    objectName: 'Abell2744-QSO1',
    category: 'BLACK HOLE',
    summary: 'Webb observations measured a 50 million solar mass black hole in Abell2744-QSO1 existing before a substantial host galaxy had assembled around it.',
    whyItMatters: 'Traditional models assume galaxies form stars first and black holes grow later. This suggests some black holes started enormous before their galaxies became massive.',
    scientificStatus: 'ACTIVE RESEARCH',
    telescope: 'James Webb Space Telescope (JWST)',
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'NASA, ESA, CSA, STScI, Abell 2744 Team',
    sourceName: 'NASA JWST Science',
    sourceUrl: 'https://webbtelescope.org/',
    metrics: {
      distance: '> 13 Billion Light-Years',
      redshift: 7.04,
      mass: '~50 Million Solar Masses',
      cosmicAge: '~700 Million Years after Big Bang'
    },
    keyQuestion: 'DID BLACK HOLES HELP BUILD GALAXIES?'
  },
  {
    id: 'little-red-dots-mystery',
    title: 'The "Little Red Dot" Early Universe Mystery',
    date: 'July 2026',
    objectName: 'JWST Little Red Dots (LRDs)',
    category: 'EARLY UNIVERSE',
    summary: 'JWST unveiled compact, extremely red objects abundant in the early universe (z > 4) that decline rapidly at later cosmic times.',
    whyItMatters: 'It remains debated whether LRDs represent a new type of compact galaxy, overgrown active black holes, or an ultra-dense starburst phase.',
    scientificStatus: 'DEBATED MODEL',
    telescope: 'James Webb Space Telescope (JWST)',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'NASA, ESA, CSA, STScI',
    sourceName: 'NASA Astrophysics',
    sourceUrl: 'https://science.nasa.gov/',
    metrics: {
      distance: '12 - 13.3 Billion Light-Years',
      redshift: 4.5
    },
    knownUnknown: {
      whatWeKnow: [
        'Extremely distant & compact',
        'Unusually red spectral energy distributions',
        'Abundant in early universe (z > 4)',
        'Decline dramatically at later cosmic times'
      ],
      whatWeDontKnow: [
        'Are they a completely new category of galaxy?',
        'Are they obscured supermassive black holes?',
        'Why were they so common in the early cosmos?',
        'Why did they disappear so rapidly?'
      ]
    }
  },
  {
    id: 'mom-z14-earliest-galaxy',
    title: 'MoM-z14: Galaxy Confirmed 280 Million Years After Big Bang',
    date: 'July 2026',
    objectName: 'MoM-z14',
    category: 'EARLY UNIVERSE',
    summary: 'Spectroscopic confirmation of MoM-z14 at redshift z = 14.44, seeing it as it existed just 280 million years after the Big Bang.',
    whyItMatters: 'Pushes the known boundary of cosmic assembly, showing bright star-forming galaxies formed much faster than pre-JWST theories predicted.',
    scientificStatus: 'CONFIRMED OBSERVATION',
    telescope: 'James Webb Space Telescope (NIRSpec)',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'NASA / ESA / CSA / STScI / JADES Collaboration',
    sourceName: 'NASA Webb Discoveries',
    sourceUrl: 'https://webbtelescope.org/',
    metrics: {
      distance: '33.8 Billion Light-Years (Comoving)',
      redshift: 14.44,
      cosmicAge: '280 Million Years after Big Bang'
    }
  },
  {
    id: 'dark-matter-800k-galaxies-map',
    title: '800,000 Galaxies & 3D Dark Matter Inferred Network',
    date: 'January 2026',
    objectName: 'JWST Cosmos-Web Field',
    category: 'DARK MATTER',
    summary: 'A massive 255-hour JWST survey mapping nearly 800,000 galaxies across 0.54 square degrees with an overlaid 3D dark matter gravitational lensing reconstruction.',
    whyItMatters: 'Provides the largest contiguous high-resolution map of cosmic web filaments and dark matter scaffolding ever assembled.',
    scientificStatus: 'CONFIRMED OBSERVATION',
    telescope: 'JWST (NIRCam / MIRI) & Chandra',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    imageType: 'SCIENTIFIC RECONSTRUCTION',
    credit: 'NASA / COSMOS-Web Collaboration',
    sourceName: 'NASA STScI',
    sourceUrl: 'https://hubblesite.org/'
  },
  {
    id: 'cdg-2-darkest-galaxy',
    title: 'CDG-2: One of the Darkest Known Galaxies in the Universe',
    date: 'February 2026',
    objectName: 'CDG-2 (Compact Dark Galaxy)',
    category: 'TAXONOMY',
    summary: 'Hubble identified CDG-2, an ultra-low-surface-brightness galaxy with sparse stars dominated almost entirely by an inferred dark matter halo.',
    whyItMatters: 'Challenges assumptions about galaxy luminosity by proving dark matter structures can exist with almost no visible stellar light.',
    scientificStatus: 'CONFIRMED OBSERVATION',
    telescope: 'Hubble Space Telescope',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'NASA / ESA / Hubble Heritage Team',
    sourceName: 'NASA Hubble Archive',
    sourceUrl: 'https://hubblesite.org/'
  },
  {
    id: 'terzan-5-milky-way-fossil',
    title: 'Terzan 5: A Primordial Fossil Fragment of the Milky Way',
    date: 'June 2026',
    objectName: 'Terzan 5',
    category: 'MILKY WAY',
    summary: 'Webb and Hubble combined observations proved Terzan 5 contains 4 separate generations of stars, identifying it as a surviving protoplanetary bulge fossil.',
    whyItMatters: 'Preserves the direct chemical footprint of how the Milky Way central bulge assembled 12 billion years ago.',
    scientificStatus: 'CONFIRMED OBSERVATION',
    telescope: 'JWST & Hubble Space Telescope',
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'NASA / ESA / INAF / F. Ferraro',
    sourceName: 'ESA Hubble & Webb News',
    sourceUrl: 'https://www.esa.int/'
  },
  {
    id: 'sgr-a-water-dust-irs3',
    title: 'Water Molecules & Dust Form Near Sagittarius A*',
    date: 'August 2026',
    objectName: 'IRS 3 near Sagittarius A*',
    category: 'MILKY WAY',
    summary: 'JWST detected water vapor and carbonaceous dust forming in the circumstellar disk of star IRS 3, just light-days from Sagittarius A*.',
    whyItMatters: 'Demonstrates that complex chemical precursor molecules and dust grains can survive in extreme high-radiation black hole environments.',
    scientificStatus: 'CONFIRMED OBSERVATION',
    telescope: 'James Webb Space Telescope (MIRI)',
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'ESA / Webb / MPE Munich',
    sourceName: 'ESA Science Releases',
    sourceUrl: 'https://www.esa.int/'
  },
  {
    id: 'centaurus-a-hidden-core',
    title: 'Centaurus A: Webb Uncovers Hidden Core and Collision Structures',
    date: 'July 2026',
    objectName: 'Centaurus A (NGC 5128)',
    category: 'STARBURST',
    summary: 'JWST infrared instruments pierced the thick central dust lane of Centaurus A, exposing its active core and post-collision stellar streams.',
    whyItMatters: 'Proves how multi-wavelength infrared imaging unveils galaxy mergers masked in visible light.',
    scientificStatus: 'CONFIRMED OBSERVATION',
    telescope: 'James Webb Space Telescope (NIRCam)',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'NASA, ESA, CSA, STScI',
    sourceName: 'NASA STScI',
    sourceUrl: 'https://webbtelescope.org/'
  },
  {
    id: 'm82-cigar-millions-stars',
    title: 'M82 Starburst Overdrive: Millions of Unseen Stars Revealed',
    date: 'April 2026',
    objectName: 'Cigar Galaxy (M82)',
    category: 'STARBURST',
    summary: 'Webb NIRCam resolved millions of individual stars inside M82’s galactic superwind core, capturing the short-lived starburst phase driven by tidal interactions with M81.',
    whyItMatters: 'Helps quantify how galactic collisions trigger explosive star formation episodes.',
    scientificStatus: 'CONFIRMED OBSERVATION',
    telescope: 'James Webb Space Telescope (NIRCam)',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'NASA, ESA, CSA, STScI, A. Bolatto (UMD)',
    sourceName: 'NASA Webb Releases',
    sourceUrl: 'https://webbtelescope.org/'
  },
  {
    id: 'little-green-galaxies',
    title: 'The "Little Green Galaxies" of Cosmic Reionization',
    date: 'March 2026',
    objectName: 'Compact Early Green Starbursts',
    category: 'TAXONOMY',
    summary: 'Compact starburst galaxies existing ~1 billion years after the Big Bang emitting intense [O III] 500.7nm false-color green lines driving cosmic reionization.',
    whyItMatters: 'Demonstrates how astronomers use spectroscopy and false-color filter assignments to map ultraviolet ionisation sources in the early cosmos.',
    scientificStatus: 'CONFIRMED OBSERVATION',
    telescope: 'JWST NIRSpec & NIRCam',
    imageUrl: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'NASA / STScI Spectroscopy Group',
    sourceName: 'NASA Science',
    sourceUrl: 'https://science.nasa.gov/'
  },
  {
    id: 'earliest-confirmed-supernova',
    title: 'Earliest Confirmed Supernova (730M Years After Big Bang)',
    date: 'May 2026',
    objectName: 'JWST Early Supernova Target',
    category: 'SUPERNOVA',
    summary: 'JWST detected a core-collapse supernova in a galaxy observed when the universe was just 730 million years old (z = 6.85).',
    whyItMatters: 'Marks the earliest confirmed stellar explosion, seeding the early universe with carbon, oxygen, and iron.',
    scientificStatus: 'CONFIRMED OBSERVATION',
    telescope: 'James Webb Space Telescope',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    credit: 'NASA, ESA, CSA, STScI',
    sourceName: 'NASA JWST News',
    sourceUrl: 'https://webbtelescope.org/'
  },
  {
    id: 'galaxies-defying-categorization',
    title: 'Galaxies That Defy Categorization: Modern Taxonomy Shift',
    date: 'June 2026',
    objectName: 'Early Universe Hybrid Galaxies',
    category: 'TAXONOMY',
    summary: 'Webb data reveals early universe populations that do not fit classical Hubble categories (Spiral, Elliptical, Irregular), driving an evolution in galactic taxonomy.',
    whyItMatters: 'Reinforces that galaxy classification is an active, evolving science as deep space observations improve.',
    scientificStatus: 'ACTIVE RESEARCH',
    telescope: 'JWST & Hubble Space Telescope',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    imageType: 'SCIENTIFIC RECONSTRUCTION',
    credit: 'NASA STScI Taxonomy Group',
    sourceName: 'NASA Astrophysics Division',
    sourceUrl: 'https://science.nasa.gov/'
  }
];

export function getLatestGalaxiesDiscoveries(category?: string): GalaxyDiscovery2026[] {
  if (!category || category === 'ALL') {
    return GALAXIES_2026_DISCOVERIES;
  }
  return GALAXIES_2026_DISCOVERIES.filter(d => d.category === category);
}
