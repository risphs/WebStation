const config = require("../configuration.json")
const main = require("../main.js");

const express = require('express');
const app = express()

const WebSocket = require('ws');
const server = main.server;
const wss = main.wss;

module.exports.root = function root() {
    // Put your code here
}