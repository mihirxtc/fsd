let card = document.querySelectorAll(".card");
let popUp = document.querySelectorAll(".popUp");

card.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.dataset.price <=99) {
            console.log(item.dataset.name, Number(item.dataset.price) + 40);
        } else {
            console.log(item.dataset.name, item.dataset.price);
        }
    });
});