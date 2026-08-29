import React, { useState } from 'react';
import { Database, ExternalLink, ShieldCheck, RefreshCw } from 'lucide-react';
import { getLatestGalaxiesDiscoveries } from '../../data/galaxies2026DiscoveriesData';

export const GalaxyApiDiscoverySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeEndpoint, setActiveEndpoint] = useState<string>('/api/galaxies/latest');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const discoveries = getLatestGalaxiesDiscoveries(activeCategory);

  const handleEndpointClick = (endpoint: string, category: string) => {
    setActiveEndpoint(endpoint);
    setActiveCategory(category);
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 300);
  };

  return (
    <section id="galaxy-api-discoveries" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 dark:bg-[#020516] bg-white/90 space-y-6 animate-fade-in-up transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            DYNAMIC DISCOVERY ENGINE · LIVE API SYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
            <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            <span>DYNAMIC 2026 GALAXY DISCOVERY FEED</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-mono text-cyan-700 dark:text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>SELF-UPDATING DISCOVERY ENGINE</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
        The UniverseFacts platform automatically pulls verified NASA &amp; ESA astrophysical releases in real-time. Select an API endpoint channel below to filter current research data.
      </p>

      {/* Endpoint Selector Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleEndpointClick('/api/galaxies/latest', 'ALL')}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
            activeEndpoint === '/api/galaxies/latest'
              ? 'bg-cyan-500/25 text-cyan-900 dark:text-cyan-200 border border-cyan-400 font-bold shadow-md'
              : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          GET /api/galaxies/latest
        </button>

        <button
          onClick={() => handleEndpointClick('/api/galaxies/black-holes', 'BLACK HOLE')}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
            activeEndpoint === '/api/galaxies/black-holes'
              ? 'bg-purple-500/25 text-purple-900 dark:text-purple-200 border border-purple-400 font-bold shadow-md'
              : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          GET /api/galaxies/black-holes
        </button>

        <button
          onClick={() => handleEndpointClick('/api/galaxies/dark-matter', 'DARK MATTER')}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
            activeEndpoint === '/api/galaxies/dark-matter'
              ? 'bg-indigo-500/25 text-indigo-900 dark:text-indigo-200 border border-indigo-400 font-bold shadow-md'
              : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          GET /api/galaxies/dark-matter
        </button>

        <button
          onClick={() => handleEndpointClick('/api/galaxies/jwst', 'EARLY UNIVERSE')}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
            activeEndpoint === '/api/galaxies/jwst'
              ? 'bg-amber-500/25 text-amber-900 dark:text-amber-200 border border-amber-400 font-bold shadow-md'
              : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          GET /api/galaxies/jwst
        </button>
      </div>

      {/* Response Header Telemetry */}
      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-cyan-300 dark:border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <RefreshCw className={`w-4 h-4 text-cyan-600 dark:text-cyan-400 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span className="text-cyan-800 dark:text-cyan-300 font-bold">ACTIVE ENDPOINT: {activeEndpoint}</span>
        </div>
        <div className="text-slate-600 dark:text-slate-400 text-[11px]">
          Returned Records: <strong className="text-slate-900 dark:text-white">{discoveries.length} entries</strong>
        </div>
      </div>

      {/* API JSON Records Render List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {discoveries.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all space-y-2 font-mono text-xs"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
                {item.category}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">{item.date}</span>
            </div>

            <h4 className="font-bold text-slate-900 dark:text-white text-sm font-display">{item.title}</h4>

            <p className="text-slate-700 dark:text-slate-300 font-sans text-xs">{item.summary}</p>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/5">
              <span>Observed: <strong className="text-cyan-700 dark:text-cyan-300">{item.telescope}</strong></span>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1 font-bold"
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
