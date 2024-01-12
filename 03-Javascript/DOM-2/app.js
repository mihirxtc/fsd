// different between innerHTML / innerText
// create element
// append child
// add classes, remove classes
// conditions
// loops

// submit = () => {
//     let input = document.getElementById("input").value;
//     console.log(input);
// }


// creating element and append child

function addElement() {
    let heading = document.createElement("h1");
    heading.innerText = "created element";

    heading.classList.add("title")
    
    let demo = document.getElementById("demo");
    demo.appendChild(heading);
}