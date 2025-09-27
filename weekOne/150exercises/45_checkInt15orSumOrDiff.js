'use strict'
// This JavaScript program evaluates two integer values to determine if either one is equal to 15 or if their sum or difference equals 15.

const checkSumDiff = (a, b) => a === 15 || b === 15 || Math.abs(a - b) === 15;

console.log(checkSumDiff(15, 9));
console.log(checkSumDiff(25, 15));
console.log(checkSumDiff(7, 8));
console.log(checkSumDiff(25, 10));
console.log(checkSumDiff(9, 25));