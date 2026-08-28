import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galaxiesData } from '../data/galaxiesData';
import { Orbit, ArrowRight, Box, Sliders, Calculator } from 'lucide-react';
import { SketchfabViewer } from '../components/SketchfabViewer';

interface HubbleClassInfo {
  code: string;
  name: string;
  sfr: string;
  gasContent: string;
  bulgeToDisk: string;
  description: string;
}

const HUBBLE_CLASSES: Record<string, HubbleClassInfo> = {
  'Elliptical (E0-E7)': {
    code: 'E0 - E7',
    name: 'Elliptical Galaxies',
    sfr: '< 0.1 M☉/yr (Low/Stagnant)',
    gasContent: '< 1% (Depleted interstellar medium)',
    bulgeToDisk: '100% Spheroid (No stellar disk)',
    description: 'Smooth featureless light distribution populated by ancient Population II red giant stars. Formed primarily through major galaxy mergers.'
  },
  'Spiral (Sa-Sc)': {
    code: 'Sa - Sc',
    name: 'Unbarred Spiral Galaxies',
    sfr: '1 - 5 M☉/yr (Active)',
    gasContent: '5% - 15% (Rich in H I gas clouds)',
    bulgeToDisk: 'Dominant central bulge with trailing logarithmic spiral arms',
    description: 'Distinctive disk-shaped galaxies with prominent spiral arms containing young Population I blue stars and active star-forming nebulae.'
  },
  'Barred Spiral (SBa-SBc)': {
    code: 'SBa - SBc',
    name: 'Barred Spiral Galaxies',
    sfr: '2 - 10 M☉/yr (High Burst Rate)',
    gasContent: '10% - 20% (Gas channeled to central core)',
    bulgeToDisk: 'Central linear bar extending into spiral arms',
    description: 'Features a central bar structure composed of stars. The bar funnels interstellar gas inward toward the central supermassive black hole.'
  },
  'Irregular (Irr I/II)': {
    code: 'Irr I / Irr II',
    name: 'Irregular Galaxies',
    sfr: '> 5 M☉/yr (Violent Starburst)',
    gasContent: '20% - 50% (Highly abundant gas & dust)',
    bulgeToDisk: 'No distinct bulge or symmetry',
    description: 'Distorted gravitational shapes caused by close tidal interactions or collisions with larger neighboring galaxies.'
  }
};

export const GalaxiesPage: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');
  const [selectedHubble, setSelectedHubble] = useState<string>('Spiral (Sa-Sc)');
  const [calcDistanceMpc, setCalcDistanceMpc] = useState<number>(100);

  const H0 = 67.4; // km/s/Mpc (Planck 2018)
  const recessionVelocity = Math.round(calcDistanceMpc * H0);
  const redshiftZ = (recessionVelocity / 299792).toFixed(4);

  const galaxyTypes = ['All', 'Spiral', 'Elliptical', 'Irregular'];

  const filteredGalaxies = galaxiesData.filter((g) =>
    filterType === 'All' ? true : g.type === filterType
  );

  const activeHubbleInfo = HUBBLE_CLASSES[selectedHubble];

  return (
    <div className="space-y-12 pb-12">
      
      {/* Header */}
      <div className="space-y-4 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
          <Orbit className="w-3.5 h-3.5" />
          <span>EXTRAGALACTIC ASTRONOMY & COSMOLOGY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          Galaxies of the Cosmos
        </h1>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          An estimated 2 trillion galaxies populate the observable universe. Each galaxy is a gravitationally bound island universe containing billions of stars, planets, nebulae, and central supermassive black holes.
        </p>
      </div>

      {/* ── MILKY WAY 3D MODEL ──────────────────────────────────── */}
      <section className="space-y-4 animate-fade-in-up delay-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-500/10 border border-violet-500/30 text-violet-600 dark:text-violet-300 mb-2">
            <Box className="w-3 h-3" />
            <span>INTERACTIVE 3D MODEL · SKETCHFAB</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Our Galaxy — The Milky Way</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
            Explore our home galaxy in full 3D — a barred spiral galaxy ~100,000 light-years in diameter
          </p>
        </div>
        <SketchfabViewer
          modelId="eb0087b800414744b4cee3440888088c"
          title="Milky Way Galaxy"
          description="Our home barred spiral galaxy — 100,000 light-years in diameter, 100–400 billion stars"
          credit="Sketchfab Community"
          height="h-[480px] sm:h-[580px]"
        />
      </section>

      {/* 🧬 HUBBLE TUNING FORK GALAXY CLASSIFICATION EXPLORER */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Interactive Hubble Tuning Fork Classification</span>
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
              Morphological classification system devised by Edwin Hubble in 1926.
            </p>
          </div>
        </div>

        {/* Morphological Category Selector Buttons */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(HUBBLE_CLASSES).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedHubble(key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                selectedHubble === key
                  ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                  : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Selected Morphological Telemetry Card */}
        {activeHubbleInfo && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 font-mono text-xs">
            <div className="bg-slate-100 dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Morphology Code</span>
              <div className="text-sm font-bold text-cyan-700 dark:text-cyan-300">{activeHubbleInfo.code}</div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Star Formation Rate</span>
              <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300">{activeHubbleInfo.sfr}</div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Gas & Dust Abundance</span>
              <div className="text-sm font-bold text-amber-700 dark:text-amber-300">{activeHubbleInfo.gasContent}</div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Spheroid vs Disk</span>
              <div className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{activeHubbleInfo.bulgeToDisk}</div>
            </div>

            <div className="md:col-span-2 lg:col-span-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
              <strong>Scientific Characteristics:</strong> {activeHubbleInfo.description}
            </div>
          </div>
        )}
      </section>

      {/* 🧮 HUBBLE LAW COSMOLOGICAL REDSHIFT CALCULATOR */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span>Cosmological Redshift & Recession Velocity Calculator</span>
          </h2>
          <span className="text-xs font-mono text-cyan-700 dark:text-cyan-300 font-bold">H0 = 67.4 km/s/Mpc</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center font-mono text-xs">
          <div className="space-y-2">
            <label className="text-slate-700 dark:text-slate-300 font-semibold block">
              Comoving Distance: <strong className="text-cyan-600 dark:text-cyan-400">{calcDistanceMpc} Megaparsecs (Mpc)</strong>
            </label>
            <input
              type="range"
              min="10"
              max="2000"
              step="10"
              value={calcDistanceMpc}
              onChange={(e) => setCalcDistanceMpc(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-500">
              Equivalent to approx {Math.round(calcDistanceMpc * 3.26)} Million Light Years
            </span>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Hubble Expansion Velocity</span>
            <div className="text-lg font-bold text-emerald-700 dark:text-emerald-300">{recessionVelocity.toLocaleString()} km/s</div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Cosmological Redshift (z)</span>
            <div className="text-lg font-bold text-amber-700 dark:text-amber-300">z = {redshiftZ}</div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {galaxyTypes.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterType(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              filterType === cat
                ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat} {cat === 'All' ? `(${galaxiesData.length})` : ''}
          </button>
        ))}
      </div>

      {/* Galaxies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGalaxies.map((galaxy) => (
          <Link
            key={galaxy.id}
            to={`/galaxies/${galaxy.id}`}
            className="glass-panel group rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden glass-panel-hover flex flex-col justify-between p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                {galaxy.type} Galaxy
              </span>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400">{galaxy.distance}</span>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                {galaxy.name}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-sans mt-2 line-clamp-3">
                {galaxy.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-3 border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
              <div>Diameter: <strong className="text-slate-900 dark:text-white">{galaxy.diameter}</strong></div>
              <div>Est Stars: <strong className="text-cyan-700 dark:text-cyan-300">{galaxy.starCountEstimate}</strong></div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 pt-2 group-hover:translate-x-1 transition-transform">
              <span>View Galaxy Telemetry & Black Hole</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};
