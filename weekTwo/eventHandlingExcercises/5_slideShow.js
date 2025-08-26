"use strict";
// Write a JavaScript program to create a slideshow that changes
//  the displayed image when a next or previous button is clicked.

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

const prevBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const image = document.getElementById("image");

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  image.src = images[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
});
