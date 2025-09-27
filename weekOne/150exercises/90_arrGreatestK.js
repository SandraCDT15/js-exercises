'use strict'
// Write a JavaScript program to find the kth greatest element in a given array of integers.

const greatestKth = (arr, k) => {
    arr.sort((a, b) => b - a);
    console.log(arr);
    return arr[k - 1];
}

console.log(greatestKth([1, 2, 6, 4, 5], 3));
console.log(greatestKth([1, 2, 6, 4, 5, 7, 9, 8], 3));
console.log(greatestKth([-10, -25, -47, 36, 0], 1));