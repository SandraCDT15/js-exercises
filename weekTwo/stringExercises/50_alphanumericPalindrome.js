"use strict";
// Write a JavaScript program to check if a given string contains alphanumeric
//  characters that are palindromes regardless of special characters and letter case.

const isPalindrome = (str) => {
  if (typeof str === "string") {
    str = str.replaceAll(/[^a-z0-9]+/g, "").toLowerCase();
    return str.split("").reverse().join("") === str;
  }
  return "It must be string";
};

console.log(isPalindrome(12321));
console.log(isPalindrome("$22_|1372^2731|_22"));
console.log(isPalindrome("12%^&2"));
console.log(isPalindrome("234%$$%432"));
console.log(isPalindrome("aba%$aba"));
console.log(isPalindrome("Aba%$aba"));
