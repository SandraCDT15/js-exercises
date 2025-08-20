'use strict'
// Write a JavaScript program to reverse the order of bits in a integer.

const reverseBits = num => parseInt([...(num).toString(2).padStart(8, 0)].reverse().join(''), 2);

console.log(reverseBits(14));
console.log(reverseBits(56));
console.log(reverseBits(234));