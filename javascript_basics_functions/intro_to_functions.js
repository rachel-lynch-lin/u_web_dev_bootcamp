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
