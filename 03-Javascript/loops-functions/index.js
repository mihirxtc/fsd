// loops and functions

let students = ["jack", "antony", "jeff", "henry", "barbra"]

for (i=0; i<5; i++) {
    console.log(students[i])
}


// functions

function weatherForecast(weather) {
    if(weather == "rainy") {
        console.log("Weather is " + weather+ ", please carry umbrella ☔");
    } else if (weather == "sunny") {
        console.log("Weather is "+ weather +", please wear sunglasees 😎");
    } else {
        console.log("Please enter weather correctly, you entered " +weather);
    }
}
weatherForecast("sunny") 


// arrow functions

weatherComplement = (weather) => {
    if(weather == "rainy") {
        console.log("Weather is " + weather+ ", please carry umbrella ☔");
    } else if (weather == "sunny") {
        console.log("Weather is "+ weather +", please wear sunglasees 😎");
    } else {
        console.log("Please enter weather correctly, you entered " +weather);
    }
}
weatherComplement("rainy")
