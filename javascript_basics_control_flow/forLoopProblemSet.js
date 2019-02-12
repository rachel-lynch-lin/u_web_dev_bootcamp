// For Loops Problem Set
// 1.) Print all the numbers between -10 and 19

for(i = -10; i < 20; i++) {
    console.log(i);
}

// 2.) Print all the even numbers between 10 and 40

for(j = 10; j <= 40; j += 2) {
    if (j % 2 === 0) {
        console.log(j);
    }
}

// Version 2
// for(z = 10; z <= 40; z+= 2) {
//   if (z % 2 === 0) {
//     console.log(z);
//   }
// }

// 3.) Print all odd numbers between 300 and 333

for(k = 300; k <= 333; k++) {
    if (k % 2 !== 0) {
        console.log(k);
    }
}
// 4.) Print all numbers divisble by 5 AND 3 between 5 and 50

for(h = 5; h <= 50; h++) {
    if (h % 5 === 0 && h % 3 === 0) {
        console.log(h);
    }
}