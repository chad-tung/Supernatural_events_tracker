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

var ufoImage = "https://image.flaticon.com/icons/svg/645/645424.svg"
var ghostImage = "https://s17.postimg.org/ebzur4svz/ghostie.png"
var cryptidImage = "https://s17.postimg.org/lrz4d0obz/nessie.png"
var unknownImage = "https://s17.postimg.org/5waa9vanz/questionmark.png"

app.post('/event-form', function(req, res){
	if (req.body.image == "") {
		if (req.body.type == "UFO") {
			req.body.image = ufoImage;
		}
		if (req.body.type == "Cryptid") {
			req.body.image = cryptidImage;
		}
		if (req.body.type == "Ghost") {
			req.body.image = ghostImage;
		}
		if (req.body.type == "Unidentified") {
			req.body.image = unknownImage;
		}
	}
	if (req.body.author == "") {
		req.body.author = "Anonymous";
	}
	req.body.location.lat = parseFloat(req.body.location.lat);
	req.body.location.lng = parseFloat(req.body.location.lng);
	db.collection("events").save(req.body, function(err, result){
		if(err) {
			console.log(err);
		}

		console.log("Saved to database.");
		res.redirect("/");
	});
});


app.post("/deleteAll", function(req, res) {
	db.collection("events").deleteMany({});
	res.redirect("/");
});

app.post("/delete/:id", function(req, res){
	db.collection("events").deleteOne({"_id": ObjectId(req.params.id)});
	res.redirect("/api/events");
});

app.get("/events/:id", function(req, res) {
	db.collection("events").find({"_id": ObjectId(req.params.id)}).toArray(function(err, results) {
		if(err) {
			console.log(err);
		}
		res.json(results);
	});
})

app.get('/event-form', function(req, res) {
	res.sendFile(__dirname + "/client/build/formPage.html");
})
