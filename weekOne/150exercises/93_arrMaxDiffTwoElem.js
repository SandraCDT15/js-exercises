'use strict'
// Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

const maxDiff = arr => {
    arr.sort((a, b) => a - b);
    return arr[arr.length -1] - arr[0];
}

console.log(maxDiff([1, 2, 3, 8, 9])); 
console.log(maxDiff([1, 2, 3, 18, 9]));
console.log(maxDiff([13, 2, 3, 8, 9])); 