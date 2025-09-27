'use strict'
// The program verifies if the number 1 is present at either the first or last position of an array of integers, ensuring the array's length is at least 1.

const oneIsFirstOrLast = arr => arr[0] === 1 || arr[arr.length - 1] === 1;

console.log(oneIsFirstOrLast([1, 3, 5]));
console.log(oneIsFirstOrLast([1, 3, 5, 1]));
console.log(oneIsFirstOrLast([2, 4, 6]));