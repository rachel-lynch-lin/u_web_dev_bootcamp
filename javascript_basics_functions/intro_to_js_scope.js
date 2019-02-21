// var x is defined locally here in doMath()
function doMath() {
  var x = 40;
  console.log(x);
}

doMath();       // 40

// var x is not in the global scope so calling var x will result in an error
x;              // Uncaught ReferenceError: x is not defined

var x = "hello!"

// Now there is a new var x that is in the global scope
doMath();       // 40

x;              // "hello"

// However functions can reference global variables
var y = 99;
y;              // 99

function doMoreMath() {
  console.log(y);
}

doMoreMath();   // 99
y;              // 99

function doMoreMath() {
  y = 100;      // notice var is missing so a new variable is not created
  console.log(y);
}

doMoreMath();   // 100
y;              // 100

// When a var is changed inside the function it updated var y

var phrase = "hello";

function doSomething() {
  var phrase = "goodbye";
  console.log(phrase);
}

doSomething();  // goodbye
phrase;         // hello

// This time there is a new local variable created which is different from the global variable

// The following is a mini quiz to test some of the concepts explored above

var num = 8;

function doMath2() {
  num += 1;
  if(num % 5 == 0) {
    return true;
  } else {
    return false;
  }
}

num += 1;
doMath2();    // num = 10 and returns true

function hi() {
  var name = "Lucy";
  console.log(name);
}

function bye() {
  console.log(name);
}

hi();        // Lucy
bye();       // retunrs nothing as name is undefined because it is know locally only within hi()