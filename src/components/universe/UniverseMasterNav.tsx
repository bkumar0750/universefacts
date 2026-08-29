import React, { useState } from 'react';
import { Compass, Filter, ChevronDown } from 'lucide-react';

export type KnowledgeFilter = 'ALL' | 'KNOWN' | 'INFERRED' | 'MODEL' | 'UNKNOWN' | 'SPECULATIVE';

interface UniverseMasterNavProps {
  activeFilter: KnowledgeFilter;
  onFilterChange: (filter: KnowledgeFilter) => void;
}

export const NAV_TOPICS = [
  { id: 'universe-hero-cinematic', label: '🌍 Cosmic Address', category: 'General' },
  { id: 'observable-vs-entire', label: '🔭 Observable Universe', category: 'Scale' },
  { id: 'scale-explorer', label: '📏 Cosmic Scale', category: 'Scale' },
  { id: 'age-and-cosmic-calendar', label: '⏳ 13.8 Billion Years', category: 'Time' },
  { id: 'big-bang-and-inflation', label: '💥 Big Bang', category: 'Origin' },
  { id: 'big-bang-and-inflation', label: '⚡ Inflation', category: 'Origin' },
  { id: 'big-bang-and-inflation', label: '🧪 First Elements', category: 'Origin' },
  { id: 'cmb-and-dark-ages', label: '🌫️ Cosmic Microwave Background', category: 'Early Universe' },
  { id: 'cmb-and-dark-ages', label: '🌑 Dark Ages', category: 'Early Universe' },
  { id: 'cmb-and-dark-ages', label: '⭐ First Stars', category: 'Early Universe' },
  { id: 'cmb-and-dark-ages', label: '🌌 First Galaxies', category: 'Early Universe' },
  { id: 'little-red-dots-mystery', label: '🔴 Little Red Dots', category: 'Mysteries' },
  { id: 'euclid-60m-stars-zoom', label: '🌌 60M Euclid Stars', category: 'Observatories' },
  { id: 'cosmic-web-and-voids', label: '🕸️ Cosmic Web', category: 'Structure' },
  { id: 'cosmic-web-and-voids', label: '🕳️ Cosmic Voids', category: 'Structure' },
  { id: 'dark-matter-energy-hubble-tension', label: '🧲 Dark Matter', category: 'Dark Universe' },
  { id: 'dark-matter-energy-hubble-tension', label: '🌑 Dark Energy', category: 'Dark Universe' },
  { id: 'dark-matter-energy-hubble-tension', label: '📈 Hubble Tension', category: 'Dark Universe' },
  { id: 'cmb-and-dark-ages', label: '🔴 Reionization', category: 'Early Universe' },
  { id: 'live-research-radar', label: '🔭 JWST', category: 'Observatories' },
  { id: 'live-research-radar', label: '🔭 Hubble', category: 'Observatories' },
  { id: 'live-research-radar', label: '🔭 Euclid', category: 'Observatories' },
  { id: 'live-research-radar', label: '🚀 Roman Space Telescope', category: 'Observatories' },
  { id: 'multi-messenger-lab', label: '🌊 Gravitational Waves', category: 'Messengers' },
  { id: 'multi-messenger-lab', label: '👻 Neutrinos', category: 'Messengers' },
  { id: 'multi-messenger-lab', label: '⚡ Cosmic Rays', category: 'Messengers' },
  { id: 'extreme-and-strange', label: '🕳️ Black Holes', category: 'Phenomena' },
  { id: 'extreme-and-strange', label: '💥 Supernovae', category: 'Phenomena' },
  { id: 'big-bang-and-inflation', label: '🧬 Cosmic Chemistry', category: 'Origin' },
  { id: 'multi-messenger-lab', label: '🔬 Multi-Messenger Universe', category: 'Messengers' },
  { id: 'age-and-cosmic-calendar', label: '🕰️ Cosmic Time Machine', category: 'Time' },
  { id: 'cosmic-future-and-footer', label: '🔮 Future Universe', category: 'Future' },
  { id: 'cosmic-future-and-footer', label: '🌌 Multiverse', category: 'Future' },
  { id: 'extreme-and-strange', label: '🤯 Impossible Facts', category: 'Mysteries' },
  { id: 'open-questions-and-mythbuster', label: '🧠 Myth vs Reality', category: 'Science Trust' },
  { id: 'live-research-radar', label: '🆕 Latest Discoveries', category: 'Radar' },
  { id: 'live-research-radar', label: '📡 Research Radar', category: 'Radar' },
  { id: 'open-questions-and-mythbuster', label: '❓ What We Know', category: 'Science Trust' },
  { id: 'open-questions-and-mythbuster', label: '❓ What We Don\'t Know', category: 'Science Trust' },
  { id: 'cosmic-future-and-footer', label: '🌌 THE UNKNOWN', category: 'Future' }
];

export const UniverseMasterNav: React.FC<UniverseMasterNavProps> = ({
  activeFilter,
  onFilterChange
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const scrollToTopic = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpenMenu(false);
  };

  const filterOptions: { id: KnowledgeFilter; label: string; desc: string; color: string }[] = [
    { id: 'ALL', label: 'ALL TOPICS', desc: 'Show complete cosmic atlas without filtering.', color: 'bg-slate-500/20 text-slate-800 dark:text-slate-200 border-slate-500/40' },
    { id: 'KNOWN', label: '🔵 KNOWN', desc: 'Empirically observed physical facts (e.g. Metric expansion).', color: 'bg-blue-500/20 text-blue-900 dark:text-blue-300 border-blue-500/40' },
    { id: 'INFERRED', label: '🟣 INFERRED', desc: 'Deduction via indirect evidence (e.g. Dark matter lensing).', color: 'bg-purple-500/20 text-purple-900 dark:text-purple-300 border-purple-500/40' },
    { id: 'MODEL', label: '🟠 MODEL', desc: 'Cosmological frameworks & simulations (e.g. Inflation, BBN).', color: 'bg-amber-500/20 text-amber-900 dark:text-amber-300 border-amber-500/40' },
    { id: 'UNKNOWN', label: '🔴 UNKNOWN', desc: 'Open unsolved paradoxes (e.g. Dark energy nature, Little Red Dots).', color: 'bg-rose-500/20 text-rose-900 dark:text-rose-300 border-rose-500/40' },
    { id: 'SPECULATIVE', label: '⚫ SPECULATIVE', desc: 'Theoretical concepts without current data (e.g. Multiverse).', color: 'bg-slate-700/20 text-slate-800 dark:text-slate-300 border-slate-600/40' }
  ];

  return (
    <div className="sticky top-16 z-40 w-full glass-panel p-3 sm:p-4 rounded-2xl border border-cyan-500/30 bg-slate-900/90 backdrop-blur-md shadow-2xl space-y-3">
      
      {/* Top Bar: Nav Menu Toggle & Scientific Trust Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* 39-Topic Master Navigation Dropdown Toggle */}
        <div className="relative">
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/50 font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>🌌 UNIVERSE ATLAS NAVIGATION (39 TOPICS)</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpenMenu ? 'rotate-180' : ''}`} />
          </button>

          {/* Navigation Dropdown Drawer */}
          {isOpenMenu && (
            <div className="absolute left-0 mt-2 w-80 sm:w-96 max-h-96 overflow-y-auto rounded-2xl bg-slate-950 border border-cyan-500/40 p-4 shadow-2xl z-50 space-y-2 font-mono text-xs animate-fade-in">
              <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider border-b border-white/10 pb-1">
                JUMP TO COSMIC ATLAS TOPIC:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                {NAV_TOPICS.map((topic, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToTopic(topic.id)}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-white border border-white/5 hover:border-cyan-500/40 text-left transition-all truncate"
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Permanent KNOWN / INFERRED / MODEL / UNKNOWN / SPECULATIVE Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          <div className="flex items-center gap-1 text-cyan-400 text-[10px] uppercase font-bold mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>SCIENCE TRUST FILTER:</span>
          </div>

          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onFilterChange(opt.id)}
              className={`px-2.5 py-1 rounded-xl text-[10px] border transition-all cursor-pointer ${
                activeFilter === opt.id
                  ? 'ring-2 ring-cyan-400 font-bold scale-105 shadow-md ' + opt.color
                  : 'bg-slate-800/60 text-slate-400 border-white/5 hover:text-white'
              }`}
              title={opt.desc}
            >
              {opt.label}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
};
