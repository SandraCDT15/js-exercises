"use strict";
// Write a JavaScript program to determine if a given word is exceeding word or not.

function exceedingWord(str) {
  const count = [];
  for (let i = 0; i < str.length - 1; i++) {
    count.push(Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1)));
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] > count[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(exceedingWord("acgl"));
console.log(exceedingWord("aebc"));
