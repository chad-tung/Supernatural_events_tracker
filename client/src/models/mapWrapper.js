var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  this.geoMarker = [];
  this.searchMarker = [];
}

MapWrapper.prototype.addMarker = function(coords) {

  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  // I don't know why, but I need the line below for the previous marker to disappear...
  // Maybe it's because if I don't put it into this.markers, then the setMapOnAll(null) still sets it, as it's a marker belonging to null?
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

MapWrapper.prototype.searchBar = function(div) {
  var map = this.googleMap;
  var searchBox = new google.maps.places.SearchBox(div);

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(div);

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  })

  // var searchMarker = this.searchMarker;

  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

// Put this back in if we want icons
      // var icon = {
      //   url: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Chartreuse-icon.png",
      //   scaledSize: new google.maps.Size(35, 35)
      // }
      //
      //
      // searchMarker.push(new google.maps.Marker({
      //   map: map,
      //   icon: icon,
      //   title: place.name,
      //   position: place.geometry.location
      // }));

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

module.exports = MapWrapper;
