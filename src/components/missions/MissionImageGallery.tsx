import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { SourceBadge } from '../SourceBadge';

interface GalleryItem {
  id: string;
  title: string;
  category: 'LAUNCH' | 'SPACECRAFT' | 'DESTINATION' | 'SCIENCE' | 'ENGINEERING';
  mission: string;
  agency: 'NASA' | 'ISRO' | 'ESA' | 'JAXA';
  date: string;
  camera: string;
  image: string;
  imageType: 'REAL IMAGE' | 'SCIENTIFIC DATA VISUALIZATION' | 'SIMULATION' | 'ARTIST CONCEPT';
  credit: string;
  sourceUrl: string;
  description: string;
}

export const MissionImageGallery: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('ALL');

  const GALLERY_ITEMS: GalleryItem[] = [
    {
      id: 'jwst-deep-field',
      title: "Webb's First Deep Field (SMACS 0723)",
      category: 'SCIENCE',
      mission: 'James Webb Space Telescope',
      agency: 'NASA',
      date: '11 July 2022',
      camera: 'NIRCam (Near-Infrared Camera)',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Webb%27s_First_Deep_Field.jpg/1024px-Webb%27s_First_Deep_Field.jpg',
      imageType: 'REAL IMAGE',
      credit: 'NASA, ESA, CSA, STScI',
      sourceUrl: 'https://webbtelescope.org/contents/media/images/2022/035/01G7DCWB7137SY7B4Y1G90P2N9',
      description: 'Deepest and sharpest infrared image of the distant universe to date, showing thousands of galaxies including the faintest objects observed in the infrared.'
    },
    {
      id: 'chandrayaan3-landing',
      title: 'Vikram Lander on Lunar South Pole Regolith',
      category: 'DESTINATION',
      mission: 'Chandrayaan-3',
      agency: 'ISRO',
      date: '23 August 2023',
      camera: 'Pragyan Rover Navigation Camera (NavCam)',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chandrayaan-3_Lander_Vikram.jpg/1024px-Chandrayaan-3_Lander_Vikram.jpg',
      imageType: 'REAL IMAGE',
      credit: 'ISRO / Department of Space',
      sourceUrl: 'https://www.isro.gov.in/Chandrayaan3_Details.html',
      description: 'Historic real photograph of Vikram lander stationed on the lunar south pole regolith at Shiv Shakti Point (70°S Latitude).'
    },
    {
      id: 'aditya-suit-sun',
      title: 'Full-Disk Solar UV Map (200-400 nm)',
      category: 'SCIENCE',
      mission: 'Aditya-L1',
      agency: 'ISRO',
      date: '8 December 2023',
      camera: 'Solar Ultraviolet Imaging Telescope (SUIT)',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Aditya-L1_Spacecraft_Model.jpg/1024px-Aditya-L1_Spacecraft_Model.jpg',
      imageType: 'REAL IMAGE',
      credit: 'ISRO / IUCAA / SUIT Team',
      sourceUrl: 'https://www.isro.gov.in/Aditya_L1.html',
      description: 'First-ever full-disk ultraviolet image of the Sun captured near Sun-Earth L1 halo orbit revealing solar active regions and sunspots.'
    },
    {
      id: 'perseverance-jezero',
      title: 'Perseverance Selfie at Belva Crater Delta',
      category: 'SPACECRAFT',
      mission: 'Perseverance Rover',
      agency: 'NASA',
      date: '22 January 2024',
      camera: 'WATSON Camera on Robotic Arm',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/PIA24264-MarsPerseveranceRover-Selfie-20210406.jpg/1024px-PIA24264-MarsPerseveranceRover-Selfie-20210406.jpg',
      imageType: 'REAL IMAGE',
      credit: 'NASA / JPL-Caltech / MSSS',
      sourceUrl: 'https://mars.nasa.gov/mars2020/',
      description: 'Self-portrait of Perseverance rover surrounded by rock core drill samples in Jezero Crater river delta.'
    },
    {
      id: 'euclid-cluster',
      title: 'Euclid Space Telescope Structure',
      category: 'SPACECRAFT',
      mission: 'Euclid Space Telescope',
      agency: 'ESA',
      date: '7 November 2023',
      camera: 'VIS & NISP Imagers',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Euclid_spacecraft_model.jpg/1024px-Euclid_spacecraft_model.jpg',
      imageType: 'REAL IMAGE',
      credit: 'ESA / Euclid / Euclid Consortium / NASA',
      sourceUrl: 'https://www.esa.int/Science_Technology/Space_Science/Euclid',
      description: 'Structure of ESA Euclid space telescope operating at Sun-Earth L2 to map the geometry of the Dark Universe.'
    },
    {
      id: 'voyager-jupiter',
      title: 'Jupiter Great Red Spot by Voyager 1',
      category: 'SCIENCE',
      mission: 'Voyager 1 & 2',
      agency: 'NASA',
      date: '5 March 1979',
      camera: 'Narrow-Angle Imaging Camera',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jupiter_by_Voyager_1-real.jpg/1024px-Jupiter_by_Voyager_1-real.jpg',
      imageType: 'REAL IMAGE',
      credit: 'NASA / JPL-Caltech',
      sourceUrl: 'https://voyager.jpl.nasa.gov/',
      description: 'Historic real photograph of Jupiter and its Great Red Spot captured during Voyager 1 close flyby.'
    }
  ];

  const CATEGORIES = [
    { id: 'ALL', label: 'ALL IMAGES' },
    { id: 'SCIENCE', label: '🔬 SCIENCE & DISCOVERY' },
    { id: 'SPACECRAFT', label: '🛰️ SPACECRAFT' },
    { id: 'DESTINATION', label: '🪐 DESTINATION' },
    { id: 'LAUNCH', label: '🚀 LAUNCH & CRUISE' }
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCat === 'ALL') return true;
    return item.category === selectedCat;
  });

  return (
    <section id="mission-image-gallery" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl font-mono text-xs transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Camera className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 39 &amp; 40 · AUTHENTIC MISSION PHOTOGRAPHY &amp; VISUAL CLASSIFICATION</span>
          </div>

          <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-500 text-[10px]">
            Strict Labeling: REAL IMAGE / ARTIST CONCEPT / DATA VISUALIZATION
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          AUTHENTIC MISSION IMAGE GALLERY
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Explore authentic photographs, spectrographic data reductions, and scientific visualizations captured by space observatories, planetary rovers, and lunar landers.
        </p>
      </div>

      {/* Category Filter Ribbon */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              selectedCat === cat.id
                ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-3xl bg-slate-950 border border-cyan-500/30 text-white space-y-4 shadow-2xl flex flex-col justify-between group hover:border-cyan-400 transition-all"
          >
            {/* Image Frame */}
            <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-slate-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Mandatory Visual Classification Label (Feature 40) */}
              <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold border backdrop-blur-md shadow-lg ${
                item.imageType === 'REAL IMAGE'
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
                  : item.imageType === 'SCIENTIFIC DATA VISUALIZATION'
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50'
                  : 'bg-purple-950/80 text-purple-300 border-purple-500/50'
              }`}>
                {item.imageType}
              </div>

              {/* Agency Tag */}
              <div className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded bg-slate-950/80 text-[9px] font-mono font-bold text-amber-300 border border-white/10">
                {item.agency}
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] text-cyan-400 font-mono">
                <span>MISSION: {item.mission}</span>
                <span>{item.date}</span>
              </div>

              <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors leading-tight">
                {item.title}
              </h3>

              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Metadata Footer */}
            <div className="pt-3 border-t border-white/10 space-y-2 text-[10px] font-mono">
              <div className="flex justify-between text-slate-400">
                <span>CAMERA / SENSOR:</span>
                <span className="text-slate-200 font-bold">{item.camera}</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>CREDIT:</span>
                <span className="text-cyan-300 font-bold">{item.credit}</span>
              </div>

              <div className="pt-1 flex justify-end">
                <SourceBadge sources={[{ name: item.agency, url: item.sourceUrl }]} />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
