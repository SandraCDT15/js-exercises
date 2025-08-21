"use strict";
// Write a JavaScript function to insertStr a string within a string at a particular position (default is 1).

// function insertStr(mainStr, insStr, n = 1){
//     return str.slice(0, n) + insStr + str.slice(n + 1);
// }

const insertStr = (mainStr, insStr = "", n = 0) =>
  mainStr.slice(0, n) + insStr + mainStr.slice(n);

console.log(insertStr("We are doing some exercises."));
console.log(insertStr("We are doing some exercises.", "JavaScript "));
console.log(insertStr("We are doing some exercises.", "JavaScript ", 18));
