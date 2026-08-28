import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Rocket, Globe, Compass } from 'lucide-react';
import { cosmicStats } from '../data/cosmicStats';
import { missionsData } from '../data/missionsData';
import { ApodWidget } from '../components/ApodWidget';
import { AsteroidTrackerWidget } from '../components/AsteroidTrackerWidget';

interface HomePageProps {
  onOpenSearch: () => void;
  onOpenRandomFact: () => void;
}

const EXPLORE_ITEMS = [
  {
    title: 'Earth',
    sub: 'Our Home Planet',
    path: '/earth',
    img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=600&auto=format&fit=crop',
    accent: 'rgba(6,182,212,0.5)',
  },
  {
    title: 'Solar System',
    sub: 'Our Planetary System',
    path: '/solar-system',
    img: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=600&auto=format&fit=crop',
    accent: 'rgba(245,158,11,0.5)',
  },
  {
    title: 'Galaxies',
    sub: 'Billions of Islands of Stars',
    path: '/galaxies',
    img: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=600&auto=format&fit=crop',
    accent: 'rgba(139,92,246,0.5)',
  },
  {
    title: 'Exoplanets',
    sub: 'Worlds Beyond Our Sun',
    path: '/exoplanets',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    accent: 'rgba(16,185,129,0.5)',
  },
  {
    title: 'Nebulae',
    sub: 'Stellar Nurseries in Space',
    path: '/nebulae',
    img: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=600&auto=format&fit=crop',
    accent: 'rgba(236,72,153,0.5)',
  },
  {
    title: 'Black Holes',
    sub: 'The Most Mysterious Objects',
    path: '/black-holes',
    img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&auto=format&fit=crop',
    accent: 'rgba(244,63,94,0.5)',
  },
  {
    title: 'Space Missions',
    sub: "Humanity's Journey Beyond Earth",
    path: '/missions',
    img: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=600&auto=format&fit=crop',
    accent: 'rgba(59,130,246,0.5)',
  },
  {
    title: 'Multiverse',
    sub: 'Theories Beyond Our Universe',
    path: '/multiverse',
    img: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=600&auto=format&fit=crop',
    accent: 'rgba(168,85,247,0.5)',
  },
];

const TIMELINE_HIGHLIGHTS = [
  { title: 'Big Bang', time: '13.8 BYA', icon: '💥', color: 'from-amber-500 to-red-500' },
  { title: 'First Stars', time: '200 MYA', icon: '⭐', color: 'from-yellow-400 to-amber-500' },
  { title: 'Milky Way Formation', time: '13.2 BYA', icon: '🌌', color: 'from-purple-500 to-indigo-500' },
  { title: 'Solar System Formation', time: '4.6 BYA', icon: '☀️', color: 'from-amber-400 to-orange-500' },
  { title: 'Earth Formation', time: '4.5 BYA', icon: '🌍', color: 'from-cyan-500 to-blue-500' },
  { title: 'First Life', time: '3.5 BYA', icon: '🧪', color: 'from-emerald-400 to-teal-600' },
  { title: 'Dinosaurs', time: '250 MYA', icon: '🦖', color: 'from-green-500 to-emerald-700' },
  { title: 'Humans', time: '300 KYA', icon: '👤', color: 'from-blue-400 to-indigo-600' },
  { title: 'Today', time: 'Present Day', icon: '🛰️', color: 'from-cyan-400 to-blue-600' },
];

const DISTANCE_SCALES = [
  { name: 'Moon', val: '384,400 km', sub: '1.3 light seconds' },
  { name: 'Sun', val: '149.6 million km', sub: '8.3 light minutes' },
  { name: 'Proxima Centauri', val: '4.24 light years', sub: 'Nearest Star System' },
  { name: 'Andromeda Galaxy', val: '2.54 million light years', sub: 'Nearest Major Galaxy' },
  { name: 'Observable Universe', val: '93 billion light years', sub: 'The Cosmic Horizon' },
];

export const HomePage: React.FC<HomePageProps> = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMove);
    return () => el?.removeEventListener('mousemove', handleMove);
  }, []);

  const px = (mousePos.x - 0.5) * 24;
  const py = (mousePos.y - 0.5) * 14;

  return (
    <div className="space-y-0 pb-24 overflow-x-hidden">
      
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden"
      >
        {/* Animated starfield background */}
        <div className="stars-bg pointer-events-none" />

        {/* Floating nebula glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-cyan-500/8 dark:bg-cyan-500/12 rounded-full blur-[100px] animate-nebula" />
          <div className="absolute top-1/3 -right-32 w-80 h-80 bg-violet-500/8 dark:bg-violet-500/10 rounded-full blur-[80px] animate-nebula delay-300" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-500/6 dark:bg-blue-500/8 rounded-full blur-[80px] animate-nebula delay-700" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Headline & Actions */}
          <div className="lg:col-span-6 space-y-7">
            {/* Animated eyebrow badge */}
            <div className="animate-fade-in-down">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/40 dark:border-cyan-400/40 text-cyan-700 dark:text-cyan-300 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE COSMIC ATLAS</span>
              </div>
            </div>

            <div className="space-y-3 animate-fade-in-up delay-100">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.02]">
                The Universe{' '}
                <br />
                <span
                  className="animate-gradient"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8, #818cf8, #c084fc, #38bdf8)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Is Infinite
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-sans max-w-lg leading-relaxed">
                Explore worlds, stars, galaxies and the mysteries of existence through one interactive cosmic atlas — powered by real NASA data.
              </p>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                YOUR CURIOSITY DOESN'T HAVE TO BE.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in-up delay-200">
              <Link
                to="/solar-system"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-[1.05] hover:shadow-2xl active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #0284c7, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 28px rgba(99,102,241,0.40)',
                }}
              >
                <span>Launch Explorer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/earth"
                className="glass-button flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-slate-950 dark:hover:text-white transition-all hover:scale-[1.03]"
              >
                <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>View Earth 3D</span>
              </Link>
            </div>

            {/* Stat pills row */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300">
              {[
                { val: '2 Trillion', label: 'Galaxies' },
                { val: '93 Billion ly', label: 'Observable Universe' },
                { val: '5,600+', label: 'Exoplanets' },
              ].map((s) => (
                <div key={s.label} className="glass-button px-4 py-2 rounded-xl text-xs font-mono">
                  <span className="font-bold text-cyan-700 dark:text-cyan-300">{s.val}</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-1.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 3D Earth Globe Visual & Live Stats Overlay */}
          <div className="lg:col-span-6 relative flex items-center justify-center animate-slide-in">
            
            {/* Photorealistic Floating 3D Earth Graphic */}
            <div
              className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center transition-transform duration-300 ease-out"
              style={{ transform: `translate(${px * 0.35}px, ${py * 0.35}px)` }}
            >
              {/* Multi-layer atmospheric glow */}
              <div className="absolute inset-[-20px] rounded-full bg-cyan-400/10 dark:bg-cyan-400/20 blur-3xl animate-pulse-glow" />
              <div className="absolute inset-[-8px] rounded-full bg-blue-500/8 dark:bg-blue-500/15 blur-2xl" />
              
              {/* Orbit ring decoration */}
              <div className="absolute inset-[-30px] rounded-full border border-cyan-400/15 dark:border-cyan-400/20 animate-spin-slower" style={{borderStyle:'dashed'}} />
              <div className="absolute inset-[-50px] rounded-full border border-violet-400/10 dark:border-violet-400/12 animate-spin-slow" style={{animationDirection:'reverse'}} />

              {/* Earth Sphere Image */}
              <img
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=900&auto=format&fit=crop"
                alt="Earth Planet"
                className="w-full h-full object-cover rounded-full shadow-[0_0_80px_rgba(56,189,248,0.25)] relative z-10 border-2 border-cyan-500/25 animate-float"
              />

              {/* Orbiting Moon */}
              <div
                className="absolute z-20"
                style={{
                  width: '110%',
                  height: '110%',
                  animation: 'orbit-rotate 18s linear infinite',
                }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden shadow-xl border-2 border-white/25">
                  <img
                    src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=200&auto=format&fit=crop"
                    alt="Moon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* ISS satellite dot */}
              <div
                className="absolute z-30"
                style={{
                  width: '130%',
                  height: '130%',
                  animation: 'orbit-rotate 8s linear infinite',
                  animationDirection: 'reverse',
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] border border-amber-300/50" title="ISS" />
              </div>
            </div>

            {/* LIVE UNIVERSE STATS Card */}
            <div className="absolute top-0 right-0 sm:-right-6 glass-panel bg-white/90 dark:bg-slate-900/90 rounded-2xl p-4 sm:p-5 w-64 sm:w-72 border border-slate-200 dark:border-white/10 shadow-2xl z-30 space-y-3 font-mono text-xs animate-slide-in delay-200">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-bold text-slate-700 dark:text-cyan-300 uppercase tracking-widest">
                    LIVE UNIVERSE STATS
                  </span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold">
                  LIVE
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                {cosmicStats.slice(0, 4).map((stat) => (
                  <div key={stat.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">{stat.value} <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">{stat.unit}</span></p>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25 font-bold">
                      {stat.statusLabel}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/universe"
                className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-bold"
              >
                <span>View All Statistics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 01. EXPLORE THE COSMOS GRID ────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
              EXPLORE THE COSMOS
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Interactive Space Explorer
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {EXPLORE_ITEMS.map((item, idx) => (
            <Link
              key={item.path}
              to={item.path}
              className={`glass-card rounded-2xl overflow-hidden relative group border border-slate-200 dark:border-white/10 flex flex-col h-48 animate-fade-in-up`}
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ boxShadow: `inset 0 0 30px ${item.accent}` }}
              />

              {/* Content */}
              <div className="relative z-10 mt-auto p-4">
                <h3 className="font-display font-bold text-sm text-white group-hover:text-cyan-200 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-[10px] text-slate-300 font-sans mt-0.5">{item.sub}</p>
              </div>

              {/* Arrow */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/10 dark:bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="section-divider" />


      {/* ── 02. COSMIC TIMELINE WIDGET ────────────────────────────── */}
      <section className="py-14 px-6 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-mono text-amber-500 dark:text-amber-400 uppercase tracking-widest">
              COSMIC TIMELINE
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              13.8 Billion Years of Evolution
            </h2>
          </div>
          <Link
            to="/timeline"
            className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
          >
            View Full Timeline →
          </Link>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="glass-panel rounded-2xl p-6 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[700px] relative py-4">
            
            {/* Connecting Timeline Bar Line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-cyan-500/20 z-0" />

            {TIMELINE_HIGHLIGHTS.map((t) => (
              <div key={t.title} className="relative z-10 flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center shadow-lg text-base hover:scale-110 transition-transform">
                  {t.icon}
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-900 dark:text-white font-display">{t.title}</p>
                  <p className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">{t.time}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── 03. LIVE NASA WIDGETS & DISTANCE SCALE ───────────────── */}
      <section className="py-14 px-6 max-w-7xl mx-auto space-y-10">
        
        {/* Top Widgets: APOD & Asteroid Monitor */}
        <ApodWidget />
        <AsteroidTrackerWidget />

        {/* Bottom 3-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: LATEST FROM SPACE MISSIONS */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Rocket className="w-4 h-4 text-cyan-500" />
                <span>LATEST FROM SPACE MISSIONS</span>
              </h3>
              <Link to="/missions" className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 hover:underline">
                View All Missions →
              </Link>
            </div>

            <div className="space-y-3">
              {missionsData.slice(0, 3).map((m) => (
                <div key={m.id} className="p-3 rounded-xl glass-card flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white">{m.name}</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">{m.description}</p>
                  </div>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full flex-shrink-0 ${
                    m.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' :
                    'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                  }`}>
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: DISTANCE SCALE */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-purple-500" />
                <span>DISTANCE SCALE</span>
              </h3>
              <Link to="/universe" className="text-[10px] font-mono text-purple-500 dark:text-purple-400 hover:underline">
                Scale Atlas →
              </Link>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              {DISTANCE_SCALES.map((d) => (
                <div key={d.name} className="flex items-center justify-between border-b border-white/5 pb-1.5">
                  <div>
                    <span className="text-slate-900 dark:text-white font-bold block text-xs">{d.name}</span>
                    <span className="text-[10px] text-slate-500">{d.sub}</span>
                  </div>
                  <span className="text-cyan-600 dark:text-cyan-300 font-bold">{d.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: COSMIC DISCOVERY ACTION */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30">
                RECOMMENDED DISCOVERY
              </span>
              <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                Deep Space Exoplanets Catalog
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                Query over 5,600 confirmed extrasolar planets streamed directly from the NASA Exoplanet Archive TAP service.
              </p>
            </div>

            <Link
              to="/exoplanets"
              className="flex items-center justify-between w-full px-5 py-3 rounded-xl text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              <span>Explore Exoplanets</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
};
