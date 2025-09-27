'use strict'
// Write a JavaScript program to sort the strings of a
//  given array of strings in order of increasing length.
// Note: Do not change the order if the lengths of two string are same.

const sortArrStr = arr => arr.sort((a, b) => b.length - a.length);

console.log(sortArrStr(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]));