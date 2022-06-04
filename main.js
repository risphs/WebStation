const config = require("./configuration.json")
const customProtocol = require('./protocols/template');

const express = require('express')
const app = express()

const WebSocket = require('ws');
const server = require('http').createServer(app);

const wss = new WebSocket.Server({ server:server });

wss.on('connection', function connection(ws){

    console.log(`The connection event has been called by a user...`);
    ws.send(`Connected to the Websocket`);

    ws.on('message', function incoming(message) {
        if (config.useDifferentProtocol == true) {
            customProtocol.root();
        }

        if(config.useDefaultProtocol == true) { 
            if(config.webStationProtocol == 1) {
                wss.clients.forEach(function each(client) {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(`${message}`);
                    }
                })
            }
            console.log(`Incoming message: ${message}`);
            ws.send(`Your message has been received`);

        }
    });
})  

app.get('/', (req, res) => res.send('Hello World!'))

server.listen(config.port, () => console.log(`Server listening on port ${config.port}`))