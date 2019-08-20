const syncStore = {}

// Install Service Worker
self.addEventListener('install', function(event){
  console.log('SW installed!');
});

// Service Worker Active
self.addEventListener('activate', function(event){
  console.log('SW activated!');
});

// listen message
self.addEventListener("message", function(event) { 
  if(event.data.type === "sync-email-forgot-password") {
    // get a unique id to save the data
    syncStore.forgot_password_data = event.data.email
    // register a sync and pass the id as tag for it to get the data
    // self.registration.sync.register(id)
  }
})

// listen background sync
self.addEventListener("sync", function(event) {
  if(event.tag == "sync-submit-forgot-password") {
    event.waitUntil(submitData(syncStore.forgot_password_data))
  }

})

const submitData = function(email) {
  return new Promise(resolve => {
    console.log(
      "forgot password for",
      email
    )
    resolve();
  }).catch(e => console.error(e));
};
