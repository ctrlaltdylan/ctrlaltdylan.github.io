---
layout: post
title: "Websockets with Express & React"
categories: frontend websockets reactjs
preview_image: "https://res.cloudinary.com/tinyhouse/image/upload/v1590696133/personal%20site/node-express-react-websockets.png"
post_image: "https://res.cloudinary.com/tinyhouse/image/upload/c_scale,w_635/v1590696133/personal%20site/node-express-react-websockets.png"
comments: true
---

Websockets allow real time "pushing" of data between the backend of your app and the frontend of your app.

Here's an example of using Express with Websockets to create a websocket connection between the `server.js` and the consuming `index.html` and `assets/client.js`:

<!-- super simple express & node app -->
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/super-simple-express-websocket?path=README.md&previewSize=0"
    title="super-simple-express-websocket on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

Responsibilities per file:

- `server.js` - creates the websocket connection && serves the `index.html` file on the root path
- `assets/script.js` - creates the client side websocket instance and connects to the server instance
- `index.html` - duh

## Chat Example with Express, Websockets & React

This example is slightly more advanced. In addition to Express & Websockets it includes the use of React & React `useEffect` and `useState` hooks for state management:

<!-- Copy and Paste Me -->
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/websockets-react-example?path=README.md&previewSize=0"
    title="websockets-react-example on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

On the backend, the `server.js` will _broadcast_ messages to all connected clients. This is possible with the `wss.clients.forEach(...)` statement. Very cool.

Responsibilities per file:

- `server.js` - creates the websocket connection && serves the `index.html` file on the root path
- `app/components/Chat.jsx` - creates the client side websocket instance and connects to the server instance
- `index.html` - duh

I gave a presentation on this for the <a href="clereact.dev">Cleveland React</a> meetup group. Here's the slides if you'd like to run through them to learn more about WebSockets and how they differ from normal API calls:

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ_whZiXJve4b9m28wFmMpunV3mZ1WcGWxZ2SbxeavyTZGLmU4cUm2uqflYMuJwvFJH_98gA8pCi_9U/embed?start=true&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
