"use strict";
// Write a JavaScript function to escape special characters (&, <, >, ', ") for use in HTML.

function escape_html(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  const map = {
    "&": "&amp",
    "<": "&lt",
    ">": "&gt",
    '"': "&quot",
    "'": "&#039",
  };

  return str.replace(/[&<>"']/g, (m) => map[m]);
}
console.log(escape_html("PHP & MySQL"));
console.log(escape_html("3 > 2"));
