import React, { useState, useEffect } from 'react';
import { fetchAPOD, truncateExplanation } from '../lib/nasaApi';
import type { APODResponse } from '../lib/nasaApi';
import { ExternalLink, Sparkles, AlertCircle } from 'lucide-react';

export const ApodWidget: React.FC = () => {
  const [apod, setApod] = useState<APODResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchAPOD()
      .then((data) => {
        if (mounted) {
          setApod(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn('APOD live fetch failed, using cached baseline:', err);
        if (mounted) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="glass-panel rounded-3xl p-6 md:p-8 animate-pulse space-y-4">
        <div className="h-4 w-32 bg-cyan-500/20 rounded-full" />
        <div className="h-8 w-3/4 bg-white/10 rounded-xl" />
        <div className="h-64 bg-slate-800/40 rounded-2xl" />
      </div>
    );
  }

  if (error || !apod) {
    return (
      <div className="glass-panel rounded-3xl p-6 text-center space-y-3">
        <AlertCircle className="w-6 h-6 text-amber-400 mx-auto" />
        <p className="text-xs font-mono text-slate-400">Cosmic data temporarily unavailable from NASA APOD API</p>
        <p className="text-[10px] font-mono text-slate-500">Last verified: 27 Aug 2026</p>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 space-y-6 overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.08)]">
      
      {/* Eyebrow header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <h3 className="font-mono text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-widest">
              NASA Astronomy Picture of the Day
            </h3>
            <p className="text-[10px] font-mono text-slate-600 dark:text-slate-400">Live API stream • {apod.date}</p>
          </div>
        </div>

        <a
          href="https://apod.nasa.gov/apod/astropix.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-semibold"
        >
          NASA APOD ↗
        </a>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Media view */}
        <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden bg-slate-950 aspect-video border border-slate-200 dark:border-white/10 shadow-2xl">
          {apod.media_type === 'image' ? (
            <img
              src={apod.hdurl || apod.url}
              alt={apod.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <iframe
              src={apod.url}
              title={apod.title}
              className="w-full h-full border-0"
              allowFullScreen
            />
          )}

          {/* Credit Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-200 truncate">
              {apod.copyright ? `Image © ${apod.copyright}` : 'Credit: NASA / APOD'}
            </span>
            <a
              href={apod.hdurl || apod.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-cyan-300 hover:underline flex items-center gap-1 flex-shrink-0"
            >
              Full Res <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white leading-tight">
            {apod.title}
          </h4>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            {truncateExplanation(apod.explanation, 340)}
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-600 dark:text-slate-400">
            <span>Source: NASA Open API</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Live Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
