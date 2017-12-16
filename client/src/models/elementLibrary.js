var ElementLibrary = function() {

}

ElementLibrary.prototype = {
  elementIdClass: function(elementName, idName, className, className2) {
    var element = document.createElement(elementName);
    element.id = idName;
    element.classList.add(className, className2);
  },
  elementIdTextClass: function(elementName, idName, innerString, className) {
    var element = document.createElement(elementName);
    element.id = idName;
    element.classList.add(className);
    element.innerText = innerString;
  }
}

module.exports = ElementLibrary;
