'use strict'
// This JavaScript program checks whether a given integer is within 20 units of either 100 or 400.

const check = num => Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;

console.log(check(10));
console.log(check(90));
console.log(check(99));
console.log(check(199));
console.log(check(200));
