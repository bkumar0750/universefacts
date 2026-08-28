export type ScientificSource = {
  name: 'NASA' | 'ISRO' | 'ESA' | 'JAXA' | 'NOAA' | 'USGS' | 'ESO' | 'NSF / EHT' | 'Peer-Reviewed Literature' | 'Scientific Institution';
  url: string;
  articleTitle?: string;
};

export type FactStatus = 'Observed' | 'Measured' | 'Estimated' | 'Modelled' | 'Hypothesis' | 'Theory' | 'Unknown';

export type PhysicalProperties = {
  diameter: string;
  mass: string;
  gravity: string;
  averageTemp: string;
  surfaceArea?: string;
  density?: string;
  escapeVelocity?: string;
  radius?: string;
};

export type OrbitalProperties = {
  distanceFromSun?: string;
  distanceFromEarth?: string;
  orbitalPeriod: string; // e.g. "365.25 days"
  orbitalSpeed?: string;
  eccentricity?: string;
  axialTilt?: string;
  dayLength: string; // e.g. "23.9 hours"
};

export type Planet = {
  id: string;
  name: string;
  type: 'Terrestrial' | 'Gas Giant' | 'Ice Giant' | 'Dwarf Planet';
  subtitle: string;
  summary: string;
  image: string;
  heroImage?: string;
  physical: PhysicalProperties;
  orbit: OrbitalProperties;
  atmosphere: {
    composition: string[];
    pressure?: string;
    description: string;
  };
  surface: {
    geology: string;
    features: string[];
  };
  compositionLayers?: {
    name: string;
    depth: string;
    description: string;
    color: string;
  }[];
  moonCount: number;
  moons: string[];
  notableMissions: string[];
  verifiedFacts: {
    fact: string;
    source: ScientificSource;
  }[];
  sources: ScientificSource[];
  lastUpdated: string;
};

export type Moon = {
  id: string;
  name: string;
  parentPlanet: string;
  diameter: string;
  orbitalPeriod: string;
  distanceFromParent: string;
  description: string;
  image: string;
  keyDiscovery: string;
  sources: ScientificSource[];
};

export type StarType = 'Red Dwarf' | 'Yellow Star' | 'Blue Giant' | 'Supergiant' | 'White Dwarf' | 'Neutron Star';

export type Star = {
  id: string;
  name: string;
  type: StarType;
  constellation: string;
  distanceFromEarth: string;
  mass: string;
  radius: string;
  temperature: string;
  luminosity: string;
  description: string;
  evolutionStage: string;
  image: string;
  sources: ScientificSource[];
};

export type Galaxy = {
  id: string;
  name: string;
  type: 'Spiral' | 'Elliptical' | 'Irregular' | 'Lenticular';
  distance: string;
  diameter: string;
  starCountEstimate: string;
  description: string;
  notableFeatures: string[];
  image: string;
  sources: ScientificSource[];
};

export type BlackHole = {
  id: string;
  name: string;
  type: 'Stellar-mass' | 'Intermediate-mass' | 'Supermassive';
  mass: string;
  location: string;
  distanceFromEarth: string;
  eventHorizonRadius: string;
  description: string;
  isObserved: boolean;
  image: string;
  sources: ScientificSource[];
};

export type Exoplanet = {
  id: string;
  name: string;
  hostStar: string;
  distanceLightYears: number;
  radiusEarthRadii: number;
  massEarthMasses?: number;
  orbitalPeriodDays: number;
  discoveryYear: number;
  discoveryMethod: 'Transit' | 'Radial Velocity' | 'Direct Imaging' | 'Gravitational Microlensing';
  status: 'Confirmed' | 'Candidate' | 'Estimated';
  habitableZoneStatus: boolean;
  description: string;
  image: string;
  sources: ScientificSource[];
};

export type Nebula = {
  id: string;
  name: string;
  type: 'Emission' | 'Reflection' | 'Planetary' | 'Supernova Remnant' | 'Dark Nebula';
  constellation: string;
  distance: string;
  size: string;
  description: string;
  image: string;
  sources: ScientificSource[];
};

export type SpaceAgency = 'NASA' | 'ISRO' | 'ESA' | 'JAXA' | 'CNSA' | 'Roscosmos';

export type SpaceMission = {
  id: string;
  name: string;
  agency: SpaceAgency;
  launchDate: string;
  destination: string;
  status: 'Active' | 'Completed' | 'Planned' | 'Extended Mission';
  description: string;
  majorDiscoveries: string[];
  image: string;
  officialUrl: string;
  sources: ScientificSource[];
};

export type TimelineEvent = {
  id: string;
  timeAgo: string; // e.g. "13.8 Billion Years Ago"
  yearsAgoValue: number; // for sorting/timeline slider
  title: string;
  category: 'Cosmic' | 'Stellar' | 'Planetary' | 'Biological' | 'Human Spaceflight';
  description: string;
  significance: string;
  image?: string;
  status: FactStatus;
  sources: ScientificSource[];
};

export type MultiverseHypothesis = {
  id: string;
  name: string;
  proponent: string;
  category: 'Eternal Inflation' | 'Many-Worlds Interpretation' | 'Bubble Universes' | 'Brane Cosmology' | 'Mathematical Universe';
  status: 'Hypothesis / Speculative' | 'Theoretical Model';
  coreConcept: string;
  keyArguments: string[];
  scientificCritiques: string[];
  disclaimer: string;
  sources: ScientificSource[];
};

export type CosmicStat = {
  id: string;
  label: string;
  value: string;
  numericTarget?: number;
  unit?: string;
  isEstimate: boolean;
  statusLabel: FactStatus;
  source: ScientificSource;
  description: string;
};
