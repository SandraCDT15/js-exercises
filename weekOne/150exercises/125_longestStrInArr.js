'use strict'
// Write a JavaScript program to find the longest string in a given array.

const longestStr = arr => arr.reduce((acc, cur) => cur.length > acc.length ? acc = cur : acc, arr[0]);

console.log(longestStr(["ab", "a", "abcd"]));
console.log(longestStr(["ab", "ab", "ab"]));