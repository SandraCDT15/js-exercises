'use strict'
// This JavaScript program checks if the substring "Script" appears at the 5th position (index 4) in a given string.

const checkScript = str => str.indexOf('Script') === 4 ? str.slice(0, 4) : str;

console.log(checkScript('JavaScript'));
console.log(checkScript('CoffeeScript'));