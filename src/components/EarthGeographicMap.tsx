import React, { useState } from 'react';
import { Compass, Info, Mountain, Waves, Trees, Snowflake, Satellite } from 'lucide-react';

interface Landmark {
  id: string;
  name: string;
  category: 'Mountain' | 'Ocean' | 'Biome' | 'Ice' | 'Space';
  coords: string;
  lat: number; // percentage X on map (0 to 100)
  lon: number; // percentage Y on map (0 to 100)
  elevation: string;
  tectonicPlate: string;
  climateZone: string;
  summary: string;
  satelliteNote: string;
  icon: React.ReactNode;
}

const LANDMARKS: Landmark[] = [
  {
    id: 'everest',
    name: 'Mount Everest (Himalayas)',
    category: 'Mountain',
    coords: '27.9881° N, 86.9250° E',
    lat: 72,
    lon: 42,
    elevation: '8,848.86 m (Highest Peak on Earth)',
    tectonicPlate: 'Indian-Eurasian Collision Zone',
    climateZone: 'Alpine / Cryosphere',
    summary: 'Formed ~50 million years ago by the relentless collision of the Indian subcontinent tectonic plate into the Eurasian plate.',
    satelliteNote: 'Rising at approximately 4mm per year due to ongoing crustal compression.',
    icon: <Mountain className="w-4 h-4 text-amber-400" />
  },
  {
    id: 'mariana',
    name: 'Mariana Trench (Challenger Deep)',
    category: 'Ocean',
    coords: '11.3500° N, 142.2000° E',
    lat: 86,
    lon: 48,
    elevation: '-10,994 m (Deepest Ocean Abyss)',
    tectonicPlate: 'Pacific & Mariana Subduction Trench',
    climateZone: 'Hadopelagic Deep Sea',
    summary: 'The deepest known point in Earth’s oceans, where pressure exceeds 1,000 atmospheres (1,086 bar), over 1,000 times atmospheric sea-level pressure.',
    satelliteNote: 'Home to extreme amphipods and hydrothermal vent ecosystems powered by chemosynthesis.',
    icon: <Waves className="w-4 h-4 text-cyan-400" />
  },
  {
    id: 'amazon',
    name: 'Amazon River Basin & Rainforest',
    category: 'Biome',
    coords: '3.4653° S, 62.2159° W',
    lat: 31,
    lon: 60,
    elevation: '0 - 200 m (Tropical Basin)',
    tectonicPlate: 'South American Plate',
    climateZone: 'Tropical Rainforest (Equatorial)',
    summary: 'Spanning 5.5 million km², the Amazon produces roughly 20% of Earth’s atmospheric oxygen and recycles massive volumes of moisture through evapotranspiration.',
    satelliteNote: 'Contains over 390 billion individual trees representing 16,000 unique species.',
    icon: <Trees className="w-4 h-4 text-emerald-400" />
  },
  {
    id: 'antarctica',
    name: 'Antarctic Ice Sheet (South Pole)',
    category: 'Ice',
    coords: '82.8628° S, 135.0000° E',
    lat: 68,
    lon: 92,
    elevation: '2,835 m (Ice Thickness up to 4.8 km)',
    tectonicPlate: 'Antarctic Plate',
    climateZone: 'Polar Ice Cap (-89.2°C Record Low)',
    summary: 'The largest single mass of ice on Earth, covering ~14 million km² and holding nearly 70% of Earth’s total liquid-equivalent freshwater reserves.',
    satelliteNote: 'If melted completely, global sea levels would rise by approximately 58 meters.',
    icon: <Snowflake className="w-4 h-4 text-blue-300" />
  },
  {
    id: 'iss',
    name: 'ISS Orbit (International Space Station)',
    category: 'Space',
    coords: 'Low Earth Orbit (Inclination 51.6°)',
    lat: 50,
    lon: 28,
    elevation: '+420 km Altitude (Orbital Speed: 27,600 km/h)',
    tectonicPlate: 'Exosphere / Low Earth Orbit',
    climateZone: 'Microgravity Vacuum',
    summary: 'A microgravity space environment research laboratory where astronauts live and conduct cutting-edge space physics and biological research.',
    satelliteNote: 'Orbits the Earth once every 90 minutes, completing 16 sunrises and sunsets every 24 hours.',
    icon: <Satellite className="w-4 h-4 text-purple-400" />
  }
];

export const EarthGeographicMap: React.FC = () => {
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark>(LANDMARKS[0]);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredLandmarks = LANDMARKS.filter((l) => {
    if (activeFilter === 'All') return true;
    return l.category === activeFilter;
  });

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6 shadow-xl animate-fade-in-up">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Compass className="w-3.5 h-3.5" />
            <span>INTERACTIVE GEOGRAPHIC MAP & LANDMARK INSPECTOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
            Earth Topography & Satellite Features
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
            Click location telemetry pins on the satellite projection map to inspect elevation, tectonic plates, and climate data.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 shrink-0">
          {['All', 'Mountain', 'Ocean', 'Biome', 'Ice', 'Space'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                  : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Map + Detail Telemetry Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 2D Satellite Projection Map */}
        <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/10 shadow-inner group">
          
          {/* Earth Mercator Map Background Graphics */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Continental Outline Graphics */}
          <svg className="absolute inset-0 w-full h-full text-cyan-500/20" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* North America */}
            <path d="M 15 20 Q 25 15 35 25 Q 30 40 20 45 Z" fill="currentColor" opacity="0.4" />
            {/* South America */}
            <path d="M 28 50 Q 38 52 35 75 Q 25 80 28 50 Z" fill="currentColor" opacity="0.4" />
            {/* Eurasia */}
            <path d="M 50 15 Q 85 10 90 35 Q 70 45 50 30 Z" fill="currentColor" opacity="0.4" />
            {/* Africa */}
            <path d="M 48 35 Q 60 38 58 65 Q 45 60 48 35 Z" fill="currentColor" opacity="0.4" />
            {/* Australia */}
            <path d="M 75 60 Q 88 62 85 75 Q 72 75 75 60 Z" fill="currentColor" opacity="0.4" />
            {/* Antarctica */}
            <path d="M 10 90 Q 50 88 90 90 Q 90 98 10 98 Z" fill="currentColor" opacity="0.3" />
          </svg>

          {/* Map Grid Coordinates overlay */}
          <div className="absolute top-2 left-3 text-[10px] font-mono text-cyan-500/70 pointer-events-none">
            LAT: -90° to +90° • LON: -180° to +180°
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500 pointer-events-none">
            Satellite Grid Telemetry v2.4
          </div>

          {/* Interactive Pins */}
          {filteredLandmarks.map((landmark) => {
            const isSelected = selectedLandmark.id === landmark.id;
            return (
              <button
                key={landmark.id}
                onClick={() => setSelectedLandmark(landmark)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 group/pin transition-all duration-300 ${
                  isSelected ? 'z-30 scale-125' : 'z-10 hover:scale-110'
                }`}
                style={{ left: `${landmark.lat}%`, top: `${landmark.lon}%` }}
              >
                {/* Glowing Radar Pulse */}
                {isSelected && (
                  <span className="absolute -inset-2 rounded-full bg-cyan-400/40 animate-ping pointer-events-none" />
                )}
                
                {/* Pin Badge Icon */}
                <div className={`p-2 rounded-full border shadow-xl flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 border-white scale-110 shadow-cyan-500/50'
                    : 'bg-slate-900/90 text-cyan-300 border-cyan-500/40 hover:border-cyan-400'
                }`}>
                  {landmark.icon}
                </div>

                {/* Tooltip Tag */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold whitespace-nowrap border transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 border-white shadow-lg'
                    : 'bg-slate-900/90 text-slate-200 border-white/10 opacity-0 group-hover/pin:opacity-100'
                }`}>
                  {landmark.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Landmark Telemetry Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-slate-900/90 space-y-4 shadow-md flex-1">
            
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                  {selectedLandmark.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase">
                    {selectedLandmark.category} Telemetry
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug">
                    {selectedLandmark.name}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
              {selectedLandmark.summary}
            </p>

            {/* Spec Attributes */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-slate-200 dark:border-white/10">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 space-y-0.5">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Coordinates</span>
                <div className="text-cyan-700 dark:text-cyan-300 font-bold truncate">{selectedLandmark.coords}</div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 space-y-0.5">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Elevation / Altitude</span>
                <div className="text-slate-900 dark:text-white font-bold truncate">{selectedLandmark.elevation}</div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 space-y-0.5">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Tectonic Setting</span>
                <div className="text-emerald-700 dark:text-emerald-300 font-bold truncate">{selectedLandmark.tectonicPlate}</div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 space-y-0.5">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Climate Biome</span>
                <div className="text-amber-700 dark:text-amber-300 font-bold truncate">{selectedLandmark.climateZone}</div>
              </div>
            </div>

            {/* Satellite Telemetry Note */}
            <div className="flex items-start gap-2 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-sans text-cyan-900 dark:text-cyan-200">
              <Info className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <span>{selectedLandmark.satelliteNote}</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
