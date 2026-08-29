import React from 'react';
import { Radio, ShieldCheck } from 'lucide-react';

interface RadarItem {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  category: string;
  targetId: string;
}

const RADAR_ITEMS: RadarItem[] = [
  { id: 'r1', name: '🔴 Little Red Dots Mystery', badge: 'ACTIVE', badgeColor: 'bg-rose-500/20 text-rose-800 dark:text-rose-300 border-rose-500/40', category: 'EARLY UNIVERSE', targetId: 'little-red-dots-mystery' },
  { id: 'r2', name: '🕳️ Early Black Holes (Abell2744-QSO1)', badge: 'ACTIVE', badgeColor: 'bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-500/40', category: 'BLACK HOLE', targetId: 'abell2744-qso1-early-bh' },
  { id: 'r3', name: '🌌 First Galaxies (MoM-z14 z=14.44)', badge: 'ACTIVE', badgeColor: 'bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border-cyan-500/40', category: 'EARLY UNIVERSE', targetId: 'mom-z14-earliest-galaxy' },
  { id: 'r4', name: '🧲 Dark Matter Map (800k Galaxies)', badge: 'ACTIVE', badgeColor: 'bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border-indigo-500/40', category: 'DARK MATTER', targetId: 'dark-matter-800k-galaxies-map' },
  { id: 'r5', name: '🧬 Terzan 5 Milky Way Fossil', badge: 'ACTIVE', badgeColor: 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/40', category: 'MILKY WAY', targetId: 'terzan-5-milky-way-fossil' },
  { id: 'r6', name: '💥 Early Supernovae (730M Yrs)', badge: 'NEW 2026', badgeColor: 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/40 animate-pulse', category: 'SUPERNOVA', targetId: 'earliest-confirmed-supernova' },
  { id: 'r7', name: '💧 Sgr A* Water & Dust (IRS 3)', badge: 'NEW 2026', badgeColor: 'bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-500/40 animate-pulse', category: 'MILKY WAY', targetId: 'sgr-a-water-dust-irs3' },
  { id: 'r8', name: '🌑 CDG-2 Darkest Known Galaxy', badge: 'NEW 2026', badgeColor: 'bg-slate-500/20 text-slate-800 dark:text-slate-300 border-slate-500/40', category: 'TAXONOMY', targetId: 'cdg-2-darkest-galaxy' }
];

export const GalaxyResearchRadar: React.FC = () => {
  const handleScrollToDiscovery = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-cyan-500/40 dark:bg-[#02071c] bg-white/90 space-y-4 shadow-2xl relative overflow-hidden transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-cyan-600 dark:text-cyan-400 animate-pulse" />
          <span className="font-mono text-sm font-bold text-slate-900 dark:text-white tracking-wider">
            🔭 GALAXY RESEARCH RADAR — LIVE DISCOVERIES
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-mono text-cyan-700 dark:text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>Last Verified: August 2026 (NASA / ESA JWST)</span>
        </div>
      </div>

      {/* Grid of Radar Active Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
        {RADAR_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollToDiscovery(item.targetId)}
            className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-left font-mono text-xs cursor-pointer flex items-center justify-between group"
          >
            <span className="text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white font-medium truncate pr-2">
              {item.name}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${item.badgeColor}`}>
              {item.badge}
            </span>
          </button>
        ))}
      </div>

      <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 font-mono text-[11px] text-cyan-900 dark:text-cyan-200">
        <span>Click any research channel to jump directly to its 2026 astronomical briefing.</span>
        <span className="text-slate-600 dark:text-slate-400 font-bold shrink-0">NASA JWST / HUBBLE ARCHIVE</span>
      </div>
    </div>
  );
};
