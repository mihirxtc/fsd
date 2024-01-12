roll = () => {
    let dice = document.getElementById("dice");
    let diceAudio = document.getElementById("diceAudio");
    let random = Math.floor(Math.random() * 6);

    dice.innerText = "";

    dice.classList.add("animate-dice");
    diceAudio.play();

    setTimeout(()=> {
        dice.classList.remove("animate-dice");
        dice.innerText = random + 1;
    }, 1000);
}