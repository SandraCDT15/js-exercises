"use strict";
// Write a JavaScript program to create a class called 'Rectangle' with properties
//  for width and height. Include two methods to calculate rectangle area and perimeter

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(12, 10);
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log(area, perimeter);
