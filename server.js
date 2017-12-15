var express = require("express");
var parser = require('body-parser')
var app = express();
var path = require("path");
var ObjectId = require("mongodb").ObjectId;
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static("client/build"));

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/paranormal', function(err, client) {
	if(err) {
		console.log(err);
	}
	db = client.db("paranormal");
	console.log("Connected to database.");

	app.listen(3000, function() {
		console.log("Listening on port 3000");
	});
});

app.get("/", function(req, res){
	res.sendFile(__dirname + "/client/build/index.html");
});

app.get("/api/events", function(req, res){
	db.collection("events").find().toArray(function(err, results){
		if(err) {
			console.log(err);
		}
		res.json(results)
	});
});

//create
app.post('/eventForm', function(req, res){
	db.collection("events").save(req.body, function(err, result){
		if(err) {
			console.log(err);
		}

		console.log("Saved to database.");
		res.redirect("/");
	});
});

//read
//delete
