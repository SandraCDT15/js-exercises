"use strict";
// Write a JavaScript program that converts a callback-based function to a Promise-based function.

function callbackBased(num1, num2, callback) {
  setTimeout(() => {
    const result = num1 + num2;
    if (result % 2 !== 0) {
      callback(null, result);
    } else {
      callback(new Error("Result is not odd!"), null);
    }
  }, 1000);
}

function promisified(num1, num2) {
  return new Promise((resolve, reject) => {
    callbackBased(num1, num2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

promisified(2, 3)
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });

promisified(2, 4)
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });
