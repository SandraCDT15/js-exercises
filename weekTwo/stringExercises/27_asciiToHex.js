"use strict";
// Write a JavaScript function to convert ASCII to Hexadecimal format.

const asciiToHex = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i).toString(16));
  }
  return result.join("");
};
console.log(asciiToHex("1"));
console.log(asciiToHex("12"));
console.log(asciiToHex("100"));
