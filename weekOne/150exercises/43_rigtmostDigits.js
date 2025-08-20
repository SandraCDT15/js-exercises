'use strict'
// This JavaScript program checks whether from three given non-negative integers, two or all of them have the same rightmost digit.

const rightmost = (a, b, c) => a % 10 === b % 10 && b % 10 === c % 10;

console.log(rightmost(22, 32, 42));
console.log(rightmost(102, 302, 2));
console.log(rightmost(20, 22, 45));