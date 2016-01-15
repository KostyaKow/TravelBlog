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

var dataDir = '../data/';

function getBlogPosts() {
   var postFileNames = fs.readdirSync(dataDir);
  
   var posts = [];
 
   for (postDate in postFileNames) {
      var postStr = fs.readFileSync(dataDir + postFileNames[postDate]);
      var postJson = JSON.parse(postStr); //JSON.stringify()
      var date = postFileNames[postDate].substring(4);
      postJson['date'] = date;
      posts.push(postJson);
      //console.log(postJson);
   }
   return posts;
}

function onReq(req) {
   console.log('request: ' + req.sessionID);
}

app.get('/ira/serv', function(req, res) {
   res.set('Access-Control-Allow-Origin', '*');
   //onReq(req);

   //console.log(req);
   //console.log(req.body);
   var response = null;

   var query = req.query;
   if (query.data == 'getBlogPosts') {
      var posts = getBlogPosts();

      response = posts;
   }

   res.status(200).send(response); //res.send(200, response);
});


app.post('/ira/serv', function(req, res) {
   /*console.log('request: ' + req.sessionID);
   console.log(req.body);
   fs.writeFile('/tmp/test', req.body, onErr);*/
});

app.listen(1342);


