import React, { useState } from 'react';
import { UniverseHero } from '../components/universe/UniverseHero';
import { UniverseMasterNav, type KnowledgeFilter } from '../components/universe/UniverseMasterNav';
import { UniverseLiveResearchRadar } from '../components/universe/UniverseLiveResearchRadar';
import { UniverseHowDoWeKnowAndMeasurement } from '../components/universe/UniverseHowDoWeKnowAndMeasurement';
import { UniverseCoordinatesAnd60Sec } from '../components/universe/UniverseCoordinatesAnd60Sec';
import { UniverseMultiWavelengthAndFalseColor } from '../components/universe/UniverseMultiWavelengthAndFalseColor';
import { UniverseBuildYourUniverseAndWhatIf } from '../components/universe/UniverseBuildYourUniverseAndWhatIf';
import { UniverseScienceVsFictionAndTimeline } from '../components/universe/UniverseScienceVsFictionAndTimeline';
import { UniverseMysteryBoardAndAntimatter } from '../components/universe/UniverseMysteryBoardAndAntimatter';
import { UniverseObservableVsEntire } from '../components/universe/UniverseObservableVsEntire';
import { UniverseLittleRedDots } from '../components/universe/UniverseLittleRedDots';
import { UniverseEuclid60MStars } from '../components/universe/UniverseEuclid60MStars';
import { UniverseCosmicAddress } from '../components/universe/UniverseCosmicAddress';
import { UniverseScaleExplorer } from '../components/universe/UniverseScaleExplorer';
import { UniverseAgeAndClock } from '../components/universe/UniverseAgeAndClock';
import { UniverseBigBangAndInflation } from '../components/universe/UniverseBigBangAndInflation';
import { UniverseCmbAndDarkAges } from '../components/universe/UniverseCmbAndDarkAges';
import { UniverseCosmicWebAndVoids } from '../components/universe/UniverseCosmicWebAndVoids';
import { UniverseDarkMatterEnergyHubbleTension } from '../components/universe/UniverseDarkMatterEnergyHubbleTension';
import { UniverseMultiMessengerLab } from '../components/universe/UniverseMultiMessengerLab';
import { UniverseExtremeAndStrange } from '../components/universe/UniverseExtremeAndStrange';
import { UniverseOpenQuestionsAndMythBuster } from '../components/universe/UniverseOpenQuestionsAndMythBuster';
import { UniverseCosmicExplorerGame } from '../components/universe/UniverseCosmicExplorerGame';
import { UniverseCosmicFutureAndFooter } from '../components/universe/UniverseCosmicFutureAndFooter';
import { UniverseTheUnknownAndFinalJourney } from '../components/universe/UniverseTheUnknownAndFinalJourney';

export const UniversePage: React.FC = () => {
  const [activeKnowledgeFilter, setActiveKnowledgeFilter] = useState<KnowledgeFilter>('ALL');

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#010410] text-slate-900 dark:text-slate-100 transition-colors duration-300 space-y-12 sm:space-y-16 pb-20">
      
      {/* 1. Cinematic Fly-Through Hero */}
      <UniverseHero />

      {/* 2. 39-Topic Master Navigation & Permanent Scientific Trust Filter Switch */}
      <UniverseMasterNav
        activeFilter={activeKnowledgeFilter}
        onFilterChange={(filter) => setActiveKnowledgeFilter(filter)}
      />

      {/* Filter Status Active Banner */}
      {activeKnowledgeFilter !== 'ALL' && (
        <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 text-center animate-fade-in">
          Showing topics filtered by Scientific Confidence: <strong>{activeKnowledgeFilter}</strong>
        </div>
      )}

      {/* 3. API-Driven 2026 Live Research Radar Feed */}
      <UniverseLiveResearchRadar />

      {/* 4. "How Do We Know?" Scientific Detective System & Measurement Confidence Cards */}
      <UniverseHowDoWeKnowAndMeasurement />

      {/* 5. Deep Cosmic Coordinates, Universe in 60 Seconds, & Observer-Dependent Horizons */}
      <UniverseCoordinatesAnd60Sec />

      {/* 6. Observational Accessibility Matrix, False Color Wavelengths & Raw Data Pipeline */}
      <UniverseMultiWavelengthAndFalseColor />

      {/* 7. Build Your Own Universe Simulator & What If Cosmic Thought Experiments */}
      <UniverseBuildYourUniverseAndWhatIf />

      {/* 8. Science vs Science Fiction, Discovery Timeline & Cosmic Pioneers */}
      <UniverseScienceVsFictionAndTimeline />

      {/* 9. Cosmic Mystery Board, Matter-Antimatter Asymmetry & Micro to Macro Scale */}
      <UniverseMysteryBoardAndAntimatter />

      {/* 10. Observable vs Entire Universe */}
      <UniverseObservableVsEntire />

      {/* 11. The "Little Red Dot" JWST Mystery */}
      <UniverseLittleRedDots />

      {/* 12. ESA Euclid 60 Million Stars Multi-Scale Zoom */}
      <UniverseEuclid60MStars />

      {/* 13. Complete 11-Step Cosmic Address Ribbon */}
      <UniverseCosmicAddress />

      {/* 14. Logarithmic Cosmic Scale Explorer */}
      <UniverseScaleExplorer />

      {/* 15. Cosmic Age, Calendar & Time Machine (MoM-z14 at 280M Yrs Post Big Bang) */}
      <UniverseAgeAndClock />

      {/* 16. Big Bang Expansion Myth Corrector & Chemical Evolution */}
      <UniverseBigBangAndInflation />

      {/* 17. CMB Map, Dark Ages & Reionization 6-Step Visual Flow */}
      <UniverseCmbAndDarkAges />

      {/* 18. 3D Cosmic Web, Filaments & Euclid Invisible Map Toggle */}
      <UniverseCosmicWebAndVoids />

      {/* 19. Dark Matter, Dark Energy & "The Universe Has A Speed Problem" (Hubble Tension) */}
      <UniverseDarkMatterEnergyHubbleTension />

      {/* 20. Multi-Messenger Universe (Light, GW, Neutrinos, Cosmic Rays) */}
      <UniverseMultiMessengerLab />

      {/* 21. Extreme & Strange Cosmos Records */}
      <UniverseExtremeAndStrange />

      {/* 22. Scientific Confidence System & MythBuster */}
      <UniverseOpenQuestionsAndMythBuster />

      {/* 23. Cosmic Expedition Game & Knowledge Quiz */}
      <UniverseCosmicExplorerGame />

      {/* 24. Cosmic Future Scenarios */}
      <UniverseCosmicFutureAndFooter />

      {/* 25. The Biggest Question, Destination Unknown & Final Signature Identity Ribbon */}
      <UniverseTheUnknownAndFinalJourney />

    </div>
  );
};
