import { useState, useEffect } from 'react';
import { planetsData } from '../../data/planetsData';
import { searchNASAImages, getNASA3DModelUrl } from '../nasaApi';
import type { ScientificSource } from '../../types';

export interface NormalizedCosmosObject {
  id: string;
  name: string;
  category: 'planet' | 'star' | 'galaxy' | 'nebula' | 'blackHole' | 'exoplanet' | 'moon';
  description: string;
  subtitle: string;
  image: string;
  nasa3DModelUrl?: string;
  statistics: {
    label: string;
    value: string;
    unit?: string;
    sourceName: string;
    sourceUrl: string;
    confidence: 'Observed' | 'Measured' | 'Estimated' | 'Modelled' | 'Hypothesis';
  }[];
  nasaLibraryImages: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    thumbnailUrl: string;
    sourceName: string;
    sourceUrl: string;
    credit: string;
  }[];
  sources: ScientificSource[];
  lastUpdated: string;
  isLive: boolean;
}

// In-memory cache for API object responses
const OBJECT_CACHE = new Map<string, NormalizedCosmosObject>();

/**
 * Universal cosmos object resolver — fetches static database values,
 * queries live NASA Image Library for real spacecraft images,
 * attaches 3D GLTF model embed specs, and normalizes output.
 */
export async function getCosmosObject(
  category: 'planet' | 'star' | 'galaxy' | 'nebula' | 'blackHole' | 'exoplanet',
  id: string
): Promise<NormalizedCosmosObject> {
  const cacheKey = `${category}:${id}`;
  if (OBJECT_CACHE.has(cacheKey)) {
    return OBJECT_CACHE.get(cacheKey)!;
  }

  // 1. Find planet/object baseline data
  const planet = planetsData.find((p) => p.id.toLowerCase() === id.toLowerCase());

  const name = planet ? planet.name : id.charAt(0).toUpperCase() + id.slice(1);
  const subtitle = planet ? planet.subtitle : `Astronomical ${category}`;
  const description = planet ? planet.summary : `Exploration data for ${name}.`;
  const baseImg = planet ? planet.image : 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg';

  // 2. Fetch live NASA Image Library images for this object
  let nasaImages: NormalizedCosmosObject['nasaLibraryImages'] = [];
  try {
    const nasaSearch = await searchNASAImages(name, 'image', 6);
    nasaImages = nasaSearch.items
      .map((item) => {
        const itemData = item.data[0];
        const previewLink = item.links?.find((l) => l.rel === 'preview')?.href;
        if (!itemData || !previewLink) return null;
        return {
          id: itemData.nasa_id || item.href,
          title: itemData.title || name,
          description: itemData.description?.slice(0, 140) + '…' || '',
          imageUrl: previewLink.replace('~thumb', '~medium'),
          thumbnailUrl: previewLink,
          sourceName: itemData.center ? `NASA/${itemData.center}` : 'NASA',
          sourceUrl: `https://images.nasa.gov/details-${itemData.nasa_id}`,
          credit: itemData.photographer || itemData.center || 'NASA',
        };
      })
      .filter(Boolean) as NormalizedCosmosObject['nasaLibraryImages'];
  } catch (e) {
    console.warn(`NASA Image Library search skipped for ${name}:`, e);
  }

  // 3. Build statistics array with explicit sources & confidence
  const statistics: NormalizedCosmosObject['statistics'] = planet
    ? [
        {
          label: 'Diameter',
          value: planet.physical.diameter,
          sourceName: 'NASA Solar System',
          sourceUrl: 'https://science.nasa.gov/solar-system/planets/',
          confidence: 'Measured',
        },
        {
          label: 'Mass',
          value: planet.physical.mass,
          sourceName: 'NASA JPL',
          sourceUrl: 'https://ssd.jpl.nasa.gov/',
          confidence: 'Measured',
        },
        {
          label: 'Gravity',
          value: planet.physical.gravity,
          sourceName: 'NASA Solar System',
          sourceUrl: 'https://science.nasa.gov/solar-system/planets/',
          confidence: 'Measured',
        },
        {
          label: 'Surface Temp',
          value: planet.physical.averageTemp,
          sourceName: 'NASA',
          sourceUrl: 'https://science.nasa.gov/',
          confidence: 'Observed',
        },
        {
          label: 'Orbital Period',
          value: planet.orbit.orbitalPeriod,
          sourceName: 'NASA JPL SBDB',
          sourceUrl: 'https://ssd.jpl.nasa.gov/',
          confidence: 'Measured',
        },
        {
          label: 'Known Moons',
          value: String(planet.moonCount),
          sourceName: 'IAU / NASA',
          sourceUrl: 'https://www.iau.org/',
          confidence: 'Observed',
        },
      ]
    : [];

  const model3dUrl = getNASA3DModelUrl(id) ?? undefined;

  const normalized: NormalizedCosmosObject = {
    id,
    name,
    category,
    subtitle,
    description,
    image: baseImg,
    nasa3DModelUrl: model3dUrl,
    statistics,
    nasaLibraryImages: nasaImages,
    sources: planet?.sources ?? [{ name: 'NASA', url: 'https://science.nasa.gov' }],
    lastUpdated: planet?.lastUpdated ?? new Date().toISOString().split('T')[0],
    isLive: true,
  };

  OBJECT_CACHE.set(cacheKey, normalized);
  return normalized;
}

// ─── REACT HOOK FOR COSMOS OBJECT DATA ────────────────────────────────────────

export function useCosmosObject(category: 'planet' | 'star' | 'galaxy' | 'nebula' | 'blackHole' | 'exoplanet', id: string) {
  const [data, setData] = useState<NormalizedCosmosObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    getCosmosObject(category, id)
      .then((res) => {
        if (mounted) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          console.error('Cosmos Object fetch error:', err);
          setError('Cosmic data temporarily unavailable');
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [category, id]);

  return { data, loading, error };
}
