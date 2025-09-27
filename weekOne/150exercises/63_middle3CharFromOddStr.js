'use strict'
// This JavaScript program extracts and creates a new string consisting of the middle three characters from an input string of odd length, ensuring the input string length is at least three.

const extractMiddle = str => str.length >= 3 && str.length % 2 !== 0 ? str.slice((str.length/2) - 1, (str.length/2) + 2) : str;

console.log(extractMiddle('abcdefg'));
console.log(extractMiddle('HTML5'));
console.log(extractMiddle('Python'));
console.log(extractMiddle('Hi'));