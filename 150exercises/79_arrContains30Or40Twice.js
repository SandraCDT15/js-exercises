'use strict'
// Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice.

const arrContTwice = arr => arr.indexOf(30) !== arr.lastIndexOf(30) || arr.indexOf(40) !== arr.lastIndexOf(40);

console.log(arrContTwice([30, 30, 20]));
console.log(arrContTwice([40, 40]));
console.log(arrContTwice([20, 20, 30, 40]));
console.log(arrContTwice([30]));