var HomeView = function() {
  this.render();
}

var elementCreator = function(elementname, idname, classname) {
  var item = document.createElement(elementname);
  item.id = idname;
  item.classList.add(classname);
}

HomeView.prototype = {
  render: function() {
    var homepageDiv = document.getElementById('home-page');

    // var homeimageDiv = document.createElement('div');
    // homeimageDiv.id = "home-image";
    var homeimageDiv = elementCreator("div", "home-image", "section first");

    var header = document.createElement('h1');
    header.innerText = "DISCOVER THE TRUTH";

    homeimageDiv.appendChild(header);

    

    var recent_posts = document.getElementById('recent-posts');

  }
}

module.exports = HomeView;
