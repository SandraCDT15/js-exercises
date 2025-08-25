"use strict";
// Write a JavaScript function to get the length of the longest valid
//  parentheses (well-formed) from a given string containing just the characters '[' and ']'.

const longestParentheses = (str) => {
  let count = 0,
    maxCount = 0;
  let lastIndex = str.indexOf("[]");
  let newIndex = 0;
  while (str.includes("[]")) {
    newIndex = str.indexOf("[]");
    if (newIndex === lastIndex) {
      count++;
      count > maxCount && (maxCount = count);
    } else {
      lastIndex = newIndex;
      count > maxCount && (maxCount = count);
      count = 0;
    }
    str = str.replace("[]", "");
  }
  return maxCount;
};
console.log(longestParentheses("[[]"));
console.log(longestParentheses("[[][]]"));
console.log(longestParentheses("[[][]][][][]"));
console.log(longestParentheses(""));
