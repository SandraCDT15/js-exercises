"use strict";
// Write a JavaScript function to check a given string is in Flat case or not.

// Flat case: As the name implies, flatcase refers to the use of
//  lowercase letters, with no spaces between words.

const flatCase = (str) =>
  typeof str === "string"
    ? str.replace(" ", "").toLowerCase() === str
    : "It must be string";

console.log(flatCase("java exercises"));
console.log(flatCase("JavaScriptExercises"));
console.log(flatCase("javascriptexercises"));
console.log(flatCase(123));
