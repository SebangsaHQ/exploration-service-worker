# Introducing Background Sync

Background sync is a new web API that lets you defer actions until the user has stable connectivity. This is useful for ensuring that whatever the user wants to send, is actually sent.

## Run

Make sure you have installed [http-server](https://www.npmjs.com/package/http-server) globally and then run it in this directory:

```
http-server ./ -p 18083
```

Open your browser and access [http://localhost:18083](http://localhost:18083) (Note: http-server can be configured to start on a different port)

## Ref :

- https://developers.google.com/web/updates/2015/12/background-sync
