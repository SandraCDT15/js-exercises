'use script'
// The JavaScript program checks if a given string ends with "Script" and ensures the string's length is at least 6 characters.

const endsWScript = str => str.length >= 6 && str.endsWith('Script');

console.log(endsWScript('JavaScript'));
console.log(endsWScript('Java Script'));
console.log(endsWScript('Java Scripts'));
console.log(endsWScript('Script'));
