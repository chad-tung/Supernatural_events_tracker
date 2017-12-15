var FormView = require('./views/formView');
var HomeView = require('./views/homeView');

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
	home.renderRecent(eventList);
};

window.addEventListener("load", app);
