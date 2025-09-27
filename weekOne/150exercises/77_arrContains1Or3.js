'use strict'
// Write a JavaScript program to test whether an array of integers contains 1 or 3.

const arrContains = arr => arr.includes(1) || arr.includes(3);

console.log(arrContains([1, 5])); 
console.log(arrContains([2, 3])); 
console.log(arrContains([7, 5]));