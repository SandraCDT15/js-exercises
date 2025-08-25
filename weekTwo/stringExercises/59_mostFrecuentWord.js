"use strict";
// Write a JavaScript program to find the most frequent word in a given string.

const mostFrecuent = (str) => {
  const arr = str.toLowerCase().split(" ");
  const words = {};
  for (let i = 0; i < arr.length; i++) {
    words[arr[i]] = words[arr[i]] + 1 || 1;
  }
  const frecuent = Object.keys(words).reduce(
    (acc, cur) => (words[cur] > words[acc] ? (acc = cur) : acc),
    Object.keys(words)[0]
  );

  return frecuent;
};

console.log(mostFrecuent("The quick brown fox jumps over the lazy dog"));
console.log(
  mostFrecuent("Python is a high-level, general-purpose programming language.")
);
console.log(
  mostFrecuent(
    " It was the same man, she was sure of it. It's always the same, Chauncey."
  )
);
