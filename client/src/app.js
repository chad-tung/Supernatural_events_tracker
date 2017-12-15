var FormView = require('./views/formView');

// var makeRequest = function(url, callback) {
// 	var request = new XMLHttpRequest();
// 	request.open('GET', url);
// 	request.addEventListener('load', callback);
// 	request.send();
// }
//
var renderForm = function() {
	window.addEventListener('load', function() {
		var form = new FormView();
	})
	console.log('hiya');

}

var app = function() {
	// var url = "/event-form";
	console.log('hi')
	var postButton = document.getElementById('nav-post');
	postButton.addEventListener('click', renderForm);
	})
}

window.addEventListener("load", app);
