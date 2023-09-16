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
// const li = document.getElementsByTagName("li");
// console.log(li);
// for (let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = "#474747";
// }

// ? querySelector (returns first matching element)

// const input = document.querySelector("input")
// input.value = "Prashant"
// const submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND";
// // const li = document.querySelector(".list-group-item");
// // li.style.backgroundColor = "blue";
// // const ul = document.querySelector("ul")
// // console.log(ul)
// // ul.children[1].style.color = "lightblue";
// // ul.children[2].style.visibility = "hidden";

// const secondChild = document.querySelector(".list-group li:nth-child(2)")
// secondChild.style.backgroundColor = "green"
// const thirdChild = document.querySelector(".list-group li:nth-child(3)")
// thirdChild.style.visibility="hidden"
// ? querySelectorAll (returns NodeList)
const li = document.querySelectorAll("li")
li[1].style.color = "green"
const odd = document.querySelectorAll("li:nth-child(odd)")
for (let val of odd) {
    val.style.backgroundColor="green"
}

