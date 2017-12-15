var FormView = require('./views/formView');
var HomeView = require('./views/homeView');

var app = function() {
	console.log("hi");
	var home = new HomeView();
	var form = new FormView();
}

window.addEventListener("load", app);
