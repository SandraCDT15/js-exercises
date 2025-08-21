"use strict";
// Write a JavaScript function to count substrings in a string.

const countSubs = (str, subs) =>
  (str.length - str.replaceAll(subs, "").length) / subs.length;

console.log(countSubs("The quick brown fox jumps over the lazy dog", "the"));
console.log(countSubs("The quick brown fox jumps over the lazy dog", "he"));
console.log(countSubs("The quick brown fox jumps over the lazy dog", "fox"));
