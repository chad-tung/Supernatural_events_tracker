var MapWrapper = require('../models/mapWrapper');
var ElementLibrary = require('../models/elementLibrary');

var eLib = new ElementLibrary();

var MapView = function(eventList){
  this.render(eventList);
}

MapView.prototype = {
  render: function(eventList){
    var mapPage = document.getElementById('map-page')
    var searchBox = eLib.elementNamePlaceholderId("input", "", "Search", "search-input");
    searchBox.class = "controls";
    searchBox.type = "text";

    var container = document.createElement('div');
    container.id = 'main-map';
    mapPage.appendChild(container)

    var coords = {lat: 55.3781, lng: -3.4360};
    var zoom = 6;
    var map = new MapWrapper(container, coords, zoom);

    eventList.forEach(function(event){
      map.addMarker(event.location)
    })

    map.setMarkersInfo(eventList);

    var geoButton = document.createElement('button');
    geoButton.innerText = "Find me";
    geoButton.addEventListener("click", map.findMe.bind(map));
    mapPage.appendChild(geoButton)

    map.searchBar(searchBox);
  }
}

module.exports = MapView;
