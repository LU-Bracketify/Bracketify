const bracketify = "bracketifyCache_v5";

self.addEventListener("install", installEvent => {

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
  e.respondWith(
    fetch(e.request)
    .then(res => {
        const resClone = res.clone();

        caches
        .open(bracketify)
        .then(cache => {
            cache.put(e.request, resClone);
        });
        return res;
    }).catch(err => caches.match(e.request))
  );
});
