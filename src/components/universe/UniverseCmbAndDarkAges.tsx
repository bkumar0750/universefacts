import React, { useState } from 'react';
import { Sun } from 'lucide-react';

export const UniverseCmbAndDarkAges: React.FC = () => {
  const [viewLayer, setViewLayer] = useState<'cmb' | 'dark-ages' | 'reionization'>('reionization');

  const REIONIZATION_STEPS = [
    { name: 'EARLY GALAXY', desc: 'Gravitational collapse of primordial gas forms early galaxy halos (~1.4B yrs post Big Bang).' },
    { name: 'YOUNG STARS', desc: 'Massive Population III star clusters ignite inside gas reservoirs.' },
    { name: 'UV RADIATION', desc: 'Energetic photons escape from galaxy MXDFz4.4 observed by Hubble (June 2026).' },
    { name: 'NEUTRAL HYDROGEN', desc: 'Opaque neutral hydrogen fog surrounding early galaxies absorbs starlight.' },
    { name: 'IONIZATION', desc: 'UV radiation strips electrons from hydrogen, creating expanding ionized bubbles.' },
    { name: 'TRANSPARENT UNIVERSE', desc: 'Intergalactic medium becomes fully transparent, allowing light to travel unimpeded.' }
  ];

  return (
    <section id="cmb-and-dark-ages" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
          <Sun className="w-4 h-4 text-amber-500" />
          <span>SECTION 14-19 &amp; 43 · RECOMBINATION, CMB &amp; REIONIZATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          THE OLDEST LIGHT &amp; REIONIZATION VISUAL FLOW
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          At <strong>380,000 years after the Big Bang</strong>, electrons bound to protons during Recombination, releasing the Cosmic Microwave Background (CMB). Later, energetic UV light from early galaxies cleared the neutral hydrogen fog during the <strong>Epoch of Reionization</strong>.
        </p>
      </div>

      {/* Layer View Mode Toggles */}
      <div className="flex gap-2 font-mono text-xs">
        <button
          onClick={() => setViewLayer('reionization')}
          className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
            viewLayer === 'reionization'
              ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
          }`}
        >
          💥 REIONIZATION VISUAL FLOW (JUNE 2026 DATA)
        </button>
        <button
          onClick={() => setViewLayer('cmb')}
          className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
            viewLayer === 'cmb'
              ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400 font-bold'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
          }`}
        >
          1. CMB MAP (380k YRS)
        </button>
        <button
          onClick={() => setViewLayer('dark-ages')}
          className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
            viewLayer === 'dark-ages'
              ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
          }`}
        >
          2. COSMIC DARK AGES
        </button>
      </div>

      {/* View Layer Content Frame */}
      <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 text-white space-y-6 font-mono shadow-2xl">
        
        {viewLayer === 'reionization' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-cyan-400 font-bold text-sm">HUBBLE 2026 REIONIZATION OBSERVATION (MXDFz4.4)</span>
              <span className="text-xs text-emerald-400 font-bold">1.4 BILLION YRS POST BIG BANG</span>
            </div>

            {/* Visual Step Flow Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {REIONIZATION_STEPS.map((step, idx) => (
                <div key={step.name} className="p-3 rounded-2xl bg-slate-900 border border-cyan-500/30 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-cyan-400 font-bold">STEP {idx + 1}</span>
                    <h4 className="font-bold text-xs text-white">{step.name}</h4>
                  </div>
                  <p className="font-sans text-[11px] text-slate-300 leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-xs font-sans text-cyan-200">
              <strong className="font-mono text-cyan-300 block uppercase mb-1">JUNE 2026 HUBBLE DISCOVERY HIGHLIGHT:</strong>
              Hubble detected UV photons escaping directly from galaxy MXDFz4.4 ($z \approx 4.4$), demonstrating how early starburst galaxies cleared the neutral hydrogen fog to make the cosmos transparent.
            </div>
          </div>
        )}

        {viewLayer === 'cmb' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-amber-400 font-bold text-sm">COSMIC MICROWAVE BACKGROUND (CMB)</span>
              <span className="text-xs text-slate-400">Temp: 2.72548 K</span>
            </div>
            <div className="relative w-full h-48 rounded-2xl bg-gradient-to-r from-blue-900 via-amber-700 to-rose-900 p-4 border border-amber-500/40 flex items-center justify-center shadow-inner overflow-hidden">
              <div className="relative z-10 text-center space-y-1 backdrop-blur-xs p-3 rounded-xl bg-slate-950/60 border border-white/10">
                <span className="text-xs font-bold text-amber-200 block">PLANCK / WMAP ALL-SKY SKY MAP</span>
                <span className="text-[10px] text-slate-300 block">Tiny temperature fluctuations (1 part in 100,000)</span>
              </div>
            </div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              These minute temperature anisotropies (10⁻⁵ K) were caused by tiny density variations in the primordial plasma. Gravity subsequently amplified these tiny seeds into dark matter halos, galaxies, and the cosmic web.
            </p>
          </div>
        )}

        {viewLayer === 'dark-ages' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-purple-400 font-bold text-sm">THE COSMIC DARK AGES (380k to ~100M YRS)</span>
              <span className="text-xs text-slate-400">No Stars Exist Yet</span>
            </div>
            <div className="w-full h-48 rounded-2xl bg-[#01020a] border border-purple-500/30 flex items-center justify-center p-4">
              <div className="text-center space-y-2">
                <div className="w-4 h-4 rounded-full bg-purple-500/20 mx-auto animate-pulse" />
                <span className="text-xs text-purple-300 block font-bold">NEUTRAL HYDROGEN &amp; DARK MATTER SCAFFOLDING</span>
                <span className="text-[10px] text-slate-400 block font-sans">The universe was dark, filled with hydrogen gas collapsing under invisible dark matter halos.</span>
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
