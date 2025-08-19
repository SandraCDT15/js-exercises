'use strict'
// This JavaScript program concatenates two input strings by omitting their first character from each string before concatenation.

const concatStrs = (str1, str2) => str1.length >= 2 && str2.length >= 2 ? str1.slice(1) + str2.slice(1) : false;

console.log(concatStrs('PHP', 'JS'));
console.log(concatStrs('A', 'B'));
console.log(concatStrs('AAB', 'BCC'));