"use strict";
// Write a JavaScript function that creates a cancellable Promise by using a custom wrapper.

function createCancelable(executor) {
  let cancel;

  const promise = new Promise((resolve, reject) => {
    cancel = () => reject(new Error("Promise cancelled"));
    executor(resolve, reject);
  });

  promise.cancel = cancel;
  return promise;
}

const cancellable = createCancelable((resolve) => {
  setTimeout(() => resolve("Operation completed"), 5000);
});

cancellable
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

setTimeout(() => {
  cancellable.cancel();
}, 2000);
