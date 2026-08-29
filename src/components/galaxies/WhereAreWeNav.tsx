import React, { useState } from 'react';
import { Compass, Info } from 'lucide-react';

export const WhereAreWeNav: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(4); // Default to Milky Way
  const [showLocalGroupModal, setShowLocalGroupModal] = useState<boolean>(false);

  const STEPS = [
    { name: 'YOU', detail: 'Human Observer on Earth Surface', scale: '1.7 meters' },
    { name: 'EARTH', detail: 'Third planet from the Sun, liquid ocean world', scale: '12,742 km' },
    { name: 'SOLAR SYSTEM', detail: '8 planets, Kuiper belt, heliosphere', scale: '100 AU (~15 Billion km)' },
    { name: 'ORION SPUR', detail: 'Minor spiral arm spur between Sagittarius & Perseus arms', scale: '10,000 Light-Years' },
    { name: 'MILKY WAY', detail: 'Barred spiral galaxy harboring 100-400 Billion stars', scale: '100,000 Light-Years' },
    { name: 'LOCAL GROUP', detail: 'Gravitationally bound group of 50+ galaxies (Milky Way, Andromeda, Triangulum, Dwarfs)', scale: '10 Million Light-Years' },
    { name: 'VIRGO SUPERCLUSTER', detail: 'Massive concentration of 100+ galaxy groups & clusters', scale: '110 Million Light-Years' },
    { name: 'COSMIC WEB', detail: 'Vast intergalactic network of filaments & voids', scale: '1 Billion Light-Years' },
    { name: 'OBSERVABLE UNIVERSE', detail: 'Spherical volume containing all observable matter', scale: '93 Billion Light-Years' }
  ];

  return (
    <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-4 shadow-xl transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-3">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4 text-cyan-500 dark:text-cyan-400 animate-spin-slow" />
          <span>PERMANENT COSMIC LOCATION BREADCRUMB · "WHERE ARE WE?"</span>
        </div>

        {/* Inspect Local Group Button */}
        <button
          onClick={() => setShowLocalGroupModal(true)}
          className="px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold hover:bg-cyan-500/30 transition-all cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Info className="w-3.5 h-3.5" />
          <span>INSPECT LOCAL GROUP (50+ GALAXIES)</span>
        </button>
      </div>

      {/* Path Breadcrumb Ribbon */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {STEPS.map((step, idx) => (
          <React.Fragment key={idx}>
            <button
              onClick={() => setActiveStep(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-cyan-500/25 text-cyan-900 dark:text-cyan-200 border border-cyan-500/50 font-bold scale-105 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {step.name}
            </button>
            {idx < STEPS.length - 1 && (
              <span className="text-cyan-600 dark:text-cyan-500/60 font-mono text-xs">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Active Step Telemetry Card */}
      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-cyan-500/30 dark:border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
        <div>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase text-[10px]">CURRENT SCALE LEVEL: {STEPS[activeStep].name}</span>
          <p className="text-slate-800 dark:text-slate-200 font-sans text-xs mt-0.5">{STEPS[activeStep].detail}</p>
        </div>
        <div className="px-3 py-1 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-400/40 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-300 font-bold text-xs shrink-0">
          Spatial Scale: {STEPS[activeStep].scale}
        </div>
      </div>

      {/* Local Group Modal */}
      {showLocalGroupModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-3xl border border-cyan-500/40 bg-white dark:bg-[#03081c] max-w-2xl w-full space-y-4 max-h-[90vh] overflow-y-auto custom-scrollbar font-mono text-xs text-slate-900 dark:text-white">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
              <div>
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold uppercase">NASA COSMIC HIERARCHY DATA</span>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">THE LOCAL GROUP OF GALAXIES</h3>
              </div>
              <button
                onClick={() => setShowLocalGroupModal(false)}
                className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/10 cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <p className="text-slate-700 dark:text-slate-300 font-sans text-xs leading-relaxed">
              NASA currently places the Milky Way in the <strong>Local Group</strong>, a gravitationally bound collection of more than 50 galaxies spanning roughly 10 million light-years.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-cyan-500/30 space-y-1">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[10px] uppercase">Primary Giant #1</span>
                <div className="text-slate-900 dark:text-white font-bold text-sm">Andromeda (M31)</div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[11px]">Largest galaxy in Local Group (~1 Trillion stars).</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-cyan-500/30 space-y-1">
                <span className="text-amber-600 dark:text-amber-400 font-bold text-[10px] uppercase">Primary Giant #2</span>
                <div className="text-slate-900 dark:text-white font-bold text-sm">Milky Way</div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[11px]">Our home barred spiral (~100-400 Billion stars).</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-cyan-500/30 space-y-1">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-[10px] uppercase">Primary Giant #3</span>
                <div className="text-slate-900 dark:text-white font-bold text-sm">Triangulum (M33)</div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[11px]">Third largest member (~40 Billion stars).</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 text-slate-800 dark:text-slate-300 font-sans text-xs">
              <strong className="text-cyan-700 dark:text-cyan-300 font-mono block mb-1">50+ Dwarf Satellite System:</strong>
              The remaining 50+ members are dwarf galaxies (e.g. LMC, SMC, Fornax Dwarf, SagDEG) bound to the three main spiral giants.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
