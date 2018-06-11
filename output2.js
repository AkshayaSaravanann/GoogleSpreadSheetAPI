var http = require('http');
var fs = require('fs');
var express = require('express');
var Promise=require("bluebird");
var app = express();
var router = express.Router();
var port = process.env.PORT || 8899;

router.get('/', function(req,res) {
  fs.readFile('routepoints.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    //res.send();
    res.end();
});

});
// admin.listen(port);
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb"

//  router.get('/route', function(requ, resp)
//   {
//   	MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var cursor = dbo.collection("points").find().limit(1).sort({ "$natural" : -1});
//     //console.log(cursor);
//     var temp=[];
//     cursor.each(function (err,result){
//     //dbo.collection("builder").findOne({}, function(err, result) {
//   		if (err) throw err;
//   		//resp.send(result);
//      // temp.push(JSON.stringify(result));
//   	});
//     resp.send(result);
//    // console.log(temp);
//   });
// });

// app.use('/', router);
//   var server = app.listen(8899, function() {
 
// });
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb"
router.get('/route', function(requ, resp)
{
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var cursor = dbo.collection("points").find().limit(1).sort({ "$natural" : -1});
    var temp = [];
    var promise1 = function(){
      return new Promise(function (resolve, reject) {
        setTimeout(function() {
          cursor.each(function (err,result){
            if (err) throw err;
            temp.push(JSON.stringify(result));
          });
          resolve();
        }, )
      })
    };
    var promise2 = function(){
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resp.send(temp[0]);
          resolve();
        },)
      });
    };
    Promise.map([promise1,promise2], function(promiseFn){
      return promiseFn();
    }, {concurrency: 1});

  });
});
app.use('/', router);
app.listen(port);
 console.log("Listening to port: 8899");