"use strict";
// Write a JavaScript function to check a given string is in Kebab case or not.

const isKebab = (str) => {
  const pattern = /(\w+)-(\w)([\w-]*)/;
  return pattern.test(str);
};
console.log(isKebab("j"));
console.log(isKebab("Java-Exercises"));
console.log(isKebab("JavaScript-Exercises"));
console.log(isKebab("javascript_exercises"));
