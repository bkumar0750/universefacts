import React, { useState } from 'react';
import { Box } from 'lucide-react';
import { SketchfabViewer } from '../components/SketchfabViewer';

import { SolarSystemHero } from '../components/solarSystem/SolarSystemHero';
import { SolarSystemArchitecture } from '../components/solarSystem/SolarSystemArchitecture';
import { SolarSystemZoomOut } from '../components/solarSystem/SolarSystemZoomOut';
import { SolarScaleSimulator } from '../components/solarSystem/SolarScaleSimulator';
import { SunSection } from '../components/solarSystem/SunSection';
import { PlanetaryJourney } from '../components/solarSystem/PlanetaryJourney';
import { WorldComparator } from '../components/solarSystem/WorldComparator';
import { InterstellarAndNEOExplorer } from '../components/solarSystem/InterstellarAndNEOExplorer';
import { DwarfPlanetsAndKuiperBelt } from '../components/solarSystem/DwarfPlanetsAndKuiperBelt';
import { CometsAsteroidsResonance } from '../components/solarSystem/CometsAsteroidsResonance';
import { LagrangeAndEclipses } from '../components/solarSystem/LagrangeAndEclipses';
import { MeteorsAndCometsLab } from '../components/solarSystem/MeteorsAndCometsLab';
import { OrbitalResonanceLab } from '../components/solarSystem/OrbitalResonanceLab';
import { GalacticJourneyAndSpeed } from '../components/solarSystem/GalacticJourneyAndSpeed';
import { SpaceEngineeringAndAudio } from '../components/solarSystem/SpaceEngineeringAndAudio';
import { SpaceWeatherAndMagnetosphere } from '../components/solarSystem/SpaceWeatherAndMagnetosphere';
import { OceanWorldsAndLifeSearch } from '../components/solarSystem/OceanWorldsAndLifeSearch';
import { ThermalAndGravityWell } from '../components/solarSystem/ThermalAndGravityWell';
import { SolarSystemMissions } from '../components/solarSystem/SolarSystemMissions';
import { SolarSystemCalculators } from '../components/solarSystem/SolarSystemCalculators';
import { DiscoveryMapAndImageLibrary } from '../components/solarSystem/DiscoveryMapAndImageLibrary';
import { SolarSystemMysteriesAndFacts } from '../components/solarSystem/SolarSystemMysteriesAndFacts';

const SOLAR_SYSTEM_MODELS = [
  {
    id: 'cc8f98fcdde041208b22597ea9293f9d',
    title: 'Sistema Solar Orbital',
    description: 'Full orbital simulation of the Solar System with planetary motion',
    credit: 'Sketchfab Community',
  },
  {
    id: '779eee9d756b4cb7be84f0073fc1985f',
    title: 'The Solar System',
    description: 'Detailed 3D representation of all planets in the Solar System',
    credit: 'Sketchfab Community',
  },
  {
    id: 'e1448a9bebb449dea6c11f7e42021594',
    title: 'Solar System Background',
    description: 'Atmospheric solar system background 3D scene',
    credit: 'Sketchfab Community',
  },
  {
    id: '55d3231f568440e9bb38757313ca5f65',
    title: "Parker Solar Probe — Sun's Kisser",
    description: "NASA's historic solar probe — closest spacecraft to ever reach the Sun",
    credit: 'NASA / Sketchfab',
  },
];

export const SolarSystemPage: React.FC = () => {
  const [activeModel, setActiveModel] = useState(0);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRandomWorld = () => {
    const ids = [
      'sun-section',
      'planetary-journey',
      'architecture-map',
      'dwarf-planets',
      'small-bodies',
      'compare-worlds',
      'interstellar-and-neo',
      'ocean-worlds-and-life'
    ];
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    scrollToId(randomId);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* ☀️ 1. HERO SECTION WITH LOGARITHMIC ORBITS */}
      <SolarSystemHero
        onExploreClick={() => scrollToId('planetary-journey')}
        onSunClick={() => scrollToId('sun-section')}
        onRandomWorldClick={handleRandomWorld}
      />

      {/* 🧭 2. SYSTEM ARCHITECTURE ATLAS */}
      <SolarSystemArchitecture />

      {/* 🔍 3. CONTINUOUS ZOOM-OUT EXPERIENCE */}
      <SolarSystemZoomOut />

      {/* 📐 4. REAL SCALE VS VISUAL SCALE SIMULATOR */}
      <SolarScaleSimulator />

      {/* ☀️ 5. THE SUN (SOL) DEDICATED EXPEDITION */}
      <SunSection />

      {/* 🪐 6. THE 8 MAJOR PLANETS JOURNEY */}
      <PlanetaryJourney />

      {/* 📊 7. COMPARE WORLDS SIDE-BY-SIDE */}
      <WorldComparator />

      {/* ☄️ 8. INTERSTELLAR VISITORS & NEAR-EARTH OBJECTS & DART */}
      <InterstellarAndNEOExplorer />

      {/* ♇ 9. DWARF PLANETS & KUIPER BELT */}
      <DwarfPlanetsAndKuiperBelt />

      {/* ☄️ 10. COMETS, ASTEROIDS & RESONANCE */}
      <CometsAsteroidsResonance />

      {/* ⚖️ 11. LAGRANGE POINTS & ECLIPSES */}
      <LagrangeAndEclipses />

      {/* 🌠 12. METEOR PIPELINE & PLANETARY RINGS */}
      <MeteorsAndCometsLab />

      {/* 🌀 13. ORBITAL RESONANCE LAB */}
      <OrbitalResonanceLab />

      {/* 🌌 14. GALACTIC JOURNEY & SPEED CALCULATOR */}
      <GalacticJourneyAndSpeed />

      {/* 📡 15. DEEP SPACE TELEMETRY & DATA SONIFICATION */}
      <SpaceEngineeringAndAudio />

      {/* 🌡️ 16. SPACE WEATHER & MAGNETOSPHERES */}
      <SpaceWeatherAndMagnetosphere />

      {/* 🌊 17. OCEAN WORLDS & SEARCH FOR LIFE */}
      <OceanWorldsAndLifeSearch />

      {/* 🌡️ 18. THERMAL PROFILE & GRAVITY WELL */}
      <ThermalAndGravityWell />

      {/* 🚀 19. HISTORIC MISSIONS & SYSTEM EDGE */}
      <SolarSystemMissions />

      {/* 🧮 20. SOLAR SYSTEM CALCULATORS & PHYSICS */}
      <SolarSystemCalculators />

      {/* 3D SKETCHFAB INTERACTIVE MODEL EXPLORER */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-500/10 border border-violet-500/30 text-violet-700 dark:text-violet-300">
              <Box className="w-3.5 h-3.5" />
              <span>HANDS-ON 3D GRAPHICS · SKETCHFAB</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
              Photorealistic 3D Model Explorer
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Pan, rotate, and examine interactive solar models and space probes in real-time.
            </p>
          </div>
        </div>

        {/* Model Tabs */}
        <div className="flex flex-wrap gap-2">
          {SOLAR_SYSTEM_MODELS.map((model, idx) => (
            <button
              key={model.id}
              onClick={() => setActiveModel(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                activeModel === idx
                  ? 'bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border-cyan-600 dark:border-cyan-500/60 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-cyan-500/40'
              }`}
            >
              {model.title}
            </button>
          ))}
        </div>

        {/* Viewer */}
        <div className="animate-scale-in">
          <SketchfabViewer
            modelId={SOLAR_SYSTEM_MODELS[activeModel].id}
            title={SOLAR_SYSTEM_MODELS[activeModel].title}
            description={SOLAR_SYSTEM_MODELS[activeModel].description}
            credit={SOLAR_SYSTEM_MODELS[activeModel].credit}
            height="h-[480px] sm:h-[600px]"
          />
        </div>
      </section>

      {/* 🔭 21. DISCOVERY MAP, RECORDS & OFFICIAL NASA GALLERY */}
      <DiscoveryMapAndImageLibrary />

      {/* 🧪 22. ASTROBIOLOGY, MYTHS & 30+ WOW FACTS */}
      <SolarSystemMysteriesAndFacts />

    </div>
  );
};
