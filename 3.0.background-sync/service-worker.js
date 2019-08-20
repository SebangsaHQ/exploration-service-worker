self.addEventListener("sync", function(event) {
  if(event.tag == "sync-submit-forgot-password") {
    event.waitUntil(function(){
      console.log("self")
    })
  }
})