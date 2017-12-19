var MapWrapper = require("../models/mapWrapper");
var ElementLibrary = require("../models/elementLibrary");

var EventView = function(eventList, eventID){
  this.render(eventList, eventID);
}

EventView.prototype = {
  render: function(eventList, eventID){
    var eLib = new ElementLibrary();
    var div = document.getElementById('event-item-page');
    var ul = document.createElement('ul');
    div.appendChild(ul);

    eventList.forEach(function(event){
      if(event._id === eventID){
        ul.appendChild(eLib.elementTextIdClass('li', event.title, "event-title"));
        ul.appendChild(eLib.elementTextIdClass('li', event.date, "event-date"));
        ul.appendChild(eLib.elementTextIdClass('li', event.type, "event-type"));
        ul.appendChild(eLib.elementTextIdClass('li', event.description, "event-description"));

        if(event.author !== null || event.author !== ""){
          ul.appendChild(eLib.elementTextIdClass('li', event.author, 'event-author'));
        } else {
          ul.appendChild(eLib.elementTextIdClass('li', "Anonymous", 'event-author'));
        }

        var mapAndImg = document.createElement('div');
        mapAndImg.id = "map-and-img"
        ul.appendChild(mapAndImg);

        var image = document.createElement('img');
        image.id = "event-image"
        image.src = event.image;
        mapAndImg.appendChild(image);

        var container = document.createElement('div');
        container.id = 'event-map';
        mapAndImg.appendChild(container);

        var coords = event.location;
        var zoom = 10;
        var map = new MapWrapper(container, coords, zoom);

        map.addMarker(event.location);
      }
    })

  }
}

module.exports = EventView;
