self.addEventListener('install', function(event) {
  console.log('Service Worker встановлено');
});

self.addEventListener('fetch', function(event) {
  // базова заглушка PWA
});
