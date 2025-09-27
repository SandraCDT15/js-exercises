'use strict'
// Write a JavaScript program to replace the first digit in a 
// string (should have at least one digit) with the $ character.

const replaceDigit = str => str.replace(/[0-9]/g, '$');

console.log(replaceDigit('abc1abc'));
console.log(replaceDigit('p3ython'));
console.log(replaceDigit('ab7cd'));