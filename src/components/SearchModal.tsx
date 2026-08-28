import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Search, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_DATA = [
  { group: 'Objects & Planets', items: [
    { name: 'Earth', sub: 'Our home planet — 12,742 km diameter', path: '/earth', source: 'NASA' },
    { name: 'Mars', sub: 'The Red Planet — 4th planet from the Sun', path: '/planets/mars', source: 'NASA/ESA' },
    { name: 'Jupiter', sub: 'King of planets — 95 moons & Great Red Spot', path: '/planets/jupiter', source: 'NASA' },
    { name: 'Kepler-452b', sub: 'Potentially habitable exoplanet in Cygnus', path: '/exoplanets', source: 'NASA Exoplanet Archive' },
    { name: 'The Moon', sub: "Earth's natural satellite & south pole missions", path: '/moons', source: 'ISRO/NASA' },
  ]},
  { group: 'Deep Space & Galaxies', items: [
    { name: 'Andromeda Galaxy (M31)', sub: 'Nearest spiral galaxy — 2.537 Mly away', path: '/galaxies', source: 'ESA/Hubble' },
    { name: 'Messier 87 (M87*)', sub: 'First ever imaged supermassive black hole', path: '/black-holes', source: 'EHT / ESO' },
    { name: 'Sagittarius A*', sub: 'Supermassive black hole at Milky Way center', path: '/black-holes', source: 'ESO/NASA' },
    { name: 'Orion Nebula (M42)', sub: 'Active stellar nursery — 1,344 ly', path: '/nebulae', source: 'NASA/Hubble' },
    { name: 'Pillars of Creation', sub: 'Star-forming columns in Eagle Nebula', path: '/nebulae', source: 'NASA/JWST' },
  ]},
  { group: 'Space Missions', items: [
    { name: 'Chandrayaan-3', sub: 'ISRO — Historic Moon South Pole Landing', path: '/missions', source: 'ISRO' },
    { name: 'Aditya-L1', sub: 'ISRO — India solar coronal observatory at Sun L1', path: '/missions', source: 'ISRO' },
    { name: 'James Webb Space Telescope (JWST)', sub: 'NASA/ESA — Infrared deep space observatory', path: '/missions', source: 'NASA/ESA' },
    { name: 'Mangalyaan (MOM)', sub: 'ISRO — Maiden Mars Orbiter Mission', path: '/missions', source: 'ISRO' },
    { name: 'Perseverance Rover', sub: 'NASA — Jezero Crater Mars exploration', path: '/missions', source: 'NASA' },
  ]},
  { group: 'Concepts & Theories', items: [
    { name: 'Black Holes', sub: 'Extreme spacetime curvature objects', path: '/black-holes', source: 'Scientific Consensus' },
    { name: 'Multiverse Theories', sub: 'Bubble, Quantum, Parallel cosmic hypotheses', path: '/multiverse', source: 'Theoretical Physics' },
    { name: 'Cosmic Timeline', sub: 'Big Bang (13.8 BYA) to Heat Death', path: '/timeline', source: 'Cosmology' },
  ]},
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = React.useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => { if (isOpen) { setQuery(''); setTimeout(() => inputRef.current?.focus(), 80); } }, [isOpen]);
  useEffect(() => { onClose(); }, [location.pathname]);

  const filtered = query.trim().length < 1
    ? SEARCH_DATA
    : SEARCH_DATA.map((g) => ({
        ...g,
        items: g.items.filter(
          (i) =>
            i.name.toLowerCase().includes(query.toLowerCase()) ||
            i.sub.toLowerCase().includes(query.toLowerCase())
        ),
      })).filter((g) => g.items.length > 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/70 dark:bg-[#020408]/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-xl glass-panel bg-white/95 dark:bg-[#07090f]/95 border border-slate-200 dark:border-white/10 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.4)] overflow-hidden">

        {/* Search Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 dark:border-white/10">
          <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search planets, galaxies, missions, concepts…"
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none font-sans"
          />
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {filtered.length === 0 && (
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 py-10 font-sans">No results for "{query}"</p>
          )}
          {filtered.map((group) => (
            <div key={group.group}>
              <p className="text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest px-2 mb-1 font-bold">{group.group}</p>
              {group.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 group transition-all"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">{item.name}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
          <p className="text-[10px] font-mono text-slate-600 dark:text-slate-400">
            Sourced from NASA, ISRO, ESA, and peer-reviewed science
          </p>
          <kbd className="text-[9px] font-mono text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 px-1.5 py-0.5 rounded">ESC</kbd>
        </div>
      </div>
    </div>
  );
};
