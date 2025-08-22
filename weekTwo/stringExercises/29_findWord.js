"use strict";
// Write a JavaScript function to find a word within a string.

const findWord = (str, word) =>
  `${word} was found ${
    (str.length - str.replaceAll(word, "").length) / word.length
  } times`;

console.log(findWord("The quick brown fox jumps over the lazy dog", "fox"));
console.log(findWord("aa, bb, cc, dd, aa", "aa"));
