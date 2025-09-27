'use strict'
// This JavaScript program generates a new string by taking the last 3 characters of a given string (if its length is at least 3) and repeating these characters 4 times, creating a string of 12 characters in total.

const copyLastThree = str => str.length >= 3 ? str.slice(-3).repeat(4) : false;

console.log(copyLastThree('Python 3.0'));
console.log(copyLastThree('JS'));
console.log(copyLastThree('JavaScript'));