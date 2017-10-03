'use strict';
const CACHE_NAME = 'cache-v1';
const URLS_TO_CACHE = [
    '/assets/style.css',
    '/assets/main.js'
];

// init
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(URLS_TO_CACHE)
        })
    )
})

// fetch request and response
self.addEventListener('fetch', function(event)
{
    // intercept fetch Request
    event.respondWith(
        // match and serve cached assets, if it exists
        caches.match(event.request).then(function(response)
        {
            return response || fetch(event.request)
        })
    )
})

// cache busting
self.addEventListener('activate', function(event)
{
    event.waitUntil(
        // open apps cache and delete any old cache items
        caches.open(CACHE_NAME).then(function(cacheNames){
            cacheNames.keys().then(function(cache){
                cache.forEach(function(element, index, array)
                {
                    if(URLS_TO_CACHE.indexOf(element) === -1)
                    {
                        caches.delete(element);
                    }
                })
            })
        })

    );
    // end of event waitUntil
})