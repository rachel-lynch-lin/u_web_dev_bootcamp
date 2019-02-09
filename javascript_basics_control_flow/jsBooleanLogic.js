// Expressions evaluate to either true or false

// Comparison operators 

var x = 5

// Greater than
  x > 10
  // false

// Greater than or equal to
  x >= 5 
  // true

// Less than
  x < -50
  // false

// Less than or equal to
  x <= 100 
  // true

// Equal to
  x == "5"  
  // true

// Not equal to
  x != "b"
  // true

// Equal value and type
  x === "5" 
  // false

// Not equal value or equal type
  x !== "5"
  //true


// Equality Operators "==" vs. "==="
  // "==" performs type coercion while "===" does not

// Some interesting cases with "=="
  true == "1"
  // true
  0 == false
  // true
  null == undefined
  // true
  NaN == NaN
  // false


// Logical Operators - AND,OR, and NOT
  var x = 5
  var y = 9

// AND
  x < 10 && x !==5
  // false

// OR
  y > 9 || x === 5
  // true

// NOT
  !(x === y)
  // true


// Truthy and Falsey Values
  // Values that aren't actually true or false, are still inherintly "truthy"
  // or "falsey" when evaluated in a boolean contexts

  // Falsy Values :
    // false
    // 0
    // ""
    // null
    // undefined
    // NaN
  // Everything else is truthy