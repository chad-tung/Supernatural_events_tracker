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

    var formTitle = document.createElement('h2');
    formTitle.innerText = "Event Form";

    var inputTitle = document.createElement('input');
    inputTitle.name = 'title';
    inputTitle.placeholder = "Please enter a title";

    // var inputDate = document.createElement('input');
    // inputDate.type = 'date';
    // inputDate.name = 'date';

    var inputLat = document.createElement('input');
    inputLat.name = 'lat';
    inputLat.placeholder = "Please enter the Latitude";

    var inputLng = document.createElement('input');
    inputLng.name = 'lng';
    inputLng.placeholder ="Please enter the Longitude";

    var selectType = document.createElement('select');
    selectType.name = 'type';
    var typeArr = ["UFO", "Ghost", "Cryptid", "Unidentified"];

    typeArr.forEach(function(type) {
      var option = document.createElement('option');
      option.innerText = type;
      selectType.appendChild(option);
    });

    var inputDescription = document.createElement('input');
    inputDescription.id = "form-description";
    inputDescription.name = "description";
    inputDescription.placeholder = "Please describe what you witnessed, fellow paranormal hunter.";

    var inputImage = document.createElement('input');
    inputImage.name = "image";
    inputImage.placeholder = "Paste image url";

    var inputAuthor = document.createElement('input');
    inputAuthor.name = 'author';
    inputAuthor.placeholder = "Please tell us your name. If you wish to remain anonymous, leave this blank.";

    var submitButton = document.createElement('button');

    form.appendChild(formTitle);
    form.appendChild(inputTitle);
    // form.appendChild(inputDate);
    form.appendChild(inputLat);
    form.appendChild(inputLng);
    form.appendChild(selectType);
    form.appendChild(inputDescription);
    form.appendChild(inputImage);
    form.appendChild(inputAuthor);
    form.appendChild(submitButton);

    body.appendChild(form);
  }
}

module.exports = FormView;
