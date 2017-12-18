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
    eventListUL.id = 'event-list-ul'
    eventListPage.appendChild(eventListUL);

    eventList.forEach(function(event){
      eventListUL.appendChild(eLib.elementTextIdClass("li", event.title, `${event._id}`, "event-li"));
    })

    filterType.addEventListener('change', function() {
      var selection = typeArr[filterType.selectedIndex];
      if (selection == "All") {
        this.removeChildNodes(eventListUL);
        eventList.forEach(function(event){
          eventListUL.appendChild(eLib.elementTextIdClass("li", event.title, `${event._id}`, "event-li"))
        })
      }
      else {
        this.renderFilter(eventList, String(selection))
      }
    }.bind(this));
  },

  renderFilter: function(eventList, typeSelected) {
    var eventListUL = document.getElementById('event-list-ul');
    this.removeChildNodes(eventListUL);

    eventList.forEach(function(item) {
      if (item.type == typeSelected) {
        eventListUL.appendChild(eLib.elementTextIdClass("li", item.title, `${item._id}`, "event-li"));
      }
    });
  },
  removeChildNodes: function(node){
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  }
}


module.exports = ListView;
