'use strict'
// Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer.

const reverseBits = num => parseInt([...(num).toString(2).padStart(16, 0)].reverse().join(''), 2);

console.log(reverseBits(12345));
console.log(reverseBits(10));
console.log(reverseBits(5));