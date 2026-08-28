import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SolarSystemCanvas } from '../components/SolarSystemCanvas';
import { SketchfabViewer } from '../components/SketchfabViewer';
import { planetsData } from '../data/planetsData';
import { ArrowRight, CircleDot, Box, Calculator, Sun, Radio } from 'lucide-react';

const SOLAR_SYSTEM_MODELS = [
  {
    id: 'cc8f98fcdde041208b22597ea9293f9d',
    title: 'Sistema Solar Orbital',
    description: 'Full orbital simulation of the Solar System with planetary motion',
    credit: 'Sketchfab Community',
  },
  {
    id: '779eee9d756b4cb7be84f0073fc1985f',
    title: 'The Solar System',
    description: 'Detailed 3D representation of all planets in the Solar System',
    credit: 'Sketchfab Community',
  },
  {
    id: 'e1448a9bebb449dea6c11f7e42021594',
    title: 'Solar System Background',
    description: 'Atmospheric solar system background 3D scene',
    credit: 'Sketchfab Community',
  },
  {
    id: '55d3231f568440e9bb38757313ca5f65',
    title: "Parker Solar Probe — Sun's Kisser",
    description: "NASA's historic solar probe — closest spacecraft to ever reach the Sun",
    credit: 'NASA / Sketchfab',
  },
];

export const SolarSystemPage: React.FC = () => {
  const majorPlanets = planetsData.filter((p) => p.type !== 'Dwarf Planet');
  const dwarfPlanets = planetsData.filter((p) => p.type === 'Dwarf Planet');
  const [activeModel, setActiveModel] = useState(0);
  const [calcSemiMajorAxis, setCalcSemiMajorAxis] = useState<number>(1.0); // AU

  // Kepler's 3rd Law: T^2 = a^3  =>  T = a^(3/2)
  const orbitalPeriodYears = Math.pow(calcSemiMajorAxis, 1.5).toFixed(2);
  const orbitalPeriodDays = Math.round(Math.pow(calcSemiMajorAxis, 1.5) * 365.25);

  return (
    <div className="space-y-12 pb-12">
      
      {/* Header */}
      <section className="space-y-4 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300">
          <CircleDot className="w-3.5 h-3.5" />
          <span>OUR PLANETARY NEIGHBORHOOD</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          The Solar System
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-sans max-w-3xl leading-relaxed">
          Centered on a 4.6-billion-year-old G-type yellow dwarf star (The Sun), our Solar System spans eight major planets, hundreds of thousands of asteroids in the main belt, icy bodies in the Kuiper Belt, and extending into the distant spherical Oort Cloud.
        </p>
      </section>

      {/* ── SKETCHFAB 3D MODELS SECTION ─────────────────────────── */}
      <section className="space-y-5 animate-fade-in-up delay-100">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-500/10 border border-violet-500/30 text-violet-600 dark:text-violet-300 mb-2">
              <Box className="w-3 h-3" />
              <span>INTERACTIVE 3D MODELS · SKETCHFAB</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Explore in 3D
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
              Rotate, zoom, and pan to explore photorealistic 3D models of the Solar System
            </p>
          </div>
        </div>

        {/* Model Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {SOLAR_SYSTEM_MODELS.map((model, idx) => (
            <button
              key={model.id}
              onClick={() => setActiveModel(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeModel === idx
                  ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-md'
                  : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {model.title}
            </button>
          ))}
        </div>

        {/* Active Model Viewer */}
        <div className="animate-scale-in">
          <SketchfabViewer
            modelId={SOLAR_SYSTEM_MODELS[activeModel].id}
            title={SOLAR_SYSTEM_MODELS[activeModel].title}
            description={SOLAR_SYSTEM_MODELS[activeModel].description}
            credit={SOLAR_SYSTEM_MODELS[activeModel].credit}
            height="h-[520px] sm:h-[640px]"
          />
        </div>
      </section>

      {/* 📡 REAL-TIME SPACE WEATHER & SOLAR ACTIVITY DASHBOARD */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-500" />
            <span>Solar Wind & Interplanetary Telemetry (NOAA SOHO / SDO Feed)</span>
          </h2>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
            <Radio className="w-3.5 h-3.5 animate-pulse" /> Live Telemetry Active
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Solar Wind Velocity</span>
            <div className="text-base font-bold text-amber-600 dark:text-amber-400">425.8 km/s</div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Proton Density</span>
            <div className="text-base font-bold text-cyan-600 dark:text-cyan-300">5.42 p/cm³</div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Solar Cycle 25 Status</span>
            <div className="text-base font-bold text-emerald-600 dark:text-emerald-300">Maximum Peak</div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Geomagnetic Index (Kp)</span>
            <div className="text-base font-bold text-purple-600 dark:text-purple-300">Kp 2 (Quiet)</div>
          </div>
        </div>
      </section>

      {/* 🧮 KEPLER'S 3RD LAW ORBITAL PERIOD CALCULATOR */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span>Kepler’s 3rd Law Orbital Period Calculator (T² = a³)</span>
          </h2>
          <span className="text-xs font-mono text-cyan-700 dark:text-cyan-300 font-bold">Planetary Mechanics</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center font-mono text-xs">
          <div className="space-y-2">
            <label className="text-slate-700 dark:text-slate-300 font-semibold block">
              Semi-Major Axis Distance: <strong className="text-cyan-600 dark:text-cyan-400">{calcSemiMajorAxis} AU</strong>
            </label>
            <input
              type="range"
              min="0.2"
              max="40.0"
              step="0.1"
              value={calcSemiMajorAxis}
              onChange={(e) => setCalcSemiMajorAxis(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-500">
              1 AU = ~149.6 Million km (Distance from Earth to Sun)
            </span>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Calculated Orbital Period</span>
            <div className="text-lg font-bold text-emerald-700 dark:text-emerald-300">{orbitalPeriodYears} Earth Years</div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Equivalent Duration</span>
            <div className="text-lg font-bold text-amber-700 dark:text-amber-300">{orbitalPeriodDays.toLocaleString()} Earth Days</div>
          </div>
        </div>
      </section>

      {/* Interactive Canvas Overview */}
      <SolarSystemCanvas />

      {/* Major Planets Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
          Major Planets ({majorPlanets.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {majorPlanets.map((planet) => (
            <Link
              key={planet.id}
              to={`/planets/${planet.id}`}
              className="glass-panel group rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden glass-panel-hover flex flex-col justify-between p-5 space-y-4"
            >
              <div className="space-y-3">
                <div className="h-40 rounded-xl overflow-hidden bg-slate-950 relative">
                  <img
                    src={planet.image}
                    alt={planet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 text-cyan-300 border border-white/10">
                    {planet.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {planet.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-1 line-clamp-2">
                    {planet.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-3 border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
                <div>Diameter: <strong className="text-slate-900 dark:text-white block">{planet.physical.diameter}</strong></div>
                <div>Moons: <strong className="text-cyan-700 dark:text-cyan-300 block">{planet.moons.length}</strong></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Dwarf Planets */}
      <section className="space-y-6">
        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
          Dwarf Planets ({dwarfPlanets.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dwarfPlanets.map((planet) => (
            <Link
              key={planet.id}
              to={`/planets/${planet.id}`}
              className="glass-panel group rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden glass-panel-hover flex flex-col justify-between p-5 space-y-4"
            >
              <div className="space-y-3">
                <div className="h-36 rounded-xl overflow-hidden bg-slate-950 relative">
                  <img
                    src={planet.image}
                    alt={planet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 text-amber-300 border border-white/10">
                    Dwarf Planet
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {planet.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-1 line-clamp-2">
                    {planet.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 pt-2">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};
