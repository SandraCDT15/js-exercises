"use strict";
// Write a JavaScript function to test whether the character at the index provided is upper case.

const isUpper = (str, index) => str[index].toUpperCase() === str[index];

console.log(isUpper("Js String Exercises", 3));
console.log(isUpper("Js String Exercises", 5));
