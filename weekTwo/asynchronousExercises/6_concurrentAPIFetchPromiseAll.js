"use strict";
// Write a JavaScript function that fetches data from multiple APIs
// concurrently and returns a combined result using Promises and 'Promise.all()'.

function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Erro("HTTP error! Status: ", response.status);
    }
    return response.json();
  });
}

function fetchMultiple(apiUrls) {
  const promises = apiUrls.map((url) => fetchData(url));
  return Promise.all(promises);
}

const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
];

fetchMultiple(apiUrls)
  .then((results) => {
    console.log("Combined Results: ", results);
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });
