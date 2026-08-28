// ─── CENTRALIZED SOURCE REGISTRY ─────────────────────────────────────────────
// Every external data source used by UniverseFact is declared here.
// Never add an image or fact without a corresponding source entry.

export type SourceCategory = 'Space Agency' | 'Astronomy Database' | 'Earth Data' | 'Scientific Authority' | 'Observatory';

export interface ImageSource {
  id: string;
  title: string;
  description: string;
  /** Direct image URL — must be from an authoritative source */
  imageUrl: string;
  /** Lower-res thumbnail for list views */
  thumbnailUrl?: string;
  /** Original page at the source website */
  originalUrl: string;
  sourceName: string;
  sourceUrl: string;
  /** Human-readable credit line, e.g. "NASA/JPL-Caltech" */
  credit: string;
  copyright: string;
  license: string;
  objectId?: string;
  dateAcquired?: string;
}

export interface DataSource {
  id: string;
  name: string;
  shortName: string;
  category: SourceCategory;
  description: string;
  whatWeUseItFor: string;
  officialUrl: string;
  logoEmoji: string;
  dataTypes: string[];
}

// ─── ALL SOURCES USED BY UNIVERSEFACT ────────────────────────────────────────

export const ALL_SOURCES: DataSource[] = [
  // Space Agencies
  {
    id: 'nasa',
    name: 'National Aeronautics and Space Administration',
    shortName: 'NASA',
    category: 'Space Agency',
    description: 'The United States federal space agency responsible for the civilian space program, as well as aeronautics and space research.',
    whatWeUseItFor: 'Planet facts, mission data, Earth imagery, solar system data, exoplanet archive, 3D assets, and cosmic statistics.',
    officialUrl: 'https://www.nasa.gov',
    logoEmoji: '🚀',
    dataTypes: ['Planet Data', 'Mission Data', 'Earth Science', 'Exoplanets', 'Images', '3D Models'],
  },
  {
    id: 'isro',
    name: 'Indian Space Research Organisation',
    shortName: 'ISRO',
    category: 'Space Agency',
    description: 'India\'s national space agency, responsible for the development and application of space technology for national development.',
    whatWeUseItFor: 'Chandrayaan missions, Mangalyaan, Aditya-L1, Gaganyaan mission data and imagery.',
    officialUrl: 'https://www.isro.gov.in',
    logoEmoji: '🛰️',
    dataTypes: ['Mission Data', 'Moon Data', 'Mars Data', 'Solar Data'],
  },
  {
    id: 'esa',
    name: 'European Space Agency',
    shortName: 'ESA',
    category: 'Space Agency',
    description: 'An intergovernmental organisation of 22 member states dedicated to the exploration of space.',
    whatWeUseItFor: 'Galaxy imagery (ESA/Hubble), Webb telescope images, Earth observation, mission data.',
    officialUrl: 'https://www.esa.int',
    logoEmoji: '🇪🇺',
    dataTypes: ['Galaxy Images', 'Mission Data', 'Webb Images', 'Earth Observation'],
  },
  {
    id: 'jaxa',
    name: 'Japan Aerospace Exploration Agency',
    shortName: 'JAXA',
    category: 'Space Agency',
    description: 'Japan\'s national aerospace agency, engaged in research, development and utilization of space and aeronautics.',
    whatWeUseItFor: 'Hayabusa asteroid mission data, Akatsuki Venus data.',
    officialUrl: 'https://global.jaxa.jp',
    logoEmoji: '🌸',
    dataTypes: ['Asteroid Data', 'Mission Data'],
  },
  // Astronomy Databases
  {
    id: 'nasa-exoplanet-archive',
    name: 'NASA Exoplanet Archive',
    shortName: 'Exoplanet Archive',
    category: 'Astronomy Database',
    description: 'An online astronomical exoplanet and stellar catalog, data service, and data analysis toolset operated by the California Institute of Technology.',
    whatWeUseItFor: 'Confirmed exoplanet counts, discovery methods, orbital parameters, host star data.',
    officialUrl: 'https://exoplanetarchive.ipac.caltech.edu',
    logoEmoji: '🔭',
    dataTypes: ['Exoplanet Data', 'Star Catalogs'],
  },
  {
    id: 'jpl-sbdb',
    name: 'JPL Small-Body Database',
    shortName: 'JPL SBDB',
    category: 'Astronomy Database',
    description: 'NASA Jet Propulsion Laboratory\'s authoritative database for asteroid and comet orbital and physical properties.',
    whatWeUseItFor: 'Asteroid designations, orbital elements, close approach data, physical properties.',
    officialUrl: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html',
    logoEmoji: '☄️',
    dataTypes: ['Asteroid Data', 'Comet Data', 'Orbital Elements'],
  },
  {
    id: 'simbad',
    name: 'SIMBAD Astronomical Database',
    shortName: 'SIMBAD',
    category: 'Astronomy Database',
    description: 'The Set of Identifications, Measurements and Bibliography for Astronomical Data — operated by the Centre de Données astronomiques de Strasbourg (CDS).',
    whatWeUseItFor: 'Star identifiers, galaxy data, object cross-referencing, astronomical measurements.',
    officialUrl: 'https://simbad.u-strasbg.fr/simbad/',
    logoEmoji: '⭐',
    dataTypes: ['Star Data', 'Galaxy Data', 'Object Identifiers'],
  },
  {
    id: 'esasky',
    name: 'ESASky',
    shortName: 'ESASky',
    category: 'Astronomy Database',
    description: 'ESA\'s science-driven discovery portal providing access to the full sky as observed by space astronomy missions.',
    whatWeUseItFor: 'Full-sky maps, deep space object imagery and coordinates.',
    officialUrl: 'https://sky.esa.int',
    logoEmoji: '🌌',
    dataTypes: ['Sky Maps', 'Deep Space Images', 'Object Coordinates'],
  },
  {
    id: 'eso-archive',
    name: 'ESO Science Archive',
    shortName: 'ESO Archive',
    category: 'Observatory',
    description: 'The European Southern Observatory\'s archive of raw and processed astronomical data.',
    whatWeUseItFor: 'Galaxy images, nebula images, stellar observations.',
    officialUrl: 'https://www.eso.org/public/science/archive/',
    logoEmoji: '🏔️',
    dataTypes: ['Galaxy Images', 'Nebula Images', 'Stellar Data'],
  },
  // Earth Data
  {
    id: 'nasa-earthdata',
    name: 'NASA Earthdata',
    shortName: 'Earthdata',
    category: 'Earth Data',
    description: 'NASA\'s Earth science data search and access portal providing satellite-based Earth observation data.',
    whatWeUseItFor: 'Earth surface data, climate measurements, ocean coverage, atmospheric composition.',
    officialUrl: 'https://search.earthdata.nasa.gov',
    logoEmoji: '🌍',
    dataTypes: ['Earth Science', 'Climate Data', 'Ocean Data'],
  },
  {
    id: 'noaa',
    name: 'National Oceanic and Atmospheric Administration',
    shortName: 'NOAA',
    category: 'Earth Data',
    description: 'A U.S. scientific agency focused on the conditions of the oceans, waterways, and the atmosphere.',
    whatWeUseItFor: 'Earth geomagnetic data, atmospheric composition, ocean statistics.',
    officialUrl: 'https://www.noaa.gov',
    logoEmoji: '🌊',
    dataTypes: ['Atmospheric Data', 'Ocean Data', 'Magnetic Field Data'],
  },
  {
    id: 'usgs',
    name: 'United States Geological Survey',
    shortName: 'USGS',
    category: 'Earth Data',
    description: 'A scientific agency of the United States government focused on natural hazards, environment, and Earth resources.',
    whatWeUseItFor: 'Earth geology facts, tidal friction measurements.',
    officialUrl: 'https://www.usgs.gov',
    logoEmoji: '⛰️',
    dataTypes: ['Geology Data', 'Geophysics Data'],
  },
  // Scientific Authority
  {
    id: 'iau',
    name: 'International Astronomical Union',
    shortName: 'IAU',
    category: 'Scientific Authority',
    description: 'The globally recognized authority for astronomical nomenclature, including the definition of planets, dwarf planets, and small bodies.',
    whatWeUseItFor: 'Planet definitions, naming conventions, classification standards.',
    officialUrl: 'https://www.iau.org',
    logoEmoji: '🏛️',
    dataTypes: ['Classifications', 'Naming Standards'],
  },
];

// ─── PLANETARY IMAGE REGISTRY ─────────────────────────────────────────────────
// Real NASA/ESA images — all NASA images are public domain unless noted.
// Source: NASA Image and Video Library (https://images.nasa.gov/)
// NASA media guidelines: https://www.nasa.gov/nasa-brand-center/images-and-media/

export const PLANET_IMAGES: Record<string, ImageSource> = {
  earth: {
    id: 'earth-blue-marble',
    title: 'Earth — Blue Marble (2002)',
    description: 'A composite image of Earth taken by instruments aboard NASA\'s Terra satellite.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/512px-The_Earth_seen_from_Apollo_17.jpg',
    originalUrl: 'https://visibleearth.nasa.gov/images/57723/the-blue-marble',
    sourceName: 'NASA',
    sourceUrl: 'https://visibleearth.nasa.gov',
    credit: 'NASA/Apollo 17 crew',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'earth',
    dateAcquired: '1972-12-07',
  },
  mercury: {
    id: 'mercury-messenger',
    title: 'Mercury — MESSENGER Enhanced Color',
    description: 'An enhanced color image of Mercury from NASA\'s MESSENGER spacecraft.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1024px-Mercury_in_color_-_Prockter07-edit1.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/512px-Mercury_in_color_-_Prockter07-edit1.jpg',
    originalUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA11364',
    sourceName: 'NASA / Johns Hopkins University APL / Carnegie Institution of Washington',
    sourceUrl: 'https://photojournal.jpl.nasa.gov',
    credit: 'NASA/JHU APL/CIW',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'mercury',
  },
  venus: {
    id: 'venus-magellan',
    title: 'Venus — Magellan Radar Map',
    description: 'A global view of Venus, produced using radar images from NASA\'s Magellan spacecraft.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/1024px-Venus-real_color.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/512px-Venus-real_color.jpg',
    originalUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA00270',
    sourceName: 'NASA/JPL',
    sourceUrl: 'https://photojournal.jpl.nasa.gov',
    credit: 'NASA/JPL-Caltech',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'venus',
  },
  mars: {
    id: 'mars-global-surveyor',
    title: 'Mars — Global View',
    description: 'True-color view of Mars showing the Valles Marineris canyon system.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/512px-OSIRIS_Mars_true_color.jpg',
    originalUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA00407',
    sourceName: 'ESA/OSIRIS',
    sourceUrl: 'https://photojournal.jpl.nasa.gov',
    credit: 'ESA/OSIRIS team',
    copyright: 'CC BY-SA 3.0 IGO — ESA',
    license: 'Creative Commons Attribution-ShareAlike 3.0 IGO',
    objectId: 'mars',
  },
  jupiter: {
    id: 'jupiter-voyager',
    title: 'Jupiter — Voyager 1 / Cassini View',
    description: 'Jupiter\'s cloud bands and Great Red Spot from the Cassini spacecraft during its 2000 flyby.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/1024px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/512px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
    originalUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA21775',
    sourceName: 'NASA/ESA Hubble',
    sourceUrl: 'https://photojournal.jpl.nasa.gov',
    credit: 'NASA/ESA/A. Simon (Goddard Space Flight Center)',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'jupiter',
  },
  saturn: {
    id: 'saturn-cassini',
    title: 'Saturn — Cassini Equinox',
    description: 'Saturn during its 2009 northern vernal equinox, captured by Cassini.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1024px-Saturn_during_Equinox.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/512px-Saturn_during_Equinox.jpg',
    originalUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA11141',
    sourceName: 'NASA/JPL-Caltech/Space Science Institute',
    sourceUrl: 'https://photojournal.jpl.nasa.gov',
    credit: 'NASA/JPL-Caltech/Space Science Institute',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'saturn',
  },
  uranus: {
    id: 'uranus-voyager2',
    title: 'Uranus — Voyager 2',
    description: 'Voyager 2\'s 1986 true-color image of Uranus.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1024px-Uranus2.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/512px-Uranus2.jpg',
    originalUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA18182',
    sourceName: 'NASA/JPL-Caltech',
    sourceUrl: 'https://photojournal.jpl.nasa.gov',
    credit: 'NASA/JPL-Caltech',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'uranus',
  },
  neptune: {
    id: 'neptune-voyager2',
    title: 'Neptune — Voyager 2',
    description: 'Voyager 2\'s 1989 view of Neptune showing the Great Dark Spot.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/1024px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/512px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
    originalUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA01492',
    sourceName: 'NASA/JPL-Caltech',
    sourceUrl: 'https://photojournal.jpl.nasa.gov',
    credit: 'NASA/JPL-Caltech',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'neptune',
  },
  pluto: {
    id: 'pluto-new-horizons',
    title: 'Pluto — New Horizons (2015)',
    description: 'The most detailed image of Pluto\'s surface, captured by NASA\'s New Horizons during its 2015 flyby.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1024px-Pluto_in_True_Color_-_High-Res.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/512px-Pluto_in_True_Color_-_High-Res.jpg',
    originalUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA19952',
    sourceName: 'NASA/Johns Hopkins University APL/Southwest Research Institute',
    sourceUrl: 'https://photojournal.jpl.nasa.gov',
    credit: 'NASA/JHUAPL/SwRI',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'pluto',
    dateAcquired: '2015-07-14',
  },
  ceres: {
    id: 'ceres-dawn',
    title: 'Ceres — Dawn Spacecraft',
    description: 'True color image of Ceres captured by NASA\'s Dawn spacecraft in 2015.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg/1024px-Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg/512px-Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg',
    originalUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA19562',
    sourceName: 'NASA/JPL-Caltech/UCLA/MPS/DLR/IDA',
    sourceUrl: 'https://photojournal.jpl.nasa.gov',
    credit: 'NASA/JPL-Caltech/UCLA/MPS/DLR/IDA',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'ceres',
  },
};

// ─── GALAXY IMAGES ────────────────────────────────────────────────────────────

export const GALAXY_IMAGES: Record<string, ImageSource> = {
  andromeda: {
    id: 'andromeda-hubble',
    title: 'Andromeda Galaxy (M31) — Hubble Mosaic',
    description: 'The largest Hubble mosaic of the Andromeda Galaxy, assembled from over 7,000 images.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1280px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
    originalUrl: 'https://esahubble.org/images/heic1502a/',
    sourceName: 'NASA/ESA Hubble',
    sourceUrl: 'https://esahubble.org',
    credit: 'NASA, ESA, J. Dalcanton (University of Washington)',
    copyright: 'Public Domain — NASA/ESA (freely reproducible with credit)',
    license: 'NASA/ESA Usage Guidelines',
    objectId: 'M31',
  },
  milky_way: {
    id: 'milky-way-center',
    title: 'Milky Way Galactic Center',
    description: 'Multi-wavelength view of the Milky Way\'s galactic center.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Milky_Way_IR_Spitzer.jpg/1280px-Milky_Way_IR_Spitzer.jpg',
    originalUrl: 'https://www.nasa.gov/image-article/milky-way-galaxy/',
    sourceName: 'NASA/JPL-Caltech/R. Hurt (SSC)',
    sourceUrl: 'https://www.nasa.gov',
    credit: 'NASA/JPL-Caltech/R. Hurt (SSC)',
    copyright: 'Public Domain — NASA',
    license: 'NASA Media Usage Guidelines',
    objectId: 'Milky Way',
  },
};

// ─── NEBULA IMAGES ────────────────────────────────────────────────────────────

export const NEBULA_IMAGES: Record<string, ImageSource> = {
  pillars_of_creation: {
    id: 'pillars-jwst-2022',
    title: 'Pillars of Creation — James Webb Space Telescope (2022)',
    description: 'JWST\'s near-infrared view of the Pillars of Creation in the Eagle Nebula (M16).',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/800px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg',
    originalUrl: 'https://esawebb.org/images/weic2216a/',
    sourceName: 'NASA/ESA/CSA JWST',
    sourceUrl: 'https://www.nasa.gov/image-article/nasas-webb-captures-iconic-pillars-of-creation/',
    credit: 'NASA, ESA, CSA, STScI; J. DePasquale, A. Koekemoer (STScI)',
    copyright: 'Public Domain — NASA/ESA',
    license: 'NASA/ESA Media Usage Guidelines',
    objectId: 'M16',
    dateAcquired: '2022-10-19',
  },
  orion: {
    id: 'orion-nebula-hubble',
    title: 'Orion Nebula (M42) — Hubble',
    description: 'Hubble\'s sharpest view of the Orion Nebula.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/1024px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg',
    originalUrl: 'https://esahubble.org/images/opo0603a/',
    sourceName: 'NASA/ESA Hubble',
    sourceUrl: 'https://esahubble.org',
    credit: 'NASA, ESA, M. Robberto (STScI/ESA) and the Hubble Space Telescope Orion Treasury Project Team',
    copyright: 'Public Domain — NASA/ESA',
    license: 'NASA/ESA Media Usage Guidelines',
    objectId: 'M42',
  },
};

// ─── IMAGE ATTRIBUTION HELPER ─────────────────────────────────────────────────

/** Returns the best available image URL with fallback chain */
export function getImageWithFallback(
  primary: string,
  fallbacks: string[] = [],
  placeholder = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop'
): { url: string; index: number } {
  // In a client environment, just return the primary.
  // Actual fallback logic happens in the ImageWithAttribution component.
  return { url: primary || (fallbacks[0] ?? placeholder), index: 0 };
}

/** Returns a display-ready credit string */
export function formatCredit(source: ImageSource): string {
  return `${source.credit} — ${source.sourceName}`;
}

/** Source display name lookup */
export function getSourceById(id: string): DataSource | undefined {
  return ALL_SOURCES.find((s) => s.id === id);
}
