"use strict";
// Write a JavaScript function that hides email addresses to prevent unauthorized access.

const hideEmail = (email) => {
  const arr = email.split("@");

  return arr[0].slice(0, arr[0].length / 2) + "...@" + arr[1];
};

console.log(hideEmail("sandra_cd@gmail.com"));
console.log(hideEmail("sandraexample@gmail.com"));
