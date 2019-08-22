"use strict";

// update this version to register no service worker
const SW_VERSION = "0.0.1";

// Install Service Worker
self.addEventListener("install", function(event) {
  console.log("SW installed!");
});

// Service Worker Active
self.addEventListener("activate", function(event) {
  console.log("SW activated!");
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
