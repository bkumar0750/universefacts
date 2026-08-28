import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Sparkles, Menu, X, Orbit, Sun, Moon, Globe, Compass, Rocket, Clock, Info, Stars } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenRandomFact: () => void;
}

const NAV_ITEMS = [
  { name: 'Explore',      path: '/',             icon: Compass },
  { name: 'Earth',        path: '/earth',        icon: Globe },
  { name: 'Solar System', path: '/solar-system', icon: Orbit },
  { name: 'Galaxy',       path: '/galaxies',     icon: Stars },
  { name: 'Universe',     path: '/universe',     icon: Sparkles },
  { name: 'Missions',     path: '/missions',     icon: Rocket },
  { name: 'Timeline',     path: '/timeline',     icon: Clock },
  { name: 'About',        path: '/about',        icon: Info },
];

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenRandomFact }) => {
  const location = useLocation();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onOpenSearch]);

  return (
    <>
      {/* Fixed Sticky Header Wrapper */}
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pb-1 transition-all duration-300 pointer-events-none">
        
        {/* Floating Glass Island Navbar */}
        <div
          className={`max-w-7xl mx-auto rounded-2xl pointer-events-auto transition-all duration-300 border ${
            scrolled
              ? 'bg-white/85 dark:bg-[#030712]/85 backdrop-blur-2xl border-slate-200 dark:border-cyan-500/20 shadow-2xl shadow-cyan-950/20 py-2.5 px-4 sm:px-6'
              : 'bg-white/70 dark:bg-[#040817]/70 backdrop-blur-xl border-slate-200/80 dark:border-white/10 py-3 px-4 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between gap-3 sm:gap-6">

            {/* 🚀 Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="relative w-9 h-9 rounded-xl p-px transition-transform group-hover:scale-105" style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1, #a855f7)' }}>
                <div className="w-full h-full rounded-[11px] bg-slate-900 dark:bg-[#020408] flex items-center justify-center shadow-inner">
                  <Orbit className="w-4 h-4 text-cyan-400 animate-orbit-slow" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight leading-none">
                  universe<span className="text-cyan-600 dark:text-cyan-400">fact</span>
                </span>
                <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden sm:inline-block">Cosmic Intelligence</span>
              </div>
            </Link>

            {/* 🌐 Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200/60 dark:border-white/5">
              {NAV_ITEMS.map((item) => {
                const active = location.pathname === item.path;
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all relative ${
                      active
                        ? 'text-cyan-800 dark:text-cyan-300 bg-white dark:bg-cyan-500/15 border border-slate-200 dark:border-cyan-500/30 shadow-sm font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${active ? 'text-cyan-600 dark:text-cyan-400' : 'opacity-70'}`} />
                    <span>{item.name}</span>
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 rounded-full bg-cyan-500 shadow-sm shadow-cyan-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 🔍 Search Bar Command Input Button */}
            <button
              onClick={onOpenSearch}
              className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 transition-all w-48 lg:w-56 shadow-inner group"
            >
              <Search className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="flex-1 text-left font-sans text-xs">Search cosmos...</span>
              <kbd className="text-[10px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 px-1.5 py-0.5 rounded font-bold text-slate-500 dark:text-slate-400">⌘K</kbd>
            </button>

            {/* ⚡ Action Buttons */}
            <div className="flex items-center gap-2">
              
              {/* Mobile Search Button */}
              <button
                onClick={onOpenSearch}
                className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Theme Toggle Pill */}
              <button
                onClick={toggleTheme}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 transition-all hover:scale-105 group"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* Surprise Me Fact Drawer Button */}
              <button
                onClick={onOpenRandomFact}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-amber-800 dark:text-amber-300 border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 transition-all shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 animate-pulse" />
                <span>Random Fact</span>
              </button>

              {/* Launch 3D Explorer Button */}
              <Link
                to="/solar-system"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white transition-all hover:scale-105 shadow-md shadow-cyan-500/20 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500"
              >
                <span>3D System</span>
              </Link>

              {/* Mobile Drawer Toggle */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>

          {/* 📱 Mobile Drawer Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 dark:border-white/10 space-y-1.5 animate-fade-in-up">
              <div className="grid grid-cols-2 gap-1.5 pb-2">
                {NAV_ITEMS.map((item) => {
                  const active = location.pathname === item.path;
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                        active
                          ? 'text-cyan-800 dark:text-cyan-300 bg-cyan-500/15 border border-cyan-500/30'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 text-cyan-500" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-white/10">
                <button
                  onClick={onOpenRandomFact}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-mono font-bold text-amber-800 dark:text-amber-300 border border-amber-500/30 bg-amber-500/10"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Random Fact</span>
                </button>
                <Link
                  to="/solar-system"
                  className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600"
                >
                  3D Solar System
                </Link>
              </div>
            </div>
          )}

        </div>

      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
};
