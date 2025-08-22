"use strict";
// Write a JavaScript function to remove  non-printable ASCII characters.
const rmvNonPrint = (str) => str.replaceAll(/[^\x20-\x7E]/g, "");

console.log(rmvNonPrint("äÄçÇéÉêPHP-MySQLöÖÐþúÚ"));
