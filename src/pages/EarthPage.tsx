import React, { useState, useEffect, useRef } from 'react';
import {
  EARTH_51_FACTS,
  EARTH_CATEGORIES,
  TOP_15_FEATURED_WOW_FACTS,
  OFFICIAL_SOURCE_LIBRARY,
  type EarthCategory,
} from '../data/earthFacts';
import { Earth3DCanvas } from '../components/Earth3DCanvas';
import { EarthGeographicMap } from '../components/EarthGeographicMap';
import { EarthOrbitSimulation } from '../components/EarthOrbitSimulation';
import { EarthMoonPhases } from '../components/EarthMoonPhases';
import { SourceBadge } from '../components/SourceBadge';
import { planetsData } from '../data/planetsData';
import { EarthSatelliteControlRoom } from '../components/EarthSatelliteControlRoom';
import { EarthDeepOceanGallery } from '../components/EarthDeepOceanGallery';
import { EarthTectonicPlates } from '../components/EarthTectonicPlates';
import { EarthTimelineSlider } from '../components/EarthTimelineSlider';
import { EarthBeforeAfterSlider } from '../components/EarthBeforeAfterSlider';
import { EarthDiscoveryGame } from '../components/EarthDiscoveryGame';
import { EarthDataWall } from '../components/EarthDataWall';
import {
  Globe,
  Zap,
  Compass,
  Search,
  ExternalLink,
  ShieldCheck,
  Star,
  Activity,
  Sun,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
  Mountain,
  Flame,
  Award,
  BookOpen,
} from 'lucide-react';

export const EarthPage: React.FC = () => {
  const earthData = planetsData.find((p) => p.id === 'earth')!;

  // Section refs for smooth scrolling
  const controlRoomRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 1. Featured Spotlight Carousel state
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [isPlayingSpotlight, setIsPlayingSpotlight] = useState(true);

  useEffect(() => {
    if (!isPlayingSpotlight) return;
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % TOP_15_FEATURED_WOW_FACTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlayingSpotlight]);

  // 2. Motion Hierarchy state
  const [selectedMotionIndex, setSelectedMotionIndex] = useState(2);
  const motionHierarchies = [
    { name: "Human Walking", speed: "5 km/h", rawSpeed: 5, desc: "Standard human walking speed on Earth surface." },
    { name: "Earth Rotation (Equator)", speed: "1,670 km/h (1,000 mph)", rawSpeed: 1670, desc: "Surface spin speed at the equator completing one rotation per 23h 56m 4s." },
    { name: "Earth Solar Orbit", speed: "107,182 km/h (29.78 km/s)", rawSpeed: 107182, desc: "Earth orbital speed traveling around the Sun (940 million km per year)." },
    { name: "Solar System Galactic Orbit", speed: "792,000 km/h", rawSpeed: 792000, desc: "Sun & planets orbiting the center of the Milky Way galaxy." },
    { name: "Milky Way Cosmic Motion", speed: "2,100,000 km/h", rawSpeed: 2100000, desc: "Motion relative to the Cosmic Microwave Background radiation." }
  ];

  // 3. Cosmic Address Hierarchy
  const cosmicAddress = [
    { level: "1. YOU", detail: "Observing on Earth surface" },
    { level: "2. Earth", detail: "3rd terrestrial planet in Solar System" },
    { level: "3. Solar System", detail: "Orion Arm of Milky Way galaxy" },
    { level: "4. Milky Way", detail: "Barred spiral galaxy (~100,000 ly across)" },
    { level: "5. Local Group", detail: "Cluster of 54+ galaxies including Andromeda" },
    { level: "6. Laniakea Supercluster", detail: "100,000+ galaxies spanning 520 million ly" },
    { level: "7. Observable Universe", detail: "93 billion light-years sphere" }
  ];

  // 4. Earth-Sun Light Travel state
  const [sunSeasonMode, setSunSeasonMode] = useState<'average' | 'perihelion' | 'aphelion'>('average');
  const sunDistances = {
    average: { dist: "149.6 Million km", time: "8 min 20 sec (501s)", detail: "1 Astronomical Unit (AU)" },
    perihelion: { dist: "147.1 Million km (January)", time: "8 min 11 sec (491s)", detail: "Closest approach to the Sun" },
    aphelion: { dist: "152.1 Million km (July)", time: "8 min 27 sec (507s)", detail: "Furthest distance from the Sun" }
  };

  // 5. Earth-Moon Recession & Stacking state
  const [showPlanetStacking, setShowPlanetStacking] = useState(false);

  // 6. Earth Interior Cutaway state
  const [selectedInteriorLayer, setSelectedInteriorLayer] = useState(0);
  const interiorLayers = [
    {
      name: "Crust",
      depth: "0 - 35 km",
      temp: "0°C - 700°C",
      state: "Solid Granitic & Basaltic Rock",
      comp: "Silicon, Oxygen, Aluminum, Iron",
      desc: "Earth outermost brittle tectonic shell, continuously recycled by subduction zones and mid-ocean spreading ridges.",
      source: "USGS Geologic Division",
      url: "https://pubs.usgs.gov/gip/geotime/age.html"
    },
    {
      name: "Mantle",
      depth: "35 - 2,890 km",
      temp: "1,000°C - 3,700°C",
      state: "Viscous Solid Silicate Rock",
      comp: "Peridotite, Magnesium, Iron, Silicates",
      desc: "Makes up ~84% of Earth volume. Convection currents in the asthenosphere drive continental drift and volcanic activity.",
      source: "USGS Geophysics",
      url: "https://pubs.usgs.gov/gip/geotime/age.html"
    },
    {
      name: "Outer Core",
      depth: "2,890 - 5,150 km",
      temp: "4,000°C - 5,000°C",
      state: "Liquid Fluid Iron & Nickel",
      comp: "Liquid Iron (~85%), Nickel (~10%), Sulfur/Oxygen",
      desc: "Turbulent convective motion of conductive liquid metal generates Earth magnetosphere via the self-exciting geodynamo effect.",
      source: "NASA Magnetosphere Division",
      url: "https://science.nasa.gov/science-research/earth-science/earths-magnetosphere-protecting-our-planet-from-harmful-space-energy/"
    },
    {
      name: "Inner Core",
      depth: "5,150 - 6,371 km",
      temp: "~5,400°C (Matches Sun Surface)",
      state: "Solid Crystalline Metal Alloy",
      comp: "Solid Crystalline Iron-Nickel Alloy",
      desc: "Under 3.5 million atmospheres of pressure, extreme center pressure keeps the iron solid despite matching the Sun photosphere temperature.",
      source: "USGS & NASA Earth Science",
      url: "https://pubs.usgs.gov/gip/geotime/age.html"
    }
  ];

  // 7. Mountain Ranges Comparison Data
  const mountainRanges = [
    { name: "Himalayas", length: "2,400 km", widthPct: 15, color: "#38bdf8" },
    { name: "Rockies", length: "4,800 km", widthPct: 30, color: "#fbbf24" },
    { name: "Andes", length: "7,000 km", widthPct: 45, color: "#a855f7" },
    { name: "Global Mid-Ocean Ridge (Underwater)", length: "65,000 km (4x All Three Combined!)", widthPct: 100, color: "#10b981" }
  ];

  // 8. Earth Scale comparison state
  const [scaleMode, setScaleMode] = useState<'visual' | 'trueRelative'>('visual');

  // 9. Catalog state
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'All' | EarthCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered51Facts = EARTH_51_FACTS.filter((fact) => {
    const matchesCategory = activeCategoryFilter === 'All' || fact.category === activeCategoryFilter;
    const matchesSearch =
      !searchQuery ||
      fact.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fact.shortFact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fact.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* 🚀 1. CINEMATIC HERO SECTION: "THIS IS WHERE YOU ARE" */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/50 text-slate-900 dark:text-white relative overflow-hidden shadow-2xl space-y-8 animate-fade-in-up">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
              <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>THIS IS WHERE YOU ARE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-900 dark:text-white mt-2 leading-tight">
              Digital Twin of Earth
            </h1>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-sans max-w-3xl mt-1 leading-relaxed">
              You are standing on a planet moving through space at more than 100,000 km/h. Investigate Earth through NASA satellite telemetry, NOAA deep-ocean bathymetry, and USGS paleoclimate geology.
            </p>
          </div>

          <SourceBadge sources={earthData.sources} />
        </div>

        {/* 3D Photorealistic Interactive Earth Globe */}
        <Earth3DCanvas interactiveControls={true} className="w-full h-[520px] sm:h-[640px]" />

        {/* Live Planetary Telemetry Counters Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs relative z-10 pt-2 border-t border-slate-200 dark:border-white/10">
          <div className="bg-slate-100 dark:bg-white/5 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase block font-semibold">Age of Earth</span>
            <span className="text-amber-700 dark:text-amber-300 font-extrabold text-sm sm:text-base font-display">4.54 BILLION YRS</span>
          </div>

          <div className="bg-slate-100 dark:bg-white/5 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase block font-semibold">Equatorial Diameter</span>
            <span className="text-cyan-700 dark:text-cyan-300 font-extrabold text-sm sm:text-base font-display">12,756 KM</span>
          </div>

          <div className="bg-slate-100 dark:bg-white/5 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase block font-semibold">Natural Satellites</span>
            <span className="text-purple-700 dark:text-purple-300 font-extrabold text-sm sm:text-base font-display">1 MOON</span>
          </div>

          <div className="bg-slate-100 dark:bg-white/5 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase block font-semibold">Global Ocean Surface</span>
            <span className="text-emerald-700 dark:text-emerald-300 font-extrabold text-sm sm:text-base font-display">71% OCEAN</span>
          </div>

          <div className="bg-slate-100 dark:bg-white/5 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center col-span-2 sm:col-span-1">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase block font-semibold">Human Biosphere</span>
            <span className="text-indigo-700 dark:text-indigo-300 font-extrabold text-sm sm:text-base font-display">8 BILLION+</span>
          </div>
        </div>

        {/* Hero Quick Navigation CTA Buttons */}
        <div className="flex flex-wrap gap-3 pt-2 relative z-10 justify-center sm:justify-start">
          <button
            onClick={() => scrollToRef(controlRoomRef)}
            className="px-5 py-3 rounded-2xl text-xs font-mono font-bold bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 hover:bg-cyan-500 transition-all shadow-lg flex items-center gap-1.5"
          >
            <span>See Earth From Space 🛰️</span>
          </button>

          <button
            onClick={() => scrollToRef(timelineRef)}
            className="px-5 py-3 rounded-2xl text-xs font-mono font-bold bg-purple-100 dark:bg-purple-600/40 text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-500/40 hover:bg-purple-200 dark:hover:bg-purple-600/60 transition-all flex items-center gap-1.5"
          >
            <span>Enter 4.5 Billion Years 🕰️</span>
          </button>
        </div>

      </section>

      {/* 🛰️ 2. EARTH FROM SPACE & EYES ON EARTH (CONTROL ROOM) */}
      <div ref={controlRoomRef}>
        <EarthSatelliteControlRoom />
      </div>

      {/* 🎬 3. FEATURED CINEMATIC SPOTLIGHT: "WAIT... EARTH DOES THAT?" */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-slate-950 dark:to-cyan-950/40 text-slate-900 dark:text-white relative overflow-hidden shadow-2xl space-y-6">
        
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-800 dark:text-amber-300">
            <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 animate-bounce" />
            <span>TOP FEATURED DISCOVERY SPOTLIGHT</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlayingSpotlight(!isPlayingSpotlight)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-xs font-mono transition-all"
              title={isPlayingSpotlight ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlayingSpotlight ? <Volume2 className="w-4 h-4 text-cyan-600 dark:text-cyan-300" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>
            <button
              onClick={() => setSpotlightIndex((prev) => (prev === 0 ? TOP_15_FEATURED_WOW_FACTS.length - 1 : prev - 1))}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-white transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-300 font-bold px-1">
              {spotlightIndex + 1} / {TOP_15_FEATURED_WOW_FACTS.length}
            </span>
            <button
              onClick={() => setSpotlightIndex((prev) => (prev + 1) % TOP_15_FEATURED_WOW_FACTS.length)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-white transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Spotlight Active Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 py-2">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest font-bold">
              UNIVERSEFACT FEATURED SPOTLIGHT
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white leading-tight">
              {TOP_15_FEATURED_WOW_FACTS[spotlightIndex].title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
              "{TOP_15_FEATURED_WOW_FACTS[spotlightIndex].shortFact}"
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              {TOP_15_FEATURED_WOW_FACTS[spotlightIndex].explanation}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <span className="bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-xl text-amber-800 dark:text-amber-300 font-bold">
                Category: {TOP_15_FEATURED_WOW_FACTS[spotlightIndex].category}
              </span>
              <a
                href={TOP_15_FEATURED_WOW_FACTS[spotlightIndex].sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-700 dark:text-cyan-300 hover:underline font-bold transition-colors"
              >
                <span>Source: {TOP_15_FEATURED_WOW_FACTS[spotlightIndex].sourceName}</span>
                <ExternalLink className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
              <img
                src={TOP_15_FEATURED_WOW_FACTS[spotlightIndex].imageUrl}
                alt={TOP_15_FEATURED_WOW_FACTS[spotlightIndex].title}
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-slate-300 bg-slate-950/80 p-2 rounded-lg border border-white/10 truncate">
                📷 {TOP_15_FEATURED_WOW_FACTS[spotlightIndex].imageCaption}
              </span>
            </div>
          </div>

        </div>

        {/* Slide Progress Indicator */}
        <div className="flex gap-1.5 pt-2">
          {TOP_15_FEATURED_WOW_FACTS.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setSpotlightIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                spotlightIndex === idx ? 'w-10 bg-cyan-400' : 'w-3 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ⭐ 4. THE 15 "WOW" FEATURED FACTS GRID */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>PROMINENTLY FEATURED HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            The 15 Top "WOW" Facts About Earth
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-3xl">
            These 15 extraordinary discoveries redefine how we view our home world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOP_15_FEATURED_WOW_FACTS.map((fact, idx) => (
            <div
              key={fact.id}
              className="glass-panel rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col justify-between bg-white/80 dark:bg-slate-900/60 shadow-md hover:border-amber-500/50 transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={fact.imageUrl}
                  alt={fact.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-mono font-extrabold text-[11px] px-2.5 py-0.5 rounded-full shadow">
                  WOW #{idx + 1}
                </span>
                <span className="absolute bottom-2 left-3 right-3 text-[10px] font-mono text-slate-300 truncate">
                  {fact.imageCaption}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white leading-snug">
                    {fact.title}
                  </h3>
                  <p className="text-xs font-sans text-slate-600 dark:text-slate-300 leading-relaxed">
                    {fact.shortFact}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <a
                    href={fact.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold hover:underline flex items-center gap-0.5"
                  >
                    <span>{fact.sourceName}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 🌋 5. INTERACTIVE EARTH INTERIOR & APPLE SKIN COMPARISON */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>TRANSPARENT INTERIOR CUTAWAY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              The Hidden Earth — Internal Layer Structure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-0.5">
              Click any internal layer to inspect seismic velocity, composition, and core temperatures.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/30">
            Inner Core Temp: ~5,400°C (Matches Sun Surface!)
          </span>
        </div>

        {/* 🍎 "IF EARTH WERE AN APPLE..." VISUAL RATIO COMPARISON */}
        <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/40 text-slate-900 dark:text-white space-y-3">
          <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider block">
            🍎 "IF EARTH WERE AN APPLE..." VISUAL SCALE RATIO
          </span>
          <p className="text-xs sm:text-sm font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
            Earth crust (0-35 km thick) makes up less than <strong>0.5%</strong> of the planet total radius. If Earth were scaled down to the size of an apple, Earth crust would be <strong>thinner than the skin of the apple!</strong>
          </p>

          <div className="space-y-2 pt-2 font-mono text-xs">
            <div className="flex justify-between text-amber-700 dark:text-amber-300">
              <span>Apple Skin Thickness Ratio</span>
              <span>~0.8% of Radius</span>
            </div>
            <div className="w-full h-3 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-white/10">
              <div className="h-full bg-amber-500 rounded-full w-[8%]" />
            </div>

            <div className="flex justify-between text-cyan-700 dark:text-cyan-300 pt-1">
              <span>Earth Oceanic/Continental Crust Ratio</span>
              <span>~0.5% of Radius (35 km / 6,371 km)</span>
            </div>
            <div className="w-full h-3 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-white/10">
              <div className="h-full bg-cyan-500 rounded-full w-[5%]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-5 space-y-2">
            {interiorLayers.map((layer, idx) => (
              <button
                key={layer.name}
                onClick={() => setSelectedInteriorLayer(idx)}
                className={`w-full p-4 rounded-xl text-left font-mono transition-all flex items-center justify-between border ${
                  selectedInteriorLayer === idx
                    ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/50 shadow-md font-bold'
                    : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-amber-500/40'
                }`}
              >
                <div>
                  <span className="block text-sm font-bold font-display">{layer.name}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Depth: {layer.depth}</span>
                </div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400">{layer.temp}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-slate-900/90 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                  {interiorLayers[selectedInteriorLayer].name}
                </h3>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  {interiorLayers[selectedInteriorLayer].state}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-semibold">Depth Range</span>
                  <strong className="text-slate-900 dark:text-white text-sm">{interiorLayers[selectedInteriorLayer].depth}</strong>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-semibold">Temperature</span>
                  <strong className="text-amber-600 dark:text-amber-400 text-sm">{interiorLayers[selectedInteriorLayer].temp}</strong>
                </div>
              </div>

              <div className="text-xs font-mono pt-2">
                <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-semibold">Chemical Composition</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{interiorLayers[selectedInteriorLayer].comp}</span>
              </div>

              <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
                {interiorLayers[selectedInteriorLayer].desc}
              </p>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex justify-end">
                <a
                  href={interiorLayers[selectedInteriorLayer].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 font-semibold"
                >
                  <span>Source: {interiorLayers[selectedInteriorLayer].source}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🌊 6. DEEP OCEAN EXPEDITION & GALLERY */}
      <EarthDeepOceanGallery />

      {/* 🏔️ 7. UNDERWATER MID-OCEAN RIDGE VS MOUNTAINS COMPARISON */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Mountain className="w-6 h-6 text-emerald-500" />
              <span>Mountain Ranges Length Comparison</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              The Mid-Ocean Ridge is underwater and four times longer than the Himalayas, Rockies, and Andes combined!
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30">
            Mid-Ocean Ridge: 65,000 km
          </span>
        </div>

        {/* Visual Bar Chart */}
        <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-950 text-white space-y-5">
          {mountainRanges.map((range) => (
            <div key={range.name} className="space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200">{range.name}</span>
                <span className="font-extrabold text-emerald-400">{range.length}</span>
              </div>
              <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden border border-white/10 p-0.5">
                <div
                  className="h-full rounded-full transition-all duration-700 shadow-md"
                  style={{ width: `${range.widthPct}%`, backgroundColor: range.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌋 8. EARTH IS ALIVE & INTERACTIVE TECTONIC PLATES */}
      <EarthTectonicPlates />

      {/* 🕰️ 9. EARTH THROUGH 4.54 BILLION YEARS */}
      <div ref={timelineRef}>
        <EarthTimelineSlider />
      </div>

      {/* 🚀 10. COSMIC MOTION HIERARCHY */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <span>Earth Cosmic Motion Hierarchy</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Select a frame of reference to see how fast you are traveling through space right now.
            </p>
          </div>
          <div className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/30">
            Selected Velocity: {motionHierarchies[selectedMotionIndex].speed}
          </div>
        </div>

        {/* Buttons Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {motionHierarchies.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMotionIndex(idx)}
              className={`p-4 rounded-xl text-left font-mono transition-all flex flex-col justify-between space-y-2 border ${
                selectedMotionIndex === idx
                  ? 'bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border-cyan-600 dark:border-cyan-500/50 shadow-md font-bold'
                  : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-cyan-500/40'
              }`}
            >
              <span className="text-[10px] uppercase opacity-75">{item.name}</span>
              <span className="text-base font-extrabold font-display">{item.speed}</span>
            </button>
          ))}
        </div>

        {/* Visual Progress Bar & Detail Box */}
        <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-slate-900 dark:text-white">{motionHierarchies[selectedMotionIndex].name}</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-extrabold">{motionHierarchies[selectedMotionIndex].speed}</span>
          </div>

          <div className="w-full h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-700 shadow-sm"
              style={{
                width: `${Math.min(100, Math.max(5, (Math.log10(motionHierarchies[selectedMotionIndex].rawSpeed + 1) / Math.log10(2100001)) * 100))}%`
              }}
            />
          </div>

          <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
            {motionHierarchies[selectedMotionIndex].desc}
          </p>
        </div>

        {/* 🌌 NESTED COSMIC ADDRESS DIAGRAM */}
        <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-950 text-white space-y-3">
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            YOUR NESTED COSMIC ADDRESS IN THE UNIVERSE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
            {cosmicAddress.map((step, i) => (
              <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1">
                <span className="font-bold text-cyan-300 block">{step.level}</span>
                <span className="text-[11px] text-slate-400 font-sans block">{step.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ☀️ 11. EARTH + SUN LIGHT TRAVEL SIMULATOR */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sun className="w-6 h-6 text-amber-500" />
              <span>Earth-Sun Distance & Light Travel Time</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Sunlight travels at 299,792 km/s across vacuum space to illuminate Earth.
            </p>
          </div>

          <div className="flex gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-mono">
            <button
              onClick={() => setSunSeasonMode('perihelion')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                sunSeasonMode === 'perihelion' ? 'bg-amber-500 text-white font-bold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Perihelion (Jan)
            </button>
            <button
              onClick={() => setSunSeasonMode('average')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                sunSeasonMode === 'average' ? 'bg-amber-500 text-white font-bold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Average (1 AU)
            </button>
            <button
              onClick={() => setSunSeasonMode('aphelion')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                sunSeasonMode === 'aphelion' ? 'bg-amber-500 text-white font-bold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Aphelion (July)
            </button>
          </div>
        </div>

        {/* Visual Beam Animation */}
        <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-950 text-white space-y-6 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-amber-400 shadow-lg shadow-amber-500/50 animate-pulse" />
              <span className="font-bold text-amber-300">SUN</span>
            </div>

            <div className="text-center">
              <span className="text-slate-400 block text-[10px]">DISTANCE</span>
              <span className="text-amber-400 font-extrabold text-sm">{sunDistances[sunSeasonMode].dist}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-cyan-300">EARTH</span>
              <div className="w-5 h-5 rounded-full bg-cyan-500 shadow-md shadow-cyan-500/50" />
            </div>
          </div>

          <div className="relative w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-300 to-cyan-400 animate-pulse opacity-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-2 border-t border-white/10">
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="text-slate-400 block text-[10px]">PHOTON TRAVEL DURATION</span>
              <strong className="text-amber-300 text-sm block mt-0.5">{sunDistances[sunSeasonMode].time}</strong>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="text-slate-400 block text-[10px]">ORBITAL METRIC</span>
              <strong className="text-cyan-300 text-sm block mt-0.5">{sunDistances[sunSeasonMode].detail}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 🌕 12. EARTH + MOON RECESSION & GEOCORONA ATMOSPHERE */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <span>Earth-Moon Telemetry & Geocorona Atmosphere</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Average separation distance: 384,400 km (~30 Earth diameters).
            </p>
          </div>

          <button
            onClick={() => setShowPlanetStacking(!showPlanetStacking)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              showPlanetStacking
                ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-purple-500'
            }`}
          >
            {showPlanetStacking ? "Hide Planet Stacking View" : "✨ Can All 7 Planets Fit Between Earth & Moon?"}
          </button>
        </div>

        {showPlanetStacking ? (
          <div className="glass-panel p-6 rounded-xl border border-purple-500/40 bg-purple-500/10 dark:bg-purple-950/40 text-slate-900 dark:text-white space-y-4 animate-fade-in-up">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg text-purple-700 dark:text-purple-300">
                Yes! All 7 Other Planets Fit in the Earth-Moon Gap
              </h3>
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold">Gap at Apogee: 405,696 km</span>
            </div>

            <p className="text-xs sm:text-sm font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
              If you line up Mercury (4,879km), Venus (12,104km), Mars (6,779km), Jupiter (139,822km), Saturn (116,460km), Uranus (50,724km), and Neptune (49,244km) edge-to-edge, their combined diameters total <strong>380,012 km</strong>—fitting inside the 384,400 km Earth-Moon gap with 4,388 km to spare!
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono pt-2 border-t border-purple-500/30">
              <span className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-800 dark:text-purple-200 font-bold">Mercury</span>
              <span className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-800 dark:text-purple-200 font-bold">Venus</span>
              <span className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-800 dark:text-purple-200 font-bold">Mars</span>
              <span className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-800 dark:text-purple-200 font-bold">Jupiter</span>
              <span className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-800 dark:text-purple-200 font-bold">Saturn</span>
              <span className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-800 dark:text-purple-200 font-bold">Uranus</span>
              <span className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-800 dark:text-purple-200 font-bold">Neptune</span>
            </div>
          </div>
        ) : (
          <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-950 text-white space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-cyan-300 font-bold">Earth (12,742 km)</span>
              <span className="text-amber-400 font-bold">Lunar Recession: ~3.8–4 cm / year</span>
              <span className="text-slate-300 font-bold">Moon (3,474 km)</span>
            </div>

            <div className="relative w-full h-8 bg-slate-900 rounded-xl overflow-hidden border border-white/10 flex items-center justify-between px-4">
              <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/50 flex-shrink-0" />
              <div className="flex-1 border-b-2 border-dashed border-cyan-500/40 mx-4 relative">
                <span className="absolute left-1/2 -top-5 transform -translate-x-1/2 text-[10px] font-mono text-cyan-400 font-bold">
                  384,400 km (~30 Earth Diameters)
                </span>
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-slate-300 shadow-md shadow-white/50 flex-shrink-0" />
            </div>

            {/* Geocorona Callout */}
            <div className="bg-cyan-950/40 p-4 rounded-xl border border-cyan-500/30 font-mono text-xs space-y-1">
              <span className="text-cyan-400 font-bold block">🌌 GEOCORONA ATMOSPHERE DISCOVERY (ESA/NASA SOHO)</span>
              <p className="text-slate-300 font-sans text-xs leading-relaxed">
                Earth outermost sparse hydrogen atmosphere cloud (geocorona) extends out to <strong>~629,300 km</strong>—meaning the Moon actually orbits inside Earth hydrogen cloud envelope!
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 📏 13. EARTH SCALE COMPARISON */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Maximize2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <span>Comparative Scale Simulator</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Toggle between visual card scale and mathematically accurate relative dimensions.
            </p>
          </div>

          <div className="flex gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-mono">
            <button
              onClick={() => setScaleMode('visual')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                scaleMode === 'visual' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Visual Scale Card
            </button>
            <button
              onClick={() => setScaleMode('trueRelative')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                scaleMode === 'trueRelative' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              True Relative Scale
            </button>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-950 text-white flex flex-col md:flex-row items-center justify-around gap-6 text-center font-mono">
          
          <div className="space-y-2 flex flex-col items-center">
            <div
              className="rounded-full bg-slate-300 shadow-md transition-all duration-500"
              style={{
                width: scaleMode === 'trueRelative' ? '12px' : '48px',
                height: scaleMode === 'trueRelative' ? '12px' : '48px',
              }}
            />
            <span className="text-xs font-bold text-slate-300">Moon</span>
            <span className="text-[10px] text-slate-400 block">Diameter: 3,474 km (0.27x Earth)</span>
          </div>

          <div className="space-y-2 flex flex-col items-center">
            <div
              className="rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 transition-all duration-500"
              style={{
                width: scaleMode === 'trueRelative' ? '44px' : '72px',
                height: scaleMode === 'trueRelative' ? '44px' : '72px',
              }}
            />
            <span className="text-xs font-bold text-cyan-300">Earth</span>
            <span className="text-[10px] text-slate-400 block">Diameter: 12,742 km (1.00x Earth)</span>
          </div>

          <div className="space-y-2 flex flex-col items-center">
            <div
              className="rounded-full bg-amber-400 shadow-xl shadow-amber-500/50 transition-all duration-500"
              style={{
                width: scaleMode === 'trueRelative' ? '280px' : '120px',
                height: scaleMode === 'trueRelative' ? '280px' : '120px',
              }}
            />
            <span className="text-xs font-bold text-amber-300">Sun</span>
            <span className="text-[10px] text-slate-400 block">Diameter: 1,392,700 km (109x Earth)</span>
          </div>

        </div>
      </section>

      {/* 🛰️ 14. BEFORE AND AFTER SATELLITE COMPARISONS & HOW DO WE KNOW */}
      <EarthBeforeAfterSlider />

      {/* 🎮 15. EARTH DISCOVERY GAME & MYTH VS REALITY */}
      <EarthDiscoveryGame />

      {/* 📖 16. COMPLETE 51 UNIVERSEFACT EARTH CATALOG WITH IMAGES */}
      <section className="space-y-6 pt-4">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>51 UNIVERSEFACT SCIENTIFIC DISCOVERIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            51 Things About Earth That Sound Fake — But Are True
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
            Every discovery below is verified by peer-reviewed measurements from NASA, NOAA, USGS, and ESA. Filter by category or search below.
          </p>
        </div>

        {/* Search Bar & 16 Category Filters */}
        <div className="space-y-4">
          
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 51 Earth facts & discoveries..."
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-cyan-500/50 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {EARTH_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategoryFilter === cat
                    ? 'bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border border-cyan-600 dark:border-cyan-500/50 font-bold shadow-sm'
                    : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300'
                }`}
              >
                {cat} {cat === 'All' ? `(${EARTH_51_FACTS.length})` : ''}
              </button>
            ))}
          </div>

        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered51Facts.map((fact) => (
            <div
              key={fact.id}
              className="glass-panel rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col justify-between bg-white/80 dark:bg-slate-900/60 hover:border-cyan-500/40 transition-all shadow-sm"
            >
              
              {/* Card Image Banner */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={fact.imageUrl}
                  alt={fact.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  {fact.category}
                </span>
                <span className="absolute top-3 right-3 text-[11px] font-mono font-semibold text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Status: {fact.scientificStatus}
                </span>
                <span className="absolute bottom-2 left-3 right-3 text-[10px] font-mono text-slate-300 truncate">
                  📷 {fact.imageCaption}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white leading-snug">
                    {fact.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-semibold text-cyan-700 dark:text-cyan-300 leading-relaxed">
                    "{fact.shortFact}"
                  </p>
                </div>

                <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100/80 dark:bg-slate-950/60 space-y-1">
                  <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                    WHY? SCIENTIFIC EXPLANATION
                  </span>
                  <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
                    {fact.explanation}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase mr-1">SURPRISE LEVEL:</span>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < fact.wowLevel ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500">Verified: {fact.lastVerified}</span>
                    <a
                      href={fact.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 transition-all"
                    >
                      <span>{fact.sourceName}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 🌐 17. EARTH DATA WALL & FINALE */}
      <EarthDataWall />

      {/* 📚 18. OFFICIAL SOURCE LIBRARY & FOOTER CITATIONS */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
            <span>OFFICIAL SCIENTIFIC REFERENCE LIBRARY</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            Primary Data Sources & References
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
            Every UniverseFact is cited directly from verified space agency publications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {OFFICIAL_SOURCE_LIBRARY.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 hover:border-cyan-500/50 transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-cyan-700 dark:text-cyan-400 group-hover:text-cyan-300">
                  {item.agency}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white font-sans text-xs group-hover:underline">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Existing Geographic Map Inspector */}
      <EarthGeographicMap />

      {/* Rotation & Orbit Simulator */}
      <EarthOrbitSimulation />

      {/* Earth-Moon Phases */}
      <EarthMoonPhases />

    </div>
  );
};
