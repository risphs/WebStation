# Implementation

In order for our WebSocket to work you need to implement it into some user code. This can be done through an `API` (Automatic) or `manual` (Usually used for a website)

## Implementation for both cases
First you want to establish a connection with our websocket we can do this by
```js
const socket = new WebSocket('ws://localhost:8080');
```
If you are using a domain name or an IP adress make sure to replace the localhost. Otherwise check that your port is the same as the one set in your socket configuration.

Next, you want to check for when the client connects/disconnects then log a message informing the user that this has happened. This can be done by adding an event listener to our constant `socket`.
```js
socket.addEventListener('open', function (event) {
    console.log("Connected to WebSocket");
});
```
```js
socket.addEventListener('close', function (event) {
    console.log("Disconnected from the WebSocket");
});
```

Even though error catching is not nessicary it is good practice to put them in so the users can resend the messages or debug. We will use the exact same method as the last step.

```js
socket.addEventListener('error', function (event) {
    console.log("Error: ", event.data);
});
```

After you have followed all other steps you can now detect messages coming from the server as shown below.
```js
socket.addEventListener('message', function (event) {
    console.log("Incoming message: ", event.data);
});
```
Now you have got the main foundation down we want to make a function named `sendMessage` and then send a message
```js
const sendMessage = () => {
    socket.send("Hello World!")
}
```

If you would like to make an `API` web socket you can add `sendMessage();` embedded within the `open` function; otherwise if you choose to make it `manual` you can create a button with the function added:
```HTML
<button onclick="sendMessage()">Send Data to the Server</button>
```