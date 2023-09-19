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
    let childelement = document.createElement("li");
    childelement.textContent = obj.Name + "-" + obj.Email + "-" + obj.Phone;
     
    let delButton = document.createElement("input")
    delButton.value = "Delete";
    delButton.type = "button";
    delButton.onclick = () => {
        localStorage.removeItem(obj.Email);
        parentElement.removeChild(childelement)
    }
    childelement.appendChild(delButton);
    parentElement.appendChild(childelement)
}