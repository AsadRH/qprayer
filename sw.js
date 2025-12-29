self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("prayer-app").then(cache =>
      cache.addAll([
        "./",
        "index.html",
        "manifest.json",
        "sw.js"
      ])
    )
  );
});
