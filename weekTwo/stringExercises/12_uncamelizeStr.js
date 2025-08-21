"use strict";
// Write a JavaScript function to uncommelize a string.

const uncamelize = (str, separator) =>
  str.replace(/[A-Z]/g, (letter) => separator + letter.toLowerCase());

console.log(uncamelize("helloWorld", " "));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));
