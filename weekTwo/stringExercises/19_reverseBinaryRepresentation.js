"use strict";
// Write a JavaScript function that takes a positive integer and reverses
//  the binary representation of that integer. Finally return the decimal
//  version of the binary string.

const reverseBinary = (num) =>
  parseInt([...num.toString(2)].reverse().join(""), 2);

console.log(reverseBinary(100));
console.log(reverseBinary(1134));
