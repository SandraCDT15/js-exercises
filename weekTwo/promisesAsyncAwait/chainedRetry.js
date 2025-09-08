"use strict";
// Write a JavaScript program to implement a function that retries a failed asynchronous operation with increasing delays between attempts.

function asyncTask() {
  if (Math.random() >= 0.5) {
    return "Success";
  } else {
    throw new Error("Random failure");
  }
}

async function retry(func, retries, delay) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await func();
    } catch (err) {
      console.error(`Attempt ${attempt} failed: ${err.message}`);
      if (attempt === retries) {
        throw new Error("All retries failed");
      }

      await new Promise((resolve) => setTimeout(resolve, delay * attempt));
    }
  }
}

retry(asyncTask, 5, 1000)
  .then((result) => console.log("Operation succeeded: ", result))
  .catch((err) => console.log("Operation failed: ", err.message));
