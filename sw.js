// sw.js — 離線快取（cache-first）。改版內容後把 CACHE 版本號 +1 即可讓使用者更新。
const CACHE = "studysync-v1";
const SHELL = [
  "index.html", "schedule.html", "subject.html", "quiz.html", "mistakes.html",
  "css/style.css", "js/app.js",
  "js/data/config.js", "js/data/schedule.js", "js/data/math.js", "js/data/chinese.js",
  "js/data/english.js", "js/data/social.js", "js/data/science.js", "js/data/writing.js",
  "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-180.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  // ignoreSearch：schedule.html?date=… 等帶參數的網址也命中已快取的頁面
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok && new URL(req.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match("index.html")))
  );
});
