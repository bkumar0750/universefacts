import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import type { ScientificSource } from '../types';

interface SourceBadgeProps {
  sources: ScientificSource[];
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
        Scientific Sources:
      </span>
      {sources.map((src, index) => (
        <a
          key={index}
          href={src.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
        >
          <span>Source {src.name}</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      ))}
    </div>
  );
};
