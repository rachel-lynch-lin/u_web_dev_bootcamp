// Intro to the DOM
// Where JS, HTML, and CSS come together

// What is the DOM?
  // DOM Stands for Document Object Model

// Why it is great?
  // It is the interface between JS and HTML+CSS

// How does it work?
  // The browser turns every HTML tag intro a JS object
  // Everything is stored inside the document object
  // To view it use console.dir()
  // The DOM can be very very big and complex

// SELECT & MANIPULATE workflow
  //  SELECT an element then MANIPULATE it

// Example 1:
var h1 = document.querySelector("h1");

h1.style.color = "blue";

// Example 2:
var body = document.querySelector("body");    // SELECT
var isGold = false;

setInterval(function() {          // MANIPULATE
  if (isGold) {
    body.style.background = "white";
  } else {
    body.style.background = "gold";
  }
  isGold = !isGold;
}, 1000);