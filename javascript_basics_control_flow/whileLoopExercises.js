// While loop exercises
  // Exercise 1
  var num = 1;
  
  // Prints odd nums from 1 - 9
  while(num <= 10) {
    console.log(num);
    num += 2;
  }

  // Exercise 2
  var num2 = 1;

  // Prints 4, 8, 12, 16, 20
  while(num2 <= 20) {
    if(num2 % 4 === 0) {
      console.log(num2);
    }
    num++;
  }

  // Exercise 3
  var num3 = 100;

  // Infinite loop
  while(num < 150) {
    console.log(num3 + 1);
    num--;
  }