'use strict'
// Write a JavaScript program to check whether a given fraction is proper or not.

const isProper = (num1, num2) => Math.abs(num1 / num2) < 1 ? 'Is proper' : 'Isn´t proper';

console.log(isProper(12, 300));
console.log(isProper(2, 4));
console.log(isProper(103, 3));
console.log(isProper(104, 2));

