"use strict";

// update this version to register no service worker
const SW_VERSION = "0.0.1";

// Install Service Worker
self.addEventListener("install", function(event) {
  console.log("SW installed!");
});

// Service Worker Active
self.addEventListener("activate", async function(event) {
  console.log("SW activated!");

  // listen to remote notification
  try {
    const options = {} 
    const subscription = await self.registration.pushManager.subscribe(options)
    console.log(JSON.stringify(subscription))
  } catch(e) {
    console.error("subcscription error", e)
  }
});

// on close notification event listeners
self.addEventListener("notificationclose", function(e) {
  const notification = e.notification;
  const primaryKey = notification.data.primaryKey;

  console.log("Closed notification: " + primaryKey);
});

// on click notification event listener
self.addEventListener("notificationclick", function(e) {
  var notification = e.notification;
  var action = e.action;

  if (action === "close") {
    notification.close();
  } else {
    clients.openWindow("http://github.com/sebangsahq");
    notification.close();
  }
});

// push event listener
self.addEventListener("push", function(e) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${e.data.text()}"`);

  const title = 'Push Service';
  const options = {
    body: e.data.text(),
    icon: "/assets/icon.png",
    // badge: 'images/badge.png'
  };

  e.waitUntil(self.registration.showNotification(title, options));
})