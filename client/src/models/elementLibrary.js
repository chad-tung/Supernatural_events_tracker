var ElementLibrary = function() {

}

ElementLibrary.prototype = {
  elementIdClass: function(elementName, idName, className, className2) {
    var element = document.createElement(elementName);
    if (idName) {
      element.id = idName;
    }
    if (className) {
      element.classList.add(className);
    }
    if (className2) {
      element.classList.add(className2);
    }
    return element;
  },
  elementTextIdClass: function(elementName, innerString, idName, className, className2) {
    var element = document.createElement(elementName);
    element.innerText = innerString;
    if (idName) {
      element.id = idName;
    }
    if (className) {
      element.classList.add(className);
    }
    if (className2) {
      element.classList.add(className2);
    }
    return element;
  },
  elementNamePlaceholderId: function(elementName, nameString, placeholderString, idName) {
    var element = document.createElement(elementName);
    element.name = nameString;

    if (placeholderString) {
      element.placeholder = placeholderString;
    }

    if (idName) {
      element.id = idName;
    }
    return element;
  }
}

module.exports = ElementLibrary;
