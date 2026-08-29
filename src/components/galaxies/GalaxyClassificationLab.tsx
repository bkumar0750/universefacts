import React, { useState } from 'react';
import { Sliders, Sparkles, ShieldCheck } from 'lucide-react';

interface GalaxyCategory {
  id: string;
  name: string;
  categoryGroup: 'Main' | 'Advanced';
  title: string;
  characteristics: string[];
  explanation: string;
  example: string;
  image: string;
  imageType: 'REAL OBSERVATION' | 'SCIENTIFIC RECONSTRUCTION' | 'SCIENTIFIC VISUALIZATION';
  source: string;
  sfr: string;
  stellarPop: string;
}

const GALAXY_LAB_TYPES: GalaxyCategory[] = [
  {
    id: 'spiral',
    name: 'Spiral Galaxy',
    categoryGroup: 'Main',
    title: 'THE COSMIC PINWHEELS',
    characteristics: ['Central Bulge', 'Rotating Disk', 'Logarithmic Spiral Arms', 'Active Gas & Dust', 'Young Population I Stars'],
    explanation: 'Spiral arms are dynamic density waves where stars and interstellar gas rotate through transient higher-density zones, sparking star formation.',
    example: 'Milky Way, Andromeda (M31), Whirlpool Galaxy (M51)',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    source: 'NASA / ESA Hubble',
    sfr: '1 - 5 Solar Masses / Year',
    stellarPop: 'Mix of Old Population II (Bulge) & Young Population I (Disk)'
  },
  {
    id: 'barred-spiral',
    name: 'Barred Spiral Galaxy',
    categoryGroup: 'Advanced',
    title: 'THE GALAXY WITH A STELLAR BAR',
    characteristics: ['Central Linear Stellar Bar', 'Bar-anchored Spiral Arms', 'Inward Gas Funneling', 'Supermassive Core BH'],
    explanation: 'Features a central bar structure composed of stars crossing the nucleus. The bar acts as a gravitational funnel directing interstellar gas toward the center.',
    example: 'Milky Way (SBbc), Large Magellanic Cloud bar',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    imageType: 'SCIENTIFIC RECONSTRUCTION',
    source: 'NASA / JPL-Caltech',
    sfr: '2 - 10 Solar Masses / Year',
    stellarPop: 'Dense central bar population + disk arms'
  },
  {
    id: 'elliptical',
    name: 'Elliptical Galaxy',
    categoryGroup: 'Main',
    title: 'THE GIANTS',
    characteristics: ['Smooth Spheroid Light', 'Depleted Cold Gas/Dust', 'Ancient Population II Stars', 'Random Orbit Orbits'],
    explanation: 'Ranges from nearly spherical (E0) to highly elongated (E7). Massive ellipticals grow through major galaxy mergers and have mostly stopped forming new stars.',
    example: 'Messier 87 (M87), Messier 60',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    source: 'NASA / EHT Collaboration',
    sfr: '< 0.1 Solar Masses / Year (Quenched)',
    stellarPop: 'Predominantly Ancient Red Giant Stars'
  },
  {
    id: 'irregular',
    name: 'Irregular Galaxy',
    categoryGroup: 'Main',
    title: 'THE GALAXIES WITHOUT A SIMPLE SHAPE',
    characteristics: ['Lack Symmetrical Disk/Bulge', 'Gravitationally Distorted', 'Rich in Gas & Dust', 'Violent Starburst Knots'],
    explanation: 'Irregular shapes result from close gravitational encounters, tidal interactions with larger neighbors, or internal starburst feedback.',
    example: 'Large Magellanic Cloud (LMC), Small Magellanic Cloud (SMC)',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    source: 'ESO / NASA JWST',
    sfr: '> 5 Solar Masses / Year',
    stellarPop: 'Abundant Hot Young Blue Stars'
  },
  {
    id: 'lenticular',
    name: 'Lenticular Galaxy',
    categoryGroup: 'Advanced',
    title: 'THE GALAXIES BETWEEN SPIRAL AND ELLIPTICAL',
    characteristics: ['Distinct Disk & Bulge', 'Lacks Prominent Spiral Arms', 'Low Gas Abundance', 'Old Stellar Population'],
    explanation: 'S0 galaxies possess a central bulge and a stellar disk but have consumed or lost their spiral dust lanes, transitioning toward an elliptical state.',
    example: 'Sombrero Galaxy (M104 hybrid), NGC 2787',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    source: 'NASA / STScI',
    sfr: '< 0.5 Solar Masses / Year',
    stellarPop: 'Intermediate to Ancient Population'
  },
  {
    id: 'dwarf',
    name: 'Dwarf Galaxy',
    categoryGroup: 'Advanced',
    title: 'SMALL GALAXIES — HUGE IMPORTANCE',
    characteristics: ['100 Million - 1 Billion Stars', 'Low Surface Brightness', 'High Dark Matter Ratio', 'Tidal Satellites'],
    explanation: 'NASA notes dwarf galaxies can contain as few as 100 million stars (vs 1 Trillion in giant ellipticals). Crucial building blocks of hierarchical galaxy assembly.',
    example: 'Fornax Dwarf, SagDEG Satellite',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    source: 'NASA / ESA',
    sfr: '0.01 - 0.1 Solar Masses / Year',
    stellarPop: 'Early Metal-Poor Stars'
  },
  {
    id: 'giant-elliptical',
    name: 'Giant Elliptical Galaxy',
    categoryGroup: 'Advanced',
    title: 'THE GALAXY GIANTS',
    characteristics: ['Spans >300,000 Light-Years', 'Trillions of Stars', 'Massive Dark Matter Halo', 'Giant Central Black Hole (>1B M☉)'],
    explanation: 'Massive cosmic monsters situated at the centers of dense galaxy clusters, formed by multiple galactic cannibalism mergers over cosmic time.',
    example: 'IC 1101, Messier 87',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    source: 'NASA / EHT',
    sfr: 'Quenched',
    stellarPop: 'Red Giant Population'
  },
  {
    id: 'starburst',
    name: 'Starburst Galaxy',
    categoryGroup: 'Advanced',
    title: 'GALACTIC STAR FACTORIES',
    characteristics: ['Extreme Star Formation Rates', 'Superwinds of Gas', 'Bright Infrared Emission', 'Supernova Shockwaves'],
    explanation: 'Forms stars at rates so high the galaxy will exhaust its gas supply in tens of millions of years, often triggered by tidal collisions.',
    example: 'M82 (Cigar Galaxy), Antennae Galaxies',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    source: 'NASA Chandra & Hubble',
    sfr: '10 - 100+ Solar Masses / Year',
    stellarPop: 'Massive O & B Supergiants'
  },
  {
    id: 'active-galaxy',
    name: 'Active Galaxy (AGN / Quasar Host)',
    categoryGroup: 'Advanced',
    title: 'WHEN A GALAXY’S CENTER LIGHTS UP',
    characteristics: ['Active Accretion Disk', 'Relativistic Particle Jets', 'Broad Spectral Lines', 'Extreme Luminosity'],
    explanation: 'Infalling matter onto a supermassive black hole heats up to millions of degrees, causing the galactic nucleus to outshine billions of normal stars.',
    example: '3C 273, Seyfert Galaxy NGC 1068',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    source: 'NASA Hubble / STScI',
    sfr: 'Variable High',
    stellarPop: 'Host Galaxy + Accretion Disk Light'
  },
  {
    id: 'ring-galaxy',
    name: 'Ring Galaxy',
    categoryGroup: 'Advanced',
    title: 'THE COSMIC RINGS',
    characteristics: ['Bright Outer Starburst Ring', 'Collisional Density Wave', 'Rare Morphological Event', 'Central Nucleus'],
    explanation: 'Forms when a smaller companion galaxy punches straight through the central disk of a larger spiral, producing an expanding ring of star formation.',
    example: 'Cartwheel Galaxy (ESO 350-40), Hoag’s Object',
    image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop',
    imageType: 'REAL OBSERVATION',
    source: 'NASA / JWST NIRCam',
    sfr: 'High in Ring Edge',
    stellarPop: 'Young Ring Stars + Core'
  },
  {
    id: 'ultra-diffuse',
    name: 'Ultra-Diffuse Galaxy (UDG)',
    categoryGroup: 'Advanced',
    title: 'GALAXIES THAT ARE ALMOST INVISIBLE',
    characteristics: ['Milky-Way Physical Extent', 'Extremely Low Surface Brightness', 'Sparse Star Density', 'High Dark Matter Fraction'],
    explanation: 'Possesses sizes comparable to major spiral galaxies but contains less than 1% of their stellar count, making them extraordinarily faint ghost galaxies.',
    example: 'Dragonfly 44',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    imageType: 'SCIENTIFIC VISUALIZATION',
    source: 'WM Keck Observatory / Gemini',
    sfr: '< 0.01 Solar Masses / Year',
    stellarPop: 'Sparse Faint Stars'
  }
];

export const GalaxyClassificationLab: React.FC = () => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('spiral');

  const selectedCategory = GALAXY_LAB_TYPES.find((t) => t.id === selectedTypeId) || GALAXY_LAB_TYPES[0];

  return (
    <section id="hubble-lab" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020718] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTION 05 - 14 · INTERACTIVE CLASSIFICATION LABORATORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Sliders className="w-6 h-6 text-cyan-400" />
            <span>GALAXY MORPHOLOGY LABORATORY</span>
          </h2>
        </div>

        <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-xl border border-cyan-500/30">
          Hubble Tuning Fork & Extended Taxonomy
        </span>
      </div>

      {/* Category Tabs */}
      <div className="space-y-3">
        <div className="text-xs font-mono text-slate-400 font-bold uppercase">Main Categories:</div>
        <div className="flex flex-wrap gap-2">
          {GALAXY_LAB_TYPES.filter(t => t.categoryGroup === 'Main').map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedTypeId(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedTypeId === item.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                  : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-slate-400 font-bold uppercase pt-2">Advanced Categories:</div>
        <div className="flex flex-wrap gap-2">
          {GALAXY_LAB_TYPES.filter(t => t.categoryGroup === 'Advanced').map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedTypeId(item.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedTypeId === item.id
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-md font-bold'
                  : 'bg-slate-900/40 text-slate-400 border border-white/5 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Telemetry Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 items-stretch">
        
        {/* Left Visual Image Frame */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-cyan-500/30 group min-h-[280px] bg-slate-950 flex flex-col justify-end p-4">
          <img
            src={selectedCategory.image}
            alt={selectedCategory.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020718] via-[#020718]/40 to-transparent" />

          <div className="relative z-10 space-y-2">
            {/* Image Tagging Rule Badge */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold border backdrop-blur-md ${
              selectedCategory.imageType === 'REAL OBSERVATION'
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}>
              <ShieldCheck className="w-3 h-3" />
              <span>{selectedCategory.imageType}</span>
            </span>

            <h3 className="text-xl font-display font-bold text-white">{selectedCategory.name}</h3>
            <p className="text-xs text-slate-300 font-mono">Example: <strong className="text-cyan-300">{selectedCategory.example}</strong></p>
            <p className="text-[10px] text-slate-400 font-mono">Credit: {selectedCategory.source}</p>
          </div>
        </div>

        {/* Right Detail Telemetry */}
        <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">{selectedCategory.title}</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">{selectedCategory.name}</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mt-2">
              {selectedCategory.explanation}
            </p>
          </div>

          {/* Key Characteristics Checklist */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Key Observational Markers:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedCategory.characteristics.map((char, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{char}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Telemetry Metrics */}
          <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs border-t border-white/10">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase">Star Formation Rate</span>
              <div className="text-xs font-bold text-emerald-300">{selectedCategory.sfr}</div>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase">Stellar Population</span>
              <div className="text-xs font-bold text-amber-300 truncate">{selectedCategory.stellarPop}</div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
