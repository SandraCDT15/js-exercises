"use strict";
// Write a JavaScript function to create a zero-filled value with an optional +, - sign.

const zeroFill = (num, numLength, sign) => {
  if (sign === "+" || sign === "-") {
    return sign + (num + "").padStart(numLength, "0");
  }
  return (num + "").padStart(numLength, "0");
};

console.log(zeroFill(120, 5, "+"));
console.log(zeroFill(9, 4));
