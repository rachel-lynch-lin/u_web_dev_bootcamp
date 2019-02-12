// For Loops
// Basic structure
for(init; condition; step) {
  // run some code
}

// Printing numbers 1-5 with a for loop
for(var count = 0; count < 6; count++) {
  console.log(count);
}

// Printing each character in a string with a for loop
var str = "hello";

for(var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// Prints the number 0 and 8
for(var i = 0; i < 16; i += 8) {
  console.log(i);
}

//  Prints the letters h, e, l, l, o from str
var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2) {
  console.log(str[i]);
}