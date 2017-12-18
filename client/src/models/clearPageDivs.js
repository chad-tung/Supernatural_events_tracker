var ClearPageDivs = function() {
  var divs = document.getElementsByClassName('page');

  for(i=0; i<divs.length; i++){
    this.removeChildNodes(divs.item(i))
  }
}

ClearPageDivs.prototype = {
  removeChildNodes: function(node){
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  }
}

module.exports = ClearPageDivs;
