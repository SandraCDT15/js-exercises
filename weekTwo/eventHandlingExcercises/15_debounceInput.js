"use strict";
// Write a JavaScript program that debounces the input event of a text box to wait before making an API call.

const input = document.querySelector(".debounce-input");

function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

function handleInput(e) {
  console.log(`API call for: ${e.target.value}`);
}

input.addEventListener("input", debounce(handleInput, 300));
