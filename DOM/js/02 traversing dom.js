const ul = document.querySelector("#items");
console.log(ul);

//* parentNode

// console.log(ul.parentNode);

//* parentElement(ParentNode and parentNode both do same thing selecting the parent)

// console.log(ul.parentElement);
// console.log(ul.parentElement.parentNode.parentNode);
// ul.parentElement.style.backgroundColor="cyan"

// !childNode(its select the childs with text node too(NodeList))

// console.log(ul.childNodes);

// !children(also selects the child but only real child no textnode(HTMLCollection))

// console.log(ul.children)
// ul.children[1].style.color="blue"

// ?firstChild && firstElementChild(no textNode)

// console.log(ul.firstChild);
// console.log(ul.firstElementChild)

// ?lastChild && lastElementChild

// console.log(ul.lastChild);
// console.log(ul.lastElementChild)

// *nextSibling && nextElementSibling

// console.log(ul.nextSibling)
// console.log(ul.nextElementSibling)

// *previousSibling && previousElementSibling

// console.log(ul.previousSibling)
// console.log(ul.previousElementSibling)
// ul.previousElementSibling.style.color = "blue";

// ? CreateElement(creating new element)

// const newDiv = document.createElement("div")

// ?setting new class and id
// newDiv.className = "div-class"

// newDiv.id = "div-id"

// ?setting attribute
// newDiv.setAttribute("href","https://google.com")

// ?creating textnode and inserting
// let newDivText = document.createTextNode("Hello World");

// newDiv.appendChild(newDivText);

// console.log(newDiv);

// ?adding to our html page

// const container = document.querySelector("header .container")

// console.log(container)

// const h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1);

const newDiv2 = document.createElement("div")

newDiv2.className = "div-class2"

newDiv2.id = "div-id2"

newDiv2.setAttribute("href","https://google.com")

let newDivText2 = document.createTextNode("Hello World");

newDiv2.appendChild(newDivText2);
console.log(newDiv2)

ul.insertBefore(newDiv2,ul.firstElementChild)