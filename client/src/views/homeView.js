var ElementLibrary = require('../models/elementLibrary');

var eLib = new ElementLibrary();
var HomeView = function() {
  this.render();
}

HomeView.prototype = {
  render: function() {
    var homepageDiv = document.getElementById('home-page');

    var recent_posts = eLib.elementIdClass('div', 'recent-posts', 'section', 'third');
    var recentHeader = eLib.elementTextIdClass("h2", "RECENT POSTS");

    var homeimageDiv = eLib.elementIdClass("div", "home-image", "section", "first");

    var imageText = eLib.elementTextIdClass('h1', 'DISCOVER THE TRUTH')

    homeimageDiv.appendChild(imageText);

    var aboutDiv = eLib.elementIdClass("div", "about-section", "section", "second");
    var aboutHeader = eLib.elementTextIdClass("h2", "ABOUT US");

    "The SIPR (Scottish Institute of Paranormal Research) conducts organised scholarly research into human experiences that challenge contemporary scientific models. Our fields of study include parapsychology, cryptozoology, xenology, and other, as yet unclassified, fortean phenomena. We are proud to introduce the paranormal.DB, which is the first open source database of paranormal activity in Scotland, and will allow members of the public to record their own experiences with the paranormal. This will allow us to properly track trends in these phenomena, and will soon be the largest such database in the field, and a valuable tool for our researchers.This site allows you to log any strange experiences that have happened to you, and view reports based on location, or review the reports in full, or by focusing on a particular area of study."

    var aboutText = eLib.elementTextIdClass("div", "", "about-text");

    aboutText.innerHTML = "The SIPR (Scottish Institute of Paranormal Research) conducts organised scholarly research into human experiences that challenge contemporary scientific models. Our fields of study include parapsychology, cryptozoology, xenology, and other, as yet unclassified, fortean phenomena.<p> We are proud to introduce the paranormal.DB, which is the first open source database of paranormal activity in Scotland, and will allow members of the public to record their own experiences with the paranormal. This will allow us to properly track trends in these phenomena, and will soon be the largest such database in the field, and a valuable tool for our researchers.<p>This site allows you to log any strange experiences that have happened to you, and view reports based on location, or review the reports in full, or by focusing on a particular area of study.<p>'A vital resource for law enforcement agents' F. Mulder<p>'A researcher’s dream' Dr. E. Spengler"

    aboutDiv.appendChild(aboutHeader);
    aboutDiv.appendChild(aboutText);
    recent_posts.appendChild(recentHeader);

    homepageDiv.appendChild(homeimageDiv);
    homepageDiv.appendChild(aboutDiv);
    homepageDiv.appendChild(recent_posts);
  },

  renderRecent: function(events) {
    recentPosts = document.getElementById('recent-posts');
    recentPostsContainer = document.createElement('div');
    recentPosts.appendChild(recentPostsContainer);
    recentPostsContainer.setAttribute('id', 'recent-container');
    events.reverse();
    for(var i=0; i < 3; i++) {
      var div = eLib.elementIdClass("div", `${events[i]._id}`, "recent-articles");
      var articleTitleDiv = document.createElement('div');
      var articleTitle = eLib.elementTextIdClass('h3', `${events[i].title}`);
      articleTitleDiv.style = "background: rgba(220, 220, 220, 0.5); width: 100%; color: white;";
      // "rgba(220, 220, 220)"
      articleTitleDiv.appendChild(articleTitle);
      div.setAttribute("style", `background: url(${events[i].image})`);
      div.style.backgroundRepeat = "no-repeat";
      div.style.backgroundSize = "cover";
      div.appendChild(articleTitleDiv);
      recentPostsContainer.appendChild(div);
    };
  }
}

module.exports = HomeView;
