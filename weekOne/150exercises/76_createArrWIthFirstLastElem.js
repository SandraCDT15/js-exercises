'use strict'
// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. 

const newArr = arr => arr.filter((_, i, arrFil) => i === 0 || i === arrFil.length - 1);

console.log(newArr([20, 20, 30]));
console.log(newArr([5, 2, 7, 8]));
console.log(newArr([17, 12, 34, 78])); 