# Service Worker Exploration
Please read [Getting Started](#getting-started) to start.

![service worker cover](https://philna.sh/images/service-worker.png)

## Overview

A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync. In the future, service workers will support other things like periodic sync or geofencing. The core feature discussed in this tutorial is the ability to intercept and handle network requests, including programmatically managing a cache of responses.

The reason this is such an exciting API is that it allows you to support offline experiences, giving developers complete control over the experience.

Before service worker, there was one other API that gave users an offline experience on the web called AppCache. There are a number of issues with the AppCache API that service workers were designed to avoid.

ref : https://developers.google.com/web/fundamentals/primers/service-workers/

## Index 
* [1.0 Cache static files](1.0.cache-static-files)
  
  The Service Worker API comes with a Cache interface, that lets you create stores of responses keyed by request. While this interface was intended for service workers it is actually exposed on the window, and can be accessed from anywhere in your scripts. The entry point is caches.
  
* [2.0 Offline first](2.0.offline-first)

  Do not let your visitor go because there is not internet connection. Offline first lets you to display web content even though no internet network is available.

* [3.0 Background Sync](3.0.background-sync)

  Background sync is a new web API that lets you defer actions until the user has stable connectivity. This is useful for ensuring that whatever the user wants to send, is actually sent

* [4.0 Push notification](4.0.push-notifications)

  Push notification provides a simple and effective way to re-engage with your users. 

* [WIP] Geofencing

## Prerequisites
Service worker only support `localhost` and `HTTPS`, you need some webserver to run in local. Here are some that we recomend :
* [https-server (npm)](https://www.npmjs.com/package/http-server)
* [Web Server from Chrome (Google Chrome Extention)](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en)

## Getting Started
We split the module into several directory, to get started please read `README.md` we provide in each directory.

## Service Worker Compatilbility (last update: 19-08-2019)
Ref : https://caniuse.com/#feat=serviceworkers
![Service Worker Compatibily](https://res.cloudinary.com/dhjkktmal/image/upload/v1566198365/github/Screenshot_from_2019-08-19_14-05-29.png)

## Contributtors
* [Yusuf Akhsan H.](https://twitter.com/xyussanx)
