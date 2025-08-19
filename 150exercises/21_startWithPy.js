'use strict'
// This JavaScript program creates a new string by adding "Py" in front of a given string.

const check = str => str.startsWith('Py') ? str : `Py${str}`;

console.log(check('Python'));
console.log(check('thon'));