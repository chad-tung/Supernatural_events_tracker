var ElementLibrary = require('../models/elementLibrary');
var MapWrapper = require('../models/mapWrapper');

var eLib = new ElementLibrary();
var FormView = function() {
  this.render();
}

var elementCreator = function(elementname, idname, classname, classname2, innerString) {
  var item = document.createElement(elementname);
  item.id = idname;
  item.classList.add(classname, classname2);
  return item;
}

FormView.prototype = {
  render: function() {
    var body = document.getElementById('form-page');

    var form = document.createElement("form");
    form.id = "event-form";
    form.method = "POST";
    form.action = "/event-form"

    var formTitle = eLib.elementTextIdClass("h2", "Event Form");

    var inputTitle = eLib.elementNamePlaceholderId('input', 'title', 'Please enter a title');

    var inputDate = eLib.elementNamePlaceholderId('input', 'date');
    inputDate.type = 'date';

    var inputLat = eLib.elementNamePlaceholderId('input', 'location[lat]', 'Please click on the map to set lat', 'lat-input');
    inputLat.type = 'number';
    inputLat.step = '0.000000000000001';

    var inputLng = eLib.elementNamePlaceholderId('input', 'location[lng]', 'Please click on the map to set lng', 'lng-input');
    inputLng.type = 'number';
    inputLng.step = '0.000000000000001';

    var selectType = eLib.elementNamePlaceholderId('select', 'type');
    var typeArr = ["UFO", "Ghost", "Cryptid", "Unidentified"];

    typeArr.forEach(function(type) {
      var option = eLib.elementTextIdClass('option', `${type}`);
      selectType.appendChild(option);
    });

    var inputDescription = eLib.elementNamePlaceholderId('input', 'description', 'Please describe what you witnessed', 'form-description');


    var inputImage = eLib.elementNamePlaceholderId('input', 'image', 'Paste image url');


    var inputAuthor = eLib.elementNamePlaceholderId('input', 'author', 'Please tell us your name. If you wish to remain anonymous, leave this blank.');


    var submitButton = eLib.elementTextIdClass('button', 'Submit');
    submitButton.type = 'submit';

    form.appendChild(formTitle);
    form.appendChild(inputTitle);
    form.appendChild(inputDate);
    form.appendChild(inputLat);
    form.appendChild(inputLng);
    form.appendChild(selectType);
    form.appendChild(inputDescription);
    form.appendChild(inputImage);
    form.appendChild(inputAuthor);
    form.appendChild(submitButton);

    body.appendChild(form);

    var container = eLib.elementIdClass('div', 'form-map');
    body.appendChild(container);
    var coords = {lat: 55.3781, lng: -3.4360};
    var zoom = 6;
    var formMap = new MapWrapper(container, coords, zoom);
    formMap.addClickEvent();


  }
}

module.exports = FormView;
