'use strict'
// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

const checkStart = str => str.startsWith('Los') || str.startsWith('New') ? str : '';

console.log(checkStart('New York'));
console.log(checkStart('Los Angeles'));
console.log(checkStart('London'));