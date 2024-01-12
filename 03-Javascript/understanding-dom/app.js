function clicked() {

    let name = document.getElementById("name");

    let email = document.getElementById("email")
    console.log(name.value, email.value);

    let greeting = "Thanks for feedback " + name.value
    title.innerText = greeting

    name.style.display = "none"
    email.style.display = "none"
    btn.style.display = "none"
}