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
  // I don't know why, but I need the line below for the previous marker to disappear...
  this.setMarkerInfo(marker)
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
    var coord = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    this.addMarker(coord)
    console.log(coord);
    var latInput = document.getElementById('lat-input');
    var lngInput = document.getElementById('lng-input');
    latInput.value = coord.lat;
    lngInput.value = coord.lng;
  }.bind(this));
};

MapWrapper.prototype.setMarkerInfo = function(marker){
    var infoWindow = new google.maps.InfoWindow({
        content: "Interesting Information!"
    });

    marker.addListener('click', function(){
        infoWindow.open(this.googleMap, marker);
    });
}


module.exports = MapWrapper;
