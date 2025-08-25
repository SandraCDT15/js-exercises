"use strict";
// Write a JavaScript function to uncapitalize the first character of a string.

const uncapitalize = (str) => str[0].toLowerCase() + str.slice(1);

console.log(uncapitalize("Js string exercises"));
