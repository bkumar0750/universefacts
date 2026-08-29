import React, { useState } from 'react';
import { Compass, Database, Search, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { SOLAR_SYSTEM_RECORDS, OFFICIAL_NASA_IMAGES } from '../../data/solarSystemExtendedData';

export const DiscoveryMapAndImageLibrary: React.FC = () => {
  const [recordSearch, setRecordSearch] = useState<string>('');
  const [selectedImageType, setSelectedImageType] = useState<string>('All');

  const historyEvents = [
    { year: '1543', name: 'Nicolaus Copernicus', feat: 'Heliocentric Model: Proposed that Earth and planets orbit the Sun.' },
    { year: '1610', name: 'Galileo Galilei', feat: 'Telescopic Observations: Discovered Jupiter 4 Galilean moons and Venus phases.' },
    { year: '1619', name: 'Johannes Kepler', feat: 'Laws of Planetary Motion: Proved planetary orbits are ellipses ($T^2 = a^3$).' },
    { year: '1687', name: 'Sir Isaac Newton', feat: 'Universal Gravitation: Formulated $F = G \\frac{m_1 m_2}{r^2}$ governing celestial orbits.' },
    { year: '1781', name: 'William Herschel', feat: 'Discovered Uranus—the first planet discovered with a telescope.' },
    { year: '1846', name: 'Urban Le Verrier & Johann Galle', feat: 'Discovered Neptune using mathematical orbital anomaly predictions!' },
    { year: '1930', name: 'Clyde Tombaugh', feat: 'Discovered Pluto at Lowell Observatory.' },
    { year: '1977+', name: 'NASA Voyager Probes', feat: 'Explored Jupiter, Saturn, Uranus, Neptune & entered interstellar space.' },
    { year: '2015', name: 'NASA New Horizons', feat: 'First high-resolution reconnaissance flyby of Pluto system.' }
  ];

  const touchedWorlds = [
    { target: 'Earth\'s Moon', status: 'Landed & Sample Returned', probe: 'Apollo 11–17, Luna 16/20/24, Chang\'e 5' },
    { target: 'Venus Surface', status: 'Landed & Transmitted Photos', probe: 'Soviet Venera 7, 9, 13, 14' },
    { target: 'Mars Surface', status: 'Landed & Roving Active', probe: 'Viking, Pathfinder, Spirit, Opportunity, Curiosity, Perseverance' },
    { target: 'Titan Surface', status: 'Landed', probe: 'ESA Huygens Probe (Jan 14, 2005)' },
    { target: 'Asteroid Bennu', status: 'Sample Returned to Earth', probe: 'NASA OSIRIS-REx (Sept 24, 2023)' },
    { target: 'Asteroid Ryugu', status: 'Sample Returned to Earth', probe: 'JAXA Hayabusa2' },
    { target: 'Comet 67P', status: 'Landed', probe: 'ESA Rosetta / Philae Lander' }
  ];

  const filteredRecords = SOLAR_SYSTEM_RECORDS.filter(
    (r) =>
      r.recordTitle.toLowerCase().includes(recordSearch.toLowerCase()) ||
      r.holder.toLowerCase().includes(recordSearch.toLowerCase()) ||
      r.category.toLowerCase().includes(recordSearch.toLowerCase())
  );

  const imageTypes = ['All', 'Real Spacecraft', 'Satellite/Telescopic', 'Radar Image', 'Infrared', 'False Color', 'Artist Concept'];

  const filteredImages = OFFICIAL_NASA_IMAGES.filter(
    (img) => selectedImageType === 'All' || img.imageType === selectedImageType
  );

  return (
    <section id="discovery-map-and-library" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-12 shadow-xl">
      
      {/* 🔭 1. "HOW MUCH OF THE SOLAR SYSTEM HAVE WE ACTUALLY SEEN?" */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>HUMAN KNOWLEDGE MAP · EXPLORATION FRONTIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            HOW MUCH HAVE WE ACTUALLY SEEN?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            We have directly visited very little of our Solar System. Distinguish between physical landings vs telescopic observation vs theoretical models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30 space-y-2">
            <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold uppercase block">1. DIRECTLY VISITED</span>
            <div className="text-lg font-bold text-slate-900 dark:text-white">&lt; 0.0001%</div>
            <p className="font-sans text-xs text-slate-700 dark:text-slate-300">Probes have physically visited 8 planets, 5 dwarf planets, and select asteroids/comets.</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-950/30 space-y-2">
            <span className="text-[10px] text-cyan-700 dark:text-cyan-300 font-bold uppercase block">2. REMOTELY OBSERVED</span>
            <div className="text-lg font-bold text-slate-900 dark:text-white">~5%</div>
            <p className="font-sans text-xs text-slate-700 dark:text-slate-300">Mapped via HST, JWST, Pan-STARRS, Vera Rubin Observatory, and radio telemetry.</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-purple-500/30 bg-purple-500/10 dark:bg-purple-950/30 space-y-2">
            <span className="text-[10px] text-purple-700 dark:text-purple-300 font-bold uppercase block">3. INFERRED VIA MODELS</span>
            <div className="text-lg font-bold text-slate-900 dark:text-white">~25%</div>
            <p className="font-sans text-xs text-slate-700 dark:text-slate-300">Oort Cloud, Planet Nine hypothesis, deep interior cores, mantle structures.</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-900 space-y-2">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">4. COMPLETELY UNKNOWN</span>
            <div className="text-lg font-bold text-slate-900 dark:text-white">&gt; 70%</div>
            <p className="font-sans text-xs text-slate-700 dark:text-slate-300">Unobserved icy bodies in Kuiper Belt, Hills Cloud, and deep Oort Cloud outer shell.</p>
          </div>
        </div>
      </div>

      {/* 🗺️ 2. DISCOVERY MAP TIMELINE */}
      <div className="space-y-4">
        <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white">
          Solar System Discovery History Timeline
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {historyEvents.map((evt) => (
            <div key={evt.year} className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-1">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs">{evt.year} · {evt.name}</span>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-300">{evt.feat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🛸 3. "WORLDS WE HAVE ACTUALLY TOUCHED" */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/80 space-y-4 font-mono text-xs">
        <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white">
          Humanity Has Landed On / Sampled These Celestial Bodies
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {touchedWorlds.map((tw) => (
            <div key={tw.target} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase block">{tw.status}</span>
              <div className="text-slate-900 dark:text-white font-bold text-sm">{tw.target}</div>
              <p className="font-sans text-xs text-slate-500">{tw.probe}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🏆 4. SEARCHABLE SOLAR SYSTEM RECORDS DATABASE */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-800 dark:text-amber-300">
              <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>SEARCHABLE VERIFIED ARCHIVE</span>
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white mt-1">
              SOLAR SYSTEM RECORDS DATABASE
            </h3>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search records (e.g. Venus, Volcano)..."
              value={recordSearch}
              onChange={(e) => setRecordSearch(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs font-mono outline-none text-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {filteredRecords.map((rec) => (
            <div key={rec.id} className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase block">{rec.category} · RECORD</span>
                <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">{rec.recordTitle}</h4>
                <div className="text-cyan-700 dark:text-cyan-300 font-bold">{rec.holder}: {rec.value}</div>
                <p className="font-sans text-xs text-slate-600 dark:text-slate-400 mt-1">{rec.details}</p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 text-[10px] text-slate-400">
                Source: {rec.dateOrSource}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📸 5. OFFICIAL NASA SOLAR SYSTEM IMAGE LIBRARY */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
              <ImageIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>OFFICIAL NASA MEDIA ARCHIVE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white mt-1">
              OFFICIAL SOLAR SYSTEM IMAGE GALLERY
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {imageTypes.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedImageType(t)}
                className={`px-3 py-1.5 rounded-xl border transition-all ${
                  selectedImageType === t
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold border-cyan-600'
                    : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div key={img.id} className="glass-panel rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white/80 dark:bg-slate-950/80 space-y-3 p-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="h-44 rounded-xl overflow-hidden bg-slate-950 relative">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 text-cyan-300 border border-white/10">
                    {img.imageType}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-display font-bold text-slate-900 dark:text-white">{img.title}</h4>
                  <p className="text-xs font-sans text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{img.caption}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between font-mono text-[10px] text-slate-500">
                <span>Credit: {img.credit}</span>
                <a href={img.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 underline flex items-center gap-1">
                  <span>NASA Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
