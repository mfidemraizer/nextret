// CREANDO ELEMENTOS A PELO
var span1 = document.createElement("span");
span1.id = "pepe";
span1.setAttribute("data-app-id", "xxx");
var text = document.createTextNode("hello world");
span1.appendChild(text);

var div = document.createElement("div");
div.appendChild(span1);

var span2 = document.createElement("span");
span2.appendChild(document.createTextNode("hello world 2"));

var fragment = document.createDocumentFragment();
fragment.appendChild(div);
fragment.appendChild(span2);

document.body.appendChild(fragment);

function findAttribute(attr, attrValue) {
  return findAttributeInternal(attr, attrValue, document);
}

function findAttributeInternal(attr, attrValue, currentElement) {
  for (var i = 0; i < currentElement.childNodes.length; i++) {
    var currentElement = currentElement.childNodes[i];

    if (currentElement.nodeType != 3) {
      if (currentElement.getAttribute(attr) == attrValue) {
        return currentElement;
      } else {
        currentElement = findAttributeInternal(attr, attrValue, currentElement)
      }
    }
  }

  return currentElement || null;
}

var result = findAttribute("data-app-id", "xxx");
debugger;
