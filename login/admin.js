//npm install express cookie-parser express-session uuid

var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var uuid = require('uuid');

app.use(cookieParser());

function genuuid() {
   return uuid.v1();
}

app.use(session({
   genid:   (req) => genuuid(), // use UUIDs for session IDs
   secret:  'keyboard cat',
   cookie:  { maxAge: 3600 }
}));

app.get('/ira/admin', function(req, res) {
   //req.session.test++;
   //res.send('hello' + req.session.test);
   res.send(req.session.admin);
   res.send('hello world');
   console.log('checking admin status');
});

app.post('/ira/admin', function(req, res) {
   req.session.admin = true;
   console.log('setting admin status');

});

app.listen(1442);
