var ElementLibrary = require('../models/elementLibrary');

var eLib = new ElementLibrary();
var ListView = function(eventList) {
  this.render(eventList);
}

ListView.prototype = {
  render: function(eventList){
    var eventListPage = document.getElementById('event-list-page');
    var eventListUL = document.createElement('ul');
    eventListUL.id = 'event-list-ul';

    eventListPage.appendChild(eventListUL);

    eventList.forEach(function(event){
      var container = document.createElement('div');
      container.classList.add("event-container");

      container.appendChild(eLib.elementTextIdClass("li", event.date, `${event._id}`, "event-li"));
      container.appendChild(eLib.elementTextIdClass("li", event.title, `${event._id}`, "event-li"));
      var img = eLib.elementTextIdClass("img", event.image, `${event._id}`, "event-image");
      img.src = event.image;
      container.appendChild(img);
      eventListUL.appendChild(container);
    })

  }
}

module.exports = ListView;
