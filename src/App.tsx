import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { RandomFactDrawer } from './components/RandomFactDrawer';
import { CosmicPosition } from './components/CosmicPosition';

// Pages
import { HomePage } from './pages/HomePage';
import { EarthPage } from './pages/EarthPage';
import { SolarSystemPage } from './pages/SolarSystemPage';
import { PlanetsPage } from './pages/PlanetsPage';
import { PlanetDetailPage } from './pages/PlanetDetailPage';
import { MoonsPage } from './pages/MoonsPage';
import { StarsPage } from './pages/StarsPage';
import { GalaxiesPage } from './pages/GalaxiesPage';
import { GalaxyDetailPage } from './pages/GalaxyDetailPage';
import { BlackHolesPage } from './pages/BlackHolesPage';
import { ExoplanetsPage } from './pages/ExoplanetsPage';
import { NebulaePage } from './pages/NebulaePage';
import { MissionsPage } from './pages/MissionsPage';
import { MissionDetailPage } from './pages/MissionDetailPage';
import { UniversePage } from './pages/UniversePage';
import { TimelinePage } from './pages/TimelinePage';
import { MultiversePage } from './pages/MultiversePage';
import { ComparePage } from './pages/ComparePage';
import { AboutPage } from './pages/AboutPage';
import { SourcesPage } from './pages/SourcesPage';

function AppShell() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRandomFactOpen, setIsRandomFactOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#020408] text-slate-200 relative overflow-x-hidden">
      {/* Global star field */}
      <div className="stars-bg" />

      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenRandomFact={() => setIsRandomFactOpen(true)}
      />

      <main className={`relative z-10 ${isHome ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'}`}>
        <Routes>
          <Route path="/" element={<HomePage onOpenSearch={() => setIsSearchOpen(true)} onOpenRandomFact={() => setIsRandomFactOpen(true)} />} />
          <Route path="/earth" element={<EarthPage />} />
          <Route path="/solar-system" element={<SolarSystemPage />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/planets/:planetId" element={<PlanetDetailPage />} />
          <Route path="/planet-compare" element={<ComparePage />} />
          <Route path="/moons" element={<MoonsPage />} />
          <Route path="/stars" element={<StarsPage />} />
          <Route path="/galaxies" element={<GalaxiesPage />} />
          <Route path="/galaxies/:galaxyId" element={<GalaxyDetailPage />} />
          <Route path="/black-holes" element={<BlackHolesPage />} />
          <Route path="/exoplanets" element={<ExoplanetsPage />} />
          <Route path="/nebulae" element={<NebulaePage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/missions/:missionId" element={<MissionDetailPage />} />
          <Route path="/universe" element={<UniversePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/multiverse" element={<MultiversePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sources" element={<SourcesPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Persistent Cosmic Position widget */}
      <CosmicPosition />

      {/* Global overlays */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <RandomFactDrawer isOpen={isRandomFactOpen} onClose={() => setIsRandomFactOpen(false)} />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppShell />
      </Router>
    </ThemeProvider>
  );
}

export default App;
