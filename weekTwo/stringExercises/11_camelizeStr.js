"use strict";
// Write a JavaScript function to convert a string into camel case.
const camelize = (str) => {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join("");
};

console.log(camelize("Java script"));
console.log(camelize("sandra citlali delgado"));
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
