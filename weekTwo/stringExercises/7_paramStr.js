"use strict";
// Write a JavaScript function to parameterize a string.

// Test Data:
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

const paramStr = (str) =>
  str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/, "")
    .replaceAll(" ", "-");

console.log(paramStr("Robin Singh from USA."));
console.log(paramStr("            Robin Singh from USA.        "));
