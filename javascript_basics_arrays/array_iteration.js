// Array Iteration
  // Use a for loop to iterate over an array 
  // Use forEach to iterate over an array
  // Compare and contrast for loops and forEach

// For loop - use array's length property to loop over the array 
var colors = ["red", "orange", "yellow"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// ForEach - built-in way of iterating over an array: ForEach

// arr.forEach(someFunction)

var colors = ["red", "orange", "yelllow", "green"];

colors.forEach(function(color) {
  // color is a placeholder, it can be call anything
  console.log(color);
});

// Both of these do the same thing

// Array exercise - What does the following print out?
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
  if(color % 3 === 0) {
    console.log(color);
  }
});

// 3, 6, 9

// Rewrite as a for loop

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < numbers.length; i++) {
  if(numbers[i] % 3 === 0) {
    console.log(numbers[i]);
  }
};