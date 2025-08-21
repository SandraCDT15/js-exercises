"use strict";
// Write a JavaScript function that takes a string with both lowercase
// and upper case letters as a parameter. It converts upper case letters
// to lower case, and lower case letters to upper case.

const swapCase = (str) => {
  let swappedStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      swappedStr += str[i].toLowerCase();
    } else if (char >= 97 && char <= 122) {
      swappedStr += str[i].toUpperCase();
    }
  }
  return swappedStr;
};

console.log(swapCase("SanDra"));
console.log(swapCase("saNDRA"));
