"use strict";
// Write a JavaScript program that displays a "loading" message while waiting for an async operation to complete.

function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async task done");
    }, 3000);
  });
}

async function loading() {
  console.log("Loading...");
  const result = await asyncTask();
  console.log(result);
}

loading();
