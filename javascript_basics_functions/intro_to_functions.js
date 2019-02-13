// Functions 
// Makes sections of code reusable.

// Declare a function
function doSomething() {
  console.log("Hello World");
}
// Then call it
doSomething();
doSomething();
doSomething();

// Functions help to keep code DRY
// Function names are written in camelCase as are variable names

// Arguments
function square(num) {
  console.log(num * num);
}

// Now when we call the function we need to pass in a value
square(10); // prints 100
square(3);  // prints 9
square(4);  // print 16

// Functions can have as many arguments as needed

function area(length, width) {
  console.log(length * width);
}
area(9, 2); //18

function greet(person1, person2, person3) {
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
}
greet("Harry", "Ron", "Hermione");

// If a argument is left off it would just print undefined rather than breaking the code

// The Return Keyword - When we want a function to send back an output value
// Input -> Function -> Output 
// "console.log" just prints to the console which is helpful to a developer
// "return" makes the output usable after the function is called

function square2(x) {
  return x * x;
}

"4 squared is " + square2(4); 

// The "return" keyword to output a value from a function

// This function capitalizes the first char in a string:

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = "paris"; // "paris"
var capital = capitalize(city); // "Paris"

// We can capture the returned value in a variable

// The "return" keyword stops the execution of a function
function capitalize2(str) {
  if(typeof str === "number") {
    return "That's not a string!"
  }
  return str.charAt(0).toUpperCase() +str.slice(1);
}

var city2 = "london"; // "london"
var capital2 = capitalize2(city2);  // "London"

var num2 = 37;
var captial2 = capitalize2(num2); // "That's not a string!"

// Another Syntax - Function Declaration vs. Function Expression
// function declaration
function firstLetter(str) {
  return str.charAt(0);
}

// function expression
var firstLetter = function(str) {
  return str.charAt(0);
}