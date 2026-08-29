import React, { useState } from 'react';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UniverseCosmicAddress: React.FC = () => {
  const [activeAddressIdx, setActiveAddressIdx] = useState<number>(0);

  const ADDRESS_STEPS = [
    {
      name: 'YOU',
      route: '/earth',
      scale: '1.7 meters',
      detail: 'The human observer scale on Earth. All physical cosmic observations begin with human consciousness and instruments.',
      actionText: 'HUMAN OBSERVER'
    },
    {
      name: 'EARTH',
      route: '/earth',
      scale: '12,742 km',
      detail: 'Third terrestrial planet from the Sun, liquid water ocean world harboring humanity.',
      actionText: 'EXPLORE EARTH PAGE →'
    },
    {
      name: 'SOLAR SYSTEM',
      route: '/solar-system',
      scale: '100 AU (~15 Billion km)',
      detail: 'Centrally bound G-type yellow dwarf star (Sun), 8 major planets, dwarf planet belts, and heliosphere.',
      actionText: 'EXPLORE SOLAR SYSTEM →'
    },
    {
      name: 'MILKY WAY',
      route: '/galaxies',
      scale: '100,000 Light-Years',
      detail: 'Barred spiral galaxy harboring 100-400 billion stars and central supermassive black hole Sgr A*.',
      actionText: 'EXPLORE GALAXY ATLAS →'
    },
    {
      name: 'LOCAL GROUP',
      route: '/galaxies',
      scale: '10 Million Light-Years',
      detail: 'Gravitationally bound group of 50+ galaxies dominated by Andromeda (M31), Milky Way, and Triangulum (M33).',
      actionText: 'INSPECT LOCAL GROUP →'
    },
    {
      name: 'GALAXY CLUSTER',
      route: '/galaxies',
      scale: '100 Million Light-Years',
      detail: 'Virgo Supercluster basin containing hundreds of galaxy groups bound by dark matter halos.',
      actionText: 'INSPECT CLUSTERS →'
    },
    {
      name: 'FILAMENT',
      route: '/universe',
      scale: '300 Million Light-Years',
      detail: 'Glowing intergalactic gas threads stretched across dark matter scaffolding where galaxy clusters meet.',
      actionText: 'VIEW FILAMENTS →'
    },
    {
      name: 'COSMIC WALL',
      route: '/universe',
      scale: '500 Million Light-Years',
      detail: 'Vast, sheet-like concentrations of galaxies such as the Sloan Great Wall bounding cosmic voids.',
      actionText: 'VIEW COSMIC WALLS →'
    },
    {
      name: 'COSMIC WEB',
      route: '/universe',
      scale: '1 Billion Light-Years',
      detail: 'The large-scale structure of filaments, walls, and empty voids weaving through space.',
      actionText: 'SIMULATE COSMIC WEB →'
    },
    {
      name: 'OBSERVABLE UNIVERSE',
      route: '/universe',
      scale: '93 Billion Light-Years',
      detail: 'Complete spherical horizon containing all matter whose light has had time to reach Earth since the Big Bang.',
      actionText: 'CURRENT ATLAS PAGE'
    }
  ];

  const current = ADDRESS_STEPS[activeAddressIdx];

  return (
    <section id="cosmic-address" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-6 shadow-xl transition-colors">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
          <MapPin className="w-4 h-4 text-cyan-500 animate-bounce" />
          <span>YOUR COMPLETE COSMIC ADDRESS IN THE OBSERVABLE UNIVERSE</span>
        </div>
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
          Level {activeAddressIdx + 1} of {ADDRESS_STEPS.length}
        </span>
      </div>

      {/* Interactive Ribbon Buttons */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {ADDRESS_STEPS.map((step, idx) => (
          <React.Fragment key={step.name}>
            <button
              onClick={() => setActiveAddressIdx(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeAddressIdx === idx
                  ? 'bg-cyan-500/25 text-cyan-900 dark:text-cyan-200 border border-cyan-500/50 font-bold scale-105 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {step.name}
            </button>
            {idx < ADDRESS_STEPS.length - 1 && (
              <ArrowRight className="w-3 h-3 text-cyan-500 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Active Address Details Telemetry Card */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm uppercase">{current.name}</span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-[10px] border border-cyan-500/30">
              Scale: {current.scale}
            </span>
          </div>
          <p className="text-slate-800 dark:text-slate-200 font-sans text-xs">{current.detail}</p>
        </div>

        {/* Route Jump Link */}
        <Link
          to={current.route}
          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs transition-all shrink-0 flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
        >
          <span>{current.actionText}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

    </section>
  );
};
