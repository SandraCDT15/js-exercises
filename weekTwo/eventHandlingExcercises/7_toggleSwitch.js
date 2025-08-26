"use strict";
// Write a JavaScript program to implement a toggle  switch that changes its state when clicked.

const switchBtn = document.querySelector(".switch-btn");
const hello = document.querySelector(".hello");
const bye = document.querySelector(".bye");

switchBtn.addEventListener("click", () => {
  hello.classList.toggle("hidden");
  bye.classList.toggle("hidden");
});
