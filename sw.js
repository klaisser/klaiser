self.addEventListener('install', function(event) {
  console.log('Service Worker установился');
});

self.addEventListener('fetch', function(event) {
  // можно ничего не делать, просто базовый PWA
});
