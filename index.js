let parentEl = document.getElementById("parent")
console.log(parentEl);

let parentE2 = document.getElementById("parent")
console.log(parentE2.firstChild);

let parentE3 = document.getElementById("parent")
console.log(parentE3.firstElementChild);

let parentE4 = document.getElementById("parent")
console.log(parentE4.lastChild);

let parentE5 = document.getElementById("parent")
console.log(parentE5.lastElementChild);

let parentE6 = document.getElementById("parent")
console.log(parentE6.childNodes);

let parentE7 = document.getElementById("parent")
console.log(parentE7.children[4]);

let midEl = document.getElementById("midparagraph")
console.log(midEl);

let midE2 = document.getElementById("midparagraph")
console.log(midE2.nextSibling);

let midE3 = document.getElementById("midparagraph")
console.log(midE3.nextElementSibling);

let midE4 = document.getElementById("midparagraph")
console.log(midE4.previousElementSibling);



let paragraph = document.getElementById("content")
console.log(paragraph);

// applying style individually

paragraph.style.backgroundColor = "pink";
paragraph.style.color = "white";

// css text

let paragraph1 = document.getElementById("content")
console.log(paragraph1.style.cssText = "background-color: pink; color: white;");

let paragraph2 = document.getElementById("content")
console.log(paragraph2.classList.add(pinkText));



function onAddClass(){
    let paragraph = document.getElementById("content")
    paragraph.classList.add("pinkText");
}
function onRemoveClass(){
    let paragraph = document.getElementById("content")
    paragraph.classList.add("pinkText");
}

// inner text
// text content
// inner html

let pgraph = document.getElementById("heading");
console.log(pgraph.innerText);

let pgraph = document.getElementById("heading");
console.log(pgraph.textContent);

let pgraph = document.getElementById("heading");
console.log(pgraph.innerHTML);

