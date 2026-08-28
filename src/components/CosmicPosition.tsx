import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_POSITIONS: Record<string, { section: string; parents: string[] }> = {
  '/':           { section: 'Home',              parents: ['Observable Universe'] },
  '/earth':      { section: 'Earth',             parents: ['Solar System', 'Milky Way', 'Observable Universe'] },
  '/solar-system': { section: 'Solar System',    parents: ['Milky Way', 'Observable Universe'] },
  '/planets':    { section: 'Planets',           parents: ['Solar System', 'Milky Way', 'Observable Universe'] },
  '/moons':      { section: 'Moons',             parents: ['Solar System', 'Milky Way', 'Observable Universe'] },
  '/stars':      { section: 'Stars',             parents: ['Milky Way', 'Observable Universe'] },
  '/galaxies':   { section: 'Galaxies',          parents: ['Local Group', 'Observable Universe'] },
  '/black-holes':{ section: 'Black Holes',       parents: ['Galaxies', 'Observable Universe'] },
  '/exoplanets': { section: 'Exoplanets',        parents: ['Stars', 'Milky Way', 'Observable Universe'] },
  '/nebulae':    { section: 'Nebulae',           parents: ['Milky Way', 'Observable Universe'] },
  '/missions':   { section: 'Space Missions',    parents: ['Earth', 'Solar System', 'Observable Universe'] },
  '/universe':   { section: 'Observable Universe', parents: ['Cosmic Web'] },
  '/timeline':   { section: 'Cosmic Timeline',  parents: ['Observable Universe'] },
  '/multiverse': { section: 'Multiverse',        parents: ['Theoretical Physics'] },
};

export const CosmicPosition: React.FC = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pos = ROUTE_POSITIONS[location.pathname] ?? ROUTE_POSITIONS['/'];

  if (!visible || location.pathname === '/') return null;

  return (
    <div
      className="fixed bottom-6 right-5 z-40 cosmic-position p-3 rounded-xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl transition-all duration-300"
      style={{ maxWidth: '190px' }}
    >
      <p className="text-[9px] text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-1 font-bold">You Are Here</p>
      <div className="space-y-0.5 font-mono">
        <p className="text-slate-900 dark:text-white font-bold text-xs">{pos.section}</p>
        {pos.parents.map((p, i) => (
          <div key={p} className="flex items-center gap-1">
            <span className="text-cyan-500 text-[10px]">↓</span>
            <span className={`text-[10px] ${i === pos.parents.length - 1 ? 'text-slate-600 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
