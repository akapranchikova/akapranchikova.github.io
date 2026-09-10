const CACHE_NAME = 'mosaic-map-v7';
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
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        ))
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    const isMapTile = url.hostname.endsWith('tile.openstreetmap.org');
    const isLocalImage = url.origin === self.location.origin && request.destination === 'image';

    if (isMapTile || isLocalImage) {
        event.respondWith(staleWhileRevalidate(request));
        return;
    }

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                    return response;
                })
                .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
        );
        return;
    }

    if (url.origin === self.location.origin) {
        event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
    }
});

async function staleWhileRevalidate(request) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    const network = fetch(request)
        .then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
        })
        .catch(() => cached);

    return cached || network;
}
