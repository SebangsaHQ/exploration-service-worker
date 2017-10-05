# 2.0 Service Worker - Offline First
Meaning of offline, please follow [this link](https://www.html5rocks.com/en/tutorials/offline/whats-offline/). Two main reason why you have to use offline first :
* **avability** : a web app still worked and can be access by users event without internet connection.
* **peformance** : because web content available offline, this mean quicker to retreive and present content to users because no need to make network request.

## Run
We are using `http-server` and `Google Chrome` to test this code.

** Online **

![online page](https://pbs.twimg.com/media/DLYZv35WsAAxFeI.jpg)

First open in browser using localhost, and let service worker instaling. 

** Offline **
Google Chrome developer tools has afeature to simulate if dead network happen. Open developer tools -> network -> and check offline. Refresh the page.

![offline page](https://pbs.twimg.com/media/DLYZx-3UIAALHy1.jpg)

**Test offline**
Google Chrome developer tool has a feature to simulate if the network is dead. 

## Reference 
* https://mobiforge.com/design-development/taking-web-offline-service-workers
* https://googlechrome.github.io/samples/service-worker/custom-offline-page/