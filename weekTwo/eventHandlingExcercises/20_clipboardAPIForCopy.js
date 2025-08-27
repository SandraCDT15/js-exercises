"use strict";
// Write a JavaScript program that copies the content of a text box to the clipboard when a button is clicked.

const copyBtn = document.querySelector(".copy-btn");
const inputText = document.querySelector(".input-txt");

copyBtn.addEventListener("click", () => {
  const text = inputText.value;
  if (text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  } else {
    alert("Please enter some text to copy.");
  }
});
