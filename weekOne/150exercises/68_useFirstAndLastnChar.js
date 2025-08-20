'use strict'
// The program takes a string and an integer n, then constructs a new string using the first n characters and the last n characters from the original string. It ensures the string's length is at least n before performing this operation.
const firstAndLast = (str, n) => str.length >= n ? str.slice(0, n) + str.slice(-n) : str;

console.log(firstAndLast('JavaScript', 2));
console.log(firstAndLast('JavaScriipt', 3));
console.log(firstAndLast('Hi', 2));
console.log(firstAndLast('Hi', 3));