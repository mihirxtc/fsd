// conditions

// truthy
// falsy 0, -0, NaN, null, undefined, '', ""

if('something is here') {
    console.log("runnning....");
} else {
    console.log("not running...");
}


let weather = "rainy"
// let weather = "sunny"
// let weather = "sunn"

if (weather == "rainy") {
    console.log("Please carry umbrella ☔");
} 
else if(weather == "sunny") {
    console.log("Please wear sunglasses 😎");
} else {
    console.log("Enter weather correctly.");
}
