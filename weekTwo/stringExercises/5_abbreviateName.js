"use strict";
// Write a JavaScript function to convert a string into abbreviated form.

const abb = (name) => name.split(" ")[0] + " " + name.split(" ")[1][0];

console.log(abb("Sandra Delgado"));
console.log(abb("Robin Singh"));
