"use strict";
// Write a JavaScript program that processes an array of asynchronous tasks sequentially using Promises.

const tasks = ["Homework", "Cook", "Paint"];

function asyncTask(task) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${task} done`);
    }, 2000);
  });
}

async function runTasks(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    await asyncTask(tasks[i])
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// runTasks(tasks);
runTasks(["A", "b", "c"]);
