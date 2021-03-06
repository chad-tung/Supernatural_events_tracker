var express = require("express");
var parser = require('body-parser')
var app = express();
var path = require("path");
var ObjectId = require("mongodb").ObjectId;
var BodyMongoler = require('./client/src/models/bodyMongoler')
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

app.post('/event-form', function(req, res){
	var bodyMongoler = new BodyMongoler(req);
	db.collection("events").save(req.body, function(err, result){
		if(err) {
			console.log(err);
		}
		console.log("Saved to database.");
		res.json('ok');
	});
});

// app.post("/deleteAll", function(req, res) {
// 	db.collection("events").deleteMany({});
// 	res.redirect("/");
// });

// app.post("/delete/:id", function(req, res){
// 	db.collection("events").deleteOne({"_id": ObjectId(req.params.id)});
// 	res.redirect("/api/events");
// });

app.get("/events/:id", function(req, res) {
	db.collection("events").find({"_id": ObjectId(req.params.id)}).toArray(function(err, results) {
		if(err) {
			console.log(err);
		}
		res.json(results);
	});
})

app.post('/sceptic/:id', function(req, res) {
	db.collection("events").findOneAndUpdate({"_id": ObjectId(req.params.id)}, {$inc: {"sceptics": 1}});
	res.redirect("/")
})

app.post('/believer/:id', function(req, res) {
	db.collection("events").findOneAndUpdate({"_id": ObjectId(req.params.id)}, {$inc: {"believers": 1}});
	res.redirect("/")
})

app.post('/comment/:id', function(req, res) {
	db.collection("events").update({"_id": ObjectId(req.params.id)}, {$push: {"comments": String(req.body.comment)}});
	res.redirect("/")
})

app.get('/event-form', function(req, res) {
	res.sendFile(__dirname + "/client/build/formPage.html");
})
