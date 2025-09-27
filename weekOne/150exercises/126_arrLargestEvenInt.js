'use strict'
// Write a JavaScript program to get the largest even number from an array of integers.

const largestInt = arr => arr.reduce((acc, cur) => cur > acc ? acc = cur : acc , arr[0]);

console.log(largestInt([20, 40, 200]));
console.log(largestInt([20, 40, 200, 301]));
console.log(largestInt([20, 40, 200, -301]));
console.log(largestInt([-10, -1, -200, -301]));