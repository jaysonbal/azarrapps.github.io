'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5a6a25f918c4ae52d2b039c3bfe9c128",
"assets/AssetManifest.bin.json": "9fd7a3d11cdec36233a4c4654e189508",
"assets/AssetManifest.json": "423e123344191d44a1d27b8217927f47",
"assets/assets/background/azarrapps1.png": "b8472f48f2ea8eb7208c7abbcce4a433",
"assets/assets/background/basic-package.png": "33b36d98a1518bde6517dfedd6937d83",
"assets/assets/background/footer-bg.jpg": "fe89855ae6656400e58738a45ee0e9e5",
"assets/assets/background/premium-package.png": "d1509dc8bd67cf66926f379d6041b810",
"assets/assets/background/product_container.png": "2de150b171b16270cb3d836e359ae2d1",
"assets/assets/background/standard-package.png": "0d607fec51f51cf9e4ee6b3f1cb5aab8",
"assets/assets/banners/banner1.png": "7b90402f823cb9108862fa153a0b339d",
"assets/assets/banners/banner2.png": "5cca5602180a500db9fb5200a7b21a99",
"assets/assets/banners/banner3.png": "25b4cd43ded8762d43c04de1c0bbe989",
"assets/assets/banners/banner4.png": "5814850a14e5602d9bf9abbf35aecc15",
"assets/assets/logos/applications.jpg": "c2522cbe2868624c21ba6332a6999864",
"assets/assets/logos/apps-development.jpg": "28c12251b035d43cbd850726227f725a",
"assets/assets/logos/apps-mobile-smartphone-ss-1920.jpg": "d3081eb470d5eb83c2373758cf5258e5",
"assets/assets/logos/apps-mobile.jpg": "f28b7f49c2f64b475770027801913291",
"assets/assets/logos/apps.png": "2e5847fff2c2a7fb75eb023ff8bbefec",
"assets/assets/logos/azarr-transparent-icon.png": "cd55ddd3c11bf5ce8e6d1d453abf8c2e",
"assets/assets/logos/happily_using_apps.jpg": "149661b8b72c5531e33d239ca1ba1a12",
"assets/assets/logos/rideez-logo-word.png": "4e303ced3508454cc2990ffee0e1b7e2",
"assets/assets/products/azarr_apps_QR_Code.png": "ce2a1c59aaa773e72eb8767b91124fdb",
"assets/assets/products/basic-packages.png": "9c9eaa34db145aff37a47d23841f8efe",
"assets/assets/products/premium%2520package.png": "bab591da337b218da2c9e252f2724382",
"assets/assets/products/standard-packages.png": "fda1fd1cf00ea32d01464e06df226f85",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
"assets/fonts/MaterialIcons-Regular.otf": "c774756a1de0e37d7b0d91a5730509cf",
"assets/NOTICES": "9eccd0f695609d3f5c08e30013d05e89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "c5c360bc9da6e3555c0f84fe4bc6fcdf",
"favicon-32x32.png": "966805bf3ec7d339c5bb9dcdc785d91d",
"favicon-96x96.png": "f30a4415a88dde9aa0dc1245fa847716",
"favicon.ico": "e5821b0369f24a17da0643ed29f028c9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "49394419b2576672a384ce85cc3d2d07",
"icons/android-icon-144x144.png": "644108ab3fc6bc51217b088a2ace4730",
"icons/android-icon-192x192.png": "90a304626b8e6442041b92687996df33",
"icons/android-icon-36x36.png": "66c72f8535a0ffe85d0b2fa3a9c63aef",
"icons/android-icon-48x48.png": "22c12703f9c1e4f397d84caaa95422fa",
"icons/android-icon-72x72.png": "f380a23f2c7c4bd49fd259f65aaf9142",
"icons/android-icon-96x96.png": "9dc62cd45fe0a4efebff61ec312ae6fd",
"icons/apple-icon-114x114.png": "cb2b4cf4b9e511bcc20132cf18135d3a",
"icons/apple-icon-120x120.png": "93446881535d13be7ddda54c1cb02c2d",
"icons/apple-icon-144x144.png": "644108ab3fc6bc51217b088a2ace4730",
"icons/apple-icon-152x152.png": "3905ca69635cbb7f4b7d4f0b0d93fd8a",
"icons/apple-icon-180x180.png": "b42db6dccfeba91fb3b7effc42b295a6",
"icons/apple-icon-57x57.png": "797c161392078bdcbc49cde8938a8430",
"icons/apple-icon-60x60.png": "1e590496d79042c865bfb56a44b98918",
"icons/apple-icon-72x72.png": "f380a23f2c7c4bd49fd259f65aaf9142",
"icons/apple-icon-76x76.png": "8c4cf8025d248d68687dcb4f40dcfeec",
"icons/apple-icon-precomposed.png": "33e4368b5099f154ff787901e1f7eaa2",
"icons/apple-icon.png": "33e4368b5099f154ff787901e1f7eaa2",
"icons/ms-icon-144x144.png": "644108ab3fc6bc51217b088a2ace4730",
"icons/ms-icon-150x150.png": "8fcd53f442ede017fabf495121225c7f",
"icons/ms-icon-310x310.png": "3aac815f74ff587fcc9b397ada131cdd",
"icons/ms-icon-70x70.png": "1eaba17d2793a0d50ad6b8e2f7f67e8e",
"index.html": "e559477c8b0497601dadd7847bad511f",
"/": "e559477c8b0497601dadd7847bad511f",
"main.dart.js": "8651c3946792385f4ff9952bc9759ce4",
"manifest.json": "832c5210f86156328b7c853b860ccdc1",
"version.json": "155126ffab7b53e683c948669a9a76b4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
