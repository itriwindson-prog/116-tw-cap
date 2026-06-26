// sw.js — 離線快取（stale-while-revalidate）：
//   先回快取(秒開、可離線)，同時在背景抓最新版寫回快取 → 老師 push 更新後，
//   學生「下一次有網路開啟」就會自動拿到新內容，不需手動改版本號。
//   （只有改動下面 SHELL 清單本身時，才需要把 CACHE 版本 +1。）
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
  // stale-while-revalidate；ignoreSearch 讓 schedule.html?date=… 等帶參數網址也命中
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const fresh = fetch(req).then(res => {
        if (res && res.ok && new URL(req.url).origin === location.origin) cache.put(req, res.clone());
        return res;
      }).catch(() => null);
      return cached || (await fresh) || cache.match("index.html");
    })
  );
});
