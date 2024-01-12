let card = document.querySelectorAll(".card");

card.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.dataset.title, item.dataset.price);
    })
})

// 10 different food items when user click it should give pop up 
// display "order successfully added" and also display price
// if order is for less than 100 rupees then add 40₹ as delivery charges 