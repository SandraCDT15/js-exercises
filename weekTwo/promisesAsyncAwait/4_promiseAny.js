"use strict";
// Write a JavaScript function that takes multiple Promises and resolves with the first successful result using Promise.any().

Promise.any([
  Promise.reject("Promise rejected"),
  Promise.reject("Promise rejected"),
  Promise.resolve("Promise resolved!"),
  Promise.reject("Promise rejected"),
])
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
