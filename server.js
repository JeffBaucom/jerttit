var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.use(morgan('dev'));


var app = express();
var db;
var users;
var articles;

var MONGODB_URI = "mongodb://localhost:27017/jerttit";

mongodb.MongoClient.connect(MONGODB_URI, function(err, database) {
  if(err) throw err;
 
  db = database;
  users = db.collection('users');
  articles = db.collection('articles');

  app.listen(3000);
  console.log('Listening on port 3000');
});

app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});



