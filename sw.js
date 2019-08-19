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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.6be8c246.png",
    "revision": "8968ae9a133589cb6f23ee8c42e2b88d"
  },
  {
    "url": "android-chrome-512x512.4c5a9f2a.png",
    "revision": "502f0777f248b5e2b2daf7d73eee0aa7"
  },
  {
    "url": "app.7e3c987a.js",
    "revision": "4a7f605d0fa00780f55c1b04ae5b7081"
  },
  {
    "url": "apple-touch-icon.e52ba74d.png",
    "revision": "ea81bf874902405a0bf57b123fe308f0"
  },
  {
    "url": "index.html",
    "revision": "3e4b33a3a2fe0d37d1f95d404d44f48d"
  },
  {
    "url": "style.67bea073.css",
    "revision": "1d2dd906c6274f133b20c0cd8a708a3a"
  },
  {
    "url": "/",
    "revision": "3e12364b32e3540f54f1c52ebdd26210"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
