import React from 'react';
import { AlertTriangle, Layers, Trophy } from 'lucide-react';

export const OceanWorldsAndLifeSearch: React.FC = () => {

  const lifeCandidates = [
    { rank: 1, name: 'Europa', body: 'Jupiter Moon', reason: 'Subsurface ocean with 2x Earth water, tidal heating & seafloor hydrothermal vents.', mission: 'NASA Europa Clipper (En Route)' },
    { rank: 1, name: 'Enceladus', body: 'Saturn Moon', reason: 'Active water plumes with organics, CO₂, CH₄ & alkaline hydrothermal silica.', mission: 'Cassini Data & Future Plume Flybys' },
    { rank: 2, name: 'Mars', body: 'Terrestrial Planet', reason: 'Ancient habitable lakebeds, subsurface brines & organic molecules in Gale crater.', mission: 'Perseverance Rover & Sample Return' },
    { rank: 3, name: 'Titan', body: 'Saturn Moon', reason: 'Liquid methane lakes on surface + deep subsurface water-ammonia ocean.', mission: 'NASA Dragonfly (Rotorcraft Lander)' },
    { rank: 4, name: 'Ganymede', body: 'Jupiter Moon', reason: 'Massive internal ocean sandwiched between high-pressure ice phases.', mission: 'ESA JUICE Mission (En Route)' }
  ];

  return (
    <section id="ocean-worlds-and-life" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-12 shadow-xl">
      
      {/* 🌊 1. OCEAN WORLDS — SUB-ICE OCEANS */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>ASTROBIOLOGY FRONTIER · SUB-ICE OCEANS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            WORLDS WITH HIDDEN OCEANS
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            Liquid oceans in our Solar System do not exist only on Earth surface. Several icy moons harbor vast internal liquid oceans.
          </p>
        </div>

        {/* Ocean World Diagram Layer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="bg-cyan-950 text-white p-5 rounded-2xl border border-cyan-500/30 space-y-2">
            <span className="text-[10px] text-cyan-400 font-bold uppercase block">OUTER LAYER</span>
            <div className="text-xl font-bold text-white">Ice Crust (10–30 km)</div>
            <p className="font-sans text-xs text-slate-300">Frozen water ice shell protecting the ocean from hard cosmic vacuum and solar UV radiation.</p>
          </div>

          <div className="bg-blue-950 text-white p-5 rounded-2xl border border-blue-500/40 space-y-2">
            <span className="text-[10px] text-blue-300 font-bold uppercase block">INTERNAL OCEAN</span>
            <div className="text-xl font-bold text-cyan-300">Liquid Ocean (60–150 km)</div>
            <p className="font-sans text-xs text-slate-300">Salty liquid water kept warm by tidal flexure from Jupiter/Saturn gravitational resonances.</p>
          </div>

          <div className="bg-slate-900 text-white p-5 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[10px] text-amber-400 font-bold uppercase block">DEEP CORE</span>
            <div className="text-xl font-bold text-amber-300">Silicate Rock Mantle</div>
            <p className="font-sans text-xs text-slate-300">Rocky seafloor featuring potential hydrothermal vents releasing minerals and chemical energy.</p>
          </div>
        </div>
      </div>

      {/* 🧪 2. SEARCH FOR LIFE TARGET RANKING */}
      <div className="space-y-6">
        <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          <span>Scientific Target Ranking for Astrobiology Exploration</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {lifeCandidates.map((cand) => (
            <div key={cand.name} className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                    RANK #{cand.rank} ASTROBIOLOGY TARGET
                  </span>
                  <span className="text-[10px] text-cyan-600 dark:text-cyan-400">{cand.body}</span>
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">{cand.name}</h4>
                <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-snug">{cand.reason}</p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 text-[10px] text-emerald-700 dark:text-emerald-300 font-bold">
                Upcoming: {cand.mission}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ⚠️ 3. ORGANIC CHEMISTRY VS LIFE WARNING CARD */}
      <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300 font-mono text-xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          <span>IMPORTANT SCIENTIFIC CAVEAT: ORGANIC MOLECULE ≠ LIFE</span>
        </div>
        <p className="font-sans text-xs leading-relaxed text-slate-800 dark:text-slate-200">
          In chemistry, "organic" simply means carbon-containing molecules (methane, ethane, amino acid precursors). Complex organic molecules form naturally throughout interstellar gas clouds, comets, and meteorites without requiring any biological processes!
        </p>
      </div>

    </section>
  );
};
