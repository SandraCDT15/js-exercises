"use strict";
// Write a JavaScript program that demonstrates event capturing by adding listeners to parent and child elements.

const parent1 = document.querySelector(".parent1");
const child1 = document.querySelector(".child1");

const parent2 = document.querySelector(".parent2");
const child2 = document.querySelector(".child2");

parent1.addEventListener(
  "click",
  () => {
    console.log("Parent clicked (Capturing phase)");
  },
  true
);

child1.addEventListener(
  "click",
  () => {
    console.log("Child clicked (Capturing phase)");
  },
  true
);

parent2.addEventListener(
  "click",
  () => {
    console.log("Parent clicked (Bubbling phase)");
  },
  false
);

child2.addEventListener(
  "click",
  () => {
    console.log("Child clicked (Bubbling phase)");
  },
  false
);
