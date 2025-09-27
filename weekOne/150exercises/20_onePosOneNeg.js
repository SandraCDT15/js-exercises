'use strict'
// This JavaScript program checks two given integers to determine if one is positive and the other is negative.

const check = (a,b) => a > 0 && b < 0 || a < 0 && b > 0;

console.log(check(2, 2));
console.log(check(-2, 2));
console.log(check(2, -2));
console.log(check(-2, -2));