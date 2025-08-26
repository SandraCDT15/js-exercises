"use strict";
// Write a JavaScript program that prevents the default behavior of a form submission and logs the input values to the console.

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});
