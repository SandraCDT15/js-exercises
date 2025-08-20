'use strict'
// This JavaScript program examines two non-negative integers to determine if exactly one of them, but not both, is a multiple of 7 or 11.

const isMultiple = (a, b) => a % 7 === 0 || a % 11 === 0 ||b % 7 === 0 || b % 11 === 0;

console.log(isMultiple(14, 21));
console.log(isMultiple(14, 20));
console.log(isMultiple(16, 20));