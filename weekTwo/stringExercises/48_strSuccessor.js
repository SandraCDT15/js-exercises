"use strict";
// Write a JavaScript function to get the successor to a string.

// Note: The successor is calculated by incrementing characters
// starting from the rightmost alphanumeric (or the rightmost character
//  if there are no alphanumerics) in the string. Incrementing a digit
// always results in another digit, and incrementing a letter results in
//  another letter of the same case. If the increment generates a carry,
// the character to the left of it is incremented. This process repeats until
//  there is no carry, adding an additional character if necessary.

function successor(str) {
  let index = str.length - 1;
  let code = str.charCodeAt(index);
  let carry = true;

  while (carry) {
    carry = false;
    if (
      (code >= 48 && code < 57) ||
      (code >= 65 && code < 90) ||
      (code >= 97 && code < 122)
    ) {
      str = str.replace(str[index], String.fromCharCode(code + 1));
    } else if (code === 57 || code === 90 || code === 122) {
      carry = true;
      index--;
      code = str.charCodeAt(index);
    }
  }

  return str;
}

console.log(successor("abcd"));
console.log(successor("ABCD"));
console.log(successor("THX1138"));
console.log(successor("THZ"));
console.log(successor("1999zzz"));
