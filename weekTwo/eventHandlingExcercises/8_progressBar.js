"use strict";
// Write a JavaScript program to create a progress bar that updates its width based on task completion.
const progressBar = document.getElementById("progress");
const fillBtn = document.querySelector(".fill-btn");

let filler = 0;
progressBar.style.width = `${filler}%`;

fillBtn.addEventListener("click", () => {
  filler += 1;
  progressBar.style.width = `${filler}%`;
  console.log(filler);
});
