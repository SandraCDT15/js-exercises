'use strict'
// Write a JavaScript program to find the maximum possible sum of some 
// of its k consecutive numbers in a given array of positive integers.

const maxSum = (arr, k) => arr.reduce((acc, cur, i, arr) => {
    for(let j = 1; j < k; j++){
        cur += arr[i + j];
    }
   if(cur > acc) acc = cur;
   return acc;
},0);

console.log(maxSum([1, 2, 3, 14, 5], 2));
console.log(maxSum([2, 3, 5, 1, 6], 3));
console.log(maxSum([9, 3, 5, 1, 7], 2));
console.log(maxSum([9, 3, 5, 6, 7], 3));