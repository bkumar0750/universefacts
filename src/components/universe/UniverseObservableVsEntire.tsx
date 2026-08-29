import React, { useState } from 'react';
import { Eye, HelpCircle, ShieldCheck, Maximize2 } from 'lucide-react';

export const UniverseObservableVsEntire: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'observable' | 'entire' | 'horizon'>('observable');

  return (
    <section id="observable-vs-entire" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl transition-colors">
      
      {/* Section Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
          <Eye className="w-4 h-4 text-cyan-500" />
          <span>SECTION 2 &amp; 3 · OBSERVABLE VS ENTIRE UNIVERSE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          HOW BIG IS THE UNIVERSE?
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          The <strong>Observable Universe</strong> is estimated to be roughly <strong>93 billion light-years in diameter</strong>. However, the observable universe is <em>NOT</em> the same thing as the entire universe—we can only observe regions whose light or physical signals have had time to reach us since the Big Bang.
        </p>
      </div>

      {/* Interactive Visualization Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Visual Graphic Representation */}
        <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl bg-slate-950 border border-cyan-500/40 p-6 flex items-center justify-center shadow-2xl overflow-hidden group">
          {/* Unobservable Outer Cosmos Ring */}
          <div className="absolute inset-2 rounded-full border-2 border-dashed border-purple-500/40 animate-spin-slow flex items-center justify-center">
            <span className="absolute top-4 text-[10px] font-mono text-purple-400 font-bold tracking-widest uppercase">
              UNOBSERVABLE REGION (UNKNOWN EXTENT)
            </span>
          </div>

          {/* Observable Horizon Boundary */}
          <div className="relative w-3/4 h-3/4 rounded-full border-2 border-cyan-400 bg-cyan-950/30 flex items-center justify-center p-4 backdrop-blur-sm shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <div className="text-center space-y-1 font-mono">
              <div className="w-3 h-3 rounded-full bg-amber-400 mx-auto animate-ping mb-1" />
              <span className="text-xs font-bold text-cyan-300 block">OBSERVABLE UNIVERSE</span>
              <span className="text-[10px] text-slate-300 block">~93 Billion Light-Years Diameter</span>
              <span className="text-[9px] text-amber-300 block font-semibold">Earth Observer at Center</span>
            </div>
          </div>

          {/* Particle Dots */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-purple-400" />
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Informational Tabs & Telemetry */}
        <div className="space-y-4">
          
          {/* Tab Selector Buttons */}
          <div className="flex gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('observable')}
              className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                activeTab === 'observable'
                  ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
              }`}
            >
              OBSERVABLE UNIVERSE
            </button>
            <button
              onClick={() => setActiveTab('entire')}
              className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                activeTab === 'entire'
                  ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
              }`}
            >
              ENTIRE UNIVERSE
            </button>
            <button
              onClick={() => setActiveTab('horizon')}
              className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                activeTab === 'horizon'
                  ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400 font-bold'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
              }`}
            >
              COSMIC HORIZON
            </button>
          </div>

          {/* Active Tab Explainer Box */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-3 text-xs font-sans">
            {activeTab === 'observable' && (
              <>
                <div className="font-mono text-cyan-700 dark:text-cyan-300 font-bold uppercase flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" />
                  <span>THE OBSERVABLE UNIVERSE HORIZON (~93 BILLION LY)</span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                  The observable universe is the spherical region centered on the observer (Earth) from which light has had time to reach us since the Big Bang 13.8 billion years ago. Due to metric spatial expansion during light travel time, the current comoving diameter is approximately 93 billion light-years (28.5 gigaparsecs).
                </p>
                <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-mono text-[11px] text-cyan-900 dark:text-cyan-200 font-bold">
                  SCI-CHECK: Observable size is derived from light travel time + metric spatial expansion.
                </div>
              </>
            )}

            {activeTab === 'entire' && (
              <>
                <div className="font-mono text-purple-700 dark:text-purple-300 font-bold uppercase flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>THE ENTIRE UNIVERSE (FINITE OR INFINITE?)</span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                  We do not currently know whether the entire universe is finite or infinite. Measurements from the Planck satellite indicate that spatial geometry is flat within 0.4% margin of error. However, a flat spatial geometry does not automatically prove an infinite universe—it could be a compact topology beyond our horizon.
                </p>
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-500/30 font-mono text-[11px] text-purple-900 dark:text-purple-200 font-bold">
                  STATUS: UNKNOWN — Science does not claim a proven boundary for the total universe.
                </div>
              </>
            )}

            {activeTab === 'horizon' && (
              <>
                <div className="font-mono text-amber-700 dark:text-amber-300 font-bold uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PARTICLE HORIZON VS PHYSICAL WALL</span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                  There is no physical brick wall marking the edge of the universe. What we reach at 46.5 billion light-years radius is our <strong>Particle Horizon</strong>—the maximum distance from which particles could have traveled to the observer in the age of the universe.
                </p>
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/30 font-mono text-[11px] text-amber-900 dark:text-amber-200 font-bold">
                  IMPORTANT: An observer 50 billion light-years away has their own distinct observable horizon!
                </div>
              </>
            )}
          </div>

          {/* Known vs Inferred vs Unknown Badges System */}
          <div className="grid grid-cols-3 gap-2 font-mono text-center text-xs">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/30">
              <span className="text-emerald-700 dark:text-emerald-400 font-bold block text-[10px] uppercase">KNOWN</span>
              <span className="text-slate-800 dark:text-slate-200 font-sans text-[11px]">Observable Horizon ~93B LY</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-500/30">
              <span className="text-amber-700 dark:text-amber-400 font-bold block text-[10px] uppercase">INFERRED</span>
              <span className="text-slate-800 dark:text-slate-200 font-sans text-[11px]">Flat Spatial Geometry</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-500/30">
              <span className="text-purple-700 dark:text-purple-400 font-bold block text-[10px] uppercase">UNKNOWN</span>
              <span className="text-slate-800 dark:text-slate-200 font-sans text-[11px]">Total Cosmos Size</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
