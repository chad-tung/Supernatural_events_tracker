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

        //Map&Image
        var image = eLib.elementIdClass('img', 'event-image');
        image.src = event.image;
        var mapAndImg = eLib.elementIdClass('div', "map-and-img");
        mapAndImg.appendChild(image);
        var container = eLib.elementIdClass('div', "event-map")
        mapAndImg.appendChild(container);
        ul.appendChild(mapAndImg);
        var coords = event.location;
        var zoom = 10;
        var map = new MapWrapper(container, coords, zoom);
        map.addMarker(event.location);

        // this is all newly added stuff

        var likeDislikeDiv = eLib.elementIdClass('div', 'sceptics-believers')

        var doubtForm = eLib.elementIdClass('form', 'doubtForm', 'like-dislike')
        doubtForm.action = `/sceptic/${eventID}`
        doubtForm.method = "POST";
        var doubtButton = eLib.elementIdClass('button', 'doubtButton', 'dislike-button')
        doubtButton.innerText = `Sceptic? (Sceptic count: ${event.sceptics})`
        doubtForm.appendChild(doubtButton);


        var believeForm = eLib.elementIdClass('form', 'believeForm', 'like-dislike')
        believeForm.action = `/believer/${eventID}`
        believeForm.method = "POST";
        var believeButton = eLib.elementIdClass('button', 'doubtButton', 'dislike-button');
        believeButton.innerText = `Believer? (Believer count: ${event.believers})`
        believeForm.appendChild(believeButton);
      }
    })
  }
}

module.exports = EventView;
