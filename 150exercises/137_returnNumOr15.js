'use strict'
// Write a JavaScript program to test whether a given integer
//  is greater than 15 and return the given number, otherwise return 15.

const testNum = num => num > 15 ? num : 15;

console.log(testNum(123));
console.log(testNum(10));
console.log(testNum(5));