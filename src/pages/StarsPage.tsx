import React, { useState } from 'react';
import { starsData } from '../data/starsData';
import { Sun, Clock } from 'lucide-react';
import { SourceBadge } from '../components/SourceBadge';

export const StarsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(0);

  const starTypes = ['All', 'Yellow Star', 'Red Dwarf', 'Supergiant', 'Blue Giant'];

  const filteredStars = starsData.filter((s) =>
    selectedCategory === 'All' ? true : s.type === selectedCategory
  );

  const stellarEvolutionSteps = [
    { title: '1. Stellar Nursery / Protostar Nebula', desc: 'Gravitational collapse of interstellar giant molecular hydrogen cloud creates a hot dense protostellar core.' },
    { title: '2. Main Sequence Fusion', desc: 'Core hydrogen fuses into helium via proton-proton chain or CNO cycle at temperatures above 10 million Kelvin.' },
    { title: '3. Red Giant / Supergiant Phase', desc: 'Core hydrogen depletes. Star expands outward while helium burns into carbon and oxygen in outer shells.' },
    { title: '4. Supernova Explosion or Planetary Nebula', desc: 'High-mass stars undergo core collapse supernova; lower mass Sun-like stars shed outer envelopes into planetary nebulae.' },
    { title: '5. Stellar Remnant', desc: 'Core shrinks into a superdense White Dwarf, Neutron Star, or Black Hole.' }
  ];

  return (
    <div className="space-y-12 pb-12">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
          <Sun className="w-3.5 h-3.5" />
          <span>STELLAR ASTROPHYSICS & EVOLUTION</span>
        </div>
        <h1 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          Stars & Stellar Evolution
        </h1>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          From tiny long-lived M-dwarf stars burning hydrogen for trillions of years, to colossal red supergiants exploding in catastrophic supernovae to seed cosmic dust with gold and carbon.
        </p>
      </div>

      {/* INTERACTIVE LIFE OF A STAR TIMELINE */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <span>Interactive Life Cycle of a Star</span>
        </h2>

        {/* Steps buttons */}
        <div className="flex flex-wrap gap-2">
          {stellarEvolutionSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTimelineStep(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTimelineStep === idx
                  ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/50 shadow-md font-bold'
                  : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {step.title.split(' ')[0]} {step.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Selected Step Description */}
        <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-slate-900/90 space-y-2">
          <h3 className="text-lg font-display font-bold text-amber-700 dark:text-amber-300">
            {stellarEvolutionSteps[activeTimelineStep].title}
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-200 font-sans leading-relaxed">
            {stellarEvolutionSteps[activeTimelineStep].desc}
          </p>
        </div>
      </section>

      {/* Star Type Filters */}
      <div className="flex flex-wrap gap-2">
        {starTypes.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/50 shadow-md font-bold'
                : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat} {cat === 'All' ? `(${starsData.length})` : ''}
          </button>
        ))}
      </div>

      {/* Featured Stars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStars.map((star) => (
          <div
            key={star.id}
            className="glass-panel rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col justify-between"
          >
            {star.image && (
              <div className="h-44 w-full relative overflow-hidden">
                <img
                  src={star.image}
                  alt={star.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-xs font-mono text-amber-300 font-bold bg-slate-950/80 px-2.5 py-1 rounded-full border border-amber-500/40 backdrop-blur-md">
                    {star.type}
                  </span>
                  <span className="text-xs font-mono text-white/90 bg-slate-950/80 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md">{star.distanceFromEarth}</span>
                </div>
              </div>
            )}

            <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{star.name}</h3>
                <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">Constellation: {star.constellation}</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-sans mt-2 leading-relaxed">
                  {star.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-3 border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
                <div>Mass: <strong className="text-slate-900 dark:text-white">{star.mass}</strong></div>
                <div>Temp: <strong className="text-amber-700 dark:text-amber-300">{star.temperature}</strong></div>
              </div>

              <SourceBadge sources={star.sources} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
