importScripts("/precache-manifest.594d9329060ed0f783d957ccbd39e178.js");

/* eslint-disable */
// 引入workbox全局变量
importScripts('./workbox-sw.min.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// 设置文件的前缀和后缀
workbox.core.setCacheNameDetails({
  prefix: 'ZBLOG',
  suffix: 'v0.0.1',
});

// have our sw update and control a web page as soon as possible.
workbox.skipWaiting();
workbox.clientsClaim();

// 将静态资源进行预缓存
self.__precacheManifest = [
  {
    "revision": "4.7.0",
    "url": "./font-awesome-4.7.0/css/font-awesome.min.css"
  },
  {
    "revision": "4.7.0",
    "url": "./font-awesome-4.7.0/fonts/fontawesome-webfont.eot"
  },
  {
    "revision": "4.7.0",
    "url": "./font-awesome-4.7.0/fonts/fontawesome-webfont.svg"
  },
  {
    "revision": "4.7.0",
    "url": "./font-awesome-4.7.0/fonts/fontawesome-webfont.ttf"
  },
  {
    "revision": "4.7.0",
    "url": "./font-awesome-4.7.0/fonts/fontawesome-webfont.woff"
  },
  {
    "revision": "4.7.0",
    "url": "./font-awesome-4.7.0/fonts/fontawesome-webfont.woff2"
  },
  {
    "revision": "4.7.0",
    "url": "./font-awesome-4.7.0/fonts/FontAwesome.otf"
  },
  {
    "reversion": "0.0.1",
    "url": "./service-worker.js"
  },
  {
    "reversion": "3.6.3",
    "url": "./workbox-sw.min.js"
  },
  {
    "reversion": "0.0.1",
    "url": "./favicon.ico"
  },
  {
    "reversion": "0.0.1",
    "url": "./apple-touch.icon.png"
  },
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const handleApiCallback = ({url, event, params}) => {
  if (url.indexOf('api') !== -1) {
    return fetch(event.request)
    .then((response) => {
      return response.josn();
    })
  }
};

// 定制自己的需求
// cache our data, and use networkFirst strategy.
workbox.routing.registerRoute(
  /static\/|font-awesome-4\.7\.0\/|\.ico|\.png|service-worker\.js|workbox-sw\.min\.js/, 
  workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
  'https://api.github.com/graphql/',
  handleApiCallback,
  'POSTS'
)
