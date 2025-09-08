"use strict";
// Write a JavaScript function that wraps an asynchronous operation in a Promise.

function wait(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Timeout ${sec} passed`);
    }, sec * 1000);
  });
}

wait(5).then((result) => console.log(result));
wait(2).then((result) => console.log(result));
