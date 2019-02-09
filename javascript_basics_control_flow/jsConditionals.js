// JS Conditionals
    // If, Else If, Else

// Exercise - Conditionals
// Get age and convert to a number. (Prompts return a string)
var age = Number(prompt("What is your age?"));

// If age is negative
if(age < 0) {
    console.log("Error!!! You haven't been born yet kiddo.")
}

// If age is 21
if(age === 21) {
    console.log("Happy 21st birthday!!");
}

// If age is odd
if(age % 2 !== 0) {
    console.log("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}