const CACHE_NAME = 'polyglot-v20';
const assets = ['./', './index.html', './manifest.json'];
self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets)));
});
self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
    if (e.request.url.includes('translated.net')) return;
    if (e.request.mode === 'navigate' || e.request.url.endsWith('/index.html')) {
        e.respondWith(fetch(e.request).then(res => {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put('./index.html', clone));
            return res;
        }).catch(() => caches.match('./index.html')));
        return;
    }
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});