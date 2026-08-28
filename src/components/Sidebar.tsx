import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Globe,
  CircleDot,
  Moon as MoonIcon,
  Sun,
  Disc,
  Flame,
  Rocket,
  Layers,
  Clock,
  HelpCircle,
  GitCompare
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Earth', path: '/earth', icon: Globe },
    { name: 'Solar System', path: '/solar-system', icon: CircleDot },
    { name: 'Planets', path: '/planets', icon: Disc },
    { name: 'Compare', path: '/planet-compare', icon: GitCompare },
    { name: 'Moons', path: '/moons', icon: MoonIcon },
    { name: 'Stars', path: '/stars', icon: Sun },
    { name: 'Galaxies', path: '/galaxies', icon: Disc },
    { name: 'Black Holes', path: '/black-holes', icon: Flame },
    { name: 'Space Missions', path: '/missions', icon: Rocket },
    { name: 'Timeline', path: '/timeline', icon: Clock },
    { name: 'Multiverse', path: '/multiverse', icon: Layers },
    { name: 'About', path: '/about', icon: HelpCircle }
  ];

  return (
    <>
      {/* Desktop Left Vertical Floating Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 fixed left-6 top-24 bottom-8 glass-panel rounded-2xl p-4 z-30 border border-slate-200 dark:border-white/10 overflow-y-auto">
        <div className="text-[11px] font-mono tracking-widest text-slate-600 dark:text-slate-400 uppercase px-3 py-2 font-bold">
          Cosmic Index
        </div>
        <nav className="flex-1 space-y-1 mt-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-500 dark:text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Small Bottom Status */}
        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 px-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
            <span>Status</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              Live Feed
            </span>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Floating Nav */}
      <nav className="lg:hidden fixed bottom-3 left-3 right-3 glass-panel rounded-2xl p-2 z-40 flex items-center justify-around border border-slate-200 dark:border-white/15 shadow-2xl">
        {menuItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-[10px] font-medium transition-all ${
                isActive ? 'text-cyan-700 dark:text-cyan-300 bg-cyan-500/20 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};
