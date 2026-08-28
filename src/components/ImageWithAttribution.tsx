import React, { useState } from 'react';
import type { ImageSource } from '../data/sources';
import { ExternalLink, AlertTriangle } from 'lucide-react';

interface ImageWithAttributionProps {
  source: ImageSource;
  alt: string;
  className?: string;
  /** Show inline credit bar below the image */
  showCredit?: boolean;
  /** Compact mode for list cards */
  compact?: boolean;
}

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop';

export const ImageWithAttribution: React.FC<ImageWithAttributionProps> = ({
  source,
  alt,
  className = '',
  showCredit = true,
  compact = false,
}) => {
  const [imgSrc, setImgSrc] = useState(source.imageUrl);
  const [failed, setFailed] = useState(false);
  const [triedFallbacks, setTriedFallbacks] = useState(0);

  const fallbackChain = [
    source.thumbnailUrl,
    FALLBACK_IMG,
  ].filter(Boolean) as string[];

  const handleError = () => {
    if (triedFallbacks < fallbackChain.length) {
      setImgSrc(fallbackChain[triedFallbacks]);
      setTriedFallbacks((n) => n + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {failed ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-slate-900/60 text-slate-500">
          <AlertTriangle className="w-6 h-6" />
          <p className="text-xs font-mono">Image unavailable</p>
        </div>
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className="w-full h-full object-cover"
        />
      )}

      {showCredit && !failed && (
        <div className={`${compact ? 'px-2 py-1' : 'px-3 py-1.5'} bg-black/60 backdrop-blur-sm flex items-center justify-between gap-2`}>
          <span className="text-[9px] font-mono text-slate-400 truncate">
            Image: {source.credit}
          </span>
          <a
            href={source.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 text-[9px] font-mono text-cyan-400 hover:text-cyan-300 flex-shrink-0 transition-colors"
            title={`View original at ${source.sourceName}`}
          >
            {source.sourceName}
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      )}
    </div>
  );
};

// ─── INLINE SOURCE BADGE ──────────────────────────────────────────────────────

interface SourceBadgeProps {
  name: string;
  url: string;
  label?: string;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({ name, url, label }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-all"
    title={`Source: ${name}`}
  >
    {label ?? name}
    <ExternalLink className="w-2.5 h-2.5" />
  </a>
);

// ─── CONFIDENCE BADGE ─────────────────────────────────────────────────────────

type Confidence = 'Observed' | 'Measured' | 'Estimated' | 'Modelled' | 'Hypothesis' | 'Theory' | 'Unknown';

const CONFIDENCE_STYLES: Record<Confidence, string> = {
  Observed:   'badge-observed',
  Measured:   'badge-measured',
  Estimated:  'badge-estimated',
  Modelled:   'badge-estimated',
  Hypothesis: 'badge-hypothesis',
  Theory:     'badge-hypothesis',
  Unknown:    'badge-unknown',
};

export const ConfidenceBadge: React.FC<{ status: Confidence; className?: string }> = ({
  status,
  className = '',
}) => (
  <span className={`inline-flex items-center text-[9px] font-mono px-2 py-0.5 rounded-full ${CONFIDENCE_STYLES[status] ?? 'badge-unknown'} ${className}`}>
    {status}
  </span>
);

// ─── STAT ROW WITH SOURCE ─────────────────────────────────────────────────────

interface StatRowProps {
  label: string;
  value: string;
  unit?: string;
  sourceUrl?: string;
  sourceName?: string;
  confidence?: Confidence;
  className?: string;
}

export const StatRow: React.FC<StatRowProps> = ({
  label,
  value,
  unit,
  sourceUrl,
  sourceName,
  confidence,
  className = '',
}) => (
  <div className={`flex items-start justify-between py-2.5 border-b border-white/5 gap-4 ${className}`}>
    <div className="flex items-center gap-2 flex-wrap">
      <span className="hud-label uppercase tracking-wider">{label}</span>
      {confidence && <ConfidenceBadge status={confidence} />}
    </div>
    <div className="flex items-center gap-2 text-right">
      <div>
        <span className="hud-value">{value}</span>
        {unit && <span className="text-xs text-slate-500 ml-1">{unit}</span>}
      </div>
      {sourceUrl && sourceName && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-0.5 flex-shrink-0 transition-colors"
        >
          {sourceName}
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      )}
    </div>
  </div>
);

// ─── SOURCES FOOTER PANEL ─────────────────────────────────────────────────────

interface SourcesPanelProps {
  sources: { name: string; url: string; articleTitle?: string }[];
  primaryData?: string;
  imageCredit?: string;
  lastUpdated?: string;
}

export const SourcesPanel: React.FC<SourcesPanelProps> = ({
  sources,
  primaryData,
  imageCredit,
  lastUpdated,
}) => (
  <div className="glass-panel rounded-2xl p-5 space-y-4">
    <div className="flex items-center gap-2 border-b border-white/8 pb-3">
      <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
        Data & Sources
      </span>
    </div>
    <div className="space-y-2">
      {primaryData && (
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-500">Primary data</span>
          <span className="text-slate-300">{primaryData}</span>
        </div>
      )}
      {imageCredit && (
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-500">Image credit</span>
          <span className="text-slate-300 text-right">{imageCredit}</span>
        </div>
      )}
      {lastUpdated && (
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-500">Last verified</span>
          <span className="text-slate-300">{lastUpdated}</span>
        </div>
      )}
    </div>
    <div className="flex flex-wrap gap-2 pt-1">
      {sources.map((s) => (
        <SourceBadge key={s.url} name={s.name} url={s.url} label={s.articleTitle ? `${s.name} ↗` : s.name} />
      ))}
    </div>
  </div>
);
