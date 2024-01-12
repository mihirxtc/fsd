let users = [];
let userContainer = document.getElementById("userContainer");
let alert = document.getElementById("alert");

function render() {
    // Clear user container
    userContainer.innerHTML = "";

    // Iterate through users array
    for (let i=0; i<users.length; i++) {
        // Create elements for user data
        let div = document.createElement("div");
        let name = document.createElement("div");
        let age = document.createElement("div");

        // Set user data in elements
        name.innerText = users[i].name;
        age.innerText = users[i].age;

        // Append user data elements to user container
        userContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(age);
    }
}

function showAlert() {
    // Add 'alert' class, remove 'd-none'
    alert.classList.remove("d-none");
    alert.classList.add("alert");

    // Hide alert after 3 seconds
    setTimeout(() => {
        alert.classList.remove("alert");      
        alert.classList.add("d-demo");
    }, 3000)
}

function register() {
    // Retrieve name and age values
    let name = document.getElementById("name");
    let age = document.getElementById("age");

    // Create a user object with values
    let user = {
        name: name.value,
        age: Number(age.value)
    }

    // Check if user is eligible (age between 16 and 18)
    if (user.age >= 16 && user.age <= 18) {
        users.push(user); // Add user to list
        alert.innerText = "User added successfully"; // Set alert message
        showAlert(); // Show alert
        render(); // Render user list
    } 
    else {
        alert.innerText = "Not eligible to participate"; // Set alert message
        showAlert(); // Show alert
    }  
}