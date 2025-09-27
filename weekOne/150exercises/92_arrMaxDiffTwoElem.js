'use strict'
// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

const maxDiff = arr => arr.reduce((acc, cur, i, arr) => 
    Math.abs(cur - arr[i + 1]) > acc ? acc = Math.abs(cur - arr[i+ 1]) : acc, 0);

console.log(maxDiff([1, 2, 3, 8, 9]));
console.log(maxDiff([1, 2, 3, 18, 9]));
console.log(maxDiff([13, 2, 3, 8, 9])); 