var HomeView = function() {
  this.render();
}

var elementCreator = function(elementname, idname, classname, classname2, innerString) {
  var item = document.createElement(elementname);
  item.id = idname;
  item.classList.add(classname, classname2);
  return item;
}

HomeView.prototype = {
  render: function() {
    var homepageDiv = document.getElementById('home-page');
    var recent_posts = elementCreator("div", "recent-posts", "section", "third")

    // var homeimageDiv = document.createElement('div');
    // homeimageDiv.id = "home-image";

    var homeimageDiv = elementCreator("div", "home-image", "section", "first");

    var imageText = document.createElement('h1');
    imageText.innerText = "DISCOVER THE TRUTH";

    homeimageDiv.appendChild(imageText);

    var aboutDiv = elementCreator("div", "about-section", "section", "second");
    var aboutHeader = elementCreator('h2');
    aboutHeader.innerText = "ABOUT US";

    var aboutText = elementCreator("div", "", "about-text");

    aboutText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."

    aboutDiv.appendChild(aboutHeader);
    aboutDiv.appendChild(aboutText);

    homepageDiv.appendChild(homeimageDiv);
    homepageDiv.appendChild(aboutDiv);
    homepageDiv.appendChild(recent_posts);

  }
}

module.exports = HomeView;
