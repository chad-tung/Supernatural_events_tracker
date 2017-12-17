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
    console.log(event);
    this.clearMarkers();
    var coord = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    this.addMarker(coord)
    var latInput = document.getElementById('lat-input');
    var lngInput = document.getElementById('lng-input');
    latInput.value = coord.lat;
    lngInput.value = coord.lng;
  }.bind(this));
};

MapWrapper.prototype.setMarkersInfo = function(eventList){
    this.markers.forEach(function(marker){
      var coords = {lat: marker.getPosition().lat(), lng: marker.getPosition().lng()};
      console.log(coords);
      for (i = 0; i < eventList.length; i++){
        if(coords.lat === eventList[i].location.lat && coords.lng === eventList[i].location.lng){
          var infoWindow = new google.maps.InfoWindow({
              content: `${eventList[i].title}`
          });

          marker.addListener('click', function(){
              infoWindow.open(this.googleMap, marker);
          });
      }

      }
    })
}


module.exports = MapWrapper;
