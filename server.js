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


var db;
var users;
var posts;
var jerts;

var MONGODB_URI = "mongodb://localhost:27017/jerttit";

var connectDB = function() {
  mongodb.MongoClient.connect(MONGODB_URI, function(err, database) {
    if(err) throw err;
   
    db = database;
    users = db.collection('users');
    posts = db.collection('posts');
    jerts = db.collection('jerts');

    
  });
};
connectDB();
app.listen(3000);
console.log('Listening on port 3000');

app.use(express.static(__dirname + '/public'));

//var jertsRoutes = require('./app/routes/jerts')(app, express, jerts);
//app.use('/api/jerts', jertsRoutes);

  app.get('/api/jerts', function(req, res) {
      jerts.find({}).toArray(function(err, docs) {
        if (err) res.send(err);
        res.json(docs);
          //db.close();
      });

  });

  app.post('/api/jerts', function(req, res) {
      var newJert;

      console.log(req.body);
      if (req.body.name && req.body.description && req.body.url) {
        newjert = {
          name: req.body.name,
          description: req.body.description,
          url: req.body.url
        };

        jerts.insert(newjert, function(err, result) {
          if (err) res.send(err);
          console.log("new Jert inserted");
        });

        db.close();
        connectDB();
      }

  });

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});



