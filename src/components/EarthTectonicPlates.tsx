import React, { useState } from 'react';
import { Flame, Waves, Wind, Mountain, ExternalLink, Activity } from 'lucide-react';

interface TectonicPlate {
  id: string;
  name: string;
  type: 'Oceanic' | 'Continental' | 'Mixed';
  movement: string;
  boundary: string;
  features: string;
  description: string;
  sourceUrl: string;
}

const TECTONIC_PLATES: TectonicPlate[] = [
  {
    id: 'pacific',
    name: 'Pacific Plate',
    type: 'Oceanic',
    movement: 'NW at ~7 to 10 cm/year',
    boundary: 'Convergent (Ring of Fire) & Transform (San Andreas)',
    features: 'Mariana Trench, Hawaiian Hotspot Ridge, Ring of Fire Subduction Arc',
    description: 'The largest tectonic plate on Earth, underlying almost the entire Pacific Ocean basin. Its active subduction margins create over 75% of global volcanic activity along the Pacific Ring of Fire.',
    sourceUrl: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html'
  },
  {
    id: 'north-american',
    name: 'North American Plate',
    type: 'Mixed',
    movement: 'W-SW at ~2.5 cm/year',
    boundary: 'Divergent (Mid-Atlantic Ridge) & Transform (San Andreas)',
    features: 'Rocky Mountains, Mid-Atlantic Spreading Center, Cascadian Subduction',
    description: 'Carries all of North America, Greenland, and parts of Siberia. Spreads apart from the Eurasian Plate along the Mid-Atlantic Ridge at roughly the speed of human fingernail growth.',
    sourceUrl: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html'
  },
  {
    id: 'south-american',
    name: 'South American Plate',
    type: 'Mixed',
    movement: 'W at ~3 cm/year',
    boundary: 'Convergent (Peru-Chile Trench) & Divergent (Mid-Atlantic)',
    features: 'Andes Mountain Range, Peru-Chile Oceanic Subduction Trench',
    description: 'Collides with the Nazca Plate to form the Andes—the longest continental mountain range above sea level on Earth.',
    sourceUrl: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html'
  },
  {
    id: 'african',
    name: 'African Plate (Nubian & Somali)',
    type: 'Mixed',
    movement: 'NE at ~2 cm/year',
    boundary: 'Rifting Divergent (East African Rift System)',
    features: 'East African Rift Valley, Red Sea Basin, Mount Kilimanjaro',
    description: 'Slowly splitting along the East African Rift. In 5 to 10 million years, a new ocean basin will completely separate the Horn of Africa from the continent.',
    sourceUrl: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html'
  },
  {
    id: 'eurasian',
    name: 'Eurasian Plate',
    type: 'Continental',
    movement: 'E-NE at ~1 to 2 cm/year',
    boundary: 'Continental Collision (Himalayan Orogeny)',
    features: 'Himalayas Mountain Range, Tibetan Plateau, Baikal Rift Zone',
    description: 'Underwent a massive continental collision with the Indian Plate ~50 million years ago, raising the Himalayas and uplifting the highest plateau on Earth.',
    sourceUrl: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html'
  },
  {
    id: 'indo-australian',
    name: 'Indo-Australian Plate',
    type: 'Mixed',
    movement: 'NE at ~6 to 7 cm/year',
    boundary: 'Convergent Collision (Sundaland Subduction & Himalayas)',
    features: 'Himalayan Convergence Front, Java Trench, Australian Shield',
    description: 'Moving rapidly northward toward Asia. The collision drives high seismic activity across Indonesia, New Zealand, and northern India.',
    sourceUrl: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html'
  },
  {
    id: 'antarctic',
    name: 'Antarctic Plate',
    type: 'Mixed',
    movement: 'S-SE at ~1 cm/year',
    boundary: 'Divergent Oceans (Surrounded by Oceanic Ridges)',
    features: 'Antarctic Continent, Transantarctic Mountains, Kerguelen Plateau',
    description: 'Surrounded almost entirely by spreading ocean ridges. It carries the continent of Antarctica and is almost completely covered in 2-mile thick polar ice sheets.',
    sourceUrl: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html'
  }
];

export const EarthTectonicPlates: React.FC = () => {
  const [selectedPlateId, setSelectedPlateId] = useState<string>('pacific');

  const dynamicSystems = [
    {
      name: "🌋 Volcanoes",
      desc: "Magma plumes and subduction volcanic arcs continuously build new land and release atmospheric gases.",
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      metric: ">1,500 Active Volcanoes"
    },
    {
      name: "🌊 Ocean Currents",
      desc: "Global thermohaline conveyor belt redistributes heat from the equator to polar ice caps.",
      icon: <Waves className="w-5 h-5 text-cyan-500" />,
      metric: "100 Million m³/s Gulf Stream"
    },
    {
      name: "🌪️ Storms",
      desc: "Atmospheric heat engines drive cyclones, hurricanes, and jet stream circulation.",
      icon: <Wind className="w-5 h-5 text-indigo-400" />,
      metric: "99.99997% Below 100km"
    },
    {
      name: "🏔️ Tectonic Plates",
      desc: "Rigid lithospheric plates drift across the viscous mantle, raising mountains and causing earthquakes.",
      icon: <Mountain className="w-5 h-5 text-emerald-500" />,
      metric: "2 to 10 cm / year Drift"
    }
  ];

  const currentPlate = TECTONIC_PLATES.find(p => p.id === selectedPlateId)!;

  return (
    <div className="space-y-10">
      
      {/* 🌋 SECTION 1: EARTH IS ALIVE DYNAMIC SYSTEMS */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
              <Activity className="w-3.5 h-3.5 text-amber-500" />
              <span>EARTH IS NOT STATIC</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Earth Is Alive — Four Dynamic Planetary Systems
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Earth surface is continuously reshaped by volcanism, thermohaline ocean conveyor currents, atmospheric heat engines, and continental drift.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dynamicSystems.map((sys, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3 shadow-sm hover:border-amber-500/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10">
                  {sys.icon}
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                  {sys.metric}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                {sys.name}
              </h3>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-300 leading-relaxed">
                {sys.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🧩 SECTION 2: INTERACTIVE TECTONIC PLATES GLOBE & SELECTOR */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
              <Mountain className="w-3.5 h-3.5 text-emerald-500" />
              <span>USGS TECTONIC DYNAMICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Interactive Major Tectonic Plates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Click a major tectonic plate to inspect drift velocity, boundary type, and geological features.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30">
            Drift Velocity: 2 to 10 cm / year
          </span>
        </div>

        {/* Plate Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 font-mono text-xs">
          {TECTONIC_PLATES.map((plate) => (
            <button
              key={plate.id}
              onClick={() => setSelectedPlateId(plate.id)}
              className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between space-y-1 ${
                selectedPlateId === plate.id
                  ? 'bg-emerald-600 dark:bg-emerald-500/20 text-white dark:text-emerald-300 border-emerald-600 dark:border-emerald-500/50 shadow-md font-bold'
                  : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-emerald-500/40'
              }`}
            >
              <span className="text-[10px] text-emerald-400 uppercase font-semibold">{plate.type}</span>
              <span className="font-display text-xs font-extrabold truncate">{plate.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Plate Detail Inspector */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-slate-900/90 space-y-5 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                {currentPlate.type} LITHOSPHERIC PLATE
              </span>
              <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white mt-0.5">
                {currentPlate.name}
              </h3>
            </div>
            <a
              href={currentPlate.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 transition-all self-start sm:self-auto"
            >
              <span>USGS Plate Dynamics</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="bg-slate-100 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-semibold">Drift Movement Speed</span>
              <div className="font-bold text-emerald-600 dark:text-emerald-400 font-sans">{currentPlate.movement}</div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-semibold">Boundary Classification</span>
              <div className="font-bold text-slate-900 dark:text-white font-sans">{currentPlate.boundary}</div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-semibold">Major Geologic Features</span>
              <div className="font-bold text-slate-900 dark:text-white font-sans">{currentPlate.features}</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
            {currentPlate.description}
          </p>
        </div>
      </section>

    </div>
  );
};
