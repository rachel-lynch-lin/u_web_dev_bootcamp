// Arrays
  // Can be used to group otherwise seperate variables together in a list
  // Arrays are indexed and start at 0 

var colors = ["Yellow", "Blue", "Green"];

// We can use these indices to retrieve data

console.log(colors[0]);      // "Yellow"

// This can also be used to update values inside the array or add new data

colors[0] = "Purple";
colors[3] = "Red";

// We can initialize an empty array two ways:
var friends = [];     // no friends :(
var friends = new Array()   // uncommon

//  Arrays can hold any type of data 
var random_collection = [49, true, "Hermione", null];

// Arrays have a length property
var nums = [45, 56, 7, 8, 12, 56];
nums.length    // 6