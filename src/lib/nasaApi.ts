// ─── NASA API SERVICE ─────────────────────────────────────────────────────────
// Centralizes all NASA API calls. Key stored in .env as VITE_NASA_API_KEY
// NASA Open APIs: https://api.nasa.gov/
// NASA Image Library: https://images.nasa.gov/
// All NASA data/images are public domain unless otherwise noted.

const API_KEY = import.meta.env.VITE_NASA_API_KEY as string ?? 'DEMO_KEY';

// ─── NASA 3D SOLAR SYSTEM GLTF MODEL IDs ─────────────────────────────────────
// Source: https://solarsystem.nasa.gov/
// These IDs map to the NASA Solar System Exploration 3D model viewer.

export const NASA_3D_MODEL_IDS: Record<string, number> = {
  sun:      2392, // Sun
  earth:    2393, // Earth
  moon:     2366, // Moon
  mars:     2142, // Mars
  mercury:  2369, // Mercury
  venus:    2513, // Venus
  jupiter:  2375, // Jupiter
  saturn:   2495, // Saturn
  uranus:   2379, // Uranus
  neptune:  2636, // Neptune
  pluto:    2134, // Pluto / New Horizons model
  ceres:    2368, // Ceres (Dawn)
  iss:      2545, // International Space Station
  hubble:   2528, // Hubble Space Telescope
  jwst:     2364, // James Webb Space Telescope
  cassini:  2364, // Cassini
  voyager:  2137, // Voyager
};

/** Returns the iframe embed URL for a NASA 3D model */
export function getNASA3DModelUrl(planetId: string): string | null {
  const modelId = NASA_3D_MODEL_IDS[planetId.toLowerCase()];
  if (!modelId) return null;
  return `https://solarsystem.nasa.gov/gltf_embed/${modelId}/`;
}

// ─── TYPES ────────────────────────────────────────────────────────────────────

export interface APODResponse {
  date: string;
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: 'image' | 'video';
  copyright?: string;
  service_version: string;
}

export interface NASAImageItem {
  href: string;
  data: {
    title: string;
    description: string;
    date_created: string;
    keywords?: string[];
    photographer?: string;
    center?: string;
    nasa_id: string;
    media_type: string;
  }[];
  links?: { href: string; rel: string }[];
}

export interface NASASearchResult {
  items: NASAImageItem[];
  total_hits: number;
}

// ─── APOD — ASTRONOMY PICTURE OF THE DAY ─────────────────────────────────────

let apodCache: { data: APODResponse; fetchedAt: number } | null = null;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 min

export async function fetchAPOD(date?: string): Promise<APODResponse> {
  const now = Date.now();
  if (!date && apodCache && now - apodCache.fetchedAt < CACHE_TTL_MS) {
    return apodCache.data;
  }

  const params = new URLSearchParams({ api_key: API_KEY });
  if (date) params.set('date', date);

  const res = await fetch(`https://api.nasa.gov/planetary/apod?${params}`);
  if (!res.ok) throw new Error(`APOD API error: ${res.status}`);

  const data: APODResponse = await res.json();

  if (!date) {
    apodCache = { data, fetchedAt: now };
  }
  return data;
}

// ─── NASA IMAGE & VIDEO LIBRARY SEARCH ───────────────────────────────────────

export async function searchNASAImages(
  query: string,
  mediaType: 'image' | 'video' = 'image',
  limit = 12,
): Promise<NASASearchResult> {
  const params = new URLSearchParams({
    q: query,
    media_type: mediaType,
    page_size: String(limit),
  });

  const res = await fetch(`https://images-api.nasa.gov/search?${params}`);
  if (!res.ok) throw new Error(`NASA Image API error: ${res.status}`);

  const json = await res.json();
  return {
    items: json.collection?.items ?? [],
    total_hits: json.collection?.metadata?.total_hits ?? 0,
  };
}

/** Gets the first preview image URL from a NASA Image Library item */
export function getNASAImagePreviewUrl(item: NASAImageItem): string | null {
  return item.links?.find((l) => l.rel === 'preview')?.href ?? null;
}

// ─── NASA NEAR EARTH OBJECTS ──────────────────────────────────────────────────

export interface NEOFeed {
  element_count: number;
  near_earth_objects: Record<string, NEO[]>;
}

export interface NEO {
  id: string;
  name: string;
  estimated_diameter: {
    kilometers: { estimated_diameter_min: number; estimated_diameter_max: number };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: {
    close_approach_date: string;
    relative_velocity: { kilometers_per_second: string };
    miss_distance: { kilometers: string };
  }[];
}

export async function fetchNEOs(startDate: string, endDate: string): Promise<NEOFeed> {
  const params = new URLSearchParams({
    start_date: startDate,
    end_date: endDate,
    api_key: API_KEY,
  });
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?${params}`);
  if (!res.ok) throw new Error(`NEO API error: ${res.status}`);
  return res.json();
}

// ─── NASA EPIC — EARTH IMAGERY ────────────────────────────────────────────────

export interface EPICImage {
  identifier: string;
  caption: string;
  date: string;
  image: string;
}

export async function fetchEPICLatest(): Promise<EPICImage[]> {
  const res = await fetch(
    `https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error(`EPIC API error: ${res.status}`);
  const data: EPICImage[] = await res.json();
  return data.slice(0, 4);
}

/** Builds the direct PNG URL for an EPIC image */
export function getEPICImageUrl(img: EPICImage): string {
  const [year, month, day] = img.date.split(' ')[0].split('-');
  return `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${img.image}.png`;
}

// ─── HELPER: FORMAT APOD EXPLANATION ─────────────────────────────────────────

export function truncateExplanation(text: string, maxLen = 280): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}
