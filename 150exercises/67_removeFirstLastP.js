'use strict'
// The program creates a new string by removing the first and last characters if either is 'P'. If neither condition is met, the program returns the original string.

const rmvFirstLastP = str => str.startsWith('P') && str.endsWith('P') ? str.slice(1, -1) : str;

console.log(rmvFirstLastP('PythonP'));
console.log(rmvFirstLastP('Python'));
console.log(rmvFirstLastP('JavaScript'));
console.log(rmvFirstLastP('PJavaScriptP'));