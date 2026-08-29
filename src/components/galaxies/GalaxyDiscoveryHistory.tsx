import React, { useState } from 'react';
import { History, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';
import { GALAXY_WOW_FACTS, GALAXY_MYTHS } from '../../data/galaxiesAtlasData';

export const GalaxyDiscoveryHistory: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'wow' | 'myths' | 'debate'>('wow');

  return (
    <section id="discovery-history" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#03071b] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTIONS 69 - 74 · HISTORY OF SCIENCE & VERIFIED FACTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <History className="w-6 h-6 text-cyan-400" />
            <span>DISCOVERY TIMELINE & "THINGS THAT SOUND FAKE"</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('wow')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeSection === 'wow' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
            }`}
          >
            40+ WOW Facts
          </button>
          <button
            onClick={() => setActiveSection('myths')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeSection === 'myths' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
            }`}
          >
            Myth vs Reality
          </button>
          <button
            onClick={() => setActiveSection('debate')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeSection === 'debate' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
            }`}
          >
            The Great Debate
          </button>
        </div>
      </div>

      {/* 40+ WOW FACTS GRID */}
      {activeSection === 'wow' && (
        <div className="space-y-4">
          <div className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>40 VERIFIED ASTROPHYSICAL FACTS THAT SOUND FAKE:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {GALAXY_WOW_FACTS.map((fact, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-mono text-cyan-200 flex items-start gap-3">
                <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30 shrink-0">
                  #{idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <p className="font-sans leading-relaxed text-slate-200">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MYTH VS REALITY */}
      {activeSection === 'myths' && (
        <div className="space-y-4">
          <div className="text-xs font-mono text-rose-400 font-bold flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>7 COMMON GALAXY MYTHS DEBUNKED:</span>
          </div>

          <div className="space-y-4">
            {GALAXY_MYTHS.map((m) => (
              <div key={m.id} className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 font-sans">
                  <strong className="text-rose-400 font-mono uppercase block mb-1">MYTH:</strong>
                  {m.myth}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-sans">
                  <strong className="text-emerald-400 font-mono uppercase block mb-1">REALITY:</strong>
                  {m.reality}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* THE GREAT DEBATE */}
      {activeSection === 'debate' && (
        <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>THE GREAT DEBATE OF 1920 (SHAPLEY VS CURTIS)</span>
          </div>

          <p className="text-slate-300 font-sans leading-relaxed">
            On April 26, 1920, astronomers Harlow Shapley and Heber Curtis debated whether 'spiral nebulae' were small objects within the Milky Way (Shapley) or distant independent 'island universes' far outside our galaxy (Curtis).
          </p>

          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
            <strong className="text-cyan-300 font-mono block">1923 EDWIN HUBBLE BREAKTHROUGH:</strong>
            <p className="text-slate-200 font-sans leading-relaxed">
              Edwin Hubble discovered Cepheid variable stars in Andromeda using the 100-inch Hooker Telescope at Mount Wilson, conclusively proving Andromeda was 2.5 million light-years away—far outside the Milky Way!
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
