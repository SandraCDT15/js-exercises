"use strict";
// Write a JavaScript program that demonstrates the use of Promise.race to return the first completed Promise.

function asyncTask(taskName, sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${taskName} done in ${sec}`);
    }, sec * 1000);
  });
}

const task1 = asyncTask("Task1", 5);
const task2 = asyncTask("Task2", 6);
const task3 = asyncTask("Task3", 1);
const task4 = asyncTask("Task4", 2);

Promise.race([task1, task2, task3, task4]).then((result) =>
  console.log(result)
);
