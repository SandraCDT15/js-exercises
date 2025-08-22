"use strict";
// Write a JavaScript function to convert Hexadecimal to ASCII format.

const hexToAscii = (str) => {
  let resStr = "";
  for (let i = 0; i < str.length; i += 2) {
    resStr += String.fromCharCode(parseInt(str.substr(i, 2), 16));
  }
  return resStr;
};

console.log(hexToAscii("31"));
console.log(hexToAscii("32"));
console.log(hexToAscii("3132"));
console.log(hexToAscii("313030"));
