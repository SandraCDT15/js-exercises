'use strict'
// Write a JavaScript program to check whether a given number is in a given range.

const inRange = (start, num, end) => num >= start && num <= end;

console.log(inRange(1, 2, 3));
console.log(inRange(1, 2, -3));
console.log(inRange(1.1, 1.2, 1.3));