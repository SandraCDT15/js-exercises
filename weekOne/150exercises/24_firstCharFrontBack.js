'use strict'
// This JavaScript program creates a new string by adding the first character of the given string to both the front and back.

const addChar = str => str[0] + str + str[0];

console.log(addChar('Swift'));
console.log(addChar('Sandra'));
console.log(addChar('abcd'));