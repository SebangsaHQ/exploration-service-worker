var SW_REG,
  is_subscribe = false;

const subscribe_btn = document.getElementById("subscribe-btn");
const subscribe_text = document.getElementById("subscribe-text");

// generated via https://web-push-codelab.glitch.me/
const PUBLIC_KEY =
  "BAWL6xTo0t-GBItfG8tTT9P5zr0A5z-LGBcvMOH4Zzf5nmQLnOMsTof0hGoY0JniFz9-ohJ973cfcXt9gu-60Qo";
const PRIVATE_KEY = "q6tyMx_Pov6FDDfwjKU96-bCkpfGQI007WtO4ph1UpI";

// notification options
const NOTIFICATION_OPTIONS = {
  body: "Here is a notification body!",
  icon: "/assets/icon.png",
  vibrate: [100, 50, 100],
  data: {
    dateOfArrival: Date.now(),
    primaryKey: 1
  },
  actions: [
    {
      action: "explore",
      title: "Explore this new world"
    },
    {
      action: "close",
      title: "Close notification"
    }
  ]
};

// Let's check if the browser supports notifications
if (!("Notification" in window)) {
  console.error("This browser does not support system notifications");
  // This is not how you would really do things if they aren't supported. :)
} else if (Notification.permission === "denied") {
  console.error("Notification permission is denied, so you can't continue!");
} else if (Notification.permission === "granted") {
  swRegister();
} else if (Notification.permission !== "denied") {
  Notification.requestPermission(result => {
    console.log("result", result);
    if (result === "granted") {
      swRegister();
    }
  });
}

// register service worker
function swRegister() {
  // service worker dettection
  if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js").then(reg => {
      // send to global variable
      SW_REG = reg;

      if (Notification.permission === "granted") {
        // call notification inside service worker
        reg.showNotification(
          "Servis Worker is Installed",
          NOTIFICATION_OPTIONS
        );
        subscribe_btn.disabled = false;
        initialUI();
      }
    });
  }
}

// function to initial UI
function initialUI() {
  console.log("sw reg", SW_REG);

  // check subscription status
  SW_REG.pushManager.getSubscription().then(subscription => {
    console.log("subscription", subscription);
    is_subscribe = subscription != null;
    updateSubscriptionOnServer(subscription);
    updateBtn();
  });

  // click listener on button subscribe_btn
  subscribe_btn.addEventListener("click", function(e) {
    e.preventDefault;
    console.log("is subscribe", is_subscribe);
    if (is_subscribe) {
      // do unsubscribe
      unsubscribeUser();
      return false;
    } else {
      // do subsribe
      subscribeUser();
    }
  });

  // function to update button subscribe_btn
  function updateBtn() {
    if (is_subscribe) {
      subscribe_btn.textContent = "Unsubscribe";
    } else {
      subscribe_btn.textContent = "Subscribe";
    }
  }

  // do subscribe
  function subscribeUser() {
    console.log("subscribe action.");
    SW_REG.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(PUBLIC_KEY)
      })
      .then(function(subscription) {
        updateSubscriptionOnServer(subscription);
        is_subscribe = true;
        updateBtn();
      })
      .catch(function(err) {
        console.error("Failed to subscribe the user: ", err);
        updateBtn();
      });
  }

  // do unsubscribe
  function unsubscribeUser() {
    console.log("unsubscribe action.");
    // get subscription first
    return SW_REG.pushManager.getSubscription(function(subscription) {
      if(subscription) {
        return subscription.unsubscribe();
      }
    })
    .catch(function(err) {
      console.error("Error to unsubscribe", err)
    })
    .then(function() {
      updateSubscriptionOnServer(null);
      is_subscribe = false;
      updateBtn();
    })

  }

  // update subscribtion on server
  function updateSubscriptionOnServer(subscription) {
    if(subscription) {
      subscribe_text.innerHTML = JSON.stringify(subscription)
    } else {
      subscribe_text.innerHTML = ""
    }
  }
}

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}