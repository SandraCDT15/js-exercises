'use strict'
// Write a JavaScript function that accepts a string as a 
// parameter and counts the number of vowels within the string.

const countVowels = str => str.replaceAll(/[^aeiouAEIOU]/g, '').length;

console.log(countVowels('w3resource.com'));