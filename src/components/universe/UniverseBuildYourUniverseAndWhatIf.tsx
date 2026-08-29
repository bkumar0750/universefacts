import React, { useState } from 'react';
import { Sliders, HelpCircle, AlertTriangle } from 'lucide-react';

export const UniverseBuildYourUniverseAndWhatIf: React.FC = () => {
  // Build Your Own Universe State
  const [dm, setDm] = useState<number>(27);
  const [de, setDe] = useState<number>(68);
  const [baryon, setBaryon] = useState<number>(5);

  // What If Scenarios State
  const [activeWhatIf, setActiveWhatIf] = useState<string>('sun-black-hole');

  const WHAT_IF_SCENARIOS = [
    {
      id: 'sun-black-hole',
      title: 'WHAT IF THE SUN WERE REPLACED BY A 1 SOLAR MASS BLACK HOLE?',
      sim: 'Earth orbit remains completely unchanged!',
      explanation: 'Because a 1-solar-mass black hole has the exact same gravitational mass as the Sun, Earth would continue orbiting at 1 AU. However, without solar light and heat, Earth would freeze over completely.',
      caveat: 'Black holes do not act as cosmic vacuum cleaners; gravity depends only on total mass and distance.'
    },
    {
      id: 'center-milky-way',
      title: 'WHAT IF EARTH WERE AT THE CENTER OF THE MILKY WAY?',
      sim: 'Night sky would be thousands of times brighter than full moon!',
      explanation: 'Located near Sgr A*, the night sky would be packed with dense stellar clusters. Intense cosmic rays, X-ray emission from accretion flares, and stellar collisions would make life challenging.',
      caveat: 'Habitable zone galactic regions require stable stellar orbits away from high-energy core events.'
    },
    {
      id: 'no-dark-matter',
      title: 'WHAT IF DARK MATTER DISAPPEARED?',
      sim: 'Galaxies fly apart and cosmic web collapses!',
      explanation: 'Without dark matter halos providing gravitational binding energy, stars in outer galaxy disks would fly off into intergalactic space, and galaxies would disperse.',
      caveat: 'Baryonic matter alone lacks sufficient mass to hold spiral galaxies together at observed orbital speeds.'
    },
    {
      id: 'no-dark-energy',
      title: 'WHAT IF THERE WERE NO DARK ENERGY?',
      sim: 'Spatial expansion slows down over cosmic time!',
      explanation: 'Without dark energy acceleration, gravitational attraction between galaxies would decelerate cosmic expansion, potentially leading to a Big Crunch if mass density exceeds critical threshold.',
      caveat: 'Dark energy pressure dominates large-scale cosmological expansion today.'
    },
    {
      id: 'stronger-gravity',
      title: 'WHAT IF GRAVITY WERE SLIGHTLY STRONGER?',
      sim: 'Stars burn fuel faster and collapse rapidly!',
      explanation: 'A stronger gravitational constant $G$ would compress stellar cores, increasing fusion rates. Stars would shine intensely and die in supernovae within millions rather than billions of years.',
      caveat: 'Fine-tuning of fundamental physical constants allows long-lived stable stars suitable for complex life.'
    }
  ];

  const currentWhatIf = WHAT_IF_SCENARIOS.find((w) => w.id === activeWhatIf)!;

  return (
    <section id="build-your-universe-and-what-if" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl transition-colors">
      
      {/* 1. FEATURE 7: BUILD YOUR OWN UNIVERSE */}
      <div className="space-y-6">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Sliders className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 7 · EDUCATIONAL COSMOLOGICAL SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            BUILD YOUR OWN UNIVERSE LAB
          </h2>
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/40 text-xs font-mono font-bold">
            ⚠️ EDUCATIONAL COSMOLOGICAL SIMULATION (NOT A PREDICTION OF ACTUAL UNIVERSE)
          </div>
        </div>

        {/* Sliders Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-mono text-xs">
          
          <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 space-y-4 shadow-xl text-white">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>DARK MATTER RATIO: {dm}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={60}
                value={dm}
                onChange={(e) => setDm(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>DARK ENERGY RATIO: {de}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={90}
                value={de}
                onChange={(e) => setDe(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>NORMAL MATTER (BARYONS): {baryon}%</span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={baryon}
                onChange={(e) => setBaryon(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>

          {/* Real-time Simulation Output Box */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white space-y-4 shadow-xl">
            <div className="text-cyan-400 font-bold text-xs uppercase border-b border-white/10 pb-2">
              SIMULATED COSMIC FATE OUTCOME:
            </div>

            <div className="space-y-2 font-sans text-xs">
              <div className="font-mono text-amber-300 font-bold text-sm">
                {de > 75 ? '🔥 EXPONENTIAL BIG RIP FATE' : dm > 45 ? '💥 RAPID BIG CRUNCH RECOLLAPSE' : '❄️ BALANCED BIG FREEZE EXPANSION'}
              </div>
              <p className="text-slate-300 leading-relaxed">
                {de > 75
                  ? 'Extreme dark energy pressure tears galaxy clusters, stars, and atoms apart.'
                  : dm > 45
                  ? 'Heavy dark matter gravitational pull overcomes spatial expansion, collapsing space back to a singularity.'
                  : 'Balanced mass-energy budget allows billions of years of stellar star formation before eventual thermal heat death.'}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. FEATURE 10: WHAT IF? COSMIC THOUGHT EXPERIMENTS */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>FEATURE 10 · WHAT IF? COSMIC THOUGHT EXPERIMENTS</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            COSMIC "WHAT IF?" THOUGHT EXPERIMENTS
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {WHAT_IF_SCENARIOS.map((w) => (
            <button
              key={w.id}
              onClick={() => setActiveWhatIf(w.id)}
              className={`px-3.5 py-2 rounded-xl border cursor-pointer transition-all ${
                activeWhatIf === w.id
                  ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400 font-bold scale-105 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              {w.title.split('?')[0]}?
            </button>
          ))}
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-amber-500/40 text-white space-y-4 font-mono shadow-2xl">
          <div className="text-amber-400 font-bold text-sm border-b border-white/10 pb-2">
            {currentWhatIf.title}
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs">
            SIMULATION OUTCOME: {currentWhatIf.sim}
          </div>

          <p className="font-sans text-xs text-slate-300 leading-relaxed">
            <strong>SCIENTIFIC EXPLANATION:</strong> {currentWhatIf.explanation}
          </p>

          <div className="pt-2 text-[10px] text-slate-400 border-t border-white/10 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>SCIENTIFIC CAVEAT: {currentWhatIf.caveat}</span>
          </div>
        </div>
      </div>

    </section>
  );
};
