const CACHE_NAME = 'polyglot-v19';
const assets = ['./', './index.html', './manifest.json'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets))));
self.addEventListener('fetch', e => {
    if (e.request.url.includes('translated.net')) return;
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});