// Arrays Methods 
  // The six built-in methods that we will cover are push/pop, shift/unshift, indexOf, slice

// Push - use to add to the end of the array
var colors = ["green", "blue",  "yellow"];
colors.push("red");
// ["green", "blue", "yellow", "red"]

// Pop - use to remove the last item in an array
var colors = ["green", "blue", "yellow", "red"];
colors.pop();
// ["green", "blue", "yellow"]
var col1 = colors.pop()
// ["green", "blue"]

// Shift - to remove the first item in an array
var colors = ["green", "blue", "yellow", "red"];
colors.shift();
// ["blue", "yellow", "red"]
var col = colors.shift();   // blue
// shift() also returns the removed element

// Unshift - to add to the front of an array
var colors = ["green", "blue", "yellow", "red"];
colors.unshift("infrared");
// ["infrared", "green", "blue", "yellow", "red]

// IndexOf - to find the index of an item in an array
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

// Returns the first index at which a given element can be found
friends.indexOf("David");    // 2
friends.indexOf("Liz");     // 1, not 4

// Returns -1 if the elements is not present
friends.indexOf("Hagrid");    // -1

// Slice - to copy parts of an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// Use slice to copy the 2nd and 3rd fruits
// Specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

// This does not alter the original fruits array
// Citrus contains ["Orange", "Lemon"]
// Fruits contains ["Banana", "Orange", "Lemon", "Apple", "Mango"]

// You can also use slice() to copy an entire array
var nums = [1, 2, 3, 4];
var otherNums = nums.slice();
// Both arrays are [1, 2, 3, 4]