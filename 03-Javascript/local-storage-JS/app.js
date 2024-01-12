// // local storage

// localStorage.setItem("name", "John")
// console.log(localStorage.getItem("name"));

// localStorage.setItem("name", "mihir")
// console.log(localStorage.getItem("name"));



let price = localStorage.getItem("shirtPrice");
document.getElementById("price").innerText = price;

increasePrice = () => {
    setTimeout(() => {
        localStorage.setItem("shirtPrice", 499);
        let price = localStorage.getItem("shirtPrice", 499);
        document.getElementById("price").innerText = price;
    }, 4000)
}


let body = document.querySelector("body");
let themeBtn = document.querySelector("#theme");
let card = document.querySelector(".card");


renderThemeIcon = () => {
    let theme = localStorage.getItem("theme");

    if(theme == "light") {
        document.getElementById("theme").innerHTML = '<i class="bi bi-sun"></i>';
        body.style.backgroundColor = "white";
        card.style.color = "black";
        themeBtn.style.color = "black";
    } else {
        document.getElementById("theme").innerHTML = '<i class="bi bi-moon-stars"></i>';
        body.style.backgroundColor = "#141414"
        card.style.color = "white"
        themeBtn.style.color = "white";
        card.style.borderColor = "grey";
    }

}

renderThemeIcon();

updateTheme = () => {
    let theme = localStorage.getItem("theme");

    if(theme == "light") {
        localStorage.setItem("theme", "dark");
        renderThemeIcon();
    } else {
        localStorage.setItem("theme", "light");
        renderThemeIcon();
    }

}