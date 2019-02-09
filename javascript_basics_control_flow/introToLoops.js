// While loops
// Printing numbers 1 - 5
var count = 1;

// Increase by 1
while(count < 6) {
  console.log("Count is: " + count);
  count++;
}

// Increase by 2
while (count < 8) {
  console.log("Count is: " + count);
  count+=2;
}

// Print each character in a string
// string we are looping over
var str = "hello";
// first character is at index 0
var count = 0;

while(count < str.length) {
  console.log(str[count]);
  count++;
}

// Be careful of creating an infinite loop
// Infinite loops ocur when the terminating condition in a loop is never true
// Can happen in the count example if the count is never incremented
