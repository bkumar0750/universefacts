import React from 'react';
import { Filter, Search } from 'lucide-react';

interface Props {
  selectedAgency: string;
  onAgencyChange: (agency: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export const MissionCategories: React.FC<Props> = ({
  selectedAgency,
  onAgencyChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  totalCount
}) => {
  const AGENCIES = [
    { id: 'ALL', label: 'ALL AGENCIES' },
    { id: 'ISRO', label: '🇮🇳 ISRO' },
    { id: 'NASA', label: '🇺🇸 NASA' },
    { id: 'ESA', label: '🇪🇺 ESA' },
    { id: 'JAXA', label: '🇯🇵 JAXA' },
    { id: 'CSA', label: '🇨🇦 CSA' },
    { id: 'INTERNATIONAL', label: '🌍 International' }
  ];

  const CATEGORIES = [
    { id: 'ALL', label: 'ALL CATEGORIES' },
    { id: 'MOON', label: '🌙 Moon' },
    { id: 'SUN', label: '☀️ Sun' },
    { id: 'PLANETS', label: '🪐 Planets' },
    { id: 'TELESCOPES', label: '🔭 Space Telescopes' },
    { id: 'OUTER_SOLAR', label: '🌌 Outer Solar System' },
    { id: 'HUMAN', label: '👨‍🚀 Human Spaceflight' },
    { id: 'EARTH', label: '🌍 Earth Observation' }
  ];

  return (
    <div id="mission-categories-bar" className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 dark:bg-[#02071a] bg-white/90 shadow-xl font-mono text-xs">
      
      {/* Top Bar: Label & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-3">
        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
          <Filter className="w-4 h-4 text-cyan-500" />
          <span>FILTER MISSION ATLAS ({totalCount} MISSIONS AVAILABLE)</span>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search missions, targets, rockets..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 text-xs font-mono"
          />
        </div>
      </div>

      {/* Filter Ribbon: Agencies */}
      <div className="space-y-2">
        <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold block">SPACE AGENCIES</span>
        <div className="flex flex-wrap gap-1.5">
          {AGENCIES.map((agency) => (
            <button
              key={agency.id}
              onClick={() => onAgencyChange(agency.id)}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedAgency === agency.id
                  ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-500/50 font-bold scale-105 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {agency.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Ribbon: Destinations / Categories */}
      <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/5">
        <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold block">MISSION DESTINATION / TYPE</span>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-500/50 font-bold scale-105 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
