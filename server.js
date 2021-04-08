const express = require('express');
const app = express();
const http = require('http');
var bodyParser = require('body-parser');
const server = http.createServer(app);

app.get('/sdj', (req, res) => {
    console.log(req.headers)
    console.log(req.path)
    console.log(req.query)
    res.sendFile(__dirname + '/gu.FLAC')
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/two', urlencodedParser, function (req, res) {
 
  var response = {
      "first_name":req.body.fuck,
      "last_name":req.body.fuck2
  };
  console.log(response);
  res.send(JSON.stringify(response));
 })

server.listen(8080, () => {
  console.log('listening on *:8080');
});