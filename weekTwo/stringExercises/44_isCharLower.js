"use strict";
// Write a JavaScript function to test whether the character at the given (character) index is lower case.

const isLower = (str, index) => str[index].toLowerCase() === str[index];

console.log(isLower("Js String Exercises", 3));
console.log(isLower("Js String Exercises", 5));
