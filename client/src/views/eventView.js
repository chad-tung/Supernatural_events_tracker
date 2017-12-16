var EventView = function(eventList, eventID){
  this.render(eventList, eventID);
}

var elementCreator = function(elementname, idname, innerString) {
  var item = document.createElement(elementname);
  item.id = idname;
  item.innerText = innerString;
  return item;
}

EventView.prototype = {
  render: function(eventList, eventID){
    var div = document.getElementById('event-item-page');
    var ul = document.createElement('ul');
    div.appendChild(ul);

    eventList.forEach(function(event){
      if(event._id === eventID){
        ul.appendChild(elementCreator('li', 'event-title', event.title))
        ul.appendChild(elementCreator('li', 'event-date', event.date))
        ul.appendChild(elementCreator('li', 'event-location', event.location))
        ul.appendChild(elementCreator('li', 'event-type', event.type))
        ul.appendChild(elementCreator('li', 'event-description', event.description))
        ul.appendChild(elementCreator('li', 'event-image', event.image))

        if(event.author !== null || event.author !== ""){
          ul.appendChild(elementCreator('li', 'event-author', event.author))
        } else {
          ul.appendChild(elementCreator('li', 'event-author', "Anonymous"))
        }

      }
    })

  }
}

module.exports = EventView;
