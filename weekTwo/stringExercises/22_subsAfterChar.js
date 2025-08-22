"use strict";
// Write a JavaScript function to get a part of string after a specified character.

const cutStr = (str, char, pos) => {
  if (str.includes(char) && pos === "a") {
    return str.slice(0, str.indexOf(char));
  } else if (str.includes(char) && pos === "b") {
    return str.slice(str.indexOf(char) + 1);
  } else {
    return str;
  }
};

console.log(cutStr("Sandra", "n", "a"));
console.log(cutStr("Sandra", "n", "b"));
