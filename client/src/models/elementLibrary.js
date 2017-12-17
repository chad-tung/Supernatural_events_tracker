var ElementLibrary = function() {

}

ElementLibrary.prototype = {
  elementIdClass: function(elementName, idName, className, className2) {
    var element = document.createElement(elementName);
    element.id = idName;
    element.classList.add(className, className2);
    return element;
  },
  elementTextIdClass: function(elementName, innerString, idName, className, className2) {
    var element = document.createElement(elementName);
    element.innerText = innerString;
    element.id = idName;
    element.classList.add(className, className2);
    return element;
  },
  elementNamePlaceholderId: function(elementName, nameString, placeholderString, idName) {
    var element = document.createElement(elementName);
    element.name = nameString;
    element.placeholder = placeholderString;
    element.id = idName;
    return element;
  }
}

module.exports = ElementLibrary;
