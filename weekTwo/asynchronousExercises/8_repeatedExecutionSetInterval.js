"use strict";
// Write a JavaScript program to implement a function that executes a
//  given function repeatedly at a fixed interval using 'setInterval()'.

function repeatFn(fn, interval) {
  fn();
  const intervalId = setInterval(fn, interval);
  return function stopExecution() {
    clearInterval(intervalId);
    console.log("Execution stopped.");
  };
}

const intervalMs = 1000;

function printMsg() {
  console.log("Executing the function...");
}

const stopExecution = repeatFn(printMsg, intervalMs);

setTimeout(() => {
  stopExecution();
}, 4000);
