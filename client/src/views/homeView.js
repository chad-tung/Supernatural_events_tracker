var ElementLibrary = require('../models/elementLibrary');

var eLib = new ElementLibrary();
var HomeView = function() {
  this.render();
}

HomeView.prototype = {
  render: function() {
    var homepageDiv = document.getElementById('home-page');

    var recent_posts = eLib.elementIdClass('div', 'recent-posts', 'section', 'third');

    var homeimageDiv = eLib.elementIdClass("div", "home-image", "section", "first");

    var imageText = eLib.elementTextIdClass('h1', 'DISCOVER THE TRUTH')

    homeimageDiv.appendChild(imageText);

    var aboutDiv = eLib.elementIdClass("div", "about-section", "section", "second");
    var aboutHeader = eLib.elementTextIdClass("h2", "ABOUT US");

    var aboutString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."

    var aboutText = eLib.elementTextIdClass("div", aboutString, "about-text");

    aboutDiv.appendChild(aboutHeader);
    aboutDiv.appendChild(aboutText);

    homepageDiv.appendChild(homeimageDiv);
    homepageDiv.appendChild(aboutDiv);
    homepageDiv.appendChild(recent_posts);
  },

  renderRecent: function(events) {
    recentPosts = document.getElementById('recent-posts');
    events.reverse();
    for(var i=0; i < 3; i++) {
      var div = eLib.elementIdClass("div", `article-${i+1}`);
      var articleTitle = eLib.elementTextIdClass('h3', `${events[i].title}`);
      div.setAttribute("style", `background: url(${events[i].image})`);
      div.appendChild(articleTitle);
      recentPosts.appendChild(div);
    };
  }
}

module.exports = HomeView;
