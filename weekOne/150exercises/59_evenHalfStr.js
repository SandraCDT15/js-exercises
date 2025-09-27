'use strict'
// This JavaScript program takes an input string with an even number of characters and returns a new string containing only the first half of the original string.

const splitHalf = str => str.length % 2 === 0 ? str.slice(0, str.length / 2) : str;

console.log(splitHalf('Python'));
console.log(splitHalf('JavaScript'));
console.log(splitHalf('PHP'));