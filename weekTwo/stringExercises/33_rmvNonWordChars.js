"use strict";
// Write a JavaScript function to remove non-word characters.

const rmvNonWord = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (
      (char >= 65 && char <= 90) ||
      (char >= 97 && char <= 122) ||
      char === 45
    ) {
      result += str[i];
    }
  }
  return result;
};

console.log(rmvNonWord("PHP ~!@#$%^&*()+`-={}[]|\\:\";'/?><., MySQL"));
