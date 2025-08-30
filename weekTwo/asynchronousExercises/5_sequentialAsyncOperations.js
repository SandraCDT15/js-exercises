"use strict";
// Write a JavaScript program that implements a function that performs a series
//  of asynchronous operations in sequence using Promises and 'async/await'.

function asyncOp1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asyn Operation 1");
      resolve();
    }, 1000);
  });
}

function asyncOp2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 2");
      resolve();
    }, 2000);
  });
}

function asyncOp3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 3");
      resolve();
    }, 1500);
  });
}

async function performOps() {
  try {
    await asyncOp1();
    await asyncOp2();
    await asyncOp3();
    console.log("All operations completed");
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

performOps();
