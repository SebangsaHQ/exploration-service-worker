# 2.0 Service Worker - Offline First
To get a better understanding of "offline", please follow [this link](https://www.html5rocks.com/en/tutorials/offline/whats-offline/). There are two main reason why you should build your applications offline first:
* **availability** : a web app still works and can be accessed by users even without an internet connection.
* **peformance** : because web content is available offline, there is no need to make a network request and content is presented to users more quickly.

## Run
## Run 
Make sure you have installed [http-server](https://www.npmjs.com/package/http-server) globally and then run it in this directory: 
```
http-server -p 18081
```
Open your browser and access [http://localhost:18081](http://localhost:18081) (Note: http-server can be configured to start on a different port)

**Online**

First open in browser using localhost, and let service worker install. 

![online page](https://pbs.twimg.com/media/DLYZv35WsAAxFeI.jpg)

**Offline**

Google Chrome developer tools has a feature to simulate a dead network. Open developer tools -> network -> and check the setting labeled "Offline". Refresh the page.

![offline page](https://pbs.twimg.com/media/DLYZx-3UIAALHy1.jpg) 

## Reference 
* https://mobiforge.com/design-development/taking-web-offline-service-workers
* https://googlechrome.github.io/samples/service-worker/custom-offline-page/
