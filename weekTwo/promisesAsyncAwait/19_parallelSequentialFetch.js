"use strict";
// Write a JavaScript program to fetch data from multiple APIs first in parallel and then sequentially, comparing their performance.

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

Promise.all(urls).then((result) => console.log(result));

function parallel(urls) {
  Promise.all(urls.map((url) => fetch(url)));
}

async function sequentially(urls) {
  for (const url of urls) {
    const response = await fetch(url);
  }
}

parallel(urls);
// sequentially(urls);
