import React, { useState } from 'react';
import { Search, ArrowRight, Activity } from 'lucide-react';

export const UniverseHowDoWeKnowAndMeasurement: React.FC = () => {
  const [activeDetective, setActiveDetective] = useState<'expansion' | 'cmb' | 'dark-matter'>('expansion');

  const MEASUREMENTS = [
    {
      metric: 'UNIVERSE AGE',
      value: '13.787 ± 0.020 Billion Years',
      howDoWeKnow: ['CMB Anisotropies (Planck)', 'Cosmic Expansion Rate', 'Globular Cluster Age Limits'],
      status: 'MEASURED / INFERRED',
      badgeColor: 'bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border-cyan-500/40'
    },
    {
      metric: 'OBSERVABLE UNIVERSE DIAMETER',
      value: '93.01 Billion Light-Years',
      howDoWeKnow: ['Comoving Horizon Calculation', 'Lookback Distance + Spatial Expansion', 'FLRW Metric Integration'],
      status: 'CALCULATED / MODEL-DEPENDENT',
      badgeColor: 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/40'
    },
    {
      metric: 'HUBBLE CONSTANT (H₀)',
      value: '67.4 vs 73.0 km/s/Mpc',
      howDoWeKnow: ['Planck CMB Fit (~67.4)', 'SH0ES Cepheid Ladder (~73.0)', 'TRGB & Gravitational Lenses'],
      status: 'MEASURED (HUBBLE TENSION ACTIVE)',
      badgeColor: 'bg-rose-500/20 text-rose-800 dark:text-rose-300 border-rose-500/40'
    },
    {
      metric: 'DARK ENERGY DENSITY (Ω_Λ)',
      value: '68.3% ± 1.5%',
      howDoWeKnow: ['Type Ia Supernovae Luminosity Distances', 'Baryon Acoustic Oscillations (BAO)', 'CMB Peak Ratios'],
      status: 'INFERRED / MODEL-DEPENDENT',
      badgeColor: 'bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-500/40'
    }
  ];

  return (
    <section id="how-do-we-know-and-measurement" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl transition-colors">
      
      {/* 1. HOW DO WE KNOW? Scientific Detective System */}
      <div className="space-y-6">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Search className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 1 · HOW DO WE KNOW? (SCIENTIFIC DETECTIVE SYSTEM)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            HOW DO WE KNOW COSMIC FACTS?
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
            Science is not a collection of arbitrary assertions. Cosmologists deduce conclusions through rigorous chains of observational evidence and testable physical models.
          </p>
        </div>

        {/* Detective Selector Ribbon */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveDetective('expansion')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeDetective === 'expansion'
                ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            1. HOW DO WE KNOW THE UNIVERSE IS EXPANDING?
          </button>
          <button
            onClick={() => setActiveDetective('cmb')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeDetective === 'cmb'
                ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            2. HOW DO WE KNOW THE CMB EXISTS?
          </button>
          <button
            onClick={() => setActiveDetective('dark-matter')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeDetective === 'dark-matter'
                ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            3. HOW DO WE KNOW DARK MATTER EXISTS?
          </button>
        </div>

        {/* Dynamic Detective Evidence Chain Frame */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white space-y-4 font-mono shadow-2xl">
          {activeDetective === 'expansion' && (
            <div className="space-y-4">
              <div className="text-cyan-400 font-bold text-sm border-b border-white/10 pb-2">
                DETECTIVE CHAIN: COSMIC SPATIAL EXPANSION
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 font-bold">OBSERVATION</div>
                <ArrowRight className="w-4 h-4 mx-auto text-cyan-500 hidden sm:block" />
                <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 font-bold">GALAXY SPECTRA</div>
                <ArrowRight className="w-4 h-4 mx-auto text-cyan-500 hidden sm:block" />
                <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 font-bold">REDSHIFT (z)</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center text-center text-xs pt-2">
                <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 font-bold">DISTANCE MEASUREMENTS</div>
                <ArrowRight className="w-4 h-4 mx-auto text-cyan-500 hidden sm:block" />
                <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-400 font-extrabold text-cyan-300">COSMIC EXPANSION</div>
              </div>
            </div>
          )}

          {activeDetective === 'cmb' && (
            <div className="space-y-4">
              <div className="text-amber-400 font-bold text-sm border-b border-white/10 pb-2">
                DETECTIVE CHAIN: COSMIC MICROWAVE BACKGROUND
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30 font-bold">OBSERVATION</div>
                <ArrowRight className="w-4 h-4 mx-auto text-amber-500 hidden sm:block" />
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30 font-bold">MICROWAVE SKY</div>
                <ArrowRight className="w-4 h-4 mx-auto text-amber-500 hidden sm:block" />
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30 font-bold">UNIFORM BACKGROUND</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center text-center text-xs pt-2">
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30 font-bold">TINY FLUCTUATIONS (10⁻⁵ K)</div>
                <ArrowRight className="w-4 h-4 mx-auto text-amber-500 hidden sm:block" />
                <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-400 font-extrabold text-amber-300">CMB DETECTED</div>
              </div>
            </div>
          )}

          {activeDetective === 'dark-matter' && (
            <div className="space-y-4">
              <div className="text-purple-400 font-bold text-sm border-b border-white/10 pb-2">
                DETECTIVE CHAIN: DARK MATTER INFERENCE
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/30 font-bold">GALAXY ROTATION CURVES</div>
                <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/30 font-bold">GRAVITATIONAL LENSING</div>
                <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/30 font-bold">GALAXY CLUSTER DISPERSION</div>
                <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/30 font-bold">COSMIC STRUCTURE SIMULATION</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-400 font-extrabold text-purple-300 text-center text-xs">
                CONCLUSION: DARK MATTER MASS EXISTS BEYOND BARYONIC MATTER
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. THE UNIVERSE IS A MEASUREMENT (Confidence Cards) */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
            <Activity className="w-4 h-4 text-purple-500" />
            <span>FEATURE 2 · THE UNIVERSE IS A MEASUREMENT</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            CONFIDENCE &amp; MEASUREMENT TELEMETRY CARDS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          {MEASUREMENTS.map((m) => (
            <div key={m.metric} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 text-[10px] font-bold">{m.metric}</span>
                <span className={`px-2.5 py-0.5 rounded border text-[10px] font-bold ${m.badgeColor}`}>
                  {m.status}
                </span>
              </div>

              <div className="text-xl font-bold text-cyan-600 dark:text-cyan-300 font-display">{m.value}</div>

              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">HOW DO WE KNOW?</span>
                <ul className="space-y-1 font-sans text-xs text-slate-700 dark:text-slate-300">
                  {m.howDoWeKnow.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
