let form = document.getElementById("form");
// console.log(form);
// form.addEventListener(("submit"), (event) => {
//     event.preventDefault();
//     console.log(event.target.fullName.value);
//     console.log(event.target.emailId.value)
// })

form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("Full Name",event.target.fullName.value)
    localStorage.setItem("EmailId:",event.target.emailId.value)
    localStorage.setItem("Phone:",event.target.phone.value)
    localStorage.setItem("Time to call", `${event.target.date.value} ${event.target.time.value}`);
})
