"use strict";
// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

const rmvFirst = (str, search) => str.replace(search, "");

console.log(rmvFirst("The quick brown fox jumps over the lazy dog", "the"));
