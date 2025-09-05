"use strict";
// Write a JavaScript program that takes an array of Promises and logs both resolved and rejected results using Promise.allSettled().

Promise.allSettled([
  Promise.resolve("1.- Promise resolved!!"),
  Promise.reject("2.- Promise rejected"),
  Promise.reject("3.- Promise rejected"),
  Promise.resolve("4.- Promise resolved!!"),
  Promise.reject("5.- Promise rejected"),
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
