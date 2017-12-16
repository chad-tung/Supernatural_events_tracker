var FormView = require('./views/formView');
var HomeView = require('./views/homeView');
var ListView = require('./views/listView');
var MapView = require('./views/mapView');
var EventView = require('./views/eventView');

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
	var home = new HomeView();
	var form = new FormView();
	var list = new ListView(eventList);
	var map = new MapView(eventList);
	var selectedEvent = new EventView(eventList, '5a35366910dd9fc1e9eb03a2');
	home.renderRecent(eventList);
};

window.addEventListener("load", app);
