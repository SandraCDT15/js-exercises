"use strict";
// Write a JavaScript program that creates a button and add a
//  click event listener to log a message when it's clicked.

const button = document.createElement("button");
button.textContent = "Click me";

button.addEventListener("click", () => {
  console.log("Button clicked!");
});

document.body.appendChild(button);
