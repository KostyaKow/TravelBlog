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

//0 = none (don't do this). 1 = normal logging. 2 = debug logs
var debugSrv = 3;
var dataDir = '../data/';

if (debugSrv >= 1)
   console.log('==server restart');


function onErr(err) {
   if (err) console.log(err);
}
function onReq(req) {
   if (debugSrv >= 1)
      console.log('request: ' + req.sessionID);
}

function getBlogPosts() {
   var postFileNames = fs.readdirSync(dataDir);
  
   var posts = [];
 
   for (postDate in postFileNames) {
      var postStr = fs.readFileSync(dataDir + postFileNames[postDate]);
      var postJson = JSON.parse(postStr); //JSON.stringify()
      var date = postFileNames[postDate].substring(4);
      postJson['date'] = date;
      posts.push(postJson);
      if (debugSrv >= 2)
         console.log(postJson);
   }
   return posts;
}

function getCountriesCounts() {
   //var posts =
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
   else if (query.data == 'getCountryCounts') {
      var countries = getCountriesCounts();
      response = countries;
   }
   else if (query.data == 'getPreviews') {
      var page = query.page;
   }

   res.status(200).send(response); //res.send(200, response);
});


app.post('/ira/serv', function(req, res) {
   /*console.log('request: ' + req.sessionID);
   console.log(req.body);
   fs.writeFile('/tmp/test', req.body, onErr);*/
});

app.listen(1342);


