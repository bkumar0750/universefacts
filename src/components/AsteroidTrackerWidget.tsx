import React, { useState, useEffect } from 'react';
import { fetchNEOs } from '../lib/nasaApi';
import type { NEO } from '../lib/nasaApi';
import { AlertTriangle, ShieldAlert, Orbit } from 'lucide-react';

export const AsteroidTrackerWidget: React.FC = () => {
  const [asteroids, setAsteroids] = useState<NEO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    const today = new Date().toISOString().split('T')[0];

    fetchNEOs(today, today)
      .then((res) => {
        if (mounted) {
          const list = Object.values(res.near_earth_objects).flat();
          setAsteroids(list.slice(0, 6));
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn('NASA NeoWs live fetch failed, fallback mode:', err);
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
      <div className="glass-panel rounded-3xl p-6 animate-pulse space-y-4">
        <div className="h-4 w-40 bg-cyan-500/20 rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-28 bg-slate-800/40 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (error || asteroids.length === 0) {
    return (
      <div className="glass-panel rounded-3xl p-5 text-center space-y-2">
        <AlertTriangle className="w-5 h-5 text-amber-400 mx-auto" />
        <p className="text-xs font-mono text-slate-400">JPL NeoWs live asteroid data temporarily offline</p>
        <p className="text-[10px] font-mono text-slate-500">Last verified: 27 Aug 2026</p>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
            <Orbit className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-widest">
              Live Near-Earth Asteroid Monitor
            </h3>
            <p className="text-[10px] font-mono text-slate-600 dark:text-slate-400">NASA JPL Small-Body Database Stream</p>
          </div>
        </div>

        <a
          href="https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-semibold"
        >
          JPL SBDB Lookup ↗
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {asteroids.map((ast) => {
          const closeData = ast.close_approach_data[0];
          const minDiam = ast.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2);
          const maxDiam = ast.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2);
          const missDist = closeData ? Math.round(parseFloat(closeData.miss_distance.kilometers)).toLocaleString() : 'N/A';
          const vel = closeData ? parseFloat(closeData.relative_velocity.kilometers_per_second).toFixed(1) : 'N/A';

          return (
            <div
              key={ast.id}
              className={`glass-card rounded-2xl p-4 space-y-3 relative border ${
                ast.is_potentially_hazardous_asteroid
                  ? 'border-amber-500/30 bg-amber-500/5'
                  : 'border-slate-200 dark:border-white/10'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">{ast.name}</h4>
                  <p className="text-[10px] font-mono text-slate-600 dark:text-slate-400">ID: {ast.id}</p>
                </div>
                {ast.is_potentially_hazardous_asteroid ? (
                  <span className="flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40 font-bold">
                    <ShieldAlert className="w-2.5 h-2.5" /> Hazardous
                  </span>
                ) : (
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                    Safe Pass
                  </span>
                )}
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Est. Diameter</span>
                  <span className="text-slate-900 dark:text-slate-200 font-semibold">{minDiam} - {maxDiam} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Relative Speed</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">{vel} km/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Miss Distance</span>
                  <span className="text-slate-800 dark:text-slate-300 font-semibold">{missDist} km</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[9px] font-mono text-slate-600 dark:text-slate-400">
                <span>Approach: {closeData?.close_approach_date || 'Today'}</span>
                <a
                  href={`https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${encodeURIComponent(ast.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-0.5 font-bold"
                >
                  JPL ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
