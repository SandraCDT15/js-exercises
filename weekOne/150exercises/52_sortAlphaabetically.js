'use strict'
// This JavaScript program takes a string and sorts its letters in alphabetical order.

const sortStr = str => str.split('').sort().join('');

console.log(sortStr('Pyton'));
console.log(sortStr('Exercises'));
console.log(sortStr('EDABCF'));