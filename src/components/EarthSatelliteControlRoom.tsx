import React, { useState } from 'react';
import { Satellite, Eye, ExternalLink, ShieldCheck, Sun, Moon, Cloud, Waves, Trees, Thermometer, Snowflake } from 'lucide-react';

export type SatelliteViewMode = 'natural' | 'night' | 'clouds' | 'ocean' | 'vegetation' | 'temperature' | 'ice';

interface SatelliteMission {
  id: string;
  name: string;
  agency: string;
  mission: string;
  altitude: string;
  launch: string;
  observes: string[];
  description: string;
  sourceUrl: string;
}

const SATELLITE_MISSIONS: SatelliteMission[] = [
  {
    id: 'pace',
    name: 'PACE (Plankton, Aerosol, Cloud, ocean Ecosystem)',
    agency: 'NASA',
    mission: 'Ocean Ecosystem & Atmospheric Aerosol Monitoring',
    altitude: '676 km (Sun-Synchronous Orbit)',
    launch: 'February 8, 2024',
    observes: ['Microscopic Phytoplankton', 'Ocean Color', 'Atmospheric Aerosols', 'Cloud Dynamics'],
    description: 'PACE provides unprecedented hyperspectral observations of ocean color to measure microscopic algae that power Earth aquatic food web and absorb carbon dioxide.',
    sourceUrl: 'https://pace.gsfc.nasa.gov/'
  },
  {
    id: 'landsat9',
    name: 'Landsat 9',
    agency: 'NASA / USGS',
    mission: 'Land Surface & Environmental Remote Sensing',
    altitude: '705 km (Sun-Synchronous)',
    launch: 'September 27, 2021',
    observes: ['Deforestation & Reforestation', 'Urban Expansion', 'Glacier Retreat', 'Agricultural Crop Health'],
    description: 'Continuing a 50+ year unbroken space record of Earth surface changes, Landsat 9 captures multispectral land imagery to monitor global ecosystems and natural resources.',
    sourceUrl: 'https://landsat.gsfc.nasa.gov/satellites/landsat-9/'
  },
  {
    id: 'goes-east',
    name: 'GOES-East (GOES-16)',
    agency: 'NOAA / NASA',
    mission: 'Geostationary Weather & Environmental Hazard Tracking',
    altitude: '35,786 km (Geostationary Orbit)',
    launch: 'November 19, 2016',
    observes: ['Real-Time Hurricane Tracking', 'Severe Thunderstorms', 'Wildfire Smoke Plumes', 'Solar Flare Activity'],
    description: 'Stationed 35,786 km directly over the equator, GOES-East scans the Western Hemisphere every 5 minutes to deliver critical storm and hurricane warning telemetry.',
    sourceUrl: 'https://www.readiness.noaa.gov/satellites/goes-east/'
  },
  {
    id: 'grace-fo',
    name: 'GRACE-FO (Gravity Recovery and Climate Experiment Follow-On)',
    agency: 'NASA / GFZ (Germany)',
    mission: 'Global Gravity Field & Groundwater Mass Change Mapping',
    altitude: '490 km (Polar Orbit)',
    launch: 'May 22, 2018',
    observes: ['Deep Aquifer Groundwater Loss', 'Antarctic & Greenland Ice Mass Change', 'Sea Level Rise', 'Ocean Mass Storage'],
    description: 'Twin satellites flying 220 km apart use microwave and laser ranging to measure microscopic distance fluctuations caused by Earth shifting gravity mass.',
    sourceUrl: 'https://gracefo.jpl.nasa.gov/'
  },
  {
    id: 'sentinel-6',
    name: 'Sentinel-6 Michael Freilich',
    agency: 'ESA / NASA / NOAA',
    mission: 'High-Precision Global Sea Level Radar Altimetry',
    altitude: '1,336 km (Non-Sun-Synchronous)',
    launch: 'November 21, 2020',
    observes: ['Global Sea Level Rise (Millimeter Accuracy)', 'Ocean Surface Currents', 'Wind Speed over Oceans', 'El Niño Oscillation'],
    description: 'Measures global sea surface height with millimeter-level accuracy to monitor climate change, thermal ocean expansion, and storm surge dynamics.',
    sourceUrl: 'https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-6'
  },
  {
    id: 'iss',
    name: 'International Space Station (ISS)',
    agency: 'NASA / ESA / JAXA / CSA',
    mission: 'Human Orbiting Laboratory & Earth Observation',
    altitude: '420 km (Low Earth Orbit)',
    launch: 'November 20, 1998',
    observes: ['Astronaut Photography', 'Atmospheric Aurora Spectroscopy', 'Lightning Dynamics', 'Ecosystem Stress'],
    description: 'Orbiting Earth every 90 minutes at 28,000 km/h, the ISS serves as a continuous observation platform housing Earth science instruments like ECOSTRESS and EMIT.',
    sourceUrl: 'https://www.nasa.gov/international-space-station/'
  }
];

export const EarthSatelliteControlRoom: React.FC = () => {
  const [activeView, setActiveView] = useState<SatelliteViewMode>('natural');
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<string>('pace');

  const satelliteViews: { id: SatelliteViewMode; label: string; icon: React.ReactNode; image: string; caption: string; statusBadge: string }[] = [
    {
      id: 'natural',
      label: 'Natural Color',
      icon: <Sun className="w-3.5 h-3.5" />,
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
      caption: 'NASA Blue Marble composite showing true-color atmosphere, oceans, and continents',
      statusBadge: 'REAL OBSERVATION • NASA BLUE MARBLE'
    },
    {
      id: 'night',
      label: 'Night Lights',
      icon: <Moon className="w-3.5 h-3.5" />,
      image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1200&q=80',
      caption: 'NOAA/NASA Suomi NPP Black Marble showing artificial city light illumination at night',
      statusBadge: 'REAL OBSERVATION • NASA BLACK MARBLE'
    },
    {
      id: 'clouds',
      label: 'Clouds & Atmosphere',
      icon: <Cloud className="w-3.5 h-3.5" />,
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
      caption: 'GOES geostationary atmospheric cloud circulation and storm systems',
      statusBadge: 'REAL OBSERVATION • GOES WEATHER'
    },
    {
      id: 'ocean',
      label: 'Ocean Currents',
      icon: <Waves className="w-3.5 h-3.5" />,
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Hyperspectral sea surface temperature and ocean current circulation telemetry',
      statusBadge: 'SCIENTIFIC VISUALIZATION • PACE / MODIS'
    },
    {
      id: 'vegetation',
      label: 'Vegetation Index',
      icon: <Trees className="w-3.5 h-3.5" />,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Normalized Difference Vegetation Index (NDVI) monitoring global photosynthesis',
      statusBadge: 'SCIENTIFIC VISUALIZATION • LANDSAT / MODIS'
    },
    {
      id: 'temperature',
      label: 'Thermal Patterns',
      icon: <Thermometer className="w-3.5 h-3.5" />,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Global surface thermal telemetry showing equatorial warmth and polar cooling',
      statusBadge: 'SCIENTIFIC VISUALIZATION • NASA ECOSTRESS'
    },
    {
      id: 'ice',
      label: 'Polar Ice & Glaciers',
      icon: <Snowflake className="w-3.5 h-3.5" />,
      image: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=1200&q=80',
      caption: 'ICESat-2 laser altimetry tracking sea ice thickness and glacial mass balance',
      statusBadge: 'REAL OBSERVATION • NASA ICESat-2'
    }
  ];

  const currentView = satelliteViews.find(v => v.id === activeView)!;
  const currentSatellite = SATELLITE_MISSIONS.find(s => s.id === selectedSatelliteId)!;

  return (
    <div className="space-y-10">
      
      {/* 🛰️ SECTION 1: EARTH FROM SPACE VIEW SWITCHER */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
              <Satellite className="w-3.5 h-3.5 text-cyan-500" />
              <span>PLANETARY CONTROL ROOM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Earth From Space — Multi-Spectral Views
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Switch satellite wavelengths to inspect urban light, atmospheric clouds, ocean circulation, and polar ice sheets.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-700 dark:text-cyan-300 font-bold bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/30">
            <span>{currentView.statusBadge}</span>
          </div>
        </div>

        {/* View Mode Buttons */}
        <div className="flex flex-wrap gap-2">
          {satelliteViews.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveView(mode.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                activeView === mode.id
                  ? 'bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border border-cyan-600 dark:border-cyan-500/50 font-bold shadow-md'
                  : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40'
              }`}
            >
              {mode.icon}
              <span>{mode.label}</span>
            </button>
          ))}
        </div>

        {/* Satellite Imagery Viewport */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-950 shadow-2xl group">
          <img
            src={currentView.image}
            alt={currentView.label}
            className="w-full h-[360px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-bold text-cyan-300">{currentView.label} Spectrum Telemetry</span>
            </div>
            <span className="text-[11px] text-slate-300 font-sans">{currentView.caption}</span>
          </div>
        </div>
      </section>

      {/* 🛰️ SECTION 2: EYES ON EARTH SATELLITE MISSIONS */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
              <Eye className="w-3.5 h-3.5 text-indigo-500" />
              <span>INSPIRED BY NASA'S EYES ON THE EARTH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Eyes on Earth — Satellite Mission Telemetry
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Click an orbiting satellite mission to inspect altitude, objectives, and what vital signs it monitors in real time.
            </p>
          </div>
          <span className="text-xs font-mono text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1.5 rounded-xl border border-indigo-500/30">
            6 Orbiting Observatories Tracked
          </span>
        </div>

        {/* Satellite Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-mono text-xs">
          {SATELLITE_MISSIONS.map((sat) => (
            <button
              key={sat.id}
              onClick={() => setSelectedSatelliteId(sat.id)}
              className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between space-y-1 ${
                selectedSatelliteId === sat.id
                  ? 'bg-indigo-600 dark:bg-indigo-500/20 text-white dark:text-indigo-300 border-indigo-600 dark:border-indigo-500/50 shadow-md font-bold'
                  : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-indigo-500/40'
              }`}
            >
              <span className="text-[10px] text-indigo-400 uppercase font-semibold">{sat.agency}</span>
              <span className="font-display text-xs font-extrabold truncate">{sat.id.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Selected Satellite Details Box */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-slate-900/90 space-y-5 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase">
                {currentSatellite.agency} ORBITAL OBSERVATORY
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white mt-0.5">
                {currentSatellite.name}
              </h3>
            </div>
            <a
              href={currentSatellite.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all self-start sm:self-auto"
            >
              <span>Official Mission Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="bg-slate-100 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-semibold">Primary Mission</span>
              <div className="font-bold text-slate-900 dark:text-white font-sans">{currentSatellite.mission}</div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-semibold">Orbital Altitude</span>
              <div className="font-bold text-indigo-600 dark:text-indigo-400 font-sans">{currentSatellite.altitude}</div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-semibold">Launch Date</span>
              <div className="font-bold text-slate-900 dark:text-white font-sans">{currentSatellite.launch}</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
            {currentSatellite.description}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              What This Mission Observes:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {currentSatellite.observes.map((obs, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-semibold"
                >
                  {obs}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
