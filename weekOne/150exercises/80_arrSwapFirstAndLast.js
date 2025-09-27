'use strict'
// Write a JavaScript program to swapFirstLast the first and last elements of a given array of integers.

const swapFirstLast = arr =>  [arr[0], arr[arr.length -1]] = [arr[arr.length -1], arr[0]];

console.log(swapFirstLast([1, 2, 3, 4]));
console.log(swapFirstLast([0, 2, 1]));
console.log(swapFirstLast([3, 5, 6, 8, 0])); 