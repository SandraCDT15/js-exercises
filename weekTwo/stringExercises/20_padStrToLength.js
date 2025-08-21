"use strict";
// Write a JavaScript function that can pad (left, right) a string to get to a specific length.

const padStr = (format, str, side) =>
  side === 1
    ? str.padStart(format.length, format)
    : str.padEnd(format.length, format);

console.log(padStr("0000", "123", 1));
console.log(padStr("00000000", "123"));
console.log(padStr("!!!!!!!!", "Happy"));
