var FormView = function() {
  this.render();
}

FormView.prototype = {
  render: function() {
    var body = document.querySelector('body');

    var form = document.createElement("form");
    form.id = "event-form";

    var formTitle = document.createElement('h2');
    formTitle.innerText = "Event Form";

    var inputTitle = document.createElement('input');
    inputTitle.name = 'title';
    inputTitle.placeholder = "Please enter a title";

    var inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.name = 'date';

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


  }
}
