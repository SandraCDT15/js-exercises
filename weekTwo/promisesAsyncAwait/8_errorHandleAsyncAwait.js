"use strict";
// Write a JavaScript program to demonstrate how to handle errors in async/await functions using try...catch

function asyncTask(taskName, sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve(`${taskName} completed in ${sec} seconds`);
      } else {
        reject(`Error in ${taskName}`);
      }
    }, sec * 1000);
  });
}

async function handleError() {
  try {
    const task1 = await asyncTask("Task1", 2);
    console.log(task1);

    const task2 = await asyncTask("Task2", 3);
    console.log(task2);

    const task3 = await asyncTask("Task3", 5);
    console.log(task3);
  } catch (err) {
    console.log(err);
  }
}

handleError();
