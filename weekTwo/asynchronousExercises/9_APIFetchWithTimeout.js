"use strict";
// Write a JavaScript function that fetches data from an API and
// cancels the request if it takes longer than a specified time.

function fetchData(url, timeout) {
  const controller = new AbortController();
  const { signal } = controller;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  return fetch(url, { signal })
    .then((response) => {
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error("HTTP error! Status: ", response.status);
      }
      return response.json();
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        throw new Error("Requested timed out");
      } else {
        throw error;
      }
    });
}

const url = "https://jsonplaceholder.typicode.com/posts/1";
const timeoutMs = 50;

fetchData(url, timeoutMs)
  .then((data) => {
    console.log("Data: ", data);
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });
