let formInput = document.getElementById("addForm");

let listItems = document.getElementById("items");


// Form Submit Event
formInput.addEventListener("submit", addItem);
// remove li item
listItems.addEventListener("click",removeItem)

// Add Item
function addItem(e) {
    e.preventDefault();
//   input value;
    var newItem = document.getElementById("item").value;
//create new li element
    let li = document.createElement("li");
    // add class
    li.className = "list-group-item";
    // add text node with input value;
    li.appendChild(document.createTextNode(newItem));
    // create delete button
    let delButton = document.createElement("button");
    // add class to del button
    delButton.className = "btn btn-danger btn-sm float-right delete"
    // create text node
    delButton.appendChild(document.createTextNode("X"))
    li.appendChild(delButton)
    listItems.appendChild(li);
}

// Remove Item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are You Sure")){
            var li = e.target.parentElement;
            listItems.removeChild(li);
        }
    }
}