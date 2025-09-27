'use strict'
// Write a JavaScript conditional statement to find the sign of the product of three numbers.

const productSign = (a, b, c) => `The sign is ${(a * b * c) > 0 ? '+' : '-'} `  

console.log(productSign(1, 2, 3));
console.log(productSign(1, -2, 3));
console.log(productSign(1, -2, -3));