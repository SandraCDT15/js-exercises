'use strict'
// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

const arrNotContains = arr => !arr.includes(1) && !arr.includes(3);

console.log(arrNotContains([7, 8]));
console.log(arrNotContains([3, 2]));
console.log(arrNotContains([0, 1]));