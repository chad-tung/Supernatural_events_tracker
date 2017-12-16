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
    // document.createElement('h2');
    // formTitle.innerText = "Event Form";

    var inputTitle = eLib.elementNamePlaceholderId('input', 'title', 'Please enter a title');
    // inputTitle.name = 'title';
    // inputTitle.placeholder = "Please enter a title";

    var inputDate = eLib.elementNamePlaceholderId('input', 'date');
    inputDate.type = 'date';

    var inputLat = eLib.elementNamePlaceholderId('input', 'lat', 'Please enter the Latitude');

    var inputLng = eLib.elementNamePlaceholderId('input', 'lng', 'Please enter the Longitude');

    var selectType = eLib.elementNamePlaceholderId('select', 'type');
    var typeArr = ["UFO", "Ghost", "Cryptid", "Unidentified"];

    typeArr.forEach(function(type) {
      var option = eLib.elementTextIdClass('option', `${type}`);
      selectType.appendChild(option);
    });

    var inputDescription = eLib.elementNamePlaceholderId('input', 'description', 'Please describe what you witnessed', 'form-description');
    // document.createElement('input');
    // inputDescription.id = "form-description";
    // inputDescription.name = "description";
    // inputDescription.placeholder = "Please describe what you witnessed, fellow paranormal hunter.";

    var inputImage = eLib.elementNamePlaceholderId('input', 'image', 'Paste image url');
    // document.createElement('input');
    // inputImage.name = "image";
    // inputImage.placeholder = "Paste image url";

    var inputAuthor = eLib.elementNamePlaceholderId('input', 'author', 'Please tell us your name. If you wish to remain anonymous, leave this blank.');
    // document.createElement('input');
    // inputAuthor.name = 'author';
    // inputAuthor.placeholder = "Please tell us your name. If you wish to remain anonymous, leave this blank.";

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
