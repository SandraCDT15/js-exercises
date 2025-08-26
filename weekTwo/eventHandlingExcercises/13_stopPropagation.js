"use strict";
// Write a JavaScript program that demonstrates event bubbling and
//  uses stopPropagation to stop the event at a specific level.

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", (e) => {
  console.log("Child clicked");
  e.stopPropagation();
});
