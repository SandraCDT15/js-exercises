"use strict";
// Write a JavaScript function to uncapitalize the first letter of each word of a string.

// const uncapitalize = (str) => {
//   const arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toLowerCase() + arr[i].slice(1);
//   }
//   return arr.join(" ");
// };

const uncapitalize = (str) =>
  str.replaceAll(
    /\w\S*/g,
    (word) => word[0].toLowerCase() + word.slice(1).toLowerCase()
  );

console.log(uncapitalize("Js String Exercises"));
