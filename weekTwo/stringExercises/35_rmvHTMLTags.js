"use strict";
// Write a JavaScript function to remove HTML/XML tags from a string.

const rmvHTML = (str) => str.replace(/<.*?>/g, "");

console.log(rmvHTML("<p><strong><em>PHP Exercises</em></strong></p>"));
