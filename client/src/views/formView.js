var ElementLibrary = require('../models/elementLibrary');
var MapWrapper = require('../models/mapWrapper');

var eLib = new ElementLibrary();
var FormView = function() {
  this.render();
}

FormView.prototype = {
  render: function() {
    var body = document.getElementById('form-page');
    var form = document.createElement("form");
    form.id = "event-form";

    var formTitle = eLib.elementTextIdClass("h2", "EVENT FORM");
    var inputTitle = eLib.elementNamePlaceholderId('input', 'title', 'Please enter a title');

    inputTitle.required = true;

    var inputDate = eLib.elementNamePlaceholderId('input', 'date');
    inputDate.type = 'date';
    inputDate.required = true;

    var inputLat = eLib.elementNamePlaceholderId('input', 'location[lat]', 'Please click on the map to set lat', 'lat-input');
    inputLat.type = 'number';
    inputLat.step = '0.0000000000000001';
    inputLat.style.visibility = "collapse"
    inputLat.required = true;

    var inputLng = eLib.elementNamePlaceholderId('input', 'location[lng]', 'Please click on the map to set lng', 'lng-input');
    inputLng.type = 'number';
    inputLng.step = '0.0000000000000001';
    inputLng.style.visibility = "collapse";
    inputLat.required = true;

    var selectType = eLib.elementNamePlaceholderId('select', 'type');
    var typeArr = ["UFO", "Ghost", "Cryptid", "Unidentified"];

    typeArr.forEach(function(type) {
      var option = eLib.elementTextIdClass('option', `${type}`);
      selectType.appendChild(option);
    });

    var inputDescription = eLib.elementNamePlaceholderId('textarea', 'description', 'Please describe what you witnessed', 'form-description');
    inputDescription.required = true;

    var inputImage = eLib.elementNamePlaceholderId('input', 'image', 'Paste image url');
    var inputAuthor = eLib.elementNamePlaceholderId('input', 'author', 'Please tell us your name. If you wish to remain anonymous, leave this blank.');
    var submitButton = eLib.elementTextIdClass('button', 'Submit');

    form.appendChild(formTitle);
    form.appendChild(inputTitle);
    form.appendChild(inputDate);
    form.appendChild(selectType);
    form.appendChild(inputDescription);
    form.appendChild(inputImage);
    form.appendChild(inputAuthor);

    form.appendChild(submitButton);
    body.appendChild(form);

    var instructionAndMap = eLib.elementIdClass('div', 'instruction-and-map');

    var container = eLib.elementIdClass('div', 'form-map');
    instructionAndMap.appendChild(container);

    var instr = document.createElement('h3', 'instruction');
    instr.innerText = "Click on the map to add the location";
    instructionAndMap.appendChild(instr);

    form.appendChild(instructionAndMap);
    var coords = {lat: 55.3781, lng: -3.4360};
    var zoom = 6;
    var formMap = new MapWrapper(container, coords, zoom);

    var searchBox = eLib.elementNamePlaceholderId("input", "", "Location Search Bar", "form-search-input");
    searchBox.class = "controls";
    searchBox.type = "text";
    formMap.searchBar(searchBox);

    formMap.addClickEvent();

    //modal
    var modal = eLib.elementTextIdClass('div', "", "myModal", "modal");
    var spanDiv = eLib.elementTextIdClass('div', "", "", "modal-content");
    var modalCloseBtn = eLib.elementTextIdClass('a', "Close", "modal-close", "close");
    var modalText = eLib.elementTextIdClass('p', "Thank you for your submission.");

    spanDiv.appendChild(modalText);
    spanDiv.appendChild(modalCloseBtn);
    modal.appendChild(spanDiv);
    form.appendChild(modal);
    form.appendChild(submitButton);
    form.appendChild(inputLat);
    form.appendChild(inputLng);

    form.addEventListener('submit', function(event){
      event.preventDefault();

      var xhr = new XMLHttpRequest();
      xhr.open("POST", '/event-form', true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.addEventListener('load', function(){
        modal.style.display = "block";
      });

      xhr.send(`title=${inputTitle.value}&date=${inputDate.value}&location={"lat":${inputLat.value}, "lng":${inputLng.value}}&type=${selectType.value}&description=${inputDescription.value}&image=${inputImage.value}&author=${inputAuthor.value}&sceptics=${0}&believers=${0}&comments=${[]}`);

      modalCloseBtn.addEventListener('click', function(){
        modal.style.display = "none";
        location.reload();
      });
    });
  }
}

module.exports = FormView;
