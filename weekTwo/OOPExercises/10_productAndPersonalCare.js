"use strict";
// Write a JavaScript program that creates a class called Product with properties
//  for product ID, name, and price. Include a method to calculate the total price
//  by multiplying the price by the quantity. Create a subclass called PersonalCareProduct
//  that inherits from the Product class and adds an additional property for the
//  warranty period. Override the total price calculation method to include the warranty period.

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  totalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warranty) {
    super(id, name, price);
    this.warranty = warranty;
  }

  totalPrice(quantity) {
    return super.totalPrice(quantity) + this.warranty;
  }
}

const faceCream = new PersonalCareProduct(1, "Hydrant cream", 10, 2);
console.log(faceCream.totalPrice(3));
