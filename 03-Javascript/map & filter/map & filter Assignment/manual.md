# map & filter Assignment

// PART - 1 // User Data Array Manipulation

// 1. created the file data_operation.js


// 2. define array of user

let users = [
    { name: 'Aarav', surname: 'Patel', age: 22, gender: 'Male', location: 'Mumbai' },
    { name: 'Isha', surname: 'Sharma', age: 28, gender: 'Female', location: 'Delhi' },
    { name: 'Arjun', surname: 'Kumar', age: 19, gender: 'Male', location: 'Bangalore' },
    { name: 'Neha', surname: 'Srivastava', age: 25, gender: 'Female', location: 'Kolkata' },
    { name: 'Rahul', surname: 'Gupta', age: 30, gender: 'Male', location: 'Chennai' },
    { name: 'Priya', surname: 'Singh', age: 23, gender: 'Female', location: 'Hyderabad' },
    { name: 'Ravi', surname: 'Yadav', age: 18, gender: 'Male', location: 'Pune' },
    { name: 'Ananya', surname: 'Mishra', age: 31, gender: 'Female', location: 'Ahmedabad' },
    { name: 'Raj', surname: 'Verma', age: 17, gender: 'Male', location: 'Jaipur' },
    { name: 'Kavita', surname: 'Choudhary', age: 26, gender: 'Female', location: 'Lucknow' },
    { name: 'Vikas', surname: 'Bansal', age: 20, gender: 'Male', location: 'Chandigarh' },
    { name: 'Sneha', surname: 'Rao', age: 35, gender: 'Female', location: 'Nagpur' },
    { name: 'Amit', surname: 'Pandey', age: 16, gender: 'Male', location: 'Indore' },
    { name: 'Swati', surname: 'Jha', age: 29, gender: 'Female', location: 'Bhopal' },
    { name: 'Gaurav', surname: 'Malik', age: 24, gender: 'Male', location: 'Surat' },
];


// 3 => implementing isAdult

let isAdult = users.filter((user) => {
    if(user.age >= 18) {
        return true;
    } else {
        return false;
    }
});


// 4 => implementing adultUser

let adultUsers = isAdult.filter((user) => {
    return isAdult;
});
console.log(adultUsers);


// 5 => creating array getFullName

let getFullNameAdult = adultUsers.map((user) => {
    return user.name + " " + user.location;
});
console.log(getFullNameAdult);


// 6 => creating array of full names of all the users

let userNames = users.map((user) => {
    return user.name + " " + user.surname;
});
console.log(userNames);



// PART - 2 // Chaining User Data Operation

// 1 =>

let filterByGender = users.filter((user) => {
    if(user.gender == "Male" || user.gender == "Female") {
        return true;
    } else {
        return false;
    }
});
// console.log(filterByGender);


// 2 => 

// a

let femaleUsers = filterByGender.filter((user) => {
    if(user.gender == "Female") {
        return user.gender;
    }
});
console.log(femaleUsers);


// b

let getFullName = femaleUsers.map((user) => {
    return user.name + " " + user.surname;
});
console.log(getFullName);



// PART - 3 // Movie Data Array Manipulation

let movies = [
    { title: 'Dangal', genre: 'Biography', year: 2016, rating: 8.4 },
    { title: 'PK', genre: 'Drama', year: 2014, rating: 8.1 },
    { title: '3 Idiots', genre: 'Comedy', year: 2009, rating: 8.4 },
    { title: 'Lagaan', genre: 'Adventure', year: 2001, rating: 8.1 },
    { title: 'Queen', genre: 'Drama', year: 2013, rating: 8.2 },
    { title: 'Andhadhun', genre: 'Crime', year: 2018, rating: 8.3 },
    { title: 'Drishyam', genre: 'Mystery', year: 2015, rating: 8.2 },
    { title: 'Gully Boy', genre: 'Drama', year: 2019, rating: 8.1 },
    { title: 'Taare Zameen Par', genre: 'Drama', year: 2007, rating: 8.4 },
    { title: 'Kahaani', genre: 'Mystery', year: 2012, rating: 8.1 },
];



// PART - 4 // Chaining Movie Data Operation

// a

let dramaMovies = movies.filter((movie) => {
    return movie.genre == "Drama"
})
console.log(dramaMovies);

// b 

let movieTitle = dramaMovies.map((movie) => {
    return movie.title;
});
console.log(movieTitle);



// PART - 5 // Integration and output

let combinedResult = {
    adultUsers: adultUsers,
    userNames: userNames,
    getFullName: getFullName,
    movieTitle: movieTitle
}
console.log(combinedResult);