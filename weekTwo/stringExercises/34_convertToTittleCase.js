"use strict";
// Write a JavaScript function to convert a string to title case.

const tittleCase = (str) => {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return arr.join(" ");
};

console.log(tittleCase("PHP exercises. python exercises."));
