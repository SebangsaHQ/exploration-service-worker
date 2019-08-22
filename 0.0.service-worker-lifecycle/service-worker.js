"use strict"

// update this version to register no service worker
const SW_VERSION = "0.0.1"

// Install Service Worker
self.addEventListener('install', function(event){
  console.log('SW installed!');
});

// Service Worker Active
self.addEventListener('activate', function(event){
  console.log('SW activated!');
});