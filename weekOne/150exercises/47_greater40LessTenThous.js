'use strict'
// This JavaScript program verifies whether a given number falls within the inclusive range of 40 to 10,000

const checkRange = num => num >= 40 && num <= 10000;

console.log(checkRange(45));
console.log(checkRange(9999));
console.log(checkRange(30));
console.log(checkRange(10001));