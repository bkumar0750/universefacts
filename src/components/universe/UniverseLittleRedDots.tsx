import React, { useState } from 'react';
import { HelpCircle, Sparkles, AlertCircle, ShieldCheck } from 'lucide-react';

export const UniverseLittleRedDots: React.FC = () => {
  const [activeHypothesis, setActiveHypothesis] = useState<'smbh' | 'star-cluster' | 'dust'>('smbh');

  return (
    <section id="little-red-dots-mystery" className="glass-panel p-6 sm:p-10 rounded-3xl border border-rose-500/40 dark:bg-[#06020c] bg-white/90 space-y-8 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300">
          <HelpCircle className="w-4 h-4 text-rose-500 animate-pulse" />
          <span>JWST EARLY UNIVERSE MYSTERY · 2026 DISCOVERY</span>
        </div>
        
        {/* Visual Dots Header */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_12px_#f43f5e] animate-ping" />
            <span className="w-5 h-5 rounded-full bg-red-600 shadow-[0_0_16px_#dc2626] animate-pulse" />
            <span className="w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_12px_#f43f5e] animate-ping" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            THE "LITTLE RED DOT" MYSTERY
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          JWST deep-field observations revealed an unexpected population of compact, extremely red objects in the early universe ($z &gt; 4-8$). Their extreme brightness and tiny spatial sizes defy traditional galaxy evolution models.
        </p>
      </div>

      {/* KNOWN vs UNKNOWN Comparison Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        
        {/* KNOWN Column */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-emerald-500/40 space-y-4 shadow-xl text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>🔵 KNOWN FACTS</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
              OBSERVED BY JWST
            </span>
          </div>

          <ul className="space-y-3 font-sans text-xs text-slate-200">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-mono font-bold">✓</span>
              <span><strong>Distant Origin:</strong> Confirmed spectroscopic redshifts spanning $z = 4$ to $z = 8.5$ (~1 to 1.5 billion years post Big Bang).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-mono font-bold">✓</span>
              <span><strong>Extremely Compact:</strong> Half-light radii under 100-200 light-years—far smaller than typical galaxies.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-mono font-bold">✓</span>
              <span><strong>Red Continuum Slope:</strong> Distinctly red rest-frame optical spectrum indicating dust attenuation or old stellar populations.</span>
            </li>
          </ul>
        </div>

        {/* UNKNOWN Column */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-rose-500/40 space-y-4 shadow-xl text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <AlertCircle className="w-5 h-5" />
              <span>🔴 UNKNOWN PARADOXES</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">
              ACTIVE RESEARCH 2026
            </span>
          </div>

          <ul className="space-y-3 font-sans text-xs text-slate-200">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-mono font-bold">?</span>
              <span><strong>Exact Physical Nature:</strong> Are they over-massive central black holes, ultra-dense starburst clusters, or dust-reddened AGN?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-mono font-bold">?</span>
              <span><strong>Evolutionary Path:</strong> How did such massive black hole seeds assemble so quickly in the primordial cosmos?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-mono font-bold">?</span>
              <span><strong>Population History:</strong> Why did this specific population disappear in later cosmic epochs?</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Leading Scientific Hypotheses Switcher */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-rose-500" />
          <span>WHAT ARE THEY? THREE LEADING 2026 HYPOTHESES</span>
        </h3>

        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveHypothesis('smbh')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeHypothesis === 'smbh'
                ? 'bg-rose-500/20 text-rose-900 dark:text-rose-200 border-rose-400 font-bold'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            1. ACCRETING SUPERMASSIVE BLACK HOLES
          </button>
          <button
            onClick={() => setActiveHypothesis('star-cluster')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeHypothesis === 'star-cluster'
                ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400 font-bold'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            2. ULTRA-DENSE STARBURST CLUSTERS
          </button>
          <button
            onClick={() => setActiveHypothesis('dust')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeHypothesis === 'dust'
                ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            3. DUST REDDENING OBSERVATIONAL EFFECTS
          </button>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 font-sans text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
          {activeHypothesis === 'smbh' && (
            <p>
              <strong>Accreting Supermassive Black Holes Hypothesis:</strong> Broad Hα emission lines suggest gas swirling at high velocities around active black holes. However, the inferred black hole masses are surprisingly high compared to the host galaxy stellar mass.
            </p>
          )}
          {activeHypothesis === 'star-cluster' && (
            <p>
              <strong>Ultra-Dense Starburst Clusters Hypothesis:</strong> Extreme concentrations of millions of young stars packed into a tiny volume, producing intense rest-frame optical light without requiring an active black hole central engine.
            </p>
          )}
          {activeHypothesis === 'dust' && (
            <p>
              <strong>Dust Reddening Hypothesis:</strong> Heavy concentrations of primordial interstellar dust absorbing blue starlight and re-emitting at red wavelengths, making ordinary young galaxies appear anomalous.
            </p>
          )}
        </div>
      </div>

    </section>
  );
};
