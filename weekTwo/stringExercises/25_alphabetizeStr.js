"use strict";
// Write a JavaScript function to alphabetize a given string.

const alphabetize = (str) => {
  const arr = str.replaceAll(" ", "").split("");
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < str.length; i++) {
      if (arr.join("").charCodeAt(i) > arr.join("").charCodeAt(i + 1)) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
  }
  return arr;
};

console.log(alphabetize("United States"));
