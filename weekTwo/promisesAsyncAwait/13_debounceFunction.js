"use strict";
// Write a JavaScript function that creates a debounce function using Promises and setTimeout.

function debounce(func, sec) {
  let timeout;

  return function (...args) {
    return new Promise((resolve) => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        resolve(func(...args));
      }, sec * 1000);
    });
  };
}

function greet(name) {
  return `Hello ${name}`;
}

const debounceGreet = debounce(greet, 5);

debounceGreet("Sandra").then((result) => console.log(result));
debounceGreet("Sandra").then((result) => console.log(result));
debounceGreet("Sandra").then((result) => console.log(result));
