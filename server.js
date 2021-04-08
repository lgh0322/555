const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/sdj', (req, res) => {
    console.log(req.headers)
    console.log(req.path)
    console.log(req.query)
    res.sendFile(__dirname + '/gu.FLAC')
});

server.listen(8080, () => {
  console.log('listening on *:8080');
});