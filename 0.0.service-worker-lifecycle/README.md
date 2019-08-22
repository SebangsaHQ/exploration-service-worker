# Service Worker LifeCycle

**First Time :**

0) Register
1) Installing
2) Active (listener, fetch, otherss is ready)

**Next Time :**

0) Register
1) Installing
2) Waiting
3) Active (listener, fetch, otherss is ready)

## Run 
Make sure you have installed [http-server](https://www.npmjs.com/package/http-server) globally and then run it in this directory: 
```
http-server -p 18080
```
Open your browser and access [http://localhost:18080](http://localhost:18080) (Note: http-server can be configured to start on a different port)

## References 
- https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle