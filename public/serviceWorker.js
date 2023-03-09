const bracketify = "bracketifyCache_v3";
// add file or change name for new cache
const assets = [
    "index.html",
    "newBracket.html",
    "css/style.css",
    "js/app.js",
    "rand.html",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(bracketify).then(cache => {
        cache.addAll(assets)
      })
      .then(() => self.skipWaiting())
    );
  });

  /*
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(bracketify => {
      return Promise.all(
        bracketify.map(cache => {
          if (cache !== bracketify) {
            console.log("sw: clearing old cache");
            return caches.delete(cache);
          }
        })
      )
    })
  );
});
*/

self.addEventListener("fetch", e => {
  console.log("sw fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
