import React, { useState, useMemo } from 'react';
import { Sparkles, X, ExternalLink, ChevronLeft, ChevronRight, Copy, Check, Shuffle } from 'lucide-react';
import { randomFacts } from '../data/randomFacts';

interface RandomFactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RandomFactDrawer: React.FC<RandomFactDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(randomFacts.map((f) => f.category)));
    return ['All', ...cats.sort()];
  }, []);

  const filteredFacts = useMemo(() => {
    if (selectedCategory === 'All') return randomFacts;
    return randomFacts.filter((f) => f.category === selectedCategory);
  }, [selectedCategory]);

  if (!isOpen) return null;

  // Clamp current index if filtered array changes length
  const safeIndex = currentIndex % filteredFacts.length;
  const currentFact = filteredFacts[safeIndex] || filteredFacts[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredFacts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredFacts.length) % filteredFacts.length);
  };

  const handleRandomize = () => {
    const randomIndex = Math.floor(Math.random() * filteredFacts.length);
    setCurrentIndex(randomIndex);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  const handleCopy = () => {
    if (!currentFact) return;
    const textToCopy = `"${currentFact.fact}" — Source: ${currentFact.source.name} (${currentFact.source.url})`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-xl glass-panel bg-white/95 dark:bg-[#07090f]/95 rounded-2xl border border-amber-500/30 p-6 shadow-2xl relative space-y-5">
        
        {/* Glow accent */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-amber-500/20 blur-3xl pointer-events-none" />

        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Cosmic Knowledge Explorer
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {filteredFacts.length} Verified Universe Facts
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fact Card Container */}
        {currentFact && (
          <div className="glass-card rounded-xl p-5 border border-amber-500/20 bg-amber-500/5 relative space-y-4">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30">
                {currentFact.category}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                Fact {safeIndex + 1} of {filteredFacts.length}
              </span>
            </div>

            <blockquote className="text-lg sm:text-xl font-display font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
              "{currentFact.fact}"
            </blockquote>

            {/* Source & Copy row */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">Source:</span>
                <a
                  href={currentFact.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline font-bold flex items-center gap-1"
                >
                  <span>{currentFact.source.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Copy fact to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Action Controls Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
              title="Previous Fact"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
              title="Next Fact"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={handleRandomize}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-all shadow-md active:scale-95 text-xs font-mono"
          >
            <Shuffle className="w-4 h-4" />
            <span>Random Fact</span>
          </button>
        </div>

      </div>
    </div>
  );
};

