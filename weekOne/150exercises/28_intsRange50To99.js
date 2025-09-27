'use strict'
// This JavaScript program checks if either of two given integers falls within the range of 50 to 99 (inclusive).

const check = (a,b) => a >= 50 && a <= 99 && b >= 50 && b <= 99;

console.log(check(12, 101));
console.log(check(52, 80));
console.log(check(15, 99));
console.log(check(54, 101));
console.log(check(90, 60));
