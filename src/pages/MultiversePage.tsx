import React from 'react';
import { multiverseData } from '../data/multiverseData';
import { Layers, AlertTriangle } from 'lucide-react';
import { SourceBadge } from '../components/SourceBadge';

export const MultiversePage: React.FC = () => {
  return (
    <div className="space-y-10 pb-12">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-500/10 border border-violet-500/30 text-violet-300">
          <Layers className="w-3.5 h-3.5" />
          <span>THEORETICAL HIGH-ENERGY PHYSICS</span>
        </div>
        <h1 className="text-4xl font-display font-extrabold text-white">
          Multiverse Hypotheses
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-3xl leading-relaxed">
          Explorations into speculative cosmological models emerging from inflationary quantum cosmology, string theory, quantum mechanics, and mathematical physics.
        </p>
      </div>

      {/* MANDATORY SCIENTIFIC DISCLAIMER BANNER MATCHING SECTION 27 */}
      <div className="glass-panel p-5 rounded-2xl border border-amber-500/40 bg-amber-500/10 flex items-start gap-4 shadow-xl">
        <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-display font-bold text-base text-amber-300">
            Scientific Rigor Notice: Speculative Physics
          </h3>
          <p className="text-xs font-sans text-slate-200 leading-relaxed">
            “These ideas are active areas of theoretical discussion and mathematical physics, and are NOT direct empirical observations of other universes.”
          </p>
        </div>
      </div>

      {/* Multiverse Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {multiverseData.map((item) => (
          <div
            key={item.id}
            className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-violet-300 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/30">
                  {item.status}
                </span>
                <span className="text-xs font-mono text-slate-400">{item.category}</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white">{item.name}</h3>
              <div className="text-xs font-mono text-cyan-400">Proponent(s): {item.proponent}</div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed pt-2">
                {item.coreConcept}
              </p>
            </div>

            {/* Key Arguments vs Critiques */}
            <div className="space-y-3 pt-3 border-t border-white/10 text-xs font-sans">
              <div>
                <strong className="text-emerald-400 font-mono block text-[11px] uppercase">Key Theoretical Arguments:</strong>
                <ul className="list-disc list-inside text-slate-300 space-y-1 mt-1 font-sans">
                  {item.keyArguments.map((arg, i) => (
                    <li key={i}>{arg}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-amber-400 font-mono block text-[11px] uppercase">Scientific Critiques:</strong>
                <ul className="list-disc list-inside text-slate-300 space-y-1 mt-1 font-sans">
                  {item.scientificCritiques.map((crit, i) => (
                    <li key={i}>{crit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <SourceBadge sources={item.sources} />
          </div>
        ))}
      </div>

    </div>
  );
};
