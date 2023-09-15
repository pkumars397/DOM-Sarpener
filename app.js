let form = document.getElementById("form");
console.log(form);
form.addEventListener(("submit"), (event) => {
    event.preventDefault();
    console.log(event.target.fullName.value);
    console.log(event.target.emailId.value)
})


