'use strict'
// Write a JavaScript program to find the longest string from a given array of strings.

const longestStr = arr => arr.reduce((acc, cur) => cur.length > acc.length ? cur : acc, arr[0]);

console.log(longestStr(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));
console.log(longestStr(['a', 'bb', 'ccc', 'dddd', 'eeee']));