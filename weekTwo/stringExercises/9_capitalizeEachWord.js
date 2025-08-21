"use strict";
// Write a JavaScript function to capitalize the first letter of each word in a string.

const capitalize = (str) => {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};

console.log(capitalize("sandra citlali delgado torres"));
