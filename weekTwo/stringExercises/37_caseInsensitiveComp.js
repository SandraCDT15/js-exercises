"use strict";
// Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison.

const compare = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

console.log(compare("aBcd", "AbcD"));
console.log(compare("aBcd", "ABCD"));
console.log(compare("ABCD", "AbcE"));
