var FormView = require('./views/formView')

var makeRequest = function(url, callback) {

}

var app = function() {
	var url = "/event-form";
	var postButton = document.getElementById('nav-post');
	postButton.addEventListener('click', function() {
		makeRequest(url, renderForm);
	})

}



var renderForm = function() {

}

window.addEventListener("load", function(){
	alert("Loaded!");
});
