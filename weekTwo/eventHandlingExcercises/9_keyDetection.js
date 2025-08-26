"use strict";
// Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.

const textInput = document.getElementById("textInput");

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter key pressed!");
  } else {
    console.log("That´s not an enter");
  }
});
