"use strict";
// Write a JavaScript program that uses the Geolocation API to display the user's current location.
const output = document.querySelector(".output");
const getLocationBtn = document.querySelector(".get-location");

getLocationBtn.addEventListener("click", geolocation);

function geolocation() {
  if (!navigator.geolocation) {
    output.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  const getCurrentPosition = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

  getCurrentPosition()
    .then((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      output.textContent = `Latitude ${latitude}, Longitude: ${longitude}`;
    })
    .catch((error) => {
      output.textContent = `Error: Unable to retrieve your location (${error.messsage})`;
    });
}
