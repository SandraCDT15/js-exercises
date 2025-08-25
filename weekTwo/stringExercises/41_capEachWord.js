"use strict";
// Write a JavaScript function to capitalize each word in the string.

const capitalize = (str) => str.replace(/\w\S*/g, (word) => word.toUpperCase());

console.log(capitalize("JS STRING EXERCISES"));
