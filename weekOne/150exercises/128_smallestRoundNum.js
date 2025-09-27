'use strict'
// Write a JavaScript program to find the smallest round number not less than a given value.

const smallestRound = num => num + (10 - num % 10);

console.log(smallestRound(56));
console.log(smallestRound(592));