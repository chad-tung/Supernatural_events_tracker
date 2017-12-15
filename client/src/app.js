var FormView = require('./views/formView');

// var makeRequest = function(url, callback) {
// 	var request = new XMLHttpRequest();
// 	request.open('GET', url);
// 	request.addEventListener('load', callback);
// 	request.send();
// }

// var renderForm = function() {
// 	console.log('hiya');
// 	var form = new FormView();
// }

var app = function() {
	console.log("app hit");
	var form = new FormView();
	// var url = "/event-form";
	// var postButton = document.getElementById('nav-post');
	// postButton.addEventListener('click', function() {
	// 	makeRequest(url, renderForm);
	// })
}

window.addEventListener("load", app);
