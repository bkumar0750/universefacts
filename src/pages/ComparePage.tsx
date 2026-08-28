import React from 'react';
import { PlanetCompareTool } from '../components/PlanetCompareTool';
import { GitCompare } from 'lucide-react';

export const ComparePage: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
          <GitCompare className="w-3.5 h-3.5" />
          <span>ASTRODYNAMICS ANALYZER</span>
        </div>
        <h1 className="text-4xl font-display font-extrabold text-white">
          Compare Celestial Bodies
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl">
          Side-by-side comparison of planets and dwarf worlds across physical mass, surface gravity, surface temperatures, and day/year orbital lengths.
        </p>
      </div>

      <PlanetCompareTool />
    </div>
  );
};
