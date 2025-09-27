'use strict'
// This JavaScript program checks if a given string has an equal number of 'p' and 't' characters.

const equalPT = str => str.replaceAll('p').length === str.replaceAll('t').length;

console.log(equalPT('paatpss'));
console.log(equalPT('paatps'));
console.log(equalPT('paatpts'));