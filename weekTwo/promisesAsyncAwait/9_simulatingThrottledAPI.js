"use strict";
// Write a JavaScript function that ensures only a specified number of asynchronous requests are made simultaneously.

function simulateApi(id, sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} done in ${sec} seconds`);
    }, sec * 1000);
  });
}

const calls = [
  () => simulateApi(1, 2),
  () => simulateApi(2, 1),
  () => simulateApi(3, 4),
  () => simulateApi(4, 3),
  () => simulateApi(5, 1),
  () => simulateApi(6, 2),
];

async function throttled(requests) {
  const results = [];
  const running = [];

  for (const request of requests) {
    const promise = request();
    results.push(promise);
    running.push(promise);

    promise.finally(() => running.splice(running.indexOf(promise), 1));

    if (running.length >= 3) {
      await Promise.race(running);
    }
  }
  return Promise.all(results);
}

throttled(calls).then((res) => console.log(res));
