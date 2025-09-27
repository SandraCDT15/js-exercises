'use strict'
// This JavaScript program checks if any of three given integers fall within the range of 50 to 99 (inclusive).

const check = (a,b,c) => (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99);

console.log(check(50, 90, 99));
console.log(check(5, 9, 199));
console.log(check(65, 89, 199));
console.log(check(65, 9, 199));