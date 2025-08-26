"use strict";
// Write a JavaScript program to simulate a  shopping cart where the cart state is stored in sessionStorage.

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

const addBtn = document.querySelector(".add-item");
const itemInput = document.getElementById("input-item");

displayCart();

addBtn.addEventListener("click", () => {
  const newItem = itemInput.value.trim();
  if (newItem) {
    cart.push(newItem);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    itemInput.value = "";
    displayCart();
  } else {
    alert("Please enter an item name");
  }
});

function displayCart() {
  const cartDisplay = document.querySelector(".cart-display");
  cartDisplay.innerHTML = "";

  if (cart.length === 0) {
    cartDisplay.textContent = "Your cart is empty.";
  } else {
    cart.forEach((item, index) => {
      const itemElement = document.createElement("p");
      itemElement.textContent = `${index + 1}. ${item}`;
      cartDisplay.appendChild(itemElement);
    });
  }
}
