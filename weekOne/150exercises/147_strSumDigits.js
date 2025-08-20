'use strict'
// Write a JavaScript program to compute the sum of
//  all the digits that occur in a given string.

const sumDigits = str => {
    const arr = [...(str.replaceAll(/[a-z]/g, '').replaceAll(/[A-Z]/g, ''))];
    return arr.reduce((acc, cur) => acc += Number(cur), 0)
}

console.log(sumDigits('123'));
console.log(sumDigits("abcd12efg9"));
console.log(sumDigits("w3resource"));