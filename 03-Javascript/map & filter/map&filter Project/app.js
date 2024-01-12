let users = [];
let userContainer = document.getElementById("userContainer");

function render() {

    let cities = ["Ahmedabad", "Gandhinagar", "Vadodra", "Mumbai", "Pune", "Delhi", "Dehradun", "Noid", "Jaipur", "Bhopal"];
    let random = Math.floor(Math.random() * 10);

    userContainer.innerHTML = "";

    for (i=0; i<users.length; i++) {
        let div = document.createElement("div");
        let name = document.createElement("div");
        let email = document.createElement("div");
        let city = document.createElement("div");

        name.innerText = users[i].name;
        email.innerText = users[i].email;
        city.innerText = cities[random];

        userContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(email);
        div.appendChild(city);
    }
}
addUser = () => {

    let name = document.getElementById("name");
    let email = document.getElementById("email");

    let user = {
        name: name.value,
        email: email.value
    }

    let ifUserExist = users.filter((data) => {
        return data.email == user.email;
    });

    if(ifUserExist.length == 0) {
        users.push(user);
    }
    else {
        console.log("email already exist!");
    }
    console.log(users);
    render();
}



// Assignment => 
// 1. render the values & users in main page using map() & create element;
// 2. choose 10 cities as exam center and randomly allot exam city to a student who has registered to a exam;
