var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = []
}

MapWrapper.prototype.addMarker = function(coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
};

MapWrapper.prototype.setMapOnAll = function(map) {
  for (var i = 0; i < this.markers.length; i++) {
    this.markers[i].setMap(map);
  }
}

MapWrapper.prototype.clearMarkers = function() {
  this.setMapOnAll(null);
  this.markers = [];
}

MapWrapper.prototype.addClickEvent = function() {

  google.maps.event.addListener(this.googleMap,
  'click', function(event) {
    this.clearMarkers();
    // var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
    var coord = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    this.addMarker(coord)
    console.log(coord);
  }.bind(this));
};





module.exports = MapWrapper;
