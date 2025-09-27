'use strict'
// Write a JavaScript program to check a number from three 
// given numbers where two numbers are equal. Find the third one.

const findUnequal = (a, b, c) => a === b ? c : a === c ? b : c === b ? a : 'All are unequal';

console.log(findUnequal(2, 2, 1));
console.log(findUnequal(3, 2, 1));
console.log(findUnequal(1, 4, 1));