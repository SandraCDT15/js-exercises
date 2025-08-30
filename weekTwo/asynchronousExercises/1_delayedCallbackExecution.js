"use strict";
// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function delayInvoke(callback) {
  setTimeout(callback, 2000);
}

function greetings() {
  console.log("Hello Sandra");
}

delayInvoke(greetings);
