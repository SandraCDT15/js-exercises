"use strict";
// Write a JavaScript function to truncate a string to a certain number of words.

const truncate = (str, count) => {
  const words = str.split(" ");
  words.splice(count, words.length - count);
  return words.join(" ");
};

console.log(truncate("The quick brown fox", 1));
console.log(truncate("The quick brown fox", 2));
console.log(truncate("The quick brown fox", 3));
console.log(truncate("The quick brown fox", 4));
