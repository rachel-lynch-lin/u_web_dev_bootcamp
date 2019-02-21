// Higher Order Functions
  // Functions that take a function as an argument or they return another function

// Set interval - can have a function repeat itself at a set interval

function sing() {
  console.log("twinkle twinkle");
  console.log("little star...");
}

sing();

setInterval(sing , 1000);
// To stop setInterval you must type clearInterval(number that is returned from setInterval);

// You can also use setInterval with anonymous functions
setInterval(function() {
  console.log("I am an anonymous function!");
  console.log("This is awesome!");
}, 2000);