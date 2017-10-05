# 1.0 Service Worker - Cache Static Files
In this step we will create a caching system stored in service worker.

## Run 
Make sure you have installed [http-server](https://www.npmjs.com/package/http-server) globally and then run it in this directory: 
```
http-server ./
```
Open your browser and access [http://localhost:8080](http://localhost:8080) (Note: http-server can be configured to start on a different port)

## Before and After
**Before using Service Worker**
![Before using service worker](https://pbs.twimg.com/media/DLN7odKVoAAPFCu.jpg:large)
Assets are not loaded from the cache.

**After using Service Worker**
![Aafter using service worker](https://pbs.twimg.com/media/DLN8A11U8AAVrTa.jpg:large)
Assets are loaded from cache/service worker and loaded faster.

## Learn More

**Service Worker Live Cycle**

`Install -> Fetch -> Update -> Install -> ...`

**Official Documentation**
- <a href="https://developer.chrome.com/apps/manifest" target="_blank">Learn more about Service Workers from Google</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Learn more about Service Workers from Mozila</a>

**Code Reference** : 
<a href="https://developers.google.com/web/fundamentals/getting-started/primers/service-workers" target="_blank">https://developers.google.com/web/fundamentals/getting-started/primers/service-workers</a>

## Supported Web Browser 
Please follow <a href="https://caniuse.com/#search=service%20workers" target="_blank">this link</a>, to get the most up-to-date information about what browsers already support.
