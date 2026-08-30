import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Sparkles, Menu, X, Orbit, Sun, Moon, Globe, Compass, Rocket, Clock, Info, Stars, Layers, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenRandomFact: () => void;
}

// 🌐 6 Essential Primary Top Navigation Items (Prevents header horizontal overflow)
const PRIMARY_NAV_ITEMS = [
  { name: 'Explore',      path: '/',             icon: Compass },
  { name: 'Earth',        path: '/earth',        icon: Globe },
  { name: 'Solar System', path: '/solar-system', icon: Orbit },
  { name: 'Galaxies',     path: '/galaxies',     icon: Stars },
  { name: 'Universe',     path: '/universe',     icon: Sparkles },
  { name: 'Missions',     path: '/missions',     icon: Rocket },
];

// 📱 Navigation Links for Mobile Drawer & Full Menu
const ALL_NAV_ITEMS = [
  ...PRIMARY_NAV_ITEMS,
  { name: 'Timeline',     path: '/timeline',     icon: Clock },
  { name: 'Compare',      path: '/planet-compare', icon: Layers },
  { name: 'About',        path: '/about',        icon: Info },
  { name: 'Contact',      path: '/contact',      icon: Mail },
];

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenRandomFact }) => {
  const location = useLocation();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
      {/* Sticky Top Bar Outer Wrapper */}
      <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 lg:px-6 pt-2 sm:pt-3 transition-all duration-300 pointer-events-none">
        
        {/* Floating Glass Island Navbar Container (Strict Overflow Containment) */}
        <div
          className={`max-w-7xl mx-auto rounded-2xl pointer-events-auto transition-all duration-300 border overflow-hidden ${
            scrolled
              ? 'bg-slate-950/90 dark:bg-[#030712]/90 bg-white/95 backdrop-blur-2xl border-cyan-500/30 dark:border-cyan-500/25 border-slate-300 shadow-2xl shadow-cyan-950/20 py-2 sm:py-2.5 px-3 sm:px-5'
              : 'bg-white/85 dark:bg-[#040817]/85 backdrop-blur-xl border-slate-200/80 dark:border-white/10 py-2.5 sm:py-3 px-3 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-3 lg:gap-4 w-full">

            {/* 🚀 Brand Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl p-px transition-all group-hover:scale-105 shadow-md shadow-cyan-500/20" style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1, #a855f7)' }}>
                <div className="w-full h-full rounded-[11px] bg-slate-950 dark:bg-[#020408] flex items-center justify-center shadow-inner">
                  <Orbit className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-spin-slow group-hover:text-cyan-300 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight leading-none truncate">
                  universe<span className="text-cyan-500 dark:text-cyan-400">facts</span>
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest hidden md:inline-block font-semibold">
                  Interactive Cosmic Atlas
                </span>
              </div>
            </Link>

            {/* 🌐 Desktop Navigation Links (lg: 1024px+) */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/70 p-1 rounded-xl border border-slate-200/80 dark:border-white/10 flex-shrink-0">
              {PRIMARY_NAV_ITEMS.map((item) => {
                const active = location.pathname === item.path;
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all relative ${
                      active
                        ? 'text-cyan-700 dark:text-cyan-300 bg-white dark:bg-cyan-500/20 border border-slate-200 dark:border-cyan-500/40 shadow-sm font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${active ? 'text-cyan-600 dark:text-cyan-400' : 'opacity-70'}`} />
                    <span>{item.name}</span>
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 🔍 Search Command Input Trigger */}
            <button
              onClick={onOpenSearch}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/50 transition-all w-36 lg:w-44 shadow-inner group flex-shrink-0"
            >
              <Search className="w-3.5 h-3.5 text-cyan-500 group-hover:scale-110 transition-transform" />
              <span className="flex-1 text-left font-sans text-xs truncate">Search...</span>
              <kbd className="text-[10px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 px-1.5 py-0.5 rounded font-bold text-slate-500 dark:text-slate-400">⌘K</kbd>
            </button>

            {/* ⚡ Right Actions Group */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              
              {/* Mobile Search Button (< md) */}
              <button
                onClick={onOpenSearch}
                className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-300"
                title="Search Cosmos"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Theme Toggle Button */}
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

              {/* Random Fact Drawer Button (sm: 640px+) */}
              <button
                onClick={onOpenRandomFact}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-amber-800 dark:text-amber-300 border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 transition-all shadow-sm active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span>Random Fact</span>
              </button>

              {/* Mobile & Tablet Drawer Hamburger Menu Toggle */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {menuOpen ? <X className="w-5 h-5 text-cyan-500" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>

          {/* 📱 Mobile & Tablet Dropdown Navigation Drawer */}
          {menuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 dark:border-white/10 space-y-3 animate-fade-in-up max-h-[75vh] overflow-y-auto">
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {ALL_NAV_ITEMS.map((item) => {
                  const active = location.pathname === item.path;
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                        active
                          ? 'text-cyan-800 dark:text-cyan-300 bg-cyan-500/20 border border-cyan-500/40 shadow-sm'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 ${active ? 'text-cyan-500' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-white/10">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenRandomFact();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-mono font-bold text-amber-800 dark:text-amber-300 border border-amber-500/30 bg-amber-500/10"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Surprise Cosmic Fact</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </header>

      {/* Backdrop overlay for mobile menu drawer */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Header Height Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
};



