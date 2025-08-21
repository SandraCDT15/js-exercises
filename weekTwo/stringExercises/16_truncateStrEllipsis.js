"use strict";
// Write a JavaScript function to truncate a string if it is longer than the
//  specified number of characters. Truncated strings will end with a translatable
// ellipsis sequence ("…") (by default) or specified characters.

const truncate = (str, numChars, filler = "...") =>
  numChars !== undefined
    ? str.slice(0, numChars - filler.length) + filler
    : str;

console.log(truncate("We are doing JS string exercises.", 15, "!!"));
console.log(truncate("We are doing JS string exercises.", 19));
console.log(truncate("We are doing JS string exercises."));
