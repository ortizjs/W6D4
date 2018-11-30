class DOMNodeCollection {
  constructor (elements) {
    this.elements = elements;
  }
  
  html(str) {
    
    if (str) {
      this.elements.forEach((node) => node.innerHTML = str);
    } else {
      return this.elements[0].innerHTML;
    }
  }
  
  empty() {
    this.html = '';
    
  }
  
  append(args) {
    for (let i = 0; i < this.elements.length; i++) {
      let dom_node_collection = this.elements[i];
      
      for (let j = 0; j < args.length; j++) {
      let argg = arg[j];
      dom_node_collection.innerHTML += argg.outerHTML;
      }
    }
  }
  
  attr(key, val) {
    if (typeof val === "string") {
      this.each(node => node.setAttribute(key, val));
    } else {
      return this.nodes[0].getAttribute(key);
    }
  }

  addClass(newClass) {
    this.each(node => node.classList.add(newClass));
  }
}

module.exports = DOMNodeCollection;
