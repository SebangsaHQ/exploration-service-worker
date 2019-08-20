self.addEventListener("sync", function(event) {
  console.log("event", event)
  if(event.tag == "sync-submit-forgot-password") {
    event.waitUntil(function(){
      console.log("iam ready")
    })
  }
})