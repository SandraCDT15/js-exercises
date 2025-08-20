'use strict'
// Write a JavaScript program to find the number of even digits in a given integer.

const evenDigits = num => (num + '').split('').reduce((acc, cur) => Number(cur) % 2 === 0 ? acc += 1 : acc ,0);

console.log(evenDigits(123));
console.log(evenDigits(12345));
console.log(evenDigits(1222456));