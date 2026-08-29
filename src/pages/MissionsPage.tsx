import React, { useState } from 'react';
import { MissionHero } from '../components/missions/MissionHero';
import { MissionCategories } from '../components/missions/MissionCategories';
import { MissionCards } from '../components/missions/MissionCards';
import { Spacecraft3DViewer } from '../components/missions/Spacecraft3DViewer';
import { LaunchSequenceAnimation } from '../components/missions/LaunchSequenceAnimation';
import { MissionJourneyAndGravityAssist } from '../components/missions/MissionJourneyAndGravityAssist';
import { MissionControlAndTelemetry } from '../components/missions/MissionControlAndTelemetry';
import { ISROIndiaInSpaceHub } from '../components/missions/ISROIndiaInSpaceHub';
import { MissionScienceAndDiscoveries } from '../components/missions/MissionScienceAndDiscoveries';
import { RealMissionImageManifestViewer } from '../components/missions/RealMissionImageManifestViewer';
import { MissionImageGallery } from '../components/missions/MissionImageGallery';
import { MissionSearchAndComparison } from '../components/missions/MissionSearchAndComparison';
import { EXTENDED_MISSIONS_DATA } from '../data/missionsData';

export const MissionsPage: React.FC = () => {
  const [agencyFilter, setAgencyFilter] = useState<string>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredMissions = EXTENDED_MISSIONS_DATA.filter((m) => {
    // Agency Filter
    if (agencyFilter !== 'ALL') {
      if (agencyFilter === 'INTERNATIONAL') {
        if (!m.partnerAgencies || m.partnerAgencies.length === 0) return false;
      } else if (m.agency !== agencyFilter && (!m.partnerAgencies || !m.partnerAgencies.includes(agencyFilter))) {
        return false;
      }
    }

    // Category Filter
    if (categoryFilter !== 'ALL') {
      const destUpper = m.destination.toUpperCase();
      const typeUpper = m.missionType.toUpperCase();
      if (categoryFilter === 'MOON' && !destUpper.includes('MOON') && !destUpper.includes('LUNAR')) return false;
      if (categoryFilter === 'SUN' && !destUpper.includes('SUN') && !destUpper.includes('SOLAR')) return false;
      if (categoryFilter === 'PLANETS' && !destUpper.includes('MARS') && !destUpper.includes('JUPITER') && !destUpper.includes('SATURN')) return false;
      if (categoryFilter === 'TELESCOPE' && !typeUpper.includes('TELESCOPE') && !typeUpper.includes('OBSERVATORY')) return false;
      if (categoryFilter === 'OUTER_SOLAR' && !destUpper.includes('INTERSTELLAR') && !destUpper.includes('JUPITER') && !destUpper.includes('SATURN')) return false;
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = m.name.toLowerCase().includes(q);
      const matchAgency = m.agency.toLowerCase().includes(q);
      const matchDest = m.destination.toLowerCase().includes(q);
      const matchRocket = m.rocket.toLowerCase().includes(q);
      if (!matchName && !matchAgency && !matchDest && !matchRocket) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#010410] text-slate-900 dark:text-slate-100 transition-colors duration-300 space-y-12 sm:space-y-16 pb-20">
      
      {/* 1. Cinematic Hero with 6-step lifecycle ribbon & CTAs */}
      <MissionHero />

      {/* 2. Agency & Category Multi-Filters + Search Bar */}
      <MissionCategories
        selectedAgency={agencyFilter}
        onAgencyChange={(a) => setAgencyFilter(a)}
        selectedCategory={categoryFilter}
        onCategoryChange={(c) => setCategoryFilter(c)}
        searchQuery={searchQuery}
        onSearchChange={(q) => setSearchQuery(q)}
        totalCount={filteredMissions.length}
      />

      {/* 3. Detailed Mission Cards with Signature Mission DNA telemetry boxes & Compare Matrix */}
      <MissionCards missions={filteredMissions} />

      {/* 4. Strict Real Mission Image Manifest: Hardware vs Science Discovery */}
      <RealMissionImageManifestViewer />

      {/* 4. Interactive 3D Spacecraft Anatomy & Subsystem Inspector */}
      <Spacecraft3DViewer />

      {/* 5. Rocket Launch & Stage Separation Flight Simulation */}
      <LaunchSequenceAnimation />

      {/* 6. 3D Interplanetary Trajectory Map & Gravity Assist Slinghot Simulator */}
      <MissionJourneyAndGravityAssist />

      {/* 7. "If You Sent a Command Now" Light-Time Delay Calculator & Status Legend */}
      <MissionControlAndTelemetry />

      {/* 8. 🇮🇳 ISRO India in Space Dedicated First-Class Hub */}
      <ISROIndiaInSpaceHub />

      {/* 9. Before vs After Mission Science Discoveries, Failure Risks & Records */}
      <MissionScienceAndDiscoveries />

      {/* 10. Authentic Mission Image Gallery with Mandatory Classification Badges */}
      <MissionImageGallery />

      {/* 11. Mission Knowledge AI Assistant & Primary Science Data Archives */}
      <MissionSearchAndComparison />

    </div>
  );
};
