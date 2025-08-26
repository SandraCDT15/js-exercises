"use strict";
// Write a JavaScript program to handle click events on dynamically added list items using event delegation.

const listContainer = document.querySelector(".dynamic-list");

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert(`You clicked on: ${e.target.textContent}`);
  }
});
