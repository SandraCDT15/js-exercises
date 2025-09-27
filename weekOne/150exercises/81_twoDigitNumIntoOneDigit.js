'use strict'
// Write a JavaScript program to add two digits to a given positive integer of length two.

const addNums = num => Math.floor(num / 10) + num % 10;

console.log(addNums(10));
console.log(addNums(23));
console.log(addNums(35));