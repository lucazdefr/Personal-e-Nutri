const CACHE = "ficha-v5";
const ARQUIVOS = ["./","./index.html","./manifest.webmanifest",
  "./icone-192.png","./icone-512.png","./icone-512-mask.png","./icone-180.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(ARQUIVOS.map(a => new Request(a, {cache:"reload"}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

// rede primeiro, sempre revalidando (o cache HTTP do GitHub Pages dura até 10 min);
// o cache serve só de reserva quando estiver offline
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, {cache:"no-cache"}).then(r => {
      if (r.ok) {
        const copia = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia));
      }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
