"use strict";
// Write a JavaScript program that demonstrates how to catch and handle errors in Promises using .catch().

const promise = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Promise rejected");
  }, 1000);
});

promise.then().catch((err) => {
  console.log(err);
});
