'use strict'
// The program takes an array of three integers as input and calculates the sum of these three elements

const sumArr = arr => arr.reduce((acc, cur) => acc + cur, 0);

console.log(sumArr([10, 32, 20 ]));
console.log(sumArr([5, 7, 9]));
console.log(sumArr([0, 8, -11]));