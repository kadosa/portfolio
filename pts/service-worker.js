/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["basic.html","1e93541ba6c3ba1ab02dd8e9f17cb48a"],["connect-to-shopify.html","a41942790e6ec38df716f53e14250d83"],["create-goods-received-note-success.html","0fe75d6dbfe1b3bb8d12a33f00c1908a"],["create-goods-received-note.html","2896816133d5bb9df058dd6a78c6813f"],["dashboard-consultation-confirm.html","164e54ce20ee25c8e5edb0a2080afcb0"],["dashboard-consultation.html","3297b8b1a6e0b9a3c594e93f6fc4276f"],["dashboard-crisis.html","2cd1bf932bd347f7a3bf9edb0c977705"],["dashboard.html","5e6a3bda59a9095aefd811248b584074"],["forgot-password.html","bdf241978e91e3db71d82deb030a7af9"],["goods-received-note.html","3ffda3a05dcb90b34ad2bde5c3b35a21"],["images/background-gradient-1.png","86dc6d17fa4494d3df9d32b70d9323d2"],["images/background-gradient-1@2x.png","066557f7c344d352980aa575bd3f761f"],["images/background-gradient-1@3x.png","1d52199b5dd62254a017b52bea4fe033"],["images/bg-landing-image-1@1x.jpg","c85658211dfb6a66ec94ed1a6e3562be"],["images/bg-landing-image-1@2x.jpg","493ad7e65fe7904d414e82ed4fc55ec8"],["images/bg-landing-image-2@1x.jpg","9e9edab755a38ae6c19d1394f2070625"],["images/bg-landing-image-2@2x.jpg","1276f99a93d6f46993c5dc9c586ee0f1"],["images/bg-landing-image-3@1x.jpg","3c9855226894c4c301a96ecdc004ec0f"],["images/bg-landing-image-3@2x.jpg","0863229fd5342f2c95fc997dc703856f"],["images/bg-landing-image-4@1x.jpg","8415e62c9c782fce44a7818acfacd11b"],["images/bg-landing-image-4@2x.jpg","4c78c4101baa415fcbad3f19303f7f15"],["images/bg-landing-image-5@1x.jpg","503f5856bf6abb680d814d4e9606106d"],["images/bg-landing-image-5@2x.jpg","5a50ec6589c4d752827bcb4bedf2144d"],["images/bg-landing-image.jpg","d6ff449f97947566fbd4eeb8e5710673"],["images/bg-landing-image@2x.jpg","42fd063dac123b8670467382aef55b20"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/ic-karen.jpg","60a19e74d4de1380a7b97adda2a14a8d"],["images/ic-karen.png","c0dc7478352864dbdafba18b3717111e"],["images/ic-karen@2x.jpg","7127e8f31f1ece39851b4b81f9e24302"],["images/ic-karen@2x.png","a2c4f0f64962784b72459d59c3cba928"],["images/ic-karen@3x.jpg","9aca9ccef098fc3a69d6b5b6ec6ddf6f"],["images/ic-karen@3x.png","049f453c81f27b7ce94d258471994fda"],["images/ic_Logo Updated Black@3x.svg","7b43265eaafbd845b0ff8b29e33e1417"],["images/ic_logo_updated_black@2x.png","83eb367c2f4b7cdbef12931427e8d5cb"],["images/logo.png","280ddceaf0edbbf96b881345b9fc8514"],["images/logo@2x.png","1aec1c5b9f083adbbcf9a0867442202a"],["images/logo@3x.png","c6b3c31cfbe6353d4d6c23f4d1d41e94"],["images/touch/android-icon-144x144.png","41c3a787df4a74499f9aa56f52791278"],["images/touch/android-icon-192x192.png","7d84e152097bd21e085fba6ce939dbad"],["images/touch/android-icon-36x36.png","aeee690f987d671d0016ff6be44c9020"],["images/touch/android-icon-48x48.png","1189528961941628546616371e5e2ad7"],["images/touch/android-icon-72x72.png","14a93d11012074ca4a757d4865fad017"],["images/touch/android-icon-96x96.png","0d28dd8b6b7a64d1c27e9f181d4b231f"],["images/touch/apple-icon-114x114.png","ca580e3ff6040ad9517d8a828fe77b1a"],["images/touch/apple-icon-120x120.png","a98feb22a594c281989ef92a794e4e0a"],["images/touch/apple-icon-144x144.png","41c3a787df4a74499f9aa56f52791278"],["images/touch/apple-icon-152x152.png","741a352daa655912d06a5d82d906c539"],["images/touch/apple-icon-180x180.png","75ef6856b85f07413d99309753684201"],["images/touch/apple-icon-57x57.png","01153cb68f36ef7e5a7c30cae67a542a"],["images/touch/apple-icon-60x60.png","73cb9f2ec0d4238652077a5ebec3b13b"],["images/touch/apple-icon-72x72.png","14a93d11012074ca4a757d4865fad017"],["images/touch/apple-icon-76x76.png","77584a3cfc1a6a6f997be64833ba6666"],["images/touch/apple-icon-precomposed.png","7d84e152097bd21e085fba6ce939dbad"],["images/touch/apple-icon.png","7d84e152097bd21e085fba6ce939dbad"],["images/touch/favicon-16x16.png","27d3de0379b5ab762397d9f479e34c23"],["images/touch/favicon-32x32.png","19b298d46d6562d702ccbd9bbdc62848"],["images/touch/favicon-96x96.png","0d28dd8b6b7a64d1c27e9f181d4b231f"],["images/touch/logo.png","24a55c3102fe1f0715caf5c72b1f8d47"],["images/touch/ms-icon-144x144.png","41c3a787df4a74499f9aa56f52791278"],["images/touch/ms-icon-150x150.png","f81d45c8ea2011e87ccbdb6c98aafe0d"],["images/touch/ms-icon-310x310.png","ffa7479f408e7957c2d665be1b881e9e"],["images/touch/ms-icon-70x70.png","767bd83c1a812526a8d1d5c5652d91ca"],["import-complete.html","d606f3665a1a54d0a995d90eacc54421"],["index.html","e448ae17621a495618efebaca5d2a378"],["introduction.html","e0bb87a069a227566acdff99fcc1efc6"],["links.html","cb165eb34a3ca5c0a1a47c88fab50f7e"],["loading-screen.html","8f9877545dfb176615be295f2c3c2a98"],["login.html","fbbd8f3ffa35905ef0493d6bb2752297"],["login0.html","5c9580df0a5e0d1d7bda0565c841fe83"],["manifest.json","b862848d539727d7c72baa4f869b1956"],["markdown-report.html","770a75b1e5c6bd79d0a9c0e7babb5596"],["markdown-reports-create-new-variant.html","11dd89f8853d7e5ff87ebc1da3a019af"],["markdown-reports-create-new.html","3ec364d8051d34becc45f7c7902e5e5c"],["markdown-reports-mobile.html","c559811525d495a9bdb7898a28868871"],["markdown-reports.html","c29b050eb9a77dee717d8788a94ed6b1"],["new-purchase-order-mobile-empty.html","d9f721b7cad5cbb0a9d7200ac43ee931"],["new-purchase-order-mobile.html","312b97d06ed24866189bf7a9e0e327bb"],["new-purchase-orders-empty.html","11fb9a7ee7cb308510d216b1d46f7fd1"],["new-purchase-orders.html","7e7ac147451847f704c138606b43726b"],["onboarding_1.html","79eeb56409af50fd61f6c12f7e2b73ac"],["payment.html","f21b7557e11f3c22f04629b3bcb8a524"],["pending-markdown-mobile.html","52329d802d5e7e4fdb7a814e6326c4f9"],["pending-markdowns-mobile.html","1344c08f3a026d2a196521ce7aa2e836"],["pending-markdowns.html","3d0278584cc4a4b27f1d28db2554af48"],["pending-order-mobile.html","a86a40f1c351e8f397e5f50a737cb9ae"],["pending-orders-mobile.html","3fb2a2951db77ac95b4da5b784a6b9ea"],["pending-orders.html","42070a4d774af9d737be4a39d882064d"],["product-import.html","26eaf651fa39378176b8bf2215924628"],["product_import.html","f19de55261d8e0c6b9a1706a14931352"],["purchase-order-cancel-confirmed.html","581c631f2c6931c4fe27874428dc55b7"],["purchase-order-cancel.html","b95346e1ffe7798ab605abba3ce8434b"],["purchase-order.html","5ff41d80c52700b8453f3abf0e1c69fa"],["purchase-orders-goods-history.html","604c2b4b92d8e9f9c2a5e2c8b3d54906"],["purchase-orders.html","a8287bbf60b758d7960c0bf843d06e98"],["register.html","5bf0bdcd60d7b38c49d642ab6e92ff4e"],["reset-password-error.html","b0af1fcbf15cd9bd12453f9c9beff401"],["reset-password.html","a9c982e372e83ac5ac7c687eadf1a2f0"],["rev-manifest.json","89d6d2c7825367323bfd247529e7e33e"],["scripts/main-af789ca6f7.min.js","af789ca6f7a7e3f774b2450bc9ac7402"],["scripts/main.min.js","af789ca6f7a7e3f774b2450bc9ac7402"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["sku.html","53d46b8e6a009cadb1fd8fbfe09dcb9f"],["store-inventory-allocation.html","450f96b4c2509f4b34eeeaf916a53682"],["styles/animations-f3bf3920b5.css","f3bf3920b5af50dae1d72bd641ec5b5e"],["styles/animations.css","f3bf3920b5af50dae1d72bd641ec5b5e"],["styles/buttons-48cad88447.css","48cad884473b4e3ece50ba8936eadada"],["styles/buttons.css","48cad884473b4e3ece50ba8936eadada"],["styles/cards-17c643efbf.css","17c643efbfd05dfb92b8c4abecd0d7f7"],["styles/cards.css","17c643efbfd05dfb92b8c4abecd0d7f7"],["styles/dashboard/column-8a2fc43f05.css","8a2fc43f05cbf83d4460deb1bc13c4f7"],["styles/dashboard/column.css","8a2fc43f05cbf83d4460deb1bc13c4f7"],["styles/dashboard/dashboard-51ffcc9461.css","51ffcc94617993a2877a7746b7a01372"],["styles/dashboard/dashboard.css","51ffcc94617993a2877a7746b7a01372"],["styles/dashboard/row-952a4ed71d.css","952a4ed71d584b94dd61dab122d6b04c"],["styles/dashboard/row.css","952a4ed71d584b94dd61dab122d6b04c"],["styles/filter-0b772a8e8e.css","0b772a8e8e16a80cda5ceec4fab4c142"],["styles/filter.css","0b772a8e8e16a80cda5ceec4fab4c142"],["styles/footer-331569bd43.css","331569bd4378712bf2830616ce6c2790"],["styles/footer.css","331569bd4378712bf2830616ce6c2790"],["styles/form-88ac9188ff.css","88ac9188ff1e4b19fec08ecfb38be623"],["styles/form.css","88ac9188ff1e4b19fec08ecfb38be623"],["styles/goods-a1fe5fd93f.css","a1fe5fd93f9f046da1fe5ba531363d6e"],["styles/goods.css","a1fe5fd93f9f046da1fe5ba531363d6e"],["styles/goods_history-4498ea82df.css","4498ea82dfea2f5abd48dd49f0c6ca4e"],["styles/goods_history.css","4498ea82dfea2f5abd48dd49f0c6ca4e"],["styles/grid-2cb5602ffb.css","2cb5602ffbdb0c0ef101d60822bc9b96"],["styles/grid.css","2cb5602ffbdb0c0ef101d60822bc9b96"],["styles/header-3aed898fbb.css","3aed898fbb02ee6b08bc18c39b6ed6bc"],["styles/header.css","3aed898fbb02ee6b08bc18c39b6ed6bc"],["styles/icons-fca40adac2.css","fca40adac2f4cbcdec0da49c320aa8b1"],["styles/icons.css","fca40adac2f4cbcdec0da49c320aa8b1"],["styles/import-complete-f489a45487.css","f489a45487640bfd6479ebce1111bfc2"],["styles/import-complete.css","f489a45487640bfd6479ebce1111bfc2"],["styles/intro-931ce56947.css","931ce56947441b6458d68e5a6abda4ed"],["styles/intro.css","931ce56947441b6458d68e5a6abda4ed"],["styles/layout-a54a54f239.css","a54a54f239953774b8111998a0529a09"],["styles/layout.css","a54a54f239953774b8111998a0529a09"],["styles/loading-screen-36cf149fcd.css","36cf149fcd1f0c5c202556348d0ad02a"],["styles/loading-screen.css","36cf149fcd1f0c5c202556348d0ad02a"],["styles/login-bc5ead6a74.css","bc5ead6a7440cfc255035ede78326d51"],["styles/login.css","bc5ead6a7440cfc255035ede78326d51"],["styles/main-ee9f496d62.css","ee9f496d62b11a603147bf23424cf6ce"],["styles/main.css","ee9f496d62b11a603147bf23424cf6ce"],["styles/markdown-afab092f1a.css","afab092f1a47a81caa8cf51c51db3fc3"],["styles/markdown.css","afab092f1a47a81caa8cf51c51db3fc3"],["styles/menu-7adc490b36.css","7adc490b3679fc61f13670ab970f3694"],["styles/menu.css","7adc490b3679fc61f13670ab970f3694"],["styles/mixins-fbb899532a.css","fbb899532a185dc8790651a17efe3102"],["styles/mixins.css","fbb899532a185dc8790651a17efe3102"],["styles/modal-17f1d9779d.css","17f1d9779d1eb28a9ea79d1af118f03a"],["styles/modal.css","17f1d9779d1eb28a9ea79d1af118f03a"],["styles/notification-0c0dec3f9e.css","0c0dec3f9e96e3f9c85ecad765fbe08b"],["styles/notification.css","0c0dec3f9e96e3f9c85ecad765fbe08b"],["styles/pagination-c94dd7101d.css","c94dd7101d2ee6d9dda17cbcb6cba070"],["styles/pagination.css","c94dd7101d2ee6d9dda17cbcb6cba070"],["styles/payment-f457e6a9f2.css","f457e6a9f2fce379c7c0593d44371cfa"],["styles/payment.css","f457e6a9f2fce379c7c0593d44371cfa"],["styles/pending-4d50cde848.css","4d50cde848d6f7b531bca44cbac412b1"],["styles/pending.css","4d50cde848d6f7b531bca44cbac412b1"],["styles/po_table-a8424848d9.css","a8424848d90ff3db9cfcbe0955120c4c"],["styles/po_table.css","a8424848d90ff3db9cfcbe0955120c4c"],["styles/product-card-1b16abd525.css","1b16abd5258193cdb94cba56a8cf2cbb"],["styles/product-card.css","1b16abd5258193cdb94cba56a8cf2cbb"],["styles/product-import-0581aaf347.css","0581aaf347efef4d67767ab1f76881b7"],["styles/product-import.css","0581aaf347efef4d67767ab1f76881b7"],["styles/purchase-32b5eb065d.css","32b5eb065d1f3072de69d8a0fb30bba4"],["styles/purchase.css","32b5eb065d1f3072de69d8a0fb30bba4"],["styles/range-input-93fea52dd7.css","93fea52dd783649a8933b2da41c770d0"],["styles/range-input.css","93fea52dd783649a8933b2da41c770d0"],["styles/resizer-35f7542a3e.css","35f7542a3e579327177e16904652f96f"],["styles/resizer.css","35f7542a3e579327177e16904652f96f"],["styles/sidebar-7564e9bd09.css","7564e9bd09fa8786ce5673031735605f"],["styles/sidebar.css","7564e9bd09fa8786ce5673031735605f"],["styles/sku-eae13ae7f0.css","eae13ae7f05f1b5643c81eead7173756"],["styles/sku.css","eae13ae7f05f1b5643c81eead7173756"],["styles/smiley-b606a416e3.css","b606a416e32d24ff106b94e87efd66eb"],["styles/smiley.css","b606a416e32d24ff106b94e87efd66eb"],["styles/sort-25982ece28.css","25982ece285b9ad582e9f4e6d2881af4"],["styles/sort.css","25982ece285b9ad582e9f4e6d2881af4"],["styles/step-01d30ef187.css","01d30ef18743fbae66dabfd1531d538d"],["styles/step.css","01d30ef18743fbae66dabfd1531d538d"],["styles/steps-518e1404df.css","518e1404df1cd600d15f24ac6228f5ad"],["styles/steps.css","518e1404df1cd600d15f24ac6228f5ad"],["styles/store-850dff0002.css","850dff0002f6f1fcbcce2daa2c7d4548"],["styles/store.css","850dff0002f6f1fcbcce2daa2c7d4548"],["styles/sync-b5ef84ed2e.css","b5ef84ed2e06131a34e5d42470ebcf45"],["styles/sync.css","b5ef84ed2e06131a34e5d42470ebcf45"],["styles/triview-f906fe1771.css","f906fe1771681670beac0b0343894640"],["styles/triview.css","f906fe1771681670beac0b0343894640"],["styles/typography-3748e4d6b9.css","3748e4d6b9631bd445463667260ab13f"],["styles/typography.css","3748e4d6b9631bd445463667260ab13f"],["styles/upload-spreadsheet-350818ae54.css","350818ae54fd0cd8ccbf940e5d2870fb"],["styles/upload-spreadsheet.css","350818ae54fd0cd8ccbf940e5d2870fb"],["styles/vars-bfb75e935a.css","bfb75e935a3bd58ac275368986ec241b"],["styles/vars.css","bfb75e935a3bd58ac275368986ec241b"],["styles/video-5f44bb8dd9.css","5f44bb8dd9e34d57e2dfd09a825e0a24"],["styles/video.css","5f44bb8dd9e34d57e2dfd09a825e0a24"],["sync-complete.html","096227c4699fc59107268c0e10466314"],["sync-error.html","63bdbfe9f38b39e4d0a80128a6bd745f"],["sync-many-stores.html","200cf2f1fafa91754476e23705f2d89b"],["sync.html","96efcf054f72ad091e9b809455a9d564"],["sync_stores.html","8980f6c0b9464b8b1a1b4d54675d061b"],["upload-spreadsheet.html","6ada17d818a3544a76df6c3803c5cea6"],["whats-hot.html","c22ea37915caef8a9d0262fc1fe16207"],["whats-not.html","c504152c2383b870c55a1de3c4c8130c"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




