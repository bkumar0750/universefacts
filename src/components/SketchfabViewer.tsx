import React, { useState, useRef } from 'react';
import { Box, Maximize2, ExternalLink, Orbit, RotateCcw } from 'lucide-react';

interface SketchfabViewerProps {
  /** Sketchfab model ID (the hash from the URL) */
  modelId: string;
  title: string;
  description?: string;
  credit?: string;
  height?: string;
  className?: string;
  /** Show attribution link */
  showAttribution?: boolean;
  /** Auto-start the model animation */
  autostart?: boolean;
}

/**
 * Embed a Sketchfab 3D model via their official iframe API.
 * Sketchfab embed URL format:
 *   https://sketchfab.com/models/{modelId}/embed?autostart=1&ui_controls=1&ui_infos=0&ui_watermark=0
 */
export const SketchfabViewer: React.FC<SketchfabViewerProps> = ({
  modelId,
  title,
  description,
  credit,
  height = 'h-[480px] sm:h-[560px]',
  className = '',
  showAttribution = true,
  autostart = true,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const embedUrl = `https://sketchfab.com/models/${modelId}/embed?autostart=${autostart ? 1 : 0}&ui_controls=1&ui_infos=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=1&ui_annotations=0&preload=1`;
  const modelUrl = `https://sketchfab.com/3d-models/${modelId}`;

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className={`glass-panel rounded-3xl overflow-hidden border border-cyan-500/20 dark:border-cyan-500/20 border-slate-200 shadow-2xl ${className}`}>
      
      {/* Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-white/8 bg-white/50 dark:bg-slate-900/50">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Animated 3D indicator */}
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/15 dark:bg-cyan-500/15 border border-cyan-500/30 shrink-0">
            <Box className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-slate-900 animate-pulse" />
          </div>
          <div className="min-w-0">
            <h4 className="font-mono text-xs font-bold text-slate-700 dark:text-cyan-300 uppercase tracking-wider truncate">
              {title}
            </h4>
            {description && (
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-500 truncate">{description}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-3">
          {/* 3D badge */}
          <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            INTERACTIVE 3D
          </span>

          {/* Fullscreen */}
          <button
            onClick={handleFullscreen}
            className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            title="Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          {/* Open on Sketchfab */}
          <a
            href={modelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            title="Open on Sketchfab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 3D Viewer */}
      <div className={`relative w-full ${height} bg-slate-950`}>
        
        {/* Loading Overlay */}
        {!loaded && !hasError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-slate-950">
            {/* Animated rings */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-spin-slower" />
              <div className="absolute inset-2 rounded-full border-2 border-cyan-500/40 animate-spin-slow" style={{animationDirection:'reverse'}} />
              <div className="absolute inset-4 rounded-full border-2 border-cyan-400/60 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Orbit className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div className="text-center space-y-1">
              <p className="text-xs font-mono font-bold text-cyan-300">Loading 3D Model</p>
              <p className="text-[10px] font-mono text-slate-500">Initializing Sketchfab Viewer…</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-950 text-center px-8">
            <RotateCcw className="w-8 h-8 text-slate-600" />
            <p className="text-sm font-mono text-slate-400">Failed to load 3D model.</p>
            <a
              href={modelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline"
            >
              Open on Sketchfab ↗
            </a>
          </div>
        )}

        {/* Sketchfab iframe */}
        <iframe
          ref={iframeRef}
          title={`3D Model: ${title}`}
          src={embedUrl}
          className="w-full h-full border-0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
        />
      </div>

      {/* Footer Attribution */}
      {showAttribution && (
        <div className="flex items-center justify-between px-5 py-2.5 border-t border-slate-200 dark:border-white/8 bg-white/30 dark:bg-slate-900/30 text-[10px] font-mono">
          <span className="text-slate-500 dark:text-slate-500 flex items-center gap-1.5">
            <RotateCcw className="w-3 h-3" />
            Drag to rotate · Scroll to zoom · Right-drag to pan
          </span>
          <a
            href={modelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold"
          >
            {credit ? `© ${credit}` : 'View on Sketchfab'}
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      )}
    </div>
  );
};
