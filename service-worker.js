importScripts("/precache-manifest.020cd5cb83c25a82ede3ab831fd454e7.js");

/* eslint-disable */

const cacheName = 'ZBLOG-cache-0.0.1';
const dataCacheName = 'ZBLOG-data-cache-0.0.1';

self.__precacheManifest = [
    {
        "revision": '0.0.1',
        "url": "/"
    },
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
        "url": "/service-worker.js"
    }
  ].concat(self.__precacheManifest || []);
const precacheFiles = self.__precacheManifest.map(item => item.url);

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(precacheFiles)
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
                }).catch(function(err) {
                    console.log(err);
                    return caches.match(e.request.url).then(function(response) {
                        if (response) {
                            return response;
                        }
                    })
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
