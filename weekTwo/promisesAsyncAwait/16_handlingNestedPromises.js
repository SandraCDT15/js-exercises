"use strict";
// Write a JavaScript function that resolves a nested Promise structure using async/await.

function getNested() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve("Nested promise Resolved!");
          }, 1000);
        })
      );
    }, 2000);
  });
}

async function handleNested() {
  const firstLevel = await getNested();
  const result = await firstLevel;
  console.log(result);
}

handleNested();
