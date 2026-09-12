const CACHE_PREFIX = 'mosaic-map-';
const STATIC_CACHE = `${CACHE_PREFIX}static-v12`;
const IMAGE_CACHE = `${CACHE_PREFIX}images-v1`;
const TILE_CACHE = `${CACHE_PREFIX}tiles-v1`;
const CURRENT_CACHES = [STATIC_CACHE, IMAGE_CACHE, TILE_CACHE];
const MAX_IMAGE_ENTRIES = 60;
const MAX_TILE_ENTRIES = 240;

const APP_SHELL = [
    './',
    './index.html',
    './styles.css',
    './main.js',
    './app.js',
    './vendor/leaflet/leaflet.css',
    './vendor/leaflet/leaflet.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(Promise.all([
        caches.open(STATIC_CACHE).then((cache) => cache.addAll(APP_SHELL)),
        self.skipWaiting()
    ]));
});

self.addEventListener('activate', (event) => {
    const removeOldCaches =
        caches.keys().then((keys) => Promise.all(
            keys
                .filter((key) => key.startsWith(CACHE_PREFIX) && !CURRENT_CACHES.includes(key))
                .map((key) => caches.delete(key))
        ));

    event.waitUntil(Promise.all([removeOldCaches, self.clients.claim()]));
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    const isMapTile = url.hostname.endsWith('tile.openstreetmap.org');
    const isLocalImage = url.origin === self.location.origin
        && url.pathname.includes('/assets/mosaics/')
        && request.destination === 'image';

    if (isMapTile) {
        event.respondWith(staleWhileRevalidate(event, TILE_CACHE, MAX_TILE_ENTRIES));
        return;
    }

    if (isLocalImage) {
        event.respondWith(staleWhileRevalidate(event, IMAGE_CACHE, MAX_IMAGE_ENTRIES));
        return;
    }

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request).catch(() => caches.match('./index.html'))
        );
        return;
    }

    if (url.origin === self.location.origin) {
        event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
    }
});

function staleWhileRevalidate(event, cacheName, maxEntries) {
    const cachePromise = caches.open(cacheName);
    const cachedPromise = cachePromise.then((cache) => cache.match(event.request));
    const networkPromise = Promise.all([cachePromise, fetch(event.request)])
        .then(async ([cache, response]) => {
            if (response.ok || response.type === 'opaque') {
                try {
                    await cache.put(event.request, response.clone());
                    await trimCache(cache, maxEntries);
                } catch {
                    // A full or unavailable cache must not prevent the network response.
                }
            }
            return response;
        });

    event.waitUntil(networkPromise.then(() => undefined).catch(() => undefined));
    return cachedPromise.then((cached) => cached || networkPromise);
}

async function trimCache(cache, maxEntries) {
    const keys = await cache.keys();
    const extraEntries = keys.length - maxEntries;
    if (extraEntries <= 0) return;

    await Promise.all(keys.slice(0, extraEntries).map((request) => cache.delete(request)));
}
