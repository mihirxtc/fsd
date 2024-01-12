mouseOver = () => {
    console.log("cursor is in card")
}

mouseOut = () => {
    console.log("cursor is outside card");
}

cardClicked = () => {
    console.log("card is clicked");
}


test = () => {
    let name = document.getElementById("name");
    let data = name.value;
    let count = data.length;

    if(count<=3) {
        name.classList.add("input-danger");
        name.classList.remove("input-success");
        document.getElementById("data").innerText = "Enter atleast 4 character";
        document.getElementById("data").style = "color: red";
    } else {
        name.classList.add("input-success");
        name.classList.remove("input-danger");
        document.getElementById("data").innerText = "Success, Good to Go!"
        document.getElementById("data").style = "color: green";
    }
}
