// ─── UNIVERSEFACT PRODUCTION SERVICE WORKER ─────────────────────────────────────
// High-performance offline caching & instant asset loading across all devices

const CACHE_NAME = 'universefact-v1.2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Install Event: Pre-cache shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Cleanup stale caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-While-Revalidate Caching Strategy
self.addEventListener('fetch', (event) => {
  // Only intercept GET HTTP requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip browser extension requests or non-HTTP schemes
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(event.request);
      
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          // Cache successful responses for images, scripts, styles, and fonts
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            (
              event.request.destination === 'image' ||
              event.request.destination === 'script' ||
              event.request.destination === 'style' ||
              event.request.destination === 'font' ||
              url.hostname.includes('unsplash.com') ||
              url.hostname.includes('jsdelivr.net')
            )
          ) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback
          return cachedResponse;
        });

      return cachedResponse || fetchPromise;
    })
  );
});
