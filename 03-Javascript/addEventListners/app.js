// Benifits of using addEventListners() function //
// 1. you can pass an attribute inside function

// addEventListner()
// let btn = document.getElementById("btn");

// btn.addEventListener("click", (event)=> {
//     console.log(event.target.innerText);
// });



// Queryselector()

// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//     console.log("button is clicked!");
// });

// querySelectoreAll()

let btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.innerText, "is clicked");
    });
});

