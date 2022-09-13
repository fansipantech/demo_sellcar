'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e555de41818d2ab4819062a524648abf",
"index.html": "238e1da1f65080a07a03fab382fd0e03",
"/": "238e1da1f65080a07a03fab382fd0e03",
"main.dart.js": "44d8e4b31babb9e01d9a75996727950e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "48f614e211b7fbc479d6d62f0caf9b1d",
"assets/l10n/en.json": "74c2fa0b52fe23c940ed1a19c59b332d",
"assets/l10n/vi.json": "e4572c839757ca508256320db2966193",
"assets/AssetManifest.json": "41c99e470f051b56286fe3fbe98ce483",
"assets/NOTICES": "435117eb1632b27a093cdbaddea84a3e",
"assets/FontManifest.json": "cbbff3b64882bab747f3b114bb104cb6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/we-help.jpg": "ffeeac6abc3980f9619010f71ff13cbe",
"assets/assets/images/no_valuation.png": "f8ff9faf2111ad0fe145076937c3e7a6",
"assets/assets/images/step-4.png": "ff61972f2d5c7de0656e143a9369c0fc",
"assets/assets/images/why-choose-us.png": "1885f9db56a9ed95eecddd975421816d",
"assets/assets/images/ic-sell-confirmed.png": "5ee77e75d354709fb754de1c40a787e4",
"assets/assets/images/step-1.png": "70aa7f1901c17d45d135d315ce19d53a",
"assets/assets/images/step-3.png": "9ffe2e9a373017d067e1dbb633153d2b",
"assets/assets/images/step-2.png": "a811428424f2eac21d1c59966ef027f6",
"assets/assets/images/2.0x/ic-sell-confirmed.png": "256b0eb195275ee11ae14ecfc6d07a6c",
"assets/assets/images/2.0x/agent-step-1.png": "600fdba3819e668b6a1ecb88d7a608f4",
"assets/assets/images/2.0x/agent-step-2.png": "c1df672122b0e373f89bc647daa816c7",
"assets/assets/images/2.0x/agent-step-3.png": "87b1b48bd3933f40d26d5925fba40927",
"assets/assets/images/2.0x/hero-bg-person.png": "de9fdf1c5ddc14ce3d9155ede1fd9c6c",
"assets/assets/images/step.png": "a1ec56ff2521b92c8627d47534a2362d",
"assets/assets/images/agent-step-1.png": "c4e7a41fa266d261af3becc16501e73a",
"assets/assets/images/agent-step-2.png": "23714203828f958cd7605c3e83bafa68",
"assets/assets/images/3.0x/ic-sell-confirmed.png": "072cec8ac6fdaf9be4b0ab3b3c5a519b",
"assets/assets/images/3.0x/agent-step-1.png": "e658a13f609476cd29d264b16aebc617",
"assets/assets/images/3.0x/agent-step-2.png": "1b7c3a390360a73502878e65c34e37b7",
"assets/assets/images/3.0x/agent-step-3.png": "4e8db278d223fb6d70179bb34120a293",
"assets/assets/images/agent-step-3.png": "82ca4f3403fdf9b157eba3d62a2f70b2",
"assets/assets/images/google-play-badge-en.png": "5eef224c1abc29a8577f5b8b52480b43",
"assets/assets/images/hero-bg-person.png": "4766cceeeba4d21194335afc03e7d316",
"assets/assets/images/agent-bg-banner.png": "ec43e6a4df856043535ff46d3db9ca40",
"assets/assets/images/google-play-badge.png": "fcb5d5a2ea550ab163756e6e635c64e8",
"assets/assets/images/cta-bg.png": "6a2dd513d8e2cd3cf4810036d0b0eec2",
"assets/assets/images/android-device-frame.png": "4fa76e47c64549d0485549dfc785a2cd",
"assets/assets/images/logo-c.png": "003f2c9e32bf7bba63604892cb936014",
"assets/assets/images/300169147_3138818016372430_1702982527093651096_n.png": "b80a620a6e2ce4452ec5e10eae6f3e50",
"assets/assets/images/app-gallery-badge.png": "aef9bedf2d36fe6532ecd812938eb5ca",
"assets/assets/images/hand-app.png": "043d3f6798929e0dcdb096175e6dcfe5",
"assets/assets/images/app-store-badge.png": "59e042620c86e1d916e0e4331ebb8408",
"assets/assets/icons/ic-5-star.svg": "c9b591caf629472e84f700437df69496",
"assets/assets/icons/ic-value-car-2.svg": "fddc21f01f092e5c2ac7edbbe533b92e",
"assets/assets/icons/ic-value-car-1.svg": "03aee2696332d903c455d17d1920447c",
"assets/assets/icons/ic-get-highest-offer-small.svg": "717bb0a2a0b54080c94bc31bb0d682b0",
"assets/assets/icons/step.svg": "0dccef365011ba39cdba7abb48fe26b6",
"assets/assets/icons/ic-car-spare-keys.svg": "6b3b6f80ead5aafbb041bd129c69a5d0",
"assets/assets/icons/ic-car-bookmark.svg": "ff71a19a5dec9d849f9a9911013d9dbd",
"assets/assets/icons/dot.svg": "a6c4ebf14447f276195495ee5b62c376",
"assets/assets/icons/ic-prev.svg": "6e0dad2d3cb6beb6198616821f597e11",
"assets/assets/icons/ic-profile-vehicle-small.svg": "83f8660682caeeb6e4b8a4bdc6866fb9",
"assets/assets/icons/completed-dot.svg": "a0c72908dc802f69e3744d96e0d1a607",
"assets/assets/icons/ic-car-register-card.svg": "8085e7237fadaf691ef92d620246e4b5",
"assets/assets/icons/ic-profile-vehicle-large.svg": "d4480cdeb0f512c4758aa9e394207f04",
"assets/assets/icons/ic-complete-the-save.svg": "a643662d79616f57cc31ea4ac682a9e9",
"assets/assets/icons/ic-next.svg": "6e0dad2d3cb6beb6198616821f597e11",
"assets/assets/icons/agent-number-2.svg": "263c43170176925a4c7bcdb6b715e8db",
"assets/assets/icons/agent-number-1.svg": "6c99ee2dc1dccc8e3c1635c608500d58",
"assets/assets/icons/ic-agree-reserve-price.svg": "e41b72e4966313129682d7712282fa45",
"assets/assets/icons/valuation_step1.svg": "db1e305278bd0856ac03aa7c30f6f788",
"assets/assets/icons/valuation_step2.svg": "40fbf4bbe4205563404257e5233b7bdd",
"assets/assets/icons/valuation_step3.svg": "f0b3cd2bef87274fd620b878b513d4ff",
"assets/assets/icons/ic-get-highest-offer.svg": "16b3ee3d138eb528fa854735e1d9a208",
"assets/assets/icons/agent-service-1.svg": "aeafcec4f6d074e3d1720c184dc38ace",
"assets/assets/icons/ic-whatnext-4.svg": "f0de92e71f72c70b2ea7cafc90549cad",
"assets/assets/icons/agent-service-2.svg": "511538df6cc399c2d53282a17cef2eb7",
"assets/assets/icons/ic-whatnext-3.svg": "ca8cb958c3c9d64a7710a3469d740ed8",
"assets/assets/icons/agent-benefit-1.svg": "c78d930b04fe65338aa6dcf290ad2374",
"assets/assets/icons/sell-car-bg.svg": "6263394f7f517171dd6a6ef997579878",
"assets/assets/icons/ic-whatnext-2.svg": "b4de8dfd5c821a7756a9730d056374b9",
"assets/assets/icons/agent-benefit-3.svg": "53052070575ae9b5327e4c13ae593464",
"assets/assets/icons/agent-benefit-2.svg": "dd08e52cd380daf7161c05a061953ec1",
"assets/assets/icons/ic-whatnext-1.svg": "e5620ef62f0ab963968fdd60c3151a21",
"assets/assets/fonts/Roboto-Medium.ttf": "99fc0816a09395454061301fefa42bf1",
"assets/assets/fonts/Roboto-Light.ttf": "e22062b3188c8199283ef2aa835d4653",
"assets/assets/fonts/Roboto-Regular.ttf": "54a91b0619ccf9373d525109268219dc",
"assets/assets/fonts/Roboto-Italic.ttf": "2991e14ab958afe393cf5815cd4e6915",
"assets/assets/fonts/Roboto-Bold.ttf": "afa7a91dadd77b23634a0fdf18c148f3",
"assets/assets/fonts/Roboto-Thin.ttf": "5ecbc99d1a81fed7dc71cb068ec0a74d",
"assets/assets/data/faq.json": "4a3131e2b59af03fd3761167e91260ec",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
