"use strict";
// Write a JavaScript function that returns a Promise that resolves with a "Hello, World!" message after 1 second.

function simplePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello world!");
    }, 1000);
  });
}

simplePromise().then((message) => {
  console.log(message);
});
