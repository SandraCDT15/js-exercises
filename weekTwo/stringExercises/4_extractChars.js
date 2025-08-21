"uses strict";
// Write a JavaScript function to extract a specified number of characters from a string.

const extract = (str, chars) => str.slice(0, chars);

console.log(extract("Sandra", 3));
console.log(extract("Robin Singh", 4));
console.log(extract("Iron Man", 5));
