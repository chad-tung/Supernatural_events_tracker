var ElementLibrary = require('../models/ElementLibrary');


var ListView = function(eventList) {
  this.render(eventList);
}




var elementCreator = function(elementname, idname, classname, innerString) {
  var item = document.createElement(elementname);
  item.id = idname;
  item.classList.add(classname);
  item.innerText = innerString;
  return item;
}

ListView.prototype = {
  render: function(eventList){
    var eLib = new ElementLibrary();
    var eventListPage = document.getElementById('event-list-page');
    var eventListUL = document.createElement('ul');
    eventListPage.appendChild(eventListUL);

    eventList.forEach(function(event){
      eventListUL.appendChild(eLib.elementTextIdClass("li", event.title, `${event._id}`, "event-li"));
      // eventListUL.appendChild(elementCreator('li', `${event._id}`, "event-li", event.title));
    })

  }
}

module.exports = ListView;
