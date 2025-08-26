"use strict";
// Write a JavaScript function that changes the background color of an element when a  mouse enters it.

const divElem = document.querySelector(".dropdown");

divElem.addEventListener("mouseenter", () => {
  console.log("mouse enter");
  divElem.style.backgroundColor = "green";
});
