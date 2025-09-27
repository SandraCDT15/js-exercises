'use strict'
// Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

const sumDiff = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length - 1; i++){
        sum += Math.abs(arr[i] - arr[i + 1]);
    }
    return sum;
};

console.log(sumDiff([1, 2, 3, 2, -5]));
console.log(sumDiff([3, 7, 2, 1, 5]));