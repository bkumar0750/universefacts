export interface UniverseDiscovery {
  id: string;
  title: string;
  category: 'JWST' | 'HUBBLE' | 'EUCLID' | 'DARK ENERGY' | 'DARK MATTER' | 'EARLY UNIVERSE' | 'COSMIC WEB' | 'GRAVITATIONAL WAVES' | 'NEUTRINOS';
  date: string;
  object: string;
  telescope: string;
  wavelength: string;
  status: 'OBSERVED' | 'MEASURED' | 'INFERRED' | 'MODELLED' | 'ACTIVE RESEARCH' | 'UNRESOLVED';
  confidenceBadge: 'OBSERVED' | 'MEASURED' | 'ESTIMATED' | 'INFERRED' | 'MODELLED' | 'HYPOTHESIS' | 'SPECULATIVE' | 'UNKNOWN';
  summary: string;
  importance: string;
  imageUrl: string;
  imageCredit: string;
  sourceName: string;
  sourceUrl: string;
  lastVerified: string;
}

export const UNIVERSE_DISCOVERIES_2026: UniverseDiscovery[] = [
  {
    id: 'u1-mom-z14',
    title: 'MoM-z14: Earliest Observed Galaxy at z = 14.44',
    category: 'JWST',
    date: 'August 2026',
    object: 'MoM-z14 Galaxy',
    telescope: 'James Webb Space Telescope (NIRSpec / NIRCam)',
    wavelength: 'Near-Infrared (1.5 - 5.0 µm)',
    status: 'OBSERVED',
    confidenceBadge: 'OBSERVED',
    summary: 'Observed as it existed only ~280 million years after the Big Bang, MoM-z14 is currently identified by NASA as one of the earliest and most distant galaxies detected in JWST deep spectroscopic datasets.',
    importance: 'Challenges classical early galaxy formation timescales by demonstrating that bright, chemically evolving galaxies formed far faster than pre-JWST cosmological models predicted.',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    imageCredit: 'NASA / ESA / CSA / STScI / JWST NIRSpec Team',
    sourceName: 'NASA JWST Science Release',
    sourceUrl: 'https://www.nasa.gov/mission_pages/webb/main/index.html',
    lastVerified: 'August 2026'
  },
  {
    id: 'u2-euclid-3d-map',
    title: 'ESA Euclid 3D Dark Universe Sky Survey',
    category: 'EUCLID',
    date: 'July 2026',
    object: 'Cosmic Web & Dark Matter Halos',
    telescope: 'ESA Euclid Space Telescope (VIS & NISP)',
    wavelength: 'Visible (550-900nm) & Near-Infrared',
    status: 'OBSERVED',
    confidenceBadge: 'MEASURED',
    summary: 'Euclid mapped over 10 billion light-years of space across more than one-third of the sky, capturing gravitational weak lensing distortions to map the 3D distribution of dark matter.',
    importance: 'Provides the largest high-resolution 3D reconstruction of dark matter filaments and cosmic web architecture across 10 billion years of cosmic history.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    imageCredit: 'ESA / Euclid Consortium / NASA',
    sourceName: 'ESA Euclid Science Mission',
    sourceUrl: 'https://www.esa.int/Science_Exploration/Space_Science/Euclid',
    lastVerified: 'July 2026'
  },
  {
    id: 'u3-euclid-bulge-stars',
    title: 'Euclid Wide-Field View of Milky Way Bulge (60M Stars)',
    category: 'EUCLID',
    date: 'June 2026',
    object: 'Milky Way Galactic Bulge',
    telescope: 'ESA Euclid Space Telescope',
    wavelength: 'Visible High-Resolution Imaging',
    status: 'OBSERVED',
    confidenceBadge: 'OBSERVED',
    summary: 'Euclid captured a massive visible-light mosaic detailing more than 60 million individual stars in the Milky Way bulge, showcasing wide-field astronomical survey capabilities.',
    importance: 'Serves as an exemplar of large-scale sky mapping technology, resolving fine stellar populations across vast galactic areas.',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    imageCredit: 'ESA / Euclid Consortium / NASA',
    sourceName: 'ESA Science Release 2026',
    sourceUrl: 'https://www.esa.int/Science_Exploration/Space_Science/Euclid',
    lastVerified: 'June 2026'
  },
  {
    id: 'u4-mxdfz44-reionization',
    title: 'Hubble Observes Ionizing Light Escaping Galaxy MXDFz4.4',
    category: 'HUBBLE',
    date: 'June 2026',
    object: 'MXDFz4.4 Galaxy (z ≈ 4.4)',
    telescope: 'NASA / ESA Hubble Space Telescope',
    wavelength: 'Ultraviolet / Optical',
    status: 'OBSERVED',
    confidenceBadge: 'OBSERVED',
    summary: 'Hubble detected energetic ultraviolet radiation escaping from galaxy MXDFz4.4 (~1.4 billion years post Big Bang), directly illuminating how early starburst galaxies cleared surrounding neutral hydrogen gas.',
    importance: 'Provides empirical observation of the Epoch of Reionization, showing how starlight transformed the intergalactic medium from opaque to transparent.',
    imageUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1200&auto=format&fit=crop',
    imageCredit: 'NASA / ESA / Hubble Heritage Team',
    sourceName: 'NASA Hubble News Center',
    sourceUrl: 'https://hubblesite.org/',
    lastVerified: 'June 2026'
  },
  {
    id: 'u5-hubble-tension-2026',
    title: 'Hubble Tension: Persistent Expansion Rate Discrepancy',
    category: 'DARK ENERGY',
    date: 'August 2026',
    object: 'Cosmological Expansion Rate (H0)',
    telescope: 'JWST / Hubble / Planck Observatory',
    wavelength: 'Multi-Wavelength & Cosmic Microwave Background',
    status: 'UNRESOLVED',
    confidenceBadge: 'MEASURED',
    summary: 'Local Distance Ladder measurements (Cepheids/Type Ia Supernovae) yield H0 ≈ 73.0 km/s/Mpc, whereas CMB-based early universe inference yields H0 ≈ 67.4 km/s/Mpc—a 5-sigma statistical discrepancy.',
    importance: 'Represents one of the most critical open paradoxes in modern cosmology, hinting at potential new physics such as Early Dark Energy or modified gravity models.',
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    imageCredit: 'NASA / STScI / Planck Collaboration',
    sourceName: 'NASA Astrophysics / STScI Briefings',
    sourceUrl: 'https://stsci.edu/',
    lastVerified: 'August 2026'
  },
  {
    id: 'u6-desi-dynamic-dark-energy',
    title: 'DESI 2026 Survey: Testing Time-Evolving Dark Energy',
    category: 'DARK ENERGY',
    date: 'May 2026',
    object: 'Dark Energy Equation of State w(z)',
    telescope: 'Dark Energy Spectroscopic Instrument (DESI)',
    wavelength: 'Optical Spectroscopy (360-980 nm)',
    status: 'ACTIVE RESEARCH',
    confidenceBadge: 'MODELLED',
    summary: 'Large-scale spectroscopic measurements of 30 million galaxies suggest faint variations in the dark energy density over cosmic time, sparking ongoing scientific debate over dynamic dark energy models vs cosmological constant Λ.',
    importance: 'If confirmed by independent observatories, an evolving dark energy component would require extending the standard ΛCDM cosmological framework.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
    imageCredit: 'DESI Collaboration / LBNL / NOIRLab / NSF / DOE',
    sourceName: 'NOIRLab Press Release',
    sourceUrl: 'https://noirlab.edu/',
    lastVerified: 'May 2026'
  }
];

export const getUniverseDiscoveries = (category: string): UniverseDiscovery[] => {
  if (category === 'ALL') return UNIVERSE_DISCOVERIES_2026;
  return UNIVERSE_DISCOVERIES_2026.filter((item) => item.category === category);
};

export const COSMIC_CALENDAR_EVENTS = [
  { date: 'January 1, 00:00:00', realTime: '13.8 Billion Years Ago', title: 'THE BIG BANG', desc: 'The initial hot, dense, rapidly expanding state of space itself.' },
  { date: 'January 10', realTime: '13.5 Billion Years Ago', title: 'FIRST STARS & PROTO-GALAXIES', desc: 'Gravitational collapse of primordial H/He gas seeds the first Population III stars.' },
  { date: 'March 15', realTime: '11.0 Billion Years Ago', title: 'MILKY WAY DISK FORMS', desc: 'Protogalactic fragments merge to assemble our spiral galaxy disk.' },
  { date: 'September 1', realTime: '4.57 Billion Years Ago', title: 'SUN & SOLAR SYSTEM FORM', desc: 'Gravitational collapse of a dense molecular gas cloud in the Orion Spur.' },
  { date: 'September 21', realTime: '3.8 Billion Years Ago', title: 'FIRST LIFE ON EARTH', desc: 'Single-celled prokaryotic organisms emerge in Earth\'s primordial oceans.' },
  { date: 'December 26', realTime: '200 Million Years Ago', title: 'DINOSAURS EVOLVE', desc: 'Mesozoic era begins on Earth.' },
  { date: 'December 31, 23:59:00', realTime: '200,000 Years Ago', title: 'HOMO SAPIENS EMERGES', desc: 'Anatomically modern humans inhabit Earth.' },
  { date: 'December 31, 23:59:59', realTime: 'Past 500 Years', title: 'MODERN SCIENCE & SPACEFLIGHT', desc: 'All recorded human technology, telescopy, and space exploration occupy less than 1 second of cosmic calendar time.' }
];

export const FIRST_SECOND_EPOCHS = [
  { time: '10⁻⁴³ sec', title: 'Planck Epoch', desc: 'Quantum gravitational regime. All fundamental forces unified. Beyond current physical equations.', status: 'SPECULATIVE' },
  { time: '10⁻³⁶ sec', title: 'Grand Unification & Cosmic Inflation', desc: 'Exponential expansion of space by a factor of 10²⁶, smoothing initial spatial curvature.', status: 'HYPOTHESIS' },
  { time: '10⁻⁶ sec', title: 'Quark-Gluon Plasma & Hadron Epoch', desc: 'Quarks condense into protons and neutrons as temperature drops below 10¹² K.', status: 'THEORY / MODELLED' },
  { time: '1 sec', title: 'Neutrino Decoupling', desc: 'Neutrinos stop interacting strongly with baryonic matter, forming the cosmic neutrino background.', status: 'INFERRED' },
  { time: '3 minutes', title: 'Big Bang Nucleosynthesis', desc: 'Protons and neutrons fuse into hydrogen (75%), helium (25%), and traces of lithium.', status: 'MEASURED' },
  { time: '380,000 years', title: 'Recombination & Cosmic Microwave Background', desc: 'Electrons bind to protons; neutral atoms form; photons stream freely across space creating the CMB.', status: 'OBSERVED' }
];

export const MYTH_VS_REALITY_LIST = [
  {
    myth: 'The Big Bang was an explosion at a single central point in empty space.',
    reality: 'The Big Bang describes the rapid expansion of space itself everywhere in the observable region. There was no pre-existing empty room into which space expanded.',
    status: 'MISLEADING MYTH'
  },
  {
    myth: 'The universe has a physical wall or visible outer edge.',
    reality: 'We observe a horizon of observability bounded by the light travel time since the Big Bang (~93B LY diameter). There is no known physical wall ending the cosmos.',
    status: 'MISLEADING MYTH'
  },
  {
    myth: 'Dark Energy is a giant physical wind pushing galaxies apart.',
    reality: 'Dark Energy is the name assigned to the uniform pressure component causing the accelerated metric expansion of spacetime on cosmological scales.',
    status: 'MISLEADING MYTH'
  },
  {
    myth: 'Dark Matter is just ordinary cold rock or dust we haven\'t photographed.',
    reality: 'Microwave background and nucleosynthesis metrics confirm dark matter is non-baryonic, interacting gravitationally while emitting zero detectable light.',
    status: 'MISLEADING MYTH'
  },
  {
    myth: 'The observable universe is the entire universe.',
    reality: 'The observable universe is only the spherical volume from which light has had time to reach Earth. The total universe may be vastly larger or infinite.',
    status: 'MISLEADING MYTH'
  },
  {
    myth: 'Expansion means objects inside galaxies are expanding away from each other.',
    reality: 'Cosmological expansion acts on spatial metrics at intergalactic scales. Local gravitationally bound systems (atoms, Earth, Solar System, Milky Way) do not expand.',
    status: 'MISLEADING MYTH'
  }
];

export const COSMIC_QUIZ_QUESTIONS = [
  {
    id: 'q1',
    category: 'OBSERVABLE UNIVERSE',
    question: 'What is the estimated comoving diameter of the observable universe?',
    options: ['13.8 Billion Light-Years', '46.5 Billion Light-Years', '93 Billion Light-Years', 'Infinite'],
    correctIndex: 2,
    explanation: 'Because space has been expanding during the 13.8 billion years that light traveled to Earth, the current comoving diameter of the observable universe is roughly 93 billion light-years.',
    source: 'NASA Cosmology Metrics',
    difficulty: 'MEDIUM'
  },
  {
    id: 'q2',
    category: 'CMB',
    question: 'How long after the Big Bang did the universe become transparent to light?',
    options: ['3 Minutes', '380,000 Years', '100 Million Years', '1 Billion Years'],
    correctIndex: 1,
    explanation: 'At approximately 380,000 years post Big Bang, temperature dropped to ~3000 K, allowing neutral hydrogen to form and releasing photons that we observe today as the Cosmic Microwave Background.',
    source: 'ESA Planck Mission',
    difficulty: 'EASY'
  },
  {
    id: 'q3',
    category: 'DARK MATTER',
    question: 'What approximate percentage of the universal mass-energy budget is composed of Dark Matter?',
    options: ['4.9%', '26.8%', '68.3%', '99.0%'],
    correctIndex: 1,
    explanation: 'Standard ΛCDM cosmological models (Planck Satellite precision) estimate ~26.8% Dark Matter, ~68.3% Dark Energy, and ~4.9% Baryonic (normal) Matter.',
    source: 'Planck Collaboration Results',
    difficulty: 'EASY'
  },
  {
    id: 'q4',
    category: 'JWST',
    question: 'Which galaxy is identified as one of the farthest observed galaxies at redshift z = 14.44 (~280M years post Big Bang)?',
    options: ['GN-z11', 'MoM-z14', 'Abell2744-QSO1', 'Terzan 5'],
    correctIndex: 1,
    explanation: 'JWST NIRSpec spectroscopy confirmed MoM-z14 at redshift z = 14.44, capturing light emitted when the universe was only 280 million years old.',
    source: 'NASA JWST Release 2026',
    difficulty: 'HARD'
  }
];
