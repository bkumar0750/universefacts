import React, { useState } from 'react';
import { Sparkles, X, ExternalLink, RefreshCw } from 'lucide-react';
import { randomFacts } from '../data/randomFacts';
import type { CosmicRandomFact } from '../data/randomFacts';

interface RandomFactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RandomFactDrawer: React.FC<RandomFactDrawerProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const currentFact: CosmicRandomFact = randomFacts[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % randomFacts.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-lg glass-panel bg-white/95 dark:bg-[#07090f]/95 rounded-2xl border border-amber-500/30 p-6 shadow-2xl relative">
        
        {/* Glow accent */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-20 bg-amber-500/20 blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 border border-amber-500/40 text-amber-700 dark:text-amber-300 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Random Cosmic Fact • {currentFact.category}</span>
        </div>

        {/* Fact Body */}
        <blockquote className="text-lg sm:text-xl font-display font-medium text-slate-900 dark:text-slate-100 leading-relaxed mb-6">
          "{currentFact.fact}"
        </blockquote>

        {/* Source Citation */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>Verified Source:</span>
            <a
              href={currentFact.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 font-bold"
            >
              <span>{currentFact.source.name}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold transition-all shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Next Fact</span>
          </button>
        </div>

      </div>
    </div>
  );
};
