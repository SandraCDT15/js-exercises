"use strict";
// Write a JavaScript program that fetches data from an API, handles network errors, and displays the results on a webpage

const fetchBtn = document.querySelector(".fetch-btn");

fetchBtn.addEventListener("click", fetchData);

function fetchData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const resultContainer = document.querySelector(".result");

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      displayResults(data);
    })
    .catch((error) => {
      console.error("Fetch failed:", error);
      resultContainer.textContent =
        "Error fetching data. Please try again later.";
    });
}

function displayResults(data) {
  const resultContainer = document.querySelector(".result");
  resultContainer.innerHTML = "";

  data.slice(0, 5).forEach((element) => {
    const p = document.createElement("p");
    p.textContent = `Post ${element.id}: ${element.title}`;
    resultContainer.appendChild(p);
  });
}
