var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  this.geoMarker = [];
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
    var lastOpened = false;

    this.markers.forEach(function(marker){
      var coords = {lat: marker.getPosition().lat(), lng: marker.getPosition().lng()};

      for (i = 0; i < eventList.length; i++){
        if(coords.lat === eventList[i].location.lat && coords.lng === eventList[i].location.lng){
          var infoWindow = new google.maps.InfoWindow({
              content: `<DIV ID="${eventList[i]._id}" CLASS="marker-info"> ${eventList[i].title} <IMG BORDER="0" ALIGN="Center" CLASS="marker-image" SRC="${eventList[i].image}"/> Click to read more</DIV>`
          });

          marker.addListener('click', function(){
              if(lastOpened){
                lastOpened.close();
              }

          lastOpened = infoWindow;
          infoWindow.open(this.googleMap, marker);
          })
      }
    }
  })
}

MapWrapper.prototype.findMe = function(){
    navigator.geolocation.getCurrentPosition(function(position) {
        var currentPos = ({lat: position.coords.latitude, lng: position.coords.longitude})
        this.googleMap.setZoom(14);
        this.googleMap.setCenter(currentPos);

        if(this.geoMarker.length !== 1){
          var geoMarker = new google.maps.Marker({
            position: currentPos,
            map: this.googleMap,
            icon: "https://mt.googleapis.com/vt/icon/name=icons/onion/22-blue-dot.png"
          });

          geoMarker.setAnimation(google.maps.Animation.BOUNCE)
          this.geoMarker.push(geoMarker)
        }
    }.bind(this))
}

module.exports = MapWrapper;
