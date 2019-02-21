// Write function isEven() which takes a single numeric argument and returns true
// if the number is even, and false otherwise

// function isEven(num) {
//   //  return true if even
//   if(num % 2 === 0) {
//     return true;
//   }
//   // return false otherwise
//   else {
//     return false;
//   }
// }

// Refactored version
function isEven(num) {
  return num % 2 === 0;
}

isEven(8);
isEven(9);
isEven(0);
isEven(3);

// Write a function factorial() which takes a single numeric argument and returns 
// the factorial of that number

function factorial(num) {
  if(num === 0) {
    return 1;
  }
  // define a result variable
  var result = num;
  // calculate factorial and store value in result
  for(var i = num - 1; i >= 1; i--) {
    result *= i;
  }
  // return the result variable
  return result
}

// Version 1
function factorial(num) {
  // define a result variable
  var result = 1;
  // calculate factorial and store value in result
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  // return the result variable
  return result
}

factorial(5);   // 120
factorial(2);   // 2
factorial(10);  //3628800
factorial(0);   // 1

// Write a function kebabToSnake() which takes a single kebab-cased string argument
// and returns the snake_cased version.
function kebabToSnake(str) {
  // replace all "-"'s with "_"'s
  var newStr = str.replace(/-/g , "_");
  // return str
  return newStr;
}

kebabToSnake("hello-world");    // "hello_world"
kebabToSnake("dogs-are-awesome");   // "dogs_are_awesome"
kebabToSnake("bah");    // "bah"