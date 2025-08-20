'use strict'
// This JavaScript program takes a string of length at least three and rearranges it by moving the last three characters to the beginning of the string.

const moveLastToBgn = str => str.length >= 3 ? str.slice(-3) + str.slice(0, str.length - 4) : str;

console.log(moveLastToBgn('Python'));
console.log(moveLastToBgn('JavaScript'));
console.log(moveLastToBgn('Hi'));