// generated via https://web-push-codelab.glitch.me/ 
const PUBLIC_KEY = "BAWL6xTo0t-GBItfG8tTT9P5zr0A5z-LGBcvMOH4Zzf5nmQLnOMsTof0hGoY0JniFz9-ohJ973cfcXt9gu-60Qo"
const PRIVATE_KEY = "q6tyMx_Pov6FDDfwjKU96-bCkpfGQI007WtO4ph1UpI"

// notification options
const NOTIFICATION_OPTIONS = {
  body: 'Here is a notification body!',
  icon: '/assets/icon.png',
  vibrate: [100, 50, 100],
  data: {
    dateOfArrival: Date.now(),
    primaryKey: 1
  },
  actions: [
    {
      action: 'explore', title: 'Explore this new world',
    },
    {
      action: 'close', title: 'Close notification',
    },
  ]
};

// Let's check if the browser supports notifications
if (!("Notification" in window)) {
  console.error("This browser does not support system notifications");
  // This is not how you would really do things if they aren't supported. :)
}

else if (Notification.permission === 'denied') {
  console.error("Notification permission is denied, so you can't continue!")
} 

else if (Notification.permission === "granted") {
  swRegister()
}

else if (Notification.permission !== 'denied') {
  Notification.requestPermission(result => {
    console.log("result", result)
    if (result === "granted") {
      swRegister()
    }
  });
}

// register service worker
function swRegister() {
  // service worker dettection
  if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js").then(reg => {
      if (Notification.permission === 'granted') {
        // call notification inside service worker
        reg.showNotification('Servis Worker is Installed', NOTIFICATION_OPTIONS);
      }
    });
  }
}
