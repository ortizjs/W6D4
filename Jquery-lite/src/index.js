const  DOMNodeCollection = require('./dom_node_collection');

const win = function(selector) {
  var nodeList = document.querySelectorAll(selector);
  nodeListArray = Array.from(nodeList);
  return new DOMNodeCollection(nodeListArray);
    
  
};
window.$l = win;