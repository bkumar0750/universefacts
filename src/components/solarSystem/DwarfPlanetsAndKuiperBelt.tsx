import React from 'react';
import { CircleDot, Sparkles } from 'lucide-react';

export const DwarfPlanetsAndKuiperBelt: React.FC = () => {

  return (
    <section id="dwarf-planets" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-amber-500/20 bg-white/90 dark:bg-slate-900/80 space-y-8 shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-800 dark:text-amber-300">
            <CircleDot className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>DWARF PLANET ZONE & THE KUIPER BELT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white mt-1">
            THE SMALL WORLDS THAT CHANGED OUR DEFINITION OF "PLANET"
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1 max-w-3xl">
            In 2006, the International Astronomical Union (IAU) formally defined a planet. Explore Ceres, Pluto, Haumea, Makemake, Eris, and contact binary Arrokoth.
          </p>
        </div>
      </div>

      {/* 📜 IAU PLANET DEFINITION VS DWARF PLANET CALLOUT BOX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        
        <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-950/30 space-y-2">
          <span className="font-bold text-cyan-800 dark:text-cyan-300 text-sm block">
            ✅ IAU DEFINITION OF A PLANET (3 Criteria):
          </span>
          <ol className="list-decimal pl-5 space-y-1 text-slate-800 dark:text-slate-200 font-sans text-xs">
            <li>Must orbit the Sun.</li>
            <li>Must have sufficient mass for hydrostatic equilibrium (nearly round shape).</li>
            <li><strong>Must have cleared the neighborhood around its orbit.</strong></li>
          </ol>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30 space-y-2">
          <span className="font-bold text-amber-800 dark:text-amber-300 text-sm block">
            🪐 IAU DEFINITION OF A DWARF PLANET:
          </span>
          <ol className="list-decimal pl-5 space-y-1 text-slate-800 dark:text-slate-200 font-sans text-xs">
            <li>Orbits the Sun.</li>
            <li>Nearly round in shape.</li>
            <li><strong>Has NOT cleared its orbital neighborhood</strong> (shares region with Kuiper Belt or Asteroid Belt objects).</li>
            <li>Is not a satellite (moon).</li>
          </ol>
        </div>

      </div>

      {/* 🌌 THE 5 IAU-RECOGNIZED DWARF PLANETS SHOWCASE */}
      <div className="space-y-4">
        <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>Recognized Dwarf Planets & Kuiper Belt Destinations</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CERES CARD */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-4 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  INNER ASTEROID BELT DWARF PLANET
                </span>
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">NASA Dawn Mission</span>
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Ceres</h4>
              <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                "The Planet That Never Finished Forming": The only dwarf planet in the inner Solar System and largest object in the Main Asteroid Belt (950 km diameter).
              </p>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
                Evidence from NASA Dawn spacecraft reveals bright sodium carbonate salt spots (Occator crater) left behind by sublimating subsurface brines, suggesting a water-rich mantle up to 25% by mass.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Diameter: 950 km</span>
              <span>Orbit: 4.6 Earth Years</span>
            </div>
          </div>

          {/* PLUTO & CHARON CARD */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-4 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-purple-700 dark:text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                  KUIPER BELT BINARY SYSTEM
                </span>
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">NASA New Horizons</span>
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Pluto & Charon</h4>
              <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                "The World That Changed astronomy": Features the heart-shaped Tombaugh Regio glacier, 3-km-high water-ice mountains, and 5 moons.
              </p>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
                Pluto largest moon Charon is half Pluto size (1,212 km vs 2,376 km). They orbit a shared center of mass located in open space outside Pluto surface, behaving like a binary planet system.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Diameter: 2,376 km</span>
              <span>Orbit: 247.9 Earth Years</span>
            </div>
          </div>

          {/* HAUMEA CARD */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-4 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  FAST-SPINNING ELLIPSOID
                </span>
                <span className="text-[10px] font-mono text-slate-400">Kuiper Belt</span>
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Haumea</h4>
              <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                "The Fast-Spinning Odd Shape": Completes a full spin every 3.9 hours—the fastest rotation of any known large body in the Solar System.
              </p>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
                Its rapid rotation distorts it into an elongated rugby-ball shape (2,300 km long). Haumea possesses two moons (Hiʻiaka and Namaka) and a faint ring system.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Rotation: 3.9 Hours</span>
              <span>Orbit: 284 Earth Years</span>
            </div>
          </div>

          {/* ERIS CARD */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-4 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-rose-700 dark:text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                  SCATTERED DISK WORLD
                </span>
                <span className="text-[10px] font-mono text-slate-400">68 AU Distance</span>
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Eris</h4>
              <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                "The World That Triggered Pluto Demote": Discovered in 2005, Eris is 27% more massive than Pluto (though slightly smaller in diameter).
              </p>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
                The discovery of Eris forced astronomers to confront whether to add dozens of new planets or create the "dwarf planet" category. Eris has one moon, Dysnomia.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Diameter: 2,326 km</span>
              <span>Orbit: 557 Earth Years</span>
            </div>
          </div>

        </div>
      </div>

      {/* 🥜 ARROKOTH FEATURE CARD */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-cyan-500/30 bg-slate-950 text-white space-y-4 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
              MOST DISTANT WORLD VISITED BY SPACECRAFT (44 AU)
            </span>
            <h4 className="text-2xl font-display font-extrabold text-white">
              Arrokoth (2014 MU69) — Contact Binary
            </h4>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
            NASA New Horizons · Jan 1, 2019 Flyby
          </span>
        </div>

        <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
          Arrokoth is a 36-km-long contact binary consisting of two flattened lobes ("Ultima" and "Thule") connected by a narrow neck. Formed by two independent planetesimals colliding at gentle walking speeds during early Solar System accretion 4.5 billion years ago.
        </p>
      </div>

    </section>
  );
};
