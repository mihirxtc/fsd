// simple variables & datatypes
let name = "Elone Musk";
let networth = 3.20000000000000;
isRich = true;

console.log(name);
console.log(networth);
console.log(isRich);

// Array
let fruits = ["apple", "banana", "mango", "kiwi", "pineapple"];
console.log(fruits);

// search with specific index in array
console.log(fruits[3]);

// adding single item in array
fruits.push("cherry");
console.log(fruits);

// removing item from array
fruits.pop();
console.log(fruits);

// removing from the specific index and specific items
// array.splice(index, deleteCount);
fruits.splice(2, 1); // removes one items from index "2"
console.log(fruits);

// replacing items in array
fruits.splice(2, 1, "Greps");
console.log(fruits);

// adding multiple items without replacing items in array
fruits.splice(2, 0, "strawberry", "kiwi")
console.log(fruits);
