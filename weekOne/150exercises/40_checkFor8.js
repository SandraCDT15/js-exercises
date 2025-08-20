'use strict'
// This JavaScript program checks two given integers to see if one of them is 8 or if their sum or difference is 8.

const checkForEight = (a, b) => a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8;

console.log(checkForEight(7, 8));
console.log(checkForEight(16, 8));
console.log(checkForEight(24, 32));
console.log(checkForEight(17, 18));