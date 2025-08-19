'use strict'
// This JavaScript program checks if a given positive number is a multiple of either 3 or 7.

const checkMul = num => num % 3 === 0 || num % 7 === 0;

console.log(checkMul(3));
console.log(checkMul(7));
console.log(checkMul(21));
console.log(checkMul(19));
console.log(checkMul(20));
console.log(checkMul(14));