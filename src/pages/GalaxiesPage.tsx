import React from 'react';
import { WhereAreWeNav } from '../components/galaxies/WhereAreWeNav';
import { GalaxyHero } from '../components/galaxies/GalaxyHero';
import { GalaxyResearchRadar } from '../components/galaxies/GalaxyResearchRadar';
import { GalaxyExplorerWithDna } from '../components/galaxies/GalaxyExplorerWithDna';
import { MultiWavelengthInteractive } from '../components/galaxies/MultiWavelengthInteractive';
import { GalaxyTimeMachine } from '../components/galaxies/GalaxyTimeMachine';
import { GalaxyDiscoveries2026 } from '../components/galaxies/GalaxyDiscoveries2026';
import { GalaxyApiDiscoverySection } from '../components/galaxies/GalaxyApiDiscoverySection';
import { GalaxyDefinitionVisualizer } from '../components/galaxies/GalaxyDefinitionVisualizer';
import { GalaxyClassificationLab } from '../components/galaxies/GalaxyClassificationLab';
import { MilkyWay3DCutaway } from '../components/galaxies/MilkyWay3DCutaway';
import { BlackHoleToGalaxyZoom } from '../components/galaxies/BlackHoleToGalaxyZoom';
import { DarkMatterToggleLab } from '../components/galaxies/DarkMatterToggleLab';
import { GalaxyCollisionSim } from '../components/galaxies/GalaxyCollisionSim';
import { CosmicWebInteractive } from '../components/galaxies/CosmicWebInteractive';
import { GalaxyLabSuite } from '../components/galaxies/GalaxyLabSuite';
import { HugeFactCards } from '../components/galaxies/HugeFactCards';
import { GalaxyDiscoveryHistory } from '../components/galaxies/GalaxyDiscoveryHistory';
import { GalaxyQuizAndMissions } from '../components/galaxies/GalaxyQuizAndMissions';
import { GalaxySearchAndDatabase } from '../components/galaxies/GalaxySearchAndDatabase';
import { CosmicZoomOutFooter } from '../components/galaxies/CosmicZoomOutFooter';

export const GalaxiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#010410] text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-300">
      
      {/* Sticky Top Cosmic Location Breadcrumb & Theme Bar */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-[#010410]/90 backdrop-blur-md border-b border-slate-200 dark:border-cyan-500/20 py-2 px-4 sm:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <WhereAreWeNav />
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-16">
        
        {/* Cinematic Hero */}
        <GalaxyHero />

        {/* 2026 Research Radar Header Box */}
        <GalaxyResearchRadar />

        {/* 1. Galaxy Explorer & GALAXY DNA */}
        <GalaxyExplorerWithDna />

        {/* 2. Multi-Wavelength Galaxy Inspector */}
        <MultiWavelengthInteractive />

        {/* 3. Galaxy Time Machine */}
        <GalaxyTimeMachine />

        {/* 4. Full 2026 Breakthrough Discoveries Showcase */}
        <GalaxyDiscoveries2026 />

        {/* 5. Live Self-Updating API Discovery Engine */}
        <GalaxyApiDiscoverySection />

        {/* 6. What Is a Galaxy & Physical Layer Visualizer */}
        <GalaxyDefinitionVisualizer />

        {/* 7. Classification Lab: Hubble Tuning Fork & Extended Taxonomy */}
        <GalaxyClassificationLab />

        {/* 8. Milky Way 3D Anatomy & Sgr A* Orbit Simulation */}
        <MilkyWay3DCutaway />

        {/* 9. Black Hole vs Galaxy Scale Zoom */}
        <BlackHoleToGalaxyZoom />

        {/* 10. Dark Matter Halo & Rotation Effect Toggles */}
        <DarkMatterToggleLab />

        {/* 11. Milkdromeda Galaxy Collision Simulator */}
        <GalaxyCollisionSim />

        {/* 12. Cosmic Web Architecture & Large Scale Structure */}
        <CosmicWebInteractive />

        {/* 13. Quantitative Galaxy Lab Suite */}
        <GalaxyLabSuite />

        {/* 14. Mind-Blowing Huge Fact Cards */}
        <HugeFactCards />

        {/* 15. Discovery History, Shapley-Curtis Debate & Myth Busting */}
        <GalaxyDiscoveryHistory />

        {/* 16. Gamified Missions & Knowledge Evaluation Quiz */}
        <GalaxyQuizAndMissions />

        {/* 17. Global Galaxy Search & Telemetry Database */}
        <GalaxySearchAndDatabase />

        {/* 18. Final Perspective Zoom-Out Footer */}
        <CosmicZoomOutFooter />

      </main>

    </div>
  );
};
