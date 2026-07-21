const CACHE='ys-love-v25-20260721';
const ASSETS=['./','./index.html','./invites.js','./pwa.js','./home-ui.js','./mobile-ui.css','./manifest.webmanifest','./app-icon-3d.png','./romantic-3d-bg.png','./cinema-couple-final-v4.png','./cinema-effects-3d.png','./cinema-mic-assets-3d.png'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request)))});
