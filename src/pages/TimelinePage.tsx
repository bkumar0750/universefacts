import React, { useState } from 'react';
import { timelineData } from '../data/timelineData';
import { Clock } from 'lucide-react';
import { SourceBadge } from '../components/SourceBadge';

export const TimelinePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedEventId, setSelectedEventId] = useState<string>(timelineData[0].id);

  const categories = ['All', 'Cosmic', 'Stellar', 'Planetary', 'Biological', 'Human Spaceflight'];

  const filteredEvents = timelineData.filter((e) =>
    activeCategory === 'All' ? true : e.category === activeCategory
  );

  const selectedEvent = timelineData.find((e) => e.id === selectedEventId) || timelineData[0];

  return (
    <div className="space-y-12 pb-12">
      
      {/* Header */}
      <div className="space-y-4 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
          <Clock className="w-3.5 h-3.5" />
          <span>CHRONOLOGY OF THE COSMOS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          The Cosmic Timeline
        </h1>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Traverse 13.8 billion years of history—from the initial singularity of the Big Bang to stellar nucleosynthesis, Earth’s formation, abiogenesis, and humanity’s leap into space.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 animate-fade-in-up delay-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/50 shadow-md font-bold'
                : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat} {cat === 'All' ? `(${timelineData.length})` : ''}
          </button>
        ))}
      </div>

      {/* Interactive Timeline Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in-up delay-200">
        
        {/* Timeline Events Scroll List */}
        <div className="lg:col-span-5 space-y-3 max-h-[70vh] overflow-y-auto pr-2">
          {filteredEvents.map((evt) => {
            const isSelected = selectedEventId === evt.id;
            return (
              <button
                key={evt.id}
                onClick={() => setSelectedEventId(evt.id)}
                className={`w-full p-4 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'glass-panel bg-amber-500/15 border-amber-500/50 shadow-lg'
                    : 'glass-panel border-slate-200 dark:border-white/10 hover:border-amber-500/40'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-700 dark:text-amber-400 font-bold">{evt.timeAgo}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-semibold">{evt.category}</span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mt-1">
                  {evt.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Event Detail View */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-5 sticky top-24 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                {selectedEvent.category} • Status: {selectedEvent.status}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">{selectedEvent.timeAgo}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              {selectedEvent.title}
            </h2>

            <p className="text-sm text-slate-700 dark:text-slate-200 font-sans leading-relaxed">
              {selectedEvent.description}
            </p>

            <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/60 space-y-1">
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">Cosmic Significance</span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">{selectedEvent.significance}</p>
            </div>

            <SourceBadge sources={selectedEvent.sources} />
          </div>
        </div>

      </div>

    </div>
  );
};
