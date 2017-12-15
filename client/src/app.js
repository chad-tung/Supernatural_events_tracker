var FormView = require('./views/formView')

var app = function() {
	url = "/event-form";
	makeRequest(url, renderForm);
}

var makeRequest = function(url, callback) {
	
}

var renderForm = function() {

}

window.addEventListener("load", function(){
	alert("Loaded!");
});
