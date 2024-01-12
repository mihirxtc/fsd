
let users = [];

let userContainer = document.getElementById("userContainer");
function render() {
    userContainer.innerHTML = "";
    for (let i=0; i<users.length; i++) {
        let div = document.createElement("div");
        let name = document.createElement("div");
        let age = document.createElement("div");

        name.innerText = users[i].name;
        age.innerText = users[i].age;

        userContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(age);
    }
}

function register() {
    let name = document.getElementById("name");
    let age = document.getElementById("age");

    let user = {
        name: name.value,
        age: Number(age.value)
    }

    // condition for specified users
    if (user.age >= 16 && user.age <= 18) {
        users.push(user);
        console.log(users);
    } else {
        alert("You are not eligible");
    }
    render();
}

