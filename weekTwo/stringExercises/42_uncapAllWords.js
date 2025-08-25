"use strict";
// Write a JavaScript function to uncapitalize each word in the string.

const uncapitalize = (str) =>
  str.replace(/\w\S*/g, (word) => word.toLowerCase());

console.log(uncapitalize("JS STRING EXERCISES"));
