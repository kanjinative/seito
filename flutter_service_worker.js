'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3f91dbfc42180e7d333a076d41e3432c",
"index.html": "b42f8f1009b21c865cfa0c30d00f8930",
"/": "b42f8f1009b21c865cfa0c30d00f8930",
"main.dart.js": "9bb531ad769cb808e859e80035787a3a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c379d269dcc113e0ff666cbbdcbc1548",
"assets/AssetManifest.json": "dbddd71b1753870a27ac55e2d86b03e8",
"assets/NOTICES": "1fefb8a93e955df2b88b407b86fc88b7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "711487c144dc67918f36d82a33c4a4e5",
"assets/fonts/MaterialIcons-Regular.otf": "0c6302b4faa405715ee5ed3e80ed47ab",
"assets/assets/office-building-where-you-can-see-inside-each-floo.png": "93f5e57f9c013de9191c11196a08efea",
"assets/assets/hospital.png": "58645c3aec5f60cc2b513ac1d45e77f1",
"assets/assets/a-small-child-sitting-on-the-floor.png": "d778926d19c2aa7b3f63353e995bd8ff",
"assets/assets/flag.png": "a5acf912a5d2dd3897dc78e83390fc91",
"assets/assets/bus-stop.png": "2606703356aa7f96ba0b82ae7ff3bbf9",
"assets/assets/a-30-years-old-man-sleeping-on-the-sheet-under-the.png": "c19eb3a0bfddbe1d8a6da42ec84c9630",
"assets/assets/beef-on-the-pan.png": "cf4ec809296c547a0cd6342f41ff13ec",
"assets/assets/japanese-garden-.png": "5d155faa22ac8681bb30de3773f60c7f",
"assets/assets/a-rucksack.png": "3dee45fd1a9fe61de62c80da64d2fbd0",
"assets/assets/dictionary.png": "ff75287e7a491a7c6a6438dc75087afe",
"assets/assets/dog_running.png": "32a0ef78424e79c37c2533298619f667",
"assets/assets/herikopter-from-the-outside1.png": "32d7534fda7dab7e46404ef75f615ab1",
"assets/assets/he-is-watching-tv.png": "903b4047dbe437eeb14c5aee149e7549",
"assets/assets/ship.png": "a5d565beb07883268787c2d3780a343b",
"assets/assets/old-lady-siting-on-a-chiar.png": "e20eb9e284bab33249be559e60e34175",
"assets/assets/opening-book.png": "37149d085357a6dca8da6398c4fa14c4",
"assets/assets/cafe.png": "e3088dd0df64c9224e3b6fb3d8c5a962",
"assets/assets/girl_singing.png": "b9afdf46160b99b0b619c4ae4c67891b",
"assets/assets/packman.png": "15175868dc082abc3f7d9d8edf7486d8",
"assets/assets/oldlady.png": "bb526cb771829a335a6419f9c74d4a3c",
"assets/assets/moon1.png": "bc9b5e264ca3b32dc40397f0f8bb1547",
"assets/assets/standing-woman-has-a-dish.png": "d5aa44968a257d3d69a1c6b7baee99c2",
"assets/assets/green%2520Tree.png": "4423eb16e6849fd4360976944f4b233d",
"assets/assets/man-fishing-from-back-2.png": "1590aed1c98e1f706b055e98ae667691",
"assets/assets/a-woman-standing-on-the-street.png": "f6a4b0737681c4505ae1536e2877f583",
"assets/assets/a-man-sitting-on-the-bench-plays-a-guitar-from-the.png": "119f231995c9c5cae7e7d6dcfa4024e1",
"assets/assets/white-eggs-in-the-pack.png": "42c29c0d4370285f7bcaba7c21daab4b",
"assets/assets/a-woman-walking-on-the-street.png": "50d5ffc08bc51d3f10b1fbae5e27219a",
"assets/assets/a-man-playing-a-piano.png": "f3f31cc78e81fbcc6a54ca6dc061ec5b",
"assets/assets/a-girl-reading-a-book.png": "9cc98096194ab80bdd6f4bf9141239d8",
"assets/assets/beef.png": "71d0a7295b93da16b117ad1242e7aa44",
"assets/assets/a-man-playing-a-guitar-on-the-bench.png": "c8abfaa2b5d4fea1e44dcdf72fc07cd2",
"assets/assets/white-simple-plain-cloud-anime-style.png": "a34ca76821c6aed6a7bb2be2a47d614a",
"assets/assets/background.png": "ba62116383dc46822ab4d1686ebd5dbb",
"assets/assets/chick1.png": "e971f5bbfb83a33fd77c95f1c32589a9",
"assets/assets/a-man-is-cooking.png": "57fbeebc06e9c5753ac1f00451a5279a",
"assets/assets/bucket-full-with-fish--side-view.png": "8fd6461992bbc971f77cf75be6879932",
"assets/assets/basket.png": "1d8ee2ec294e7d2b64a7351aaa0ec567",
"assets/assets/a-smartphone-laying.png": "c117c8459b77849d994696219c7c4394",
"assets/assets/apple.png": "bd3878e79e5e320fa53491c6a169f097",
"assets/assets/cat.png": "6602339e2c597fb05ad9641e1dfda672",
"assets/assets/airplane.png": "6973b2846de5a39f097207249aa19e80",
"assets/assets/piyoChan.png": "8848194f28df569b95e9db138f5868dc",
"assets/assets/a-cat-is-watching-tv.png": "ba12bd6d2d60c2808537d1b73df10197",
"assets/assets/aGirlSittingOnTheBench.png": "d8b6437815e57d815a02c67f081e87e5",
"assets/assets/a-woman-playing-a-guitar.png": "78d252d7737db1cb245bdd43c147b2d8",
"assets/assets/girl-trying-to-catch-a-butterfly.png": "c929c968dd992bf3df3b9a8b81ac67de",
"assets/assets/supermarket.png": "1c8b0a2edbda648ca4777c29776c54c5",
"assets/assets/boys_play_soccer.png": "cee7e78302c3d82481e92db6e5659cd8",
"assets/assets/a-bird-flying.png": "36b0e1f0a558ce06dd9daf9b3e70f6d5",
"assets/assets/icons/a-head-of-a-dog.png": "fe3646e93ab23667af99e44829bff0ef",
"assets/assets/icons/head-of-a-horse.png": "866dcbcb116e753a66956c4bc280cd7f",
"assets/assets/icons/ranking.png": "82740115357fd972f01d7c4900341937",
"assets/assets/icons/winner-s-podium%2520(2).png": "c7826dce71df5b4319f42a77eb21cb05",
"assets/assets/icons/winner-s-podium.png": "61d2c5294f8d5e22d96874f2b9acda48",
"assets/assets/icons/head-of-a-friendly-beaver-with-2-teeth.png": "67f37cbf45ea91a55ed2cb841ba7b673",
"assets/assets/icons/head-of-a-kangaru.png": "4f914550c4fa1ec6d1a440e62d4e7a99",
"assets/assets/icons/a-goldfish-from-the-side.png": "ee7241d0598af919e5795494414c6c6f",
"assets/assets/icons/head-of-tanuki.png": "d8d168967221160ac988a599e8e1fc23",
"assets/assets/icons/head-of-a-dog.jpg": "cebb0b6731d46d2958aa7214510096e3",
"assets/assets/icons/a-head-of-zebra.png": "063372dd5efd2b658a4c493e0e378bda",
"assets/assets/icons/head-of-a-bear.png": "7b73d994ebd3bfac1d708d5278e441c7",
"assets/assets/icons/silhouette.png": "95f90b40be0cb680e395272b6c386536",
"assets/assets/icons/head-of-a-tiger.png": "1c9cbe008653cfbf5a330b97c5607896",
"assets/assets/icons/winner-s-podium.svg": "e2ae4c39fcad1c30e5f9c6c1e53f110c",
"assets/assets/icons/head-of-a-cow.png": "0cdd67049e3976a6ae9780852f045eee",
"assets/assets/icons/head-of-a-rabbit.png": "3fb4341958c3dcb7a2681dd7d00a8e73",
"assets/assets/icons/head-of-a-frog.png": "5e8a05e778617455568a26125ced38c8",
"assets/assets/icons/head-of-a-bird.png": "d713622597c4f0e9b9b42ebe4c66a2f3",
"assets/assets/icons/head-of-a-penguin.png": "cd3d9e80e17bb6817d62902fdd82b414",
"assets/assets/icons/head-of-a-monkey%2520(1).png": "ec507fd924d39907e086005f4f9f4be8",
"assets/assets/icons/japanese-tatami-room.png": "3546e3422fb912b2b1c0adc1c48c71e4",
"assets/assets/icons/yellow-head-of-cute-baby-chick.png": "d68f1285d62cc5f7fba726f091ba576f",
"assets/assets/icons/head-of-a-frog%2520(1).png": "7e0c277770aff4e3fbb71ee1a2eeeabc",
"assets/assets/icons/cute-whale.png": "ef26fa277043a43b225bdb3ff20663ad",
"assets/assets/icons/yellow-head-of-cute-weasel.png": "9c6b3ce2df0fb67de923852d661e9093",
"assets/assets/icons/head-of-a-monkey.png": "8d6ff2f9d7c4322e35a112f817a75826",
"assets/assets/icons/head-of-a-cat.png": "dbb49db161819b76aacb8244aa69967f",
"assets/assets/icons/crane.png": "7677aa8ee88e940873a0e6f4bbc1b85e",
"assets/assets/icons/head-of-a-dinosaur.png": "f429255810c6a0bb13be01075f71df27",
"assets/assets/icons/head-of-a-pig.png": "c0a43e2ad3011bff40e0ce23ef18194a",
"assets/assets/icons/cute-whale%2520(1).png": "09b206806b504c86285dde2ca8ebf41a",
"assets/assets/icons/a-head-of-owl.png": "bbc2cb70b6d06e4c2246589257dc929f",
"assets/assets/icons/cute-bee.png": "f06285dd60ca90e8116906e613b445d1",
"assets/assets/icons/head-of-a-lion.png": "756489a3a785151604fed9c9a86412ba",
"assets/assets/icons/japanese-room.png": "67f6bc340401b0d5d9a644cf57ead71e",
"assets/assets/icons/head-of-a-koala.png": "a4347a5178dc7daf27afb91ee522d788",
"assets/assets/icons/yellow-head-of-cute-baby-fox.png": "fc5015088e7657fa0f8b996cea9122c7",
"assets/assets/icons/image.png": "c3ee5147b7a131c063e07b33a2e1a734",
"assets/assets/icons/head-of-a-chick.png": "0f2634f4bb94222a61516583720642d8",
"assets/assets/hotel-from-outside.png": "9733f5f3a16db44b621918b1dedc4d6c",
"assets/assets/car.png": "17de866a50d0b99441f075f1cce6eef1",
"assets/assets/a-basket-full-with-vegetables.png": "fff0cf6f84976d70c765f7a9cac5841f",
"assets/assets/Maerchen.png": "422eba15a2f864f7b63dd2f486be938b",
"assets/assets/old-man-siting-on-a-chiar.png": "651cd6ea6ab5f8beb07fe4693e0f7b42",
"assets/assets/a-man-with-glasses-sitting-on-a-ground.png": "cabe1d08cc7348de35f5736c77986585",
"assets/assets/wummelbuch.jpeg": "4cc2422a51e9e8b9d7d39e9b15385189",
"assets/assets/herikopter-from-the-outside.png": "24fb6a7f84b7c7cc81dd29139a2c7d09",
"assets/assets/grill.png": "12384a7dbb10e431b3c4bbe14d38fccc",
"assets/assets/hamburger-store.png": "f98ba285a5ded7c589b289d94aadb7d3",
"assets/assets/a-40-years-old-man-wearing-a-t-shirt-stands.png": "0103ab1cf8b0e6b7e861b3d41c676d91",
"assets/assets/stuff-animal-of-bear.png": "c3bbd4b9d441689becdf712c3d97fac9",
"assets/assets/a-bottle-of-milk-with-a-label-of-cow.png": "abb49a68b4fded432085109ee15dadbb",
"assets/assets/black-screen-for-an-advertisement.png": "b1e1ba070b39d85a179e1614749a3c3b",
"assets/assets/a-bottle-of-orange-juice-with-a-label-of-oranges.png": "a5eedbe8e74d6449a2a839b8250a114b",
"assets/assets/camera.png": "0afe767b3165fb8052a0c4a6d23c195e",
"assets/assets/kn_race_bg.png": "69c73e6282e184887c0661f7962ba243",
"assets/assets/fresh-apple.png": "be2db169469f6742507512c21e078cfb",
"assets/assets/table.png": "d2a5e1e95bd7d01b7305cea7e8e17b58",
"assets/assets/shelf.png": "554bc661264bbd57d7ca377adc0eef32",
"assets/assets/twoBoysPlay-WithBall.png": "daacc50e75e0078d13f4006e9d299298",
"assets/assets/dish-from-the-side.png": "ca849f6114313c61432623eecf42ec44",
"assets/assets/old%2520man.png": "ccd0c91c20ce0c6432e4243634dc0dd3",
"assets/assets/chick.png": "6e05851bcccfa7da4da64a0f1139274c",
"assets/assets/bgA1.png": "b1a639e3826a83fb17cfc3e88701c610",
"assets/assets/glass-of-beer.png": "fe8b1d0dc7f4dc25d5877e38fa9a1a0e",
"assets/assets/bus-from-the-side.png": "105cecaed20db392373a36af92355c0a",
"assets/assets/building-from-the-front.png": "fa23bb151d8be428df5861f48150bc67",
"assets/assets/a-firework-in-the-sky.png": "d3da238cb23097394c9446993571ce16",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
