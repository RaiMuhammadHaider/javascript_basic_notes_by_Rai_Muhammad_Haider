//Promise ak function lata ha or vo function bi do perameters lata ha ak hota ha resolve or dosra hota ha reject
// A simple promise stored in a variable
let name = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Outer Function');  // Will print after 1 second
    }, 1000);
    resolve();  // Promise is resolved immediately
});

// Handle the result of the above promise
name.then(function () {
    console.log('Inner');  // Will print after "Outer Function"
});

// A promise created without storing in a variable
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Without variable');  // Runs after 1 second
    }, 1000);
    resolve();
}).then(() => {
    console.log('Without variable two');  // Runs after "Without variable"
});

// Another promise with conditional resolve/reject
let p1 = new Promise(function (resolve, reject) {
    let all = true;
    let aa = 'Done';

    setTimeout(() => {
        if (all) {
            resolve(aa);  // If `all` is true, it resolves
        } else {
            reject('This is rejected');  // Otherwise, it rejects
        }
    }, 3000);
});

// Handling the result or error of `p1`
p1.then(function (param) {
    console.log(param);  // Should print: "Done"
}).catch(function (error) {
    console.log(error);
});


// Promise Chaining (one after another)
let aa = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('First 1st');
        resolve(1);
    }, 1000);
}).then(function (param1) {
    console.log(param1);  // Output: 1

    let bb = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Second 2nd');
            resolve(2);
        }, 1000);
    }).then(function (param2) {
        console.log(param2);  // Output: 2

        let cc = new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log('Third 3rd');
                resolve(3);
            }, 1000);
        }).then(function (param3) {
            console.log(param3);  // Output: 3
        });
    });
}).catch(function (err) {
    console.log('Error Found: ' + err);
});


// Async/Await function with API call
async function Funk() {
    try {
        let response = await fetch('https://randomuser.me/api/');
        let myData = await response.json();

        // You can log the actual data here
        console.log(myData);  // Whole API data (user details)

    } catch (error) {
        console.log('This is an error: ' + error);
    }
}

Funk();
