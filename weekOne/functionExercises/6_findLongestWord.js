'use strict'
// Write a JavaScript function that accepts a string
//  as a parameter and finds the longest word within the string.

const longestWord = str => str.split(' ').reduce((acc, cur) => cur.length > acc.length ? acc = cur : acc, '');

console.log(longestWord('Web Development Tutorial'));