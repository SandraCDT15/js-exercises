'use strict'
// This JavaScript program takes a string and a positive number as inputs, then creates a new string by repeating the given string the specified number of times.

const copyStr = (str, x) => x > 0 ? str.repeat(x): false;

console.log(copyStr('abc', 5));
console.log(copyStr('abc', 0));
console.log(copyStr('abc', -2));