// service worker initial
if('serviceWorker' in navigator)
{
    console.log('this browser support Service Worker');
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration){
            //sw registration was successfull
            console.log(registration)
        }).catch(function(err){
            // sw registration failed
            console.log('ServiceWorker registration is failed', err)
        })
}