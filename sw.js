const CACHE_NAME = 'nova-racing-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/login.html',
  '/css/styles.css',
  '/images/logo.png',
  // Add other assets you want to cache
];

// Install event — caching files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event — serve cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
