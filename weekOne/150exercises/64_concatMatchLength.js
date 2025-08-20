'use strict'
// This JavaScript program concatenates two strings and, if their lengths differ, trims the longer string to match the length of the shorter one before concatenation.

function concatMatchLength(str1, str2){
    if(str1.length === str2.length) return str1 + str2;
    else if( str1.length > str2.length) return str1.slice(-str2.length) + str2;
    else return str2.slice(-str1.length) + str1;
}

console.log(concatMatchLength('Python', 'JS'));
console.log(concatMatchLength('ab', 'cdef'));