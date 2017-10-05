'use strict';

// increase cacher version, to kick latest instalation service worker
// and load new cache
const CACHE_VERSION = 2;
let CURRENT_CACHES = {
  offline: 'offline-v' + CACHE_VERSION
};
// page open when offline
const OFFLINE_URL = 'offline.html'

function createCacheBustedRequest(url)
{
  let request = new Request(url, {cache: 'reload'});
  // See https://fetch.spec.whatwg.org/#concept-request-mode
  // This is not yet supported in Chrome as of M48, so we need to explicitly check to see
  // if the cache: 'reload' option had any effect.
  if ('cache' in request) {
    return request;
  }

  // If {cache: 'reload'} didn't have any effect, append a cache-busting URL parameter instead.
  let bustedUrl = new URL(url, self.location.href);
  bustedUrl.search += (bustedUrl.search ? '&' : '') + 'cachebust=' + Date.now();
  return new Request(bustedUrl);
}

// service worker config
self.addEventListener('install', event => {
  event.waitUntil(
    // We can't use cache.add() here, since we want OFFLINE_URL to be the cache key, but
    // the actual URL we end up requesting might include a cache-busting parameter.
    fetch(createCacheBustedRequest(OFFLINE_URL))
      .then(response => {
        return caches.open(CURRENT_CACHES.offline)
          .then(cache => {
            return cache.put(OFFLINE_URL, response);
          });
      })
  );
});

self.addEventListener('activate', event => {
  // Delete all caches that aren't named in CURRENT_CACHES.
  // While there is only one cache in this example, the same logic will handle the case where
  // there are multiple versioned caches.
  let expectedCacheNames = Object.keys(CURRENT_CACHES).map(key => {
    return CURRENT_CACHES[key];
  })

  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (expectedCacheNames.indexOf(cacheName) === -1) {
              // If this cache name isn't present in the array of "expected" cache names,
              // then delete it.
              console.log('Deleting out of date cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    )
  })

  self.addEventListener('fetch', event => {
    if(event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html')))
    {
      console.log('Handling fetch event for', event.request.url);
      event.respondWith(
        fetch(event.request)
          .catch(error => {
            console.log('Fetch failed; returning offline page instead.', error);
            return caches.match(OFFLINE_URL);
          })
        );
    }
  })