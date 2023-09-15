// console.log(document);
// console.log(document.all);
// console.log(document.all[0])
// console.log(document.getElementById("header-title").textContent)
// console.log(document.getElementById("header-title").innerText)
// console.log(document.getElementById("header-title").innerHTML = "<p>Hello ji </p>");
// ! Part 1 Get element by id
// const heading = document.getElementById("main-header");

// heading.style.borderBottom = "5px solid black";

// document.getElementsByClassName("title")[0].style.color = "green";

// ! Part2 get element by classname(give array HTMLCollection)
// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[0]);

// items[2].style.backgroundColor = "green"
// for (let val of items) {
//     val.style.fontWeight="bold"
// }
// ! Part 3 Get element by TagName()(its also gives HTMLCollection)
const li = document.getElementsByTagName("li");
console.log(li);
for (let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = "#474747";
}
