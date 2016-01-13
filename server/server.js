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
function onErr(err) {
   if (err) console.log(err);
}

app.get('/ira/serv', function(req, res) {
   res.set('Access-Control-Allow-Origin', '*');
   //console.log(req);
   //console.log(req.body);

   var query = req.query;
   if (query.data == 'countryCount')
      console.log('getting country count');

   var response = [
      {'name': 'US', 'count': 1},
      {'name': 'Russia', 'count': 5}
   ];
   /*response = [
      {'first':'Helen', 'last':'Cabanillas', 'country':'Peru'},
      {'first':'Kostyantyn', 'last':'Kovalskyy', 'country':'Ukraine'},
      {'first':'Tony', 'last':'Klimov', 'country':'USA'},
      {'first':'Ira', 'last':'Klimov', 'country':'Ukraine'}
   ];*/
   //var data = fs.readFileSync('../data/post1449271171');
   /*var data = fs.readdirSync('../data/');
   response = data + '';*/

    

   //res.send(200, response);
   res.status(200).send(response);
});


app.post('/ira/serv', function(req, res) {
   console.log(req.body);
   fs.writeFile('/tmp/test', req.body, onErr);
});

app.listen(1342);


