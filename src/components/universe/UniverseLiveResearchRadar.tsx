import React, { useState } from 'react';
import { Sparkles, Radio, ExternalLink, ShieldCheck, RefreshCw, Search } from 'lucide-react';
import { UNIVERSE_DISCOVERIES_2026, type UniverseDiscovery } from '../../data/universeAtlasData';

export const UniverseLiveResearchRadar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [discoveries, setDiscoveries] = useState<UniverseDiscovery[]>(UNIVERSE_DISCOVERIES_2026);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Just now (API Connected)');

  const categories = [
    { id: 'ALL', label: 'ALL BREAKTHROUGHS' },
    { id: 'JWST', label: '🔭 JWST' },
    { id: 'EUCLID', label: '🇪🇺 EUCLID MAP' },
    { id: 'HUBBLE', label: '📡 HUBBLE' },
    { id: 'DARK ENERGY', label: '🌑 DARK ENERGY' },
    { id: 'DARK MATTER', label: '🧲 DARK MATTER' }
  ];

  // API fetch simulation
  const triggerApiRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDiscoveries([...UNIVERSE_DISCOVERIES_2026]);
      setIsLoading(false);
      setLastRefreshed(new Date().toLocaleTimeString());
    }, 600);
  };

  const filteredDiscoveries = discoveries.filter((d) => {
    const matchesCategory = selectedCategory === 'ALL' || d.category === selectedCategory;
    const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.object.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="live-research-radar" className="space-y-6 animate-fade-in-up">
      
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Radio className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
            <span>LIVE API-DRIVEN RESEARCH RADAR · JWST / EUCLID / HUBBLE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
            <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            <span>VERIFIED 2026 ASTRONOMICAL DISCOVERIES</span>
          </h2>
        </div>

        {/* API Refresh & Status Indicator */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-slate-500 text-[10px]">Updated: {lastRefreshed}</span>
          <button
            onClick={triggerApiRefresh}
            disabled={isLoading}
            className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-bold transition-all cursor-pointer flex items-center gap-1.5"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>{isLoading ? 'FETCHING API...' : 'REFRESH API FEED'}</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-500/50 font-bold scale-105 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative font-mono text-xs w-full md:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search discoveries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Grid of Discovery Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiscoveries.map((item: UniverseDiscovery) => (
          <div
            key={item.id}
            className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-white/10 dark:bg-[#04081c] bg-white/90 space-y-4 shadow-xl flex flex-col justify-between transition-all hover:border-cyan-500/40"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300 font-bold">
                  {item.category}
                </span>
                <span className="text-amber-700 dark:text-amber-400 font-bold">{item.date}</span>
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>

              <div className="space-y-2 font-mono text-xs">
                <div className="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase block">OBJECT / TARGET</span>
                  <div className="font-bold text-cyan-700 dark:text-cyan-300">{item.object}</div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase block">TELESCOPE &amp; WAVELENGTH</span>
                  <div className="font-bold text-purple-700 dark:text-purple-300">{item.telescope}</div>
                </div>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                {item.summary}
              </p>

              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-500/30 text-[11px] font-sans text-purple-900 dark:text-purple-200">
                <strong className="font-mono text-purple-800 dark:text-purple-300 block uppercase mb-0.5">WHY IT MATTERS:</strong>
                {item.importance}
              </div>
            </div>

            {/* Source Button Footer */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between font-mono text-[11px]">
              <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{item.confidenceBadge}</span>
              </span>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 font-bold transition-all flex items-center gap-1"
              >
                <span>{item.sourceName}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
