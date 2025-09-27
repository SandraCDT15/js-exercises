'use strict'
// This JavaScript program removes a character at a specified position in a given string and returns the modified string.

const removeChar = (str, pos) => str.replace(str[pos], '');

console.log(removeChar('Python', 0));
console.log(removeChar('Python', 3));
console.log(removeChar('Python', 5));