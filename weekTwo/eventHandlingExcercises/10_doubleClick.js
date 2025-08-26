"use strict";
// Write a JavaScript function that listens for a double click on an element and performs a specific action.

const btn = document.getElementById("myButton");

btn.addEventListener("dblclick", () => {
  console.log("A double click has been performed!");
});
