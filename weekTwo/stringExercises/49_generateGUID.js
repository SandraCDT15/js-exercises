"use strict";
// Write a JavaScript function to get a guid (an acronym for 'Globally Unique Identifier'?) of the specified length, or 32 by default.

const generateGUID = (idLength = 32) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < idLength; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
};

console.log(generateGUID(10));
console.log(generateGUID());
