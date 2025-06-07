// Switch Statement Example
switch (21) {
    case 1:
        console.log("this is 1");
        break;
    case 11:
        console.log("this is 11");
        break;
    case 21:
        console.log("this is 21");
        break;
    case 31:
        console.log("this is 31");
        break;
    default:
        console.log('not found');
        break;
}

// If-Else Statement Example
let userInput = 10;

if (userInput < 10) {
    console.log('You are not eligible for this user name');
} else if (userInput === 10) {  // Fixed from `=` to `===` (comparison, not assignment)
    console.log('User name successfully created');
} else {
    console.log('Please enter your user name');
}
