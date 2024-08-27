'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b88c34933264fb0c1347e78b1556c0ed",
"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "95427671d48bd16d116c11331ba53cf7",
"index.html": "9e056b8b20e54afda254400cfe3e9f44",
"/": "9e056b8b20e54afda254400cfe3e9f44",
"main.dart.js": "06b0fcc3032127549efb284059698578",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/favicon-16x16.png": "9dfb9fd3c6983d9ac1ec481cb3e50ca3",
"icons/android-chrome-192x192.png": "bcb86e34c5988ecd91d112e73d615cd4",
"icons/apple-touch-icon.png": "3ee9486c10d23518d524792079fcedaa",
"icons/android-chrome-512x512.png": "6f7c0e6f824706985c12651b16112a55",
"icons/favicon-32x32.png": "2266e9206f68d755a21f7ca520fb4a11",
"manifest.json": "477be8ffd3b93c7b966d99286d371dc4",
"assets/AssetManifest.json": "e8845e171cbb0b2b2e6a768ecb4cdd83",
"assets/loading.gif": "c90bd5e005b6386788447f43ba4db23d",
"assets/giphy.gif": "089fab4a7dda3fdbfd1aff218b9df640",
"assets/NOTICES": "bb9d2160ce281439e48f996204989ca5",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/AssetManifest.bin.json": "ab0073d3ee78a379fd5ef6307b1c1ed6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d51397f0645f11215afa74a8ad0fcfb3",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "a9dc98f8bf360be897a0898a7395f905",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "812fc69f1180d1caf8b89af2ce2a3932",
"assets/fonts/MaterialIcons-Regular.otf": "7809869ac262e1e7db103e68aaad8e98",
"assets/assets/images/notesgr.png": "5c03595d2c86a53fee1dfc91daa47ebb",
"assets/assets/images/code.png": "25e33057a6112d8baca06361e62942aa",
"assets/assets/images/secondbrain.png": "5ee1ae31f5b63103eecff483e15be7b1",
"assets/assets/images/figmadesign.png": "2cc6722d7b93f2bf7014c06ca09d1aa1",
"assets/assets/images/flappy.png": "c3ca1baa6a644160985785a29829b29e",
"assets/assets/images/auth.png": "336bd35626839f0829fb63c370bdb724",
"assets/assets/images/renty.png": "019513450df277d518a4681e017aeac8",
"assets/assets/images/trashdetection.png": "a9d92a83cf705531c4a70776049f5f86",
"assets/assets/images/Bounce.png": "84a1339499293cf454f66a2a23c310b2",
"assets/assets/images/portfolio_icon.jpg": "1aacc8966e00b9c29acc19cd8f2feca4",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/notespup.png": "2588c5c318f5e677706a0684efb1659a",
"assets/assets/images/todo.png": "571666a81e7d79ec9100bdce4209f876",
"assets/assets/images/renty%2520social.png": "36590e8c8271e0e35741bc97e1bf3b6c",
"assets/assets/images/figmadesignbounce.png": "876702439e0c325b625612ca44f9b00d",
"assets/assets/images/eye.png": "85f831dcc8d04611bbb56a778520864d",
"assets/assets/images/mobile.png": "271b7dcf5e822622566f2c13fe060bd8",
"assets/assets/images/spidey.png": "7af6f61830fc9bd016677b650ef65e39",
"assets/assets/images/coffe.png": "da9e3ced8bc17080a94e257590695cc1",
"assets/assets/images/ui.png": "df21a698ff132161d164a4d8af7f0a52",
"assets/assets/images/figmadesign%2520(1).png": "2cc6722d7b93f2bf7014c06ca09d1aa1",
"assets/assets/images/spidey.jpeg": "87e28b14616b21fd92c46d79ebff6bb9",
"assets/assets/images/ui-ux.png": "627e9b425f452078202bbef16232afbc",
"assets/assets/images/spider-man.glb": "9081e13fffdcbdec4ea08397964bfab9",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
