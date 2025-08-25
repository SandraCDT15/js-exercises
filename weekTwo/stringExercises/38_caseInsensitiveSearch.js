"use strict";
// Write a JavaScript function to create a case-insensitive search.

const search = (str, search) =>
  str.toLowerCase().includes(search.toLowerCase());

console.log(search("JavaScript Exercises", "exercises"));
console.log(search("JavaScript Exercises", "Exercises"));
console.log(search("JavaScript Exercises", "Exercisess"));
