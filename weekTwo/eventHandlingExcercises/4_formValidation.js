"use strict";
// Write a JavaScript program that implements a "form" validation that
//  displays an error message if a required field is left empty when submitting the form.

const form = document.getElementById("myForm");
const errorDiv = document.getElementById("errorMessages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorDiv.innerHTML = "";
  const requieredFields = form.querySelectorAll("[required]");
  requieredFields.forEach((field) => {
    if (field.value.trim() === "") {
      const fieldName = field.getAttribute("name");
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `${fieldName} is required.`;
      errorDiv.appendChild(errorMessage);
    }
  });
});
