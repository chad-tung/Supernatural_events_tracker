var MapWrapper = require('../models/MapWrapper');

var MapView = function(eventList){
  this.render(eventList);
}

MapView.prototype = {
  render: function(eventList){
    var mapPage = document.getElementById('map-page')
    var container = document.createElement('div');
    container.id = 'main-map';
    mapPage.appendChild(container)

    var coords = {lat: 55.3781, lng: -3.4360};
    var zoom = 6;
    var map = new MapWrapper(container, coords, zoom);

    eventList.forEach(function(event){
      map.addMarker(event.location)
    })
  }
}

module.exports = MapView;