import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Compass, Eye } from 'lucide-react';

interface OceanGalleryItem {
  id: string;
  title: string;
  category: 'Bioluminescence' | 'Deep-Sea Animals' | 'Coral' | 'Hydrothermal Vents' | 'Underwater Volcanoes' | 'Seamounts' | 'Deep-Sea Canyons' | 'Shipwrecks';
  depth: string;
  imageUrl: string;
  caption: string;
  explanation: string;
  source: string;
  sourceUrl: string;
}

const OCEAN_GALLERY_ITEMS: OceanGalleryItem[] = [
  {
    id: 'og-1',
    title: 'Hydrothermal Black Smoker Vents',
    category: 'Hydrothermal Vents',
    depth: '2,500 - 3,800 meters',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    caption: 'Superheated mineral fluid erupting at 400°C into freezing ocean water',
    explanation: 'Hydrothermal vents spew mineral-rich fluids at temperatures exceeding 400°C without boiling due to 300 atmospheres of hydrostatic pressure. Chemoautotrophic bacteria turn hydrogen sulfide into biological energy, supporting entire deep-sea ecosystems in zero light.',
    source: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/vents.html'
  },
  {
    id: 'og-2',
    title: 'Deep-Sea Bioluminescent Jellyfish',
    category: 'Bioluminescence',
    depth: '1,000 - 4,000 meters',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    caption: 'Luciferin-luciferase reaction producing blue-green cold light in total darkness',
    explanation: 'Over 75% of deep-sea organisms emit bioluminescence. In the midnight zone, creatures produce cold biochemical light for predator defense, prey attraction, and mate recognition.',
    source: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/bioluminescence.html'
  },
  {
    id: 'og-3',
    title: 'Deep-Water Coral Gardens',
    category: 'Coral',
    depth: '500 - 3,000 meters',
    imageUrl: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80',
    caption: 'Cold-water Lophelia pertusa coral reefs living without sunlight',
    explanation: 'Unlike shallow sunlit coral reefs, deep-sea corals grow in pitch darkness at temperatures as cold as 4°C. They rely entirely on drifting organic particles (marine snow) for nourishment.',
    source: 'NOAA Fisheries',
    sourceUrl: 'https://www.fisheries.noaa.gov/national/habitat-conservation/deep-sea-corals'
  },
  {
    id: 'og-4',
    title: 'Active Submarine Axial Volcano',
    category: 'Underwater Volcanoes',
    depth: '1,500 - 2,500 meters',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
    caption: 'Pillow lava basaltic eruptions on the Juan de Fuca Mid-Ocean Ridge',
    explanation: 'Underwater volcanic eruptions erupt pillow basalt as cold seawater instantly freezes molten lava. NASA and NOAA monitor ocean volcanic vents to understand planetary ocean floor formation.',
    source: 'NOAA PMEL Earth-Ocean Interactions',
    sourceUrl: 'https://www.pmel.noaa.gov/eoi/'
  },
  {
    id: 'og-5',
    title: 'Solitary Deep-Sea Seamounts',
    category: 'Seamounts',
    depth: '800 - 5,000 meters',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    caption: 'Extinct volcanic peaks rising thousands of meters from the abyssal plain',
    explanation: 'Earth oceans contain over 100,000 seamounts higher than 1,000 meters. These underwater mountains accelerate ocean currents, bringing nutrient upwellings that sustain ocean biodiversity hotspots.',
    source: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/seamounts.html'
  },
  {
    id: 'og-6',
    title: 'Deep-Sea Canyons & Abyssal Trenches',
    category: 'Deep-Sea Canyons',
    depth: '3,000 - 10,935 meters',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
    caption: 'Submarine turbidity canyons carving deep into continental slopes',
    explanation: 'Underwater canyons transfer vast sediment avalanches from continental margins into abyssal plains, carving trenches deeper than the Grand Canyon.',
    source: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/canyons.html'
  }
];

export const EarthDeepOceanGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hydrothermal Vents', 'Bioluminescence', 'Coral', 'Underwater Volcanoes', 'Seamounts', 'Deep-Sea Canyons'];

  const filteredItems = selectedCategory === 'All'
    ? OCEAN_GALLERY_ITEMS
    : OCEAN_GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-12">
      
      {/* 🌊 SECTION 1: WE BARELY KNOW OUR OWN OCEAN */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 dark:border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>NOAA EXPLORATION STATISTICAL REVELATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
              We Barely Know Our Own Ocean Floor
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5 max-w-3xl">
              Humanity has mapped the surface of Mars and Venus at higher resolutions than 74% of Earth deep underwater bathymetry.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/20 px-3 py-1.5 rounded-xl border border-cyan-500/40">
            Mapped High-Res: 26.1%
          </span>
        </div>

        {/* Visual Progress Bar Comparison */}
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-cyan-300">
            <span>High-Resolution Seafloor Bathymetric Mapping</span>
            <span className="font-bold">26.1% Mapped</span>
          </div>

          <div className="w-full h-5 bg-slate-900 rounded-full overflow-hidden border border-white/20 flex p-0.5">
            <div className="h-full bg-cyan-400 rounded-l-full shadow-md font-bold text-[10px] text-slate-950 flex items-center justify-center font-mono" style={{ width: '26.1%' }}>
              26.1%
            </div>
            <div className="h-full bg-slate-800 text-slate-400 font-bold text-[10px] flex items-center justify-center font-mono rounded-r-full" style={{ width: '73.9%' }}>
              73.9% UNKNOWN / UNMAPPED
            </div>
          </div>
        </div>

        {/* Official NOAA Quote Box */}
        <div className="glass-panel p-5 rounded-2xl border border-white/10 bg-white/5 space-y-2">
          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
            OFFICIAL NOAA OCEAN EXPLORATION CITATION
          </span>
          <blockquote className="text-xs sm:text-sm font-sans text-slate-200 italic leading-relaxed">
            "Explorers have directly seen less than 0.001% of the deep-ocean seafloor. Huge portions of the global ocean floor remain completely unvisited by human eyes or submersibles."
          </blockquote>
          <div className="flex justify-end pt-1">
            <a
              href="https://oceanexplorer.noaa.gov/ocean-fact/ocean-depth/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-cyan-300 hover:underline"
            >
              <span>Source: NOAA Ocean Exploration Telemetry</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>
        </div>
      </section>

      {/* 🏔️ SECTION 2: DIVE THROUGH EARTH (0m to 10,935m CHALLENGER DEEP) */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
              <Compass className="w-3.5 h-3.5 text-cyan-500" />
              <span>VERTICAL OCEAN DESCENT SIMULATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Dive Through Earth — Ocean Depth & Challenger Deep
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Descend from sunlit surface waters into the crushing darkness of the Mariana Trench.
            </p>
          </div>

          <span className="text-xs font-mono text-cyan-700 dark:text-cyan-300 font-bold bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/30">
            Challenger Deep: 10,935 m (35,876 ft)
          </span>
        </div>

        {/* Vertical Depth Visualizer */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-950 text-white space-y-6">
          <div className="relative border-l-2 border-dashed border-cyan-500/40 pl-6 space-y-8 font-mono text-xs">
            
            {/* 0m */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/50" />
              <span className="text-cyan-300 font-bold block text-sm">0 METERS — OCEAN SURFACE</span>
              <p className="text-slate-400 text-xs font-sans">Sunlight, phytoplanktons, coral reefs, and surface wave dynamics.</p>
            </div>

            {/* 100m */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-cyan-500" />
              <span className="text-cyan-400 font-bold block text-sm">100 METERS — TWILIGHT ZONE BEGINS</span>
              <p className="text-slate-400 text-xs font-sans">Sunlight fades rapidly; 90% of photosynthesis occurs above this line.</p>
            </div>

            {/* 1,000m */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-indigo-500" />
              <span className="text-indigo-300 font-bold block text-sm">1,000 METERS — MIDNIGHT ZONE (TOTAL DARKNESS)</span>
              <p className="text-slate-400 text-xs font-sans">Zero solar light penetrates; bioluminescent creatures dominate this realm.</p>
            </div>

            {/* 4,000m */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-purple-500" />
              <span className="text-purple-300 font-bold block text-sm">4,000 METERS — ABYSSAL PLAIN</span>
              <p className="text-slate-400 text-xs font-sans">Freezing 1°C temperatures and 400 atmospheres of crushing hydrostatic pressure.</p>
            </div>

            {/* 8,848m Everest Marker */}
            <div className="relative bg-amber-500/20 p-3 rounded-xl border border-amber-500/40">
              <div className="absolute -left-[31px] top-3 w-4 h-4 rounded-full bg-amber-400" />
              <span className="text-amber-300 font-extrabold block text-sm">8,848 METERS — MOUNT EVEREST HEIGHT EQUIVALENT</span>
              <p className="text-slate-200 text-xs font-sans">If you inverted Mount Everest and placed it here, its summit would still be submerged under 2 kilometers of ocean water!</p>
            </div>

            {/* 10,935m Challenger Deep */}
            <div className="relative bg-cyan-500/20 p-4 rounded-xl border border-cyan-500/50">
              <div className="absolute -left-[31px] top-4 w-4 h-4 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50" />
              <span className="text-cyan-300 font-black block text-base font-display">10,935 METERS — CHALLENGER DEEP (MARIANA TRENCH)</span>
              <p className="text-slate-200 text-xs font-sans">Deepest known point on Earth. Pressure exceeds 1,086 atmospheres (over 8 tons per square inch).</p>
            </div>

          </div>
        </div>
      </section>

      {/* 🐙 SECTION 3: NOAA DEEP OCEAN MULTIMEDIA GALLERY */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
              <span>OFFICIAL NOAA MULTIMEDIA COLLECTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Deep Ocean Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Explore deep-sea animals, hydrothermal vents, cold corals, and submarine volcanoes mapped by NOAA Okeanos Explorer expeditions.
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border border-cyan-600 dark:border-cyan-500/50 font-bold shadow-md'
                  : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col justify-between bg-white/80 dark:bg-slate-900/60 shadow-md hover:border-cyan-500/40 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 bg-cyan-950/80 text-cyan-300 font-mono font-bold text-[11px] px-2.5 py-1 rounded-full border border-cyan-500/30">
                  {item.category}
                </span>
                <span className="absolute bottom-2 left-3 right-3 text-[10px] font-mono text-slate-300 truncate">
                  📷 {item.caption}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-extrabold text-slate-900 dark:text-white font-display text-base">{item.title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold block">Depth: {item.depth}</span>
                  <p className="text-xs font-sans text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {item.explanation}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-end text-xs font-mono">
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-cyan-600 dark:text-cyan-400 font-bold hover:underline"
                  >
                    <span>Source: {item.source}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
