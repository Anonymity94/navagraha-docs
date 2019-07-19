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
    "revision": "00d400f2bcbd15993c5ccb42cd2e5f7e"
  },
  {
    "url": "assets/css/0.styles.2fc00007.css",
    "revision": "e8e8224bc9c5800b1ca0f7508f7e141c"
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
    "url": "assets/js/app.99f888b4.js",
    "revision": "8bd904392c4f9346d0f6ac35dee94d3c"
  },
  {
    "url": "build/index.html",
    "revision": "642728391fefe8561bec0b1712e95e75"
  },
  {
    "url": "guide/index.html",
    "revision": "f4e9e1f147ecd695c1d3c2bb508de893"
  },
  {
    "url": "index.html",
    "revision": "146291c5ba44c136570c0e2e6b741a6d"
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
