"use strict";
// Write a JavaScript function to find the length of the longest palindromic subsequence in a given string.

function palindromicSubs(str) {
  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.slice(i, j);
      if (isPalindrome(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }

  return longest.length;
}

console.log(palindromicSubs("aaaba"));
console.log(palindromicSubs("maadaam"));
console.log(palindromicSubs("zkksk"));
