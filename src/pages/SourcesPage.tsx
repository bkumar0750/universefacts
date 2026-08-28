import React, { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { ALL_SOURCES } from '../data/sources';
import type { SourceCategory } from '../data/sources';

const CATEGORIES: SourceCategory[] = [
  'Space Agency',
  'Astronomy Database',
  'Earth Data',
  'Observatory',
  'Scientific Authority',
];

export const SourcesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SourceCategory | 'All'>('All');
  const [query, setQuery] = useState('');

  const filtered = ALL_SOURCES.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const matchQ = !query || s.name.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="space-y-10">

      {/* Header */}
      <div className="space-y-4">
        <div className="eyebrow">Scientific Transparency</div>
        <h1 className="section-title text-4xl">Data & Source Directory</h1>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          Every fact on UniverseFact is sourced from authoritative scientific institutions. Below is a complete directory of all data sources, image providers, and databases we reference.
        </p>
        <div className="scientific-disclaimer max-w-2xl">
          <p className="text-xs text-amber-300/90 font-sans leading-relaxed">
            <strong className="text-amber-200">Attribution Notice:</strong> All images are used in accordance with each agency's media usage guidelines. NASA images are generally public domain. ESA/Hubble images may require credit attribution. ISRO images are subject to ISRO's copyright policy. Always click "View Source" to verify the original license before reuse.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sources…"
            className="w-full glass-button rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 outline-none focus:border-cyan-500/40"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {(['All', ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`ctrl-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Source Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((source) => (
          <div key={source.id} className="glass-card rounded-2xl p-5 space-y-4 flex flex-col">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-xl flex-shrink-0">
                {source.logoEmoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 flex-wrap">
                  <h3 className="font-display font-bold text-base text-white">{source.shortName}</h3>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-slate-500/25 bg-slate-500/10 text-slate-400">
                    {source.category}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-mono truncate">{source.name}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed flex-1">{source.description}</p>

            <div className="space-y-2">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Used for</p>
              <p className="text-xs text-slate-300 leading-relaxed">{source.whatWeUseItFor}</p>
            </div>

            <div className="space-y-1.5">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Data types</p>
              <div className="flex flex-wrap gap-1.5">
                {source.dataTypes.map((dt) => (
                  <span key={dt} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/8 border border-cyan-500/20 text-cyan-400">
                    {dt}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={source.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl glass-button text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-all group"
            >
              <span>Visit Official Website</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        ))}
      </div>

      {/* Attribution Standards */}
      <div className="glass-panel rounded-2xl p-6 space-y-4">
        <h2 className="section-title text-xl">Our Attribution Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Images</div>
            <p className="text-slate-400 text-xs leading-relaxed">Every image is sourced from official agencies (NASA, ISRO, ESA, JPL). Credit lines and original source URLs are stored and displayed. We never use images without knowing their license.</p>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Facts & Data</div>
            <p className="text-slate-400 text-xs leading-relaxed">Every scientific statistic is linked to its authoritative source. Confidence levels (Observed, Measured, Estimated, Model-based, Hypothesis) are clearly labeled throughout the site.</p>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Speculative Content</div>
            <p className="text-slate-400 text-xs leading-relaxed">Multiverse theories, hypothetical concepts, and scientific estimates are clearly distinguished from observational facts. We never present speculation as confirmed reality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
