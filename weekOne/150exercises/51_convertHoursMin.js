'use strict'
// This JavaScript application converts a given numerical value representing minutes into hours and minutes.

const convert = num => `${Math.floor(num / 60)}hr ${num % 60} min`;

console.log(convert(71));
console.log(convert(450));
console.log(convert(1441));