importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/466522799cc09b291b89.js",
    "revision": "ecb4995fbf6e088b35d4d8d685f9379a"
  },
  {
    "url": "/_nuxt/84cb701c5913cf5c80e4.js",
    "revision": "cccc4a8ca999b296c5f55ffaf8280f72"
  },
  {
    "url": "/_nuxt/99e95a98963ba9c330c2.js",
    "revision": "1f5c5ec6e8a941e116cecc9cab3b165f"
  },
  {
    "url": "/_nuxt/aa5e9ea5acbd98ce0a3a.js",
    "revision": "0b38632f08dcacb468908d962a5410e6"
  },
  {
    "url": "/_nuxt/bbe947342cdbc3aeb7ab.js",
    "revision": "a7d8dc6d1786d916489b3f141b9ca311"
  },
  {
    "url": "/_nuxt/d7abf52943f3893e2e9f.js",
    "revision": "dff6e7bb71f4cfbd6bed17cc1b91b5ed"
  },
  {
    "url": "/_nuxt/e82b8b50d83f412c112f.js",
    "revision": "c2a6c15e82d88074e5e158b43bf21141"
  },
  {
    "url": "/_nuxt/ea598b1a2861dbd23a45.js",
    "revision": "849dbcadaf49e440c283ea051941f9dd"
  },
  {
    "url": "/_nuxt/ee5c4a042f428a9c33aa.js",
    "revision": "51563dad5740a80c1a18398295d2c68f"
  },
  {
    "url": "/_nuxt/eec52c9b4af8507af4e4.js",
    "revision": "c9e0be7e75182bf37530458fc9603bde"
  }
], {
  "cacheId": "nuxt-example",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
