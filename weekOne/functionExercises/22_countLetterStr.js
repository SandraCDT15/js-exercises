'use strict'
// Write a JavaScript function that accepts two arguments, a string and
//  a letter and the function will count the number of occurrences of the
//  specified letter within the string.

const countLetter = (str, char) => str.length - str.replaceAll(char, '').length;

console.log(countLetter('Sandra', 'a'));
console.log(countLetter('JavaScript', 'i'));
console.log(countLetter('Hello World', 'l'));