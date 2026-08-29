// ─── NASA API SERVICE ─────────────────────────────────────────────────────────
// Centralized, hardened NASA API service with caching, timeout protection,
// exponential backoff retries, and fallback handling.
// Source: https://api.nasa.gov/ & https://images.nasa.gov/

const API_KEY = import.meta.env.VITE_NASA_API_KEY as string ?? 'DEMO_KEY';
const DEFAULT_TIMEOUT_MS = 10000; // 10 second timeout

// Helper to fetch with timeout and abort controller
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = DEFAULT_TIMEOUT_MS): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

// Helper for retrying on temporary network or 5xx server failures
async function fetchWithRetry(url: string, options: RequestInit = {}, maxRetries = 2): Promise<Response> {
  let attempt = 0;
  while (attempt <= maxRetries) {
    try {
      const res = await fetchWithTimeout(url, options);
      if (res.ok || (res.status >= 400 && res.status < 500)) {
        return res; // Do not retry on client 4xx errors
      }
    } catch (e) {
      if (attempt === maxRetries) throw e;
    }
    attempt++;
    await new Promise((resolve) => setTimeout(resolve, 500 * Math.pow(2, attempt)));
  }
  throw new Error('Network request failed after retries');
}

// ─── NASA 3D SOLAR SYSTEM GLTF MODEL IDs ─────────────────────────────────────
export const NASA_3D_MODEL_IDS: Record<string, number> = {
  sun:      2392,
  earth:    2393,
  moon:     2366,
  mars:     2142,
  mercury:  2369,
  venus:    2513,
  jupiter:  2375,
  saturn:   2495,
  uranus:   2379,
  neptune:  2636,
  pluto:    2134,
  ceres:    2368,
  iss:      2545,
  hubble:   2528,
  jwst:     2364,
  cassini:  2364,
  voyager:  2137,
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
const APOD_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export async function fetchAPOD(date?: string): Promise<APODResponse> {
  const now = Date.now();
  if (!date && apodCache && now - apodCache.fetchedAt < APOD_CACHE_TTL_MS) {
    return apodCache.data;
  }

  const params = new URLSearchParams({ api_key: API_KEY });
  if (date) params.set('date', date);

  try {
    const res = await fetchWithRetry(`https://api.nasa.gov/planetary/apod?${params}`);
    if (!res.ok) throw new Error(`APOD API error: ${res.status}`);
    const data: APODResponse = await res.json();
    if (!date) {
      apodCache = { data, fetchedAt: now };
    }
    return data;
  } catch (err) {
    if (apodCache) return apodCache.data;
    throw err;
  }
}

// ─── NASA IMAGE & VIDEO LIBRARY SEARCH ───────────────────────────────────────
const imageSearchCache = new Map<string, { data: NASASearchResult; fetchedAt: number }>();
const SEARCH_CACHE_TTL = 30 * 60 * 1000; // 30 mins

export async function searchNASAImages(
  query: string,
  mediaType: 'image' | 'video' = 'image',
  limit = 12,
): Promise<NASASearchResult> {
  const cacheKey = `${query}:${mediaType}:${limit}`;
  const cached = imageSearchCache.get(cacheKey);
  if (cached && Date.now() - cached.fetchedAt < SEARCH_CACHE_TTL) {
    return cached.data;
  }

  const params = new URLSearchParams({
    q: query,
    media_type: mediaType,
    page_size: String(limit),
  });

  const res = await fetchWithRetry(`https://images-api.nasa.gov/search?${params}`);
  if (!res.ok) throw new Error(`NASA Image API error: ${res.status}`);

  const json = await res.json();
  const result: NASASearchResult = {
    items: json.collection?.items ?? [],
    total_hits: json.collection?.metadata?.total_hits ?? 0,
  };

  imageSearchCache.set(cacheKey, { data: result, fetchedAt: Date.now() });
  return result;
}

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
  const res = await fetchWithRetry(`https://api.nasa.gov/neo/rest/v1/feed?${params}`);
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
  const res = await fetchWithRetry(
    `https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error(`EPIC API error: ${res.status}`);
  const data: EPICImage[] = await res.json();
  return data.slice(0, 4);
}

export function getEPICImageUrl(img: EPICImage): string {
  const [year, month, day] = img.date.split(' ')[0].split('-');
  return `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${img.image}.png`;
}

export function truncateExplanation(text: string, maxLen = 280): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}
