"use strict";
// Write a JavaScript program that combines synchronous and asynchronous tasks using Promise.all.

function syncTask(taskName) {
  return `Sync Task ${taskName} done`;
}

function asyncTask(taskName, sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Async Task ${taskName} done`);
    }, sec * 1000);
  });
}

const task1 = syncTask("sync1");
const task2 = asyncTask("Async1", 2);
const task3 = asyncTask("Async2", 1);
const task4 = asyncTask("Async3", 5);
const task5 = syncTask("sync2");

const tasks = [task1, task2, task3, task4, task5];

Promise.all(tasks).then((result) => console.log(result));
