# Introducing Background Sync

Background sync is a new web API that lets you defer actions until the user has stable connectivity. This is useful for ensuring that whatever the user wants to send, is actually sent.

## Background Sync Life Cycle

## Run
Make sure you have installed [http-server](https://www.npmjs.com/package/http-server) globally and then run it in this directory:

```
http-server -p 18083
```

And then set `network to offline` using Google Chrome dev tools or something else, try to submit form.

Open your browser and access [http://localhost:18083](http://localhost:18083) (Note: http-server can be configured to start on a different port)

## Compatibility

Ref : https://davidwalsh.name/background-sync
![can i use background sync](https://res.cloudinary.com/dhjkktmal/image/upload/v1566215718/github/Screen_Shot_2019-08-19_at_18.54.25.jpg)

## Ref :

- https://developers.google.com/web/updates/2015/12/background-sync
- https://davidwalsh.name/background-sync
