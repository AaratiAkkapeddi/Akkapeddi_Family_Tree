var express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    expressLayouts = require('express-ejs-layouts'),
    MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID,
    url = 'mongodb://localhost:27017/familytree',
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    Person = require('./models/person.js'),
    port = 3000;
    // mongoose.connect('mongodb://localhost/family_tree');
    // var db = mongoose.createConnection('mongodb://localhost/family_tree');
    // var db = mongoose.connection;
    // db.on('open', function(){
    // server.listen(port);
    // server.db = db;
    // console.log('Ready For Action');
    // });
var jsonPerson;


 /*<><><><><><><>MIDDLEWARE<><><><><><><><>*/
/*connecting to DB*/
mongoose.connect('mongodb://localhost:27017/familytree');

var db = mongoose.connection;

db.on('error', function () {
  console.log("Oh man");
});

db.once('open', function(){
  console.log("Database is on!");
  server.listen(port, function(){
    console.log('Ready For Action');
     Person.find({}, function(err,person){
      jsonPerson = person;
      console.log(jsonPerson + 'mew');
  });
});
});

server.use(express.static('./public'));
server.use(methodOverride('_method'));
server.use(expressLayouts);
server.set('views', './views');
server.set('view engine', 'ejs');

server.use(bodyParser.urlencoded({extended:true}));


// var kitchenController = require('./controllers/kitchen.js');
// server.use('/kitchen', kitchenController);



server.get('/',function(req,res){
  // newperson = {name:'aarati', birthday:12291992, age:22, alive:true, about:'hi'};
  // newperson.save({})
//   db.collection('people', function(err, collection) {
//     console.log('pew');
//   collection.find({},function(err,person){
//     console.log(person);
//     myData = person;
//   });
// });

  res.render('tree',{jsonPerson: JSON.stringify(jsonPerson)});
});

var a = 'b';







