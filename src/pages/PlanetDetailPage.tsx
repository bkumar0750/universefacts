import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { planetsData } from '../data/planetsData';
import { SourceBadge, ConfidenceBadge } from '../components/ImageWithAttribution';
import { NASA3DViewer } from '../components/NASA3DViewer';
import { useCosmosObject } from '../lib/api/cosmos';
import { ArrowLeft, Globe, ShieldCheck, Camera, ExternalLink } from 'lucide-react';

export const PlanetDetailPage: React.FC = () => {
  const { planetId } = useParams<{ planetId: string }>();
  const navigate = useNavigate();

  const id = planetId || 'earth';
  const planet = planetsData.find((p) => p.id.toLowerCase() === id.toLowerCase());
  const { data: cosmosData } = useCosmosObject('planet', id);

  if (!planet) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Object Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">We couldn't retrieve this cosmic object right now.</p>
        <button
          onClick={() => navigate('/planets')}
          className="px-6 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs"
        >
          Return to Planets
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-12">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Solar System</span>
      </button>

      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-8 min-h-[340px] flex flex-col justify-end">
        <img
          src={planet.heroImage || planet.image}
          alt={planet.name}
          className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/70 to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
                {planet.type} • SOLAR SYSTEM
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Data verified: {planet.lastUpdated || '27 Aug 2026'}
              </span>
            </div>
            <div className="flex gap-2">
              {planet.sources.map((s) => (
                <SourceBadge key={s.url} name={s.name} url={s.url} />
              ))}
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white">
            {planet.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-3xl leading-relaxed">
            {planet.subtitle}
          </p>
        </div>
      </div>

      {/* Official NASA 3D Interactive Model Embed */}
      <NASA3DViewer planetId={id} title={planet.name} />

      {/* OVERVIEW SUMMARY */}
      <section className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-cyan-500" />
          <span>Overview & Key Characteristics</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
          {planet.summary}
        </p>
      </section>

      {/* PHYSICAL & ORBITAL DYNAMICS WITH CONFIDENCE BADGES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Physical Properties */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">Physical Properties</h3>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Source: NASA JPL SBDB</span>
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">Mean Diameter</span>
                <ConfidenceBadge status="Measured" />
              </div>
              <strong className="text-slate-900 dark:text-white text-sm">{planet.physical.diameter}</strong>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">Mass</span>
                <ConfidenceBadge status="Measured" />
              </div>
              <strong className="text-cyan-700 dark:text-cyan-300 text-sm">{planet.physical.mass}</strong>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">Surface Gravity</span>
                <ConfidenceBadge status="Measured" />
              </div>
              <strong className="text-emerald-700 dark:text-emerald-300 text-sm">{planet.physical.gravity}</strong>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">Average Temperature</span>
                <ConfidenceBadge status="Observed" />
              </div>
              <strong className="text-amber-700 dark:text-amber-300 text-sm">{planet.physical.averageTemp}</strong>
            </div>

            {planet.physical.escapeVelocity && (
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400">Escape Velocity</span>
                  <ConfidenceBadge status="Measured" />
                </div>
                <strong className="text-purple-700 dark:text-purple-300 text-sm">{planet.physical.escapeVelocity}</strong>
              </div>
            )}
          </div>
        </div>

        {/* Orbit & Rotation */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">Orbit & Rotation Dynamics</h3>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Source: NASA Solar System</span>
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">Distance from Sun</span>
                <ConfidenceBadge status="Measured" />
              </div>
              <strong className="text-slate-900 dark:text-white text-sm">{planet.orbit.distanceFromSun}</strong>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">Orbital Period</span>
                <ConfidenceBadge status="Measured" />
              </div>
              <strong className="text-cyan-700 dark:text-cyan-300 text-sm">{planet.orbit.orbitalPeriod}</strong>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">Length of Day</span>
                <ConfidenceBadge status="Measured" />
              </div>
              <strong className="text-emerald-700 dark:text-emerald-300 text-sm">{planet.orbit.dayLength}</strong>
            </div>

            {planet.orbit.axialTilt && (
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400">Axial Tilt</span>
                  <ConfidenceBadge status="Measured" />
                </div>
                <strong className="text-amber-700 dark:text-amber-300 text-sm">{planet.orbit.axialTilt}</strong>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* LIVE NASA IMAGE GALLERY */}
      {cosmosData && cosmosData.nasaLibraryImages.length > 0 && (
        <section className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-cyan-500" />
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                Official NASA Spacecraft Imagery ({planet.name})
              </h3>
            </div>
            <a
              href={`https://images.nasa.gov/search-results?q=${encodeURIComponent(planet.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              NASA Image Library ↗
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cosmosData.nasaLibraryImages.map((img) => (
              <div key={img.id} className="glass-card rounded-xl overflow-hidden flex flex-col group border border-white/8">
                <div className="aspect-video relative overflow-hidden bg-slate-950">
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                    <p className="text-[11px] text-slate-200 line-clamp-2">{img.description}</p>
                  </div>
                </div>

                <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
                  <h4 className="font-display font-semibold text-xs text-slate-900 dark:text-white line-clamp-1">{img.title}</h4>
                  
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-white/6">
                    <span>Credit: {img.sourceName}</span>
                    <a
                      href={img.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-0.5"
                    >
                      View Original <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ATMOSPHERE & GEOLOGY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">Atmospheric Composition</h3>
          <p className="text-xs text-slate-700 dark:text-slate-300 font-sans">{planet.atmosphere.description}</p>
          <div className="space-y-1.5 pt-2">
            {planet.atmosphere.composition.map((gas, i) => (
              <div key={i} className="text-xs font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                {gas}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">Surface Geology & Features</h3>
          <p className="text-xs text-slate-700 dark:text-slate-300 font-sans">{planet.surface.geology}</p>
          <div className="space-y-1.5 pt-2">
            {planet.surface.features.map((feat, i) => (
              <div key={i} className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20">
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED SCIENTIFIC FACTS */}
      <section className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-cyan-500" />
          <span>Scientifically Verified Facts ({planet.verifiedFacts.length})</span>
        </h2>

        <div className="space-y-3">
          {planet.verifiedFacts.map((vf, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl border border-white/10 flex items-start justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-sans">
                "{vf.fact}"
              </p>
              <a
                href={vf.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline whitespace-nowrap"
              >
                Source: {vf.source.name} ↗
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
