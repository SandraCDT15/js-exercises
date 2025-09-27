'use strict'
// Write a JavaScript program to check whether it is possible 
// to rearrange the characters of a given string. This is in
// such a way that it will become equal to another given string.

const strEqual = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');

console.log(strEqual('xyz', 'zyx'));
console.log(strEqual('xyz', 'zyp'));