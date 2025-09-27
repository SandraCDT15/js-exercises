'use strict'
// Write a JavaScript program to find the position of the
//  rightmost round number in an array of integers. If 
// there are no round numbers, the function returns 0.

const roundNum = arr => arr.reduce((acc, cur, i) => cur % 10 === 0 ? acc = i : acc, 0);

console.log(roundNum([1, 22, 30, 54, 56]));  
console.log(roundNum([1, 22, 32, 54, 56]));  
console.log(roundNum([1, 22, 32, 54, 50]));   