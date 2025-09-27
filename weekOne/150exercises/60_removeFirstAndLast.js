'use strict'
// This JavaScript program takes an input string and returns a new string with the first and last characters removed. The length of the input string should be at least 2.
const rmvFirstAndLast = str => str.length >= 2 ? str.slice(1, -1) : false;

console.log(rmvFirstAndLast('JavaScript'));
console.log(rmvFirstAndLast('JS'));
console.log(rmvFirstAndLast('PHP'));