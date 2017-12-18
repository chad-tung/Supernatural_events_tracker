var FormView = require('./views/formView');
var HomeView = require('./views/homeView');
var ListView = require('./views/listView');
var MapView = require('./views/mapView');
var EventView = require('./views/eventView');
var ClearPageDivs = require('./models/clearPageDivs');

var app = function() {
	var url = "/api/events"
	var articles = makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function() {
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var eventList = JSON.parse(jsonString);
	loadHome(eventList);
	// loadForm();
	// var home = new HomeView();
	// var form = new FormView();
	// var list = new ListView(eventList);
	// var map = new MapView(eventList);
	// var selectedEvent = new EventView(eventList, eventList[0]._id);
	// home.renderRecent(eventList);

	// var clear = new ClearPageDivs();
};

var attachNav = function(eventList) {
	var homeButton = document.getElementById('homeButton');
	var formButton = document.getElementById('formButton');
	var mapButton = document.getElementById('mapButton');
	var listButton = document.getElementById('listButton');

	homeButton.addEventListener('click', function() {
		loadHome(eventList);
	});

	formButton.addEventListener('click', function() {
		loadForm(eventList);
	});

	mapButton.addEventListener('click', function() {
		loadMap(eventList);
	});

	listButton.addEventListener('click', function() {
		loadList(eventList);
	});

}

var clearPage = function() {
	var clear = new ClearPageDivs();
}

var loadHome = function(eventList) {
	clearPage();
	var home = new HomeView();
	attachNav(eventList);
	home.renderRecent(eventList);
};

var loadForm = function(eventList) {
	clearPage();
	attachNav(eventList);
	var form = new FormView();
};

var loadList = function(eventList) {
	clearPage();
	attachNav(eventList);
	var list = new ListView(eventList);
};

var loadMap = function(eventList) {
	clearPage();
	attachNav(eventList);
	var map = new MapView(eventList);
};

var loadSingleEvent = function() {
	clearPage();
	var selectedEvent = new EventView(eventList, eventList[0]._id);
}

// grab all the divs that have the class singleview, and put them into an array. Look through, and for every one, add a click listener, which redirects them to the loadSingleEvent page, which will take and parse to int the ID of the div, and search the database for it.

window.addEventListener("load", app);


// var divs = document.getElementsByTagName('.page');


// var divs = document.getElementsByTagName('.page');
//
// for(i=0; i<divs.length; i++){
// 	removeChildNodes(divs.item(i))
// }
// var removeChildNodes = function(node){
// while (node.hasChildNodes()) {
// 	node.removeChild(node.lastChild);
// }
