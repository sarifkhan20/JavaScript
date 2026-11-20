// let heading = document.getElementById("Header");
// console.dir(heading);

// let headings = document.getElementsByClassName("Header-class");
// console.dir(headings);
// console.log(headings); 

// let parahs = document.getElementsByTagName("p");
// console.log(parahs);

// let firstEl = document.querySelector("p");
// console.dir(firstEl);


// let firstElement = document.querySelectorAll("#ab");
// console.dir(firstElement);

// console.dir(document.body.firstChild);

// let d = document.querySelector("div");
// console.dir(d);
// let heading = document.querySelector("h1");

// let q = document.querySelector("h2");
// q.innerText += " from sarif khan";
// console.dir(q.innerText);


// let divs = document.querySelectorAll(".box");
// let id =1;
// for(div of divs){
//     div.innerText =`new unique value ${id}`;
//     id++;
// }
// console.dir(divs);


// let div = document.querySelector("div");
// console.dir(div);
// let id = div.getAttribute("id");
// let nam = div.getAttribute("name");
// console.log(id);
// console.log(nam);
// div.setAttribute("id","table");
// console.log(div.getAttribute("id"));


// let div = document.querySelector("div");
// console.dir(div);

// div.style.backgroundColor="purple";
// div.style.fontSize="26px";
// div.innerText = "sarif is don";


// let newBtn = document.createElement("button");
// newBtn.innerText="Click me!!";
// console.dir(newBtn);

// let newHeading=document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am a Don<i>"
// let d=document.querySelector("div");
// //d.append(newBtn);
// // d.prepend(newBtn);
// // d.before(newBtn);
// d.after(newBtn);
// document.querySelector("body").prepend(newHeading);
// // newBtn.remove();


// let Btn = document.createElement("button");
// Btn.innerText="click me!";
// Btn.style.color="white";
// Btn.style.backgroundColor="red";
// document.querySelector("body").prepend(Btn);
// console.dir(Btn);


// let para=document.querySelector("p");
// console.log(para);


let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX,e.clientY);
// }
btn1.addEventListener("click",(evt) => {
    console.log("button1 is clicked,handler1");
})
btn1.addEventListener("click",() => {
    console.log("button1 is clicked,handler2");
})
const handler3 = ()=>{
    console.log("button1 is clicked,handler3");
}
btn1.addEventListener("click",handler3);
btn1.addEventListener("click",() => {
    console.log("button1 is clicked,handler4");
})
btn1.removeEventListener("click",handler3);



let div=document.querySelector("div");
// div.onmouseover = (e) => {
//     console.log(e);
// }

let mode=document.querySelector("#mode");
let currmode="light";
let body=document.querySelector("body");
mode.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark"
        body.classList.remove("light");
        body.classList.add("dark")
    }
    else{
        currmode="light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log(currmode);
});