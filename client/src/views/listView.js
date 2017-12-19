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
      this.renderIndividual(event, eventListUL);
    }.bind(this))

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
        this.renderIndividual(event, eventListUL);
      }
    }.bind(this));
  },

  renderIndividual: function(item, parentDiv) {
    var container = document.createElement('li');
    container.classList.add("event-container");
    container.setAttribute('id', `${item._id}`);
    container.appendChild(eLib.elementTextIdClass("div", item.date, "event-item-date", ""));
    container.appendChild(eLib.elementTextIdClass("div", item.title, "event-item-title", ""));
    container.appendChild(eLib.elementTextIdClass("div", item.type, "event-item-type", ""));
    // var img = eLib.elementTextIdClass("img", item.image, `${item._id}`, "event-image");
    // img.src = item.image;
    // container.appendChild(img);
    parentDiv.appendChild(container);
  },

  removeChildNodes: function(node){
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  }
}


module.exports = ListView;
