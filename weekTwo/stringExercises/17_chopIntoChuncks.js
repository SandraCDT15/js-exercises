"use string";
// Write a JavaScript function to chop a string into chunks of a given length.

const chopStr = (str, chopLength = 0) => {
  const result = [];
  if (chopLength > 0) {
    for (let i = 0; i < str.length; i += chopLength) {
      result.push(str.slice(i, i + chopLength));
    }
  } else {
    result.push(str);
  }
  return result;
};

console.log(chopStr("w3resource"));
console.log(chopStr("w3resource", 2));
console.log(chopStr("w3resource", 3));
