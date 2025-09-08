"use strict";
// Write a JavaScript function that creates a Promise that resolves after a given number of milliseconds.

function wait(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${sec} seconds`);
    }, sec * 1000);
  });
}

wait(8).then((result) => console.log(result));
wait(5).then((result) => console.log(result));
wait(1).then((result) => console.log(result));
