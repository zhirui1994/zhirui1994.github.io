importScripts("/precache-manifest.9155ca3e9550dcc544ae2225c0a7f161.js");

/* eslint-disable */

const cacheName = 'ZBLOG-cache-0.0.1';
const dataCacheName = 'ZBLOG-data-cache-0.0.1';

self.__precacheManifest = [
    {
      "revision": "4.7.0",
      "url": "/font-awesome-4.7.0/css/font-awesome.min.css"
    },
    {
      "revision": "4.7.0",
      "url": "/font-awesome-4.7.0/fonts/fontawesome-webfont.eot"
    },
    {
      "revision": "4.7.0",
      "url": "/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"
    },
    {
      "revision": "4.7.0",
      "url": "/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf"
    },
    {
      "revision": "4.7.0",
      "url": "/font-awesome-4.7.0/fonts/fontawesome-webfont.woff"
    },
    {
      "revision": "4.7.0",
      "url": "/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2"
    },
    {
      "revision": "4.7.0",
      "url": "/font-awesome-4.7.0/fonts/FontAwesome.otf"
    },
    {
      "reversion": "0.0.1",
      "url": "/favicon.ico"
    },
    {
      "reversion": "0.0.1",
      "url": "/apple-touch.icon.png"
    },
  ].concat(self.__precacheManifest || []);

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(
                self.__precacheManifest.map(item => item.url)
            )
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName && key !== dataCacheName) {
                    return caches.delete(key);
                }
            }))
        })
    )
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    var dataUrl = "https://api.github.com";
    if (e.request.url.indexOf(dataUrl) > -1) {
        e.respondWith(
            caches.open(dataCacheName).then(function(cache) {
                return fetch(e.request).then(function(response) {
                    cache.put(e.request.url, response.clone());
                    return response;
                })
            })
        );
    } else {
        e.respondWith(
            caches.match(e.request).then(function(response) {
                return response || fetch(e.request)
            })
        );
    }
})
