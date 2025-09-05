"use strict";
// Write a JavaScript program that uses async/await to perform three asynchronous tasks in sequence.

function wait(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task done in ${sec} seconds`);
    }, sec * 1000);
  });
}

async function asyncTasks() {
  const task1 = await wait(1);
  console.log(task1);

  const task2 = await wait(2);
  console.log(task2);

  const task3 = await wait(3);
  console.log(task3);
}

asyncTasks();
