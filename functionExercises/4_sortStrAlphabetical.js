'use strict'
// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Note: Assume punctuation and numbers symbols are not included in the passed string..

const sortStr = str => str.split('').sort().join('');

console.log(sortStr('webmaster'));