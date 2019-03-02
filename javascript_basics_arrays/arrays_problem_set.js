// Arrays Problem Set

// printReverse()

function printReverse(arr) {
  // Write a function that takes an array as an argument and prints elements 
  // in reverse order without actually reversing the array itself
  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  };
}

printReverse([1, 2, 3, 4]);
// 4
// 3
// 2
// 1

printReverse(["a", "b", "c", "d"]);
// "d"
// "c"
// "b"
// "a"

// isUniform()

function isUniform(arr) {
  // Write a function that takes an array as an argument and returns true
  // if all elements in the array are identical
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

isUniform([1, 1, 1, 1]);    // true
isUniform([2, 1, 1, 1]);    // false
isUniform(["a", "b", "c"]);    // false
isUniform(["a", "a", "a"]);    // true
 
// sumArray()

function sumArray(arr) {
  // Write a function that accepts an array of numbers and returns the sum
  // of all numbers in the array
  var sum = 0;
  arr.forEach(function(num) {
    sum += num;
  });
  return sum;
}  

sumArray([1, 2, 3]);    // 6
sumArray([10, 3, 10, 4]);   // 27
sumArray([-5, 100]);    //95

// max()

function max(arr) {
  // Write a function that accepts an array of numbers and returns the 
  // maximum number in the array
  var max = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] >= max) {
      max = arr[i];
    }
  }
  return max
}

max([1, 2, 3]);   //3
max([10, 3, 10, -4]);   //10
max([-5, 100]);   //100
