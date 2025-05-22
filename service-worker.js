self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("turnos-cache").then(cache => {
      return cache.addAll(["index.html", "manifest.json", "icono.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
