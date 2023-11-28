//asignar nombre y version de cache
const CACHE_NAME='v1_cache';



//eventos de service worker

//Instalacion del service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('mi-cache').then((cache) => {
            return cache.addAll([
                '/',
                'icon',
                'icon/dia-de-los-muertos-16.png',
                'icon/dia-de-los-muertos-24.png',
                'icon/dia-de-los-muertos-32.png',
                'icon/dia-de-los-muertos-256.png',
                'icon/dia-de-los-muertos-512.png',
                'DiadeMuertos.html',
                'main.js',
                'manifest.json',
                'package-lock.json',
                'package.json',
                'sw.js'
            ]);

        })
        
        
    );
});

//Activacion del Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheName) =>{
            return Promise.all(
                cacheName.map((cacheName) => {
                    if(cacheName !== 'mi-cache'){
                        return caches.delete(cacheName);
                 }
                })
            );
        })
    );
});

//Intercepta las solicitudes y maneja las respuestas desde la cache

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});