import React from 'react';
import { Link } from 'react-router-dom';
import { Orbit, ExternalLink, ArrowUp, Sparkles, ShieldCheck, Heart, Mail } from 'lucide-react';

const FOOTER_NAV = [
  {
    heading: 'EXPLORE COSMOS',
    links: [
      { name: 'Planet Earth 3D', path: '/earth' },
      { name: 'Solar System Atlas', path: '/solar-system' },
      { name: 'Planets Catalog', path: '/planets' },
      { name: 'Moons Explorer', path: '/moons' },
      { name: 'Stars & Supergiants', path: '/stars' },
    ],
  },
  {
    heading: 'DEEP SPACE',
    links: [
      { name: 'Galaxies & Clusters', path: '/galaxies' },
      { name: 'Black Holes Archive', path: '/black-holes' },
      { name: 'Exoplanets (5,600+)', path: '/exoplanets' },
      { name: 'Glowing Nebulae', path: '/nebulae' },
      { name: 'Observable Universe', path: '/universe' },
    ],
  },
  {
    heading: 'KNOWLEDGE BASE',
    links: [
      { name: 'Space Missions (ISRO/NASA)', path: '/missions' },
      { name: '13.8B Year Timeline', path: '/timeline' },
      { name: 'Multiverse Theories', path: '/multiverse' },
      { name: 'Compare Planetary Worlds', path: '/planet-compare' },
      { name: 'Verified Data Sources', path: '/sources' },
      { name: 'About Atlas Project', path: '/about' },
      { name: 'Contact Us (Queries)', path: '/contact' },
    ],
  },
];

const AGENCY_LINKS = [
  { name: 'NASA', fullName: 'National Aeronautics and Space Admin', url: 'https://www.nasa.gov' },
  { name: 'ISRO', fullName: 'Indian Space Research Organisation', url: 'https://www.isro.gov.in' },
  { name: 'ESA', fullName: 'European Space Agency', url: 'https://www.esa.int' },
  { name: 'JAXA', fullName: 'Japan Aerospace Exploration Agency', url: 'https://global.jaxa.jp' },
  { name: 'ESO', fullName: 'European Southern Observatory', url: 'https://www.eso.org' },
  { name: 'NOAA', fullName: 'National Oceanic and Atmospheric Admin', url: 'https://www.noaa.gov' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-cyan-500/20 bg-slate-100/95 dark:bg-[#02050c]/95 backdrop-blur-2xl mt-24 pt-12 pb-10 px-4 sm:px-8 lg:px-12 transition-colors duration-300">
      
      {/* Glow Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 sm:w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">

        {/* 📊 Top Ticker Stats Banner */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-amber-500/5">
          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-500">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">
                UNIVERSAL COSMIC TELEMETRY ATLAS
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                Streamed directly from NASA Exoplanet Archive, ISRO Mission Feeds, and EHT Datasets.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] font-mono">
            <div className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
              <span className="text-cyan-500 font-bold">5,600+</span> Exoplanets
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
              <span className="text-purple-500 font-bold">2 Trillion</span> Galaxies
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
              <span className="text-amber-500 font-bold">13.8B</span> Yrs Evolution
            </div>
          </div>
        </div>

        {/* 🌐 Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-10 border-b border-slate-200 dark:border-slate-800/80">

          {/* Column 1 & 2: Brand & Verification */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl p-px bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center">
                  <Orbit className="w-5 h-5 text-cyan-400 animate-spin-slow" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-slate-900 dark:text-white">
                  universe<span className="text-cyan-500">facts</span>
                </span>
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold tracking-widest uppercase">
                  Cosmic Atlas & Scientific Explorer
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-md leading-relaxed">
              An interactive, peer-reviewed digital atlas of the cosmos. Dedicated to making space telemetry, astrophysics, planetary science, and ISRO/NASA mission data accessible to all curious minds worldwide.
            </p>

            <div className="p-3 rounded-xl bg-slate-200/50 dark:bg-slate-900/60 border border-slate-300 dark:border-white/5 text-[11px] font-sans text-slate-600 dark:text-slate-400 leading-normal">
              <strong>Scientific Disclaimer:</strong> UniverseFact is an educational project. Scientific values, metrics, and mission statuses may update as new observations and official agency records become available. Where possible, UniverseFact links directly to primary scientific sources.
            </div>

            {/* Official Agency Partners */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                <span>Verified Space Agencies</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {AGENCY_LINKS.map((agency) => (
                  <a
                    key={agency.name}
                    href={agency.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={agency.fullName}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 transition-all shadow-xs"
                  >
                    <span>{agency.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Live Operational & Contact Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>System Status: NASA & ISRO Feeds Operational</span>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 font-semibold transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact & Queries: imbhuvi91@gmail.com</span>
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_NAV.map((column) => (
            <div key={column.heading} className="space-y-4">
              <h4 className="text-[11px] font-mono font-bold text-slate-900 dark:text-cyan-400 uppercase tracking-widest border-b border-slate-200 dark:border-white/10 pb-2">
                {column.heading}
              </h4>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
                {column.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 font-medium transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* 🔝 Bottom Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-2">
          
          <div className="flex items-center gap-2">
            <span>© 2026 universefacts</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for space exploration
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">WCAG 2.1 AA Compliant • Open Science</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 transition-all font-bold"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-500" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

