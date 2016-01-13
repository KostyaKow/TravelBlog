//npm install express
//npm install --save body-parser
var fs = require('fs');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
/*app.use(bodyParser.urlencoded({
   extended: true
}));*/

app.get('/assmilk', function(req, res) {
   res.set('Access-Control-Allow-Origin', '*');

   console.log(req);

   response = [
      {'first':'Helen', 'last':'Cabanillas', 'country':'Peru'},
      {'first':'Kostyantyn', 'last':'Kovalskyy', 'country':'Ukraine'},
      {'first':'Tony', 'last':'Klimov', 'country':'USA'},
      {'first':'Ira', 'last':'Klimov', 'country':'Ukraine'}

   ];

   res.send(200, response);
});

function onErr(err) {
   if (err) console.log(err);
}

app.post('/assmilk', function(req, res) {
   console.log(req.body);
   fs.writeFile('/tmp/test', req.body, onErr);
});

app.listen(6969);


