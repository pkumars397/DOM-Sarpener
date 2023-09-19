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
        Time:event.target.date.value+" "+event.target.time.value
    };

    let details_stringfy = JSON.stringify(details);
    localStorage.setItem(event.target.emailId.value, details_stringfy)
    let details_destringfy = JSON.parse(localStorage.getItem("userDetails"));
    console.log(details_destringfy)
});

