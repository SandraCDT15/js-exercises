"use strict";
// Write a JavaScript function that checks whether a string ends with a specified suffix.

const ends = (str, suffix) => str.endsWith(suffix);

console.log(ends("JS PHP PYTHON", "PYTHON"));
console.log(ends("JS PHP PYTHON", " "));
