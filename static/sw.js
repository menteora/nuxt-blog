importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e8e674cffe99ce06ea8.js",
    "revision": "2706fe701a2a60202e5369cd6f9f6579"
  },
  {
    "url": "/_nuxt/13d71aa8badff5c9f139.js",
    "revision": "6f7c8a06ea268a07fa0ad871c80967db"
  },
  {
    "url": "/_nuxt/216c27fdc07315d7aca6.js",
    "revision": "e965ae9476bca15dbd75ec42a4c93a92"
  },
  {
    "url": "/_nuxt/2975e1f37d720b0581d1.js",
    "revision": "4f8fac093d02fc314461ccf8c0afbd08"
  },
  {
    "url": "/_nuxt/4f0cf9d848fcfc6ab39a.js",
    "revision": "e561e9c68cb9c0d0c1e497a709a76643"
  },
  {
    "url": "/_nuxt/877258a3f036230cda41.js",
    "revision": "ebadd127c9e4f2709f74d4a12fee2d03"
  },
  {
    "url": "/_nuxt/921cad61628359cfb4b3.js",
    "revision": "73210138d5fe4e296bc9e14ec5e7603b"
  },
  {
    "url": "/_nuxt/9429ca2284d36ce84ab4.js",
    "revision": "876ec336586aec7ee44ae769124ea576"
  },
  {
    "url": "/_nuxt/99d1966b71b07bf61bfc.js",
    "revision": "5a8473684863811f6f186bc5157b4086"
  },
  {
    "url": "/_nuxt/a4e4614fb489c85cfec2.js",
    "revision": "dfe851cb11d093a70916cedcb94975f3"
  },
  {
    "url": "/_nuxt/b579f014ef0f44bbc359.js",
    "revision": "dd854a37ec62ea78895cfff584353577"
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
