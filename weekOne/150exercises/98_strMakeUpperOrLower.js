'use strict'
// Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.

const upperOrLower = str => str.replaceAll(/[A-Z]/g, '').length > str.replaceAll(/[a-z]/g, '').length ?
str.toLowerCase() : str.toUpperCase();

console.log(upperOrLower('Write'));
console.log(upperOrLower('PHp'));
console.log(upperOrLower('SAnDrA'));
console.log(upperOrLower('CitlaLI'));
