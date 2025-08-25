"use strict";
// Write a JavaScript function to get a humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.

const humFormat = (num) => {
  const lastDigit = (num + "")[(num + "").length - 1];

  if (lastDigit >= 1 && lastDigit <= 3) {
    switch (lastDigit) {
      case "1": {
        return num + "st";
      }
      case "2": {
        return num + "nd";
      }
      case "3": {
        return num + "rd";
      }
    }
  } else {
    return num + "th";
  }
};

console.log(humFormat(1));
console.log(humFormat(20));
console.log(humFormat(302));
