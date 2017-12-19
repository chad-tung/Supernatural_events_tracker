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

	var recentEvents = document.getElementsByClassName('recent-articles')

	for(var i=0; i<recentEvents.length;i++){
		recentEvents[i].addEventListener('click', function(){
			loadSingleEvent(eventList, this.id)
		})
	}
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
	var addListeners = function() {
		var listOfEvents = document.getElementsByClassName('event-li');
		for (var i=0; i < listOfEvents.length; i++) {
			listOfEvents[i].addEventListener('click', function() {
				loadSingleEvent(eventList, this.id)
			})
		}
	}
	addListeners();
	var select = document.getElementById('select-filter');
	select.addEventListener('change', addListeners);
};

var loadMap = function(eventList) {
	clearPage();
	attachNav(eventList);
	var map = new MapView(eventList);
	var main_map = document.getElementById('main-map');

	main_map.addEventListener('click', function() {
		var markerWindows = document.getElementsByClassName('marker-info');
		if(markerWindows.length > 0) {
			markerWindows[0].addEventListener('click', function(){
				loadSingleEvent(eventList, this.id);
			})
		}
	})
};

var loadSingleEvent = function(eventList, eventId) {
	clearPage();
	var selectedEvent = new EventView(eventList, eventId);
}

window.addEventListener("load", app);
