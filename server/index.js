var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./rest/route');
var app = express();
var http = require('http');
var port = normalizePort(process.env.PORT || '3000');

app.set('port', port);
var server = http.createServer(app);
var nano = require('nano')('http://localhost:5984');
var db = nano.db.use('test');

server.listen(port);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../DatingApp')));
app.use('/', routes);

app.get('/profile', function(req, res) {
  // console.log("Test1");
  db.get('123456', function(err, body){
    console.log(req.param('filter'));
    console.log(req.param('itemCount'));
    // console.log(req.param('test'));
    // console.log(req.body);
  res.send(body.users);
  });
});


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

