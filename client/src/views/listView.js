var ElementLibrary = require('../models/elementLibrary');

var eLib = new ElementLibrary();
var ListView = function(eventList) {
  this.render(eventList);
}

ListView.prototype = {
  render: function(eventList){
    var eventListPage = document.getElementById('event-list-page');

    var filterType = eLib.elementTextIdClass('select', '', "select-filter");
    var typeArr = ["All", "UFO", "Ghost", "Cryptid", "Unidentified"];

    typeArr.forEach(function(type) {
      var option = eLib.elementTextIdClass('option', `${type}`);
      filterType.appendChild(option);
    });

    eventListPage.appendChild(filterType);
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

    filterType.addEventListener('change', function() {
      var selection = typeArr[filterType.selectedIndex];
      if (selection == "All") {
        this.removeChildNodes(eventListPage)
        this.render(eventList);
      }
      else {
        this.renderFilter(eventList, String(selection))
      }
    }.bind(this));
  },

  renderFilter: function(eventList, typeSelected) {
    var eventListUL = document.getElementById('event-list-ul');
    this.removeChildNodes(eventListUL);

    eventList.forEach(function(event){
      if (event.type == typeSelected) {
        var container = document.createElement('div');
        container.classList.add("event-container");

        container.appendChild(eLib.elementTextIdClass("li", event.date, `${event._id}`, "event-li"));
        container.appendChild(eLib.elementTextIdClass("li", event.title, `${event._id}`, "event-li"));
        var img = eLib.elementTextIdClass("img", event.image, `${event._id}`, "event-image");
        img.src = event.image;
        container.appendChild(img);
        eventListUL.appendChild(container);
      }
    })
  },
  removeChildNodes: function(node){
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  }
}


module.exports = ListView;
