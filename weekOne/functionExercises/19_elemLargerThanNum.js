'use strict'
// Write a JavaScript function that returns array elements larger than a number.

const filterElem = (arr, num) => arr.filter(e => e > num);

console.log(filterElem([1, 2, 3, 4, 5, 6, 7, 8, 9,] , 3));
console.log(filterElem([1, 2, 3, 4, 5, 6, 7] , 5));
