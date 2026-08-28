import React from 'react';
import { Link } from 'react-router-dom';
import { Orbit, ExternalLink } from 'lucide-react';

const FOOTER_NAV = [
  {
    heading: 'EXPLORE',
    links: [
      { name: 'Earth', path: '/earth' },
      { name: 'Solar System', path: '/solar-system' },
      { name: 'Planets', path: '/planets' },
      { name: 'Moons', path: '/moons' },
      { name: 'Stars', path: '/stars' },
    ],
  },
  {
    heading: 'DEEP SPACE',
    links: [
      { name: 'Galaxies', path: '/galaxies' },
      { name: 'Black Holes', path: '/black-holes' },
      { name: 'Exoplanets', path: '/exoplanets' },
      { name: 'Nebulae', path: '/nebulae' },
      { name: 'Observable Universe', path: '/universe' },
    ],
  },
  {
    heading: 'KNOWLEDGE',
    links: [
      { name: 'Space Missions', path: '/missions' },
      { name: 'Cosmic Timeline', path: '/timeline' },
      { name: 'Multiverse', path: '/multiverse' },
      { name: 'Compare Worlds', path: '/planet-compare' },
      { name: 'Data Sources', path: '/sources' },
      { name: 'About', path: '/about' },
    ],
  },
];

const AGENCY_LINKS = [
  { name: 'NASA', url: 'https://www.nasa.gov' },
  { name: 'ISRO', url: 'https://www.isro.gov.in' },
  { name: 'ESA', url: 'https://www.esa.int' },
  { name: 'JAXA', url: 'https://global.jaxa.jp' },
  { name: 'ESO', url: 'https://www.eso.org' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/90 dark:bg-[#030712]/95 backdrop-blur-xl mt-24 pt-16 pb-12 px-6 sm:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 pb-12 border-b border-slate-200 dark:border-slate-800/80">

          {/* Left Brand Column */}
          <div className="md:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full p-px bg-gradient-to-tr from-cyan-500 to-indigo-500 shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Orbit className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                universe<span className="text-cyan-600 dark:text-cyan-400">fact</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-sm leading-relaxed">
              An interactive digital atlas of the cosmos. Scientifically sourced. Endlessly explorable.
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                OFFICIAL SOURCES
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {AGENCY_LINKS.map((agency) => (
                  <a
                    key={agency.name}
                    href={agency.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span>{agency.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Navigation Columns */}
          {FOOTER_NAV.map((column) => (
            <div key={column.heading} className="space-y-4">
              <h4 className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                {column.heading}
              </h4>
              <ul className="space-y-3 font-sans text-xs sm:text-sm">
                {column.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <p>© 2026 universefact — A Digital Atlas of the Cosmos</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Data sourced from NASA, ISRO, ESA, JAXA & peer-reviewed astrophysics.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
