const users = [
    { 
        firstname: "Aarav",
        lastname: "Sharma", 
        age: 28, 
        gender: "Male", 
        salary: 50000, 
        email: "aarav.sharma@example.com" 
    },
    { 
        firstname: "Aanya", 
        lastname: "Patel", 
        age: 24, 
        gender: "Female", 
        salary: 48000, 
        email: "aanya.patel@example.com" 
    },
    { 
        firstname: "Arjun", 
        lastname: "Kumar", 
        age: 32, 
        gender: "Male", 
        salary: 55000, 
        email: "arjun.kumar@example.com" 
    },
    { 
        firstname: "Ananya", 
        lastname: "Singh", 
        age: 26, 
        gender: "Female", 
        salary: 52000, 
        email: "ananya.singh@example.com" 
    },
    { 
        firstname: "Aryan", 
        lastname: "Gupta", 
        age: 30, 
        gender: "Male", 
        salary: 60000, 
        email: "aryan.gupta@example.com" 
    },
    { 
        firstname: "Avni", 
        lastname: "Shah", 
        age: 28, 
        gender: "Female", 
        salary: 49000, 
        email: "avni.shah@example.com" 
    },
    { 
        firstname: "Aditya", 
        lastname: "Verma", 
        age: 35, 
        gender: "Male", 
        salary: 65000, 
        email: "aditya.verma@example.com" 
    },
    { 
        firstname: "Amaira", 
        lastname: "Reddy", 
        age: 27, 
        gender: "Female", 
        salary: 53000, 
        email: "amaira.reddy@example.com" 
    },
    { 
        firstname: "Advait", 
        lastname: "Mishra", 
        age: 29, 
        gender: "Male", 
        salary: 58000, 
        email: "advait.mishra@example.com" 
    },
    { 
        firstname: "Anika", 
        lastname: "Thakur", 
        age: 25, 
        gender: "Female", 
        salary: 51000, 
        email: "anika.thakur@example.com" 
    }
];

// displaying only firstname & lastname from the userarray using map()
let firstName = users.map((user) => {
    return user.firstname + " " + user.lastname;
});
// console.log(firstName);

// filtering the data with the filter()
let newUser = users.filter((user) => {
    return user.age <= 25;
});
// console.log(newUser);

// calculating 10% tax for each user and storing it along with name & salary using map()
let tax = users.map((user) => {
    return {
        name: user.firstname,
        salary: user.salary,
        tax: user.salary * 0.1
    }
});
// console.log(tax);


// filtering values with Male gender
// let male = users.filter((user) => {
//     return user.gender == "Male";
// });
// console.log(male);

// first name of male using map()
// let maleFirstname = male.map((user) => {
//     return user.firstname;
// });
// console.log(maleFirstname);


// Best Practice of above use case

let male = users.filter((user) => {
    return user.gender == "Male";
}).map((user) => {
    return user.firstname;
});
// console.log(male);


// => 
let under30 = users.filter((user) => {
    return user.age <= 27;
}).map((user) => {
    return user.firstname + " " + user.lastname + " " + user.age;
});
// console.log(under30);


// => 
let numbers = [1, 2, 3, 4, 5]
let cube = numbers.map((n) => {
    return n*n*n;
}).filter((n) => {
    return n > 25
});
console.log(cube);


/*
CONCLUSION OF TOPIC

forEach()
map()
filter()

=> With forEach() you cannot store values with variables, also you can't perform chaining.

=> map(), stores the result with new Array, we can do chaining with the filters()
=> if you wish to filter the values and store the result in an Array.
*/
