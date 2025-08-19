'use strict'
// The program converts the first three characters of a given string to lowercase if the string length is 3 or more. If the string length is less than 3, it converts the entire string to uppercase.

function modifyStr(str){
    if(str.length < 3) return str.toUpperCase();
    return str.slice(0, 3).toLowerCase() + str.slice(3);
}

console.log(modifyStr('Python'));
console.log(modifyStr('Py'));
console.log(modifyStr('JAVAScript'));