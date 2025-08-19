'use strict'
// The program checks if the first and last elements in an array of integers of length 3 are the same.

const sameFirstLast = arr => arr[0] === arr[arr.length - 1];

console.log(sameFirstLast([10, 20, 30])); 
console.log(sameFirstLast([10, 20, 30, 10])); 
console.log(sameFirstLast([20, 20, 20])); 