// setTimeout(() => {
//     console.log("Task 1");
// }, 3000)
// setTimeout(() => {
//     console.log("Task 2");
// }, 2000)
// console.log("Task 3");

// promise => synchronouse programming

// scenario = download image

// const demoPromise = new Promise((resolve, reject) => {
//     let status = true;
//     setTimeout(() => {
//         if(status == true) {
//             console.log("downloaded successfully.");
//             resolve("downloaded successfully.");
//         } else {
//             reject("download failed!");
//         }
//     }, 3000);
// });

// demoPromise.then(() => {
//     console.log("notification send!");
// });


// use-case(2) => result system

const test = new Promise((resolve, reject) => {
    let resultAnnounced = true;
    setTimeout(() => {
        if(resultAnnounced == false) {
            console.log("Announce the result");
            resolve("Result is out!");
        } else {
            console.log("result pending");
            reject("result pending");
        }
    }, 3000);
});

test.then((data) => {
    console.log(data); // store the values of resolve as object
    console.log("marksheet is distributed");
}).catch((err) => {
    console.log(err);
});