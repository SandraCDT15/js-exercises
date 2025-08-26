"use strict";
// Write a JavaScript program that implements a counter using localStorage to save the count across page refreshes.

let counter = parseInt(localStorage.getItem("counter")) || 0;

const counterDisplay = document.querySelector(".counter-display");
const incrementBtn = document.querySelector(".increment-btn");

counterDisplay.textContent = `Counter: ${counter}`;

incrementBtn.addEventListener("click", () => {
  counter++;
  localStorage.setItem("counter", counter);
  counterDisplay.textContent = `Counter: ${counter}`;
});
