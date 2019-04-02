const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.port || 4000;

app.use(express.static(__dirname + '/src'));

app.get('/*', (req, res) => res.sendFile(path.join(_dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log('Running...!'));