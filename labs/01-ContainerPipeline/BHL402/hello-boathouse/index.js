var express = require('express');
var os = require('os');
var app = express();

app.get('/', function (req, res) {
  console.log('Hello Boathouse v2 from ... %s', os.hostname );
  res.send('Hello Boathouse v2 from ... '+ os.hostname);
});var server = app.listen(3001, function () {var host = server.address().address;var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});