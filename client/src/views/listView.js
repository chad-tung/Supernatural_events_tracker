var ElementLibrary = require('../models/elementLibrary');

var eLib = new ElementLibrary();
var ListView = function(eventList) {
  this.render(eventList);
}

ListView.prototype = {
  render: function(eventList){
    var eventListPage = document.getElementById('event-list-page');
    var selectType = eLib.elementNamePlaceholderId('select', 'type');
    var typeArr = ["UFO", "Ghost", "Cryptid", "Unidentified"];
    typeArr.forEach(function(type) {
      var option = eLib.elementTextIdClass('option', `${type}`);
      selectType.appendChild(option);
    });

    var eventListUL = document.createElement('ul');
    eventListPage.appendChild(eventListUL);

    eventList.forEach(function(event){
      eventListUL.appendChild(eLib.elementTextIdClass("li", event.title, `${event._id}`, "event-li"));
    })
  }
}

module.exports = ListView;
