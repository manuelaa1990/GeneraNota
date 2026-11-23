const CACHE_NAME = 'merida-notas-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.png' // <-- Aquí agregamos tu logo
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
