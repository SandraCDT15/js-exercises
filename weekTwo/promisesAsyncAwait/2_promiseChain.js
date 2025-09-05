"use strict";
// Write a JavaScript function that uses a chain of .then() calls to perform a series of asynchronous tasks.

function wait(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(`${sec} sec`));
    }, 1000);
  });
}

wait(1)
  .then(() => wait(2))
  .then(() => wait(3))
  .then();
