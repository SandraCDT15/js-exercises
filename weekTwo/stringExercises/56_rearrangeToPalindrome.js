"use strict";
// Write a JavaScript function that receives a string and determines
//  whether or not it can be rearranged to become a palindrome.

const canBePalindrome = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if ((str.length - str.replaceAll(str[i], "").length) % 2 !== 0) {
      count++;
      console.log(count);
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
};

console.log(canBePalindrome("maamd"));
console.log(canBePalindrome("civic"));
console.log(canBePalindrome("IOOO"));
console.log(canBePalindrome("IO"));
