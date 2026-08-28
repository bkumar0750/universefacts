import React from 'react';
import { Universal3DPlanetViewer } from './Universal3DPlanetViewer';

interface NASA3DViewerProps {
  planetId: string;
  title: string;
  className?: string;
}

export const NASA3DViewer: React.FC<NASA3DViewerProps> = ({
  planetId,
  title,
  className = '',
}) => {
  return (
    <Universal3DPlanetViewer
      planetId={planetId}
      title={title}
      className={className}
    />
  );
};
