"use strict";
// Write a JavaScript function to reverse words in a given string.

const reverseWords = (str) => {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }

  return arr.join(" ");
};

console.log(reverseWords("abc"));
console.log(reverseWords("JavaScript String Exercises"));
