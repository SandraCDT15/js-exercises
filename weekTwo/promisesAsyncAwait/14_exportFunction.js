"use strict";

export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Fetched successfully!");
    }, 3000);
  });
}
