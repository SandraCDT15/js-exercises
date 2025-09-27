'use strict'
// Write a JavaScript program to change the characters (lower case)
//  in a string where a turns into z, b turns into y, c turns into x,
//  ..., n turns into m, m turns into n, ..., z turns into a.

function reverse(str) {
    let result = '';
    for(let i = 0; i < str.length; i++){
         result += (String.fromCharCode(219 - str[i].charCodeAt(0)));
    }

    return result;
}

console.log(reverse("abcxyz"));
console.log(reverse("hello"));
console.log(reverse("javascript"));