let form = document.getElementById("form");
// console.log(form);
// form.addEventListener(("submit"), (event) => {
//     event.preventDefault();
//     console.log(event.target.fullName.value);
//     console.log(event.target.emailId.value)
// })

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     localStorage.setItem("Full Name",event.target.fullName.value)
//     localStorage.setItem("EmailId:",event.target.emailId.value)
//     localStorage.setItem("Phone:",event.target.phone.value)
//     localStorage.setItem("Time to call", `${event.target.date.value} ${event.target.time.value}`);
// })

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let details = {
    Name: event.target.fullName.value,
    Email: event.target.emailId.value,
    Phone: event.target.phone.value,
    Time: event.target.date.value + " " + event.target.time.value,
    }
  let details_stringfy = JSON.stringify(details);
  localStorage.setItem(event.target.emailId.value, details_stringfy);
    showuser(details);
});


function showuser(obj) {
    let parentElement = document.getElementById("List");
    // Creating the child Element
    let childelement = document.createElement("li");
    childelement.textContent = obj.Name + "-" + obj.Email + "-" + obj.Phone;
    //  Creating the Delete Button
    let delButton = document.createElement("input")
    delButton.value = "Delete";
    delButton.type = "button";
    // creating edit button
    const editButton = document.createElement("button");
    editButton.textContent="edit"
    // onclick event on delButton
    delButton.onclick = () => {
        localStorage.removeItem(obj.Email);
        parentElement.removeChild(childelement)
    }
    // onclick on editButton
    editButton.addEventListener("click", () => {
        localStorage.removeItem(obj.Email);
        parentElement.removeChild(childelement)
        document.getElementById("fN").value = obj.Name;
        document.getElementById("emailId").value = obj.Email;
        document.getElementById("phone").value = obj.Phone;
    })
    childelement.appendChild(delButton);
    childelement.appendChild(editButton)
    parentElement.appendChild(childelement)
}