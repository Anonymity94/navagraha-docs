/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cf51f92849e961ce5d2be43cc4fcef17"
  },
  {
    "url": "assets/css/0.styles.431196a0.css",
    "revision": "93ae233ad2b862873ab9094ae06c7468"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.2d69bbdc.js",
    "revision": "95ac714a09f0a91e0082ea76caf276af"
  },
  {
    "url": "assets/js/3.9ff9d50c.js",
    "revision": "bb8ba28a7e366fad6315821e0b6599f1"
  },
  {
    "url": "assets/js/4.164608e2.js",
    "revision": "64db4d1af123bfb3c075a1c3c2447ae7"
  },
  {
    "url": "assets/js/5.52c98876.js",
    "revision": "372608366fbd949fd93f8df1b21c4446"
  },
  {
    "url": "assets/js/6.d2a7e903.js",
    "revision": "76038b93a38bb8374998d2944e15f499"
  },
  {
    "url": "assets/js/app.7db0405c.js",
    "revision": "47ca277b0e23e1cdfa8383ef72570eb5"
  },
  {
    "url": "build/index.html",
    "revision": "1ba42e6d3f4ccfe604ec73227cb60652"
  },
  {
    "url": "guide/index.html",
    "revision": "ea09b0bd06149c5d4d1b8c2b7d085070"
  },
  {
    "url": "index.html",
    "revision": "a3b60b51399051681deba192bb6d06f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
