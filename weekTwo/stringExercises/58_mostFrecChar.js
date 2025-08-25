"use strict";
// Write a JavaScript program to find the most frequent character in a given string.

const mostFrecuent = (str) => {
  let char = "";
  for (let i = 0; i < str.length; i++) {
    if (str.replaceAll(str[i], "").length < str.replaceAll(char, "").length) {
      char = str[i];
    }
  }
  return char;
};

console.log(mostFrecuent("Madam"));
console.log(mostFrecuent("civic"));
console.log(mostFrecuent("HelloL223LLL"));
