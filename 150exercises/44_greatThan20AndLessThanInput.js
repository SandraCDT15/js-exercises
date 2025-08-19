'use strict'
// This JavaScript program evaluates three given integers to determine if one number is greater than or equal to 20 and less than the other two. It compares each number against 20 and ensures that it is not greater than the other two numbers.

const check = (a, b, c) => (a >= 20 && (a < b || a < c)) || (b >= 20 && (b < a || b < c)) || (c >= 20 && (c < b || c < a));

console.log(check(23, 45, 10));
console.log(check(23, 23, 10));
console.log(check(21, 66, 75));