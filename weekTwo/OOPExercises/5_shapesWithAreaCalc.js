"use strict";
// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
//  Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape'
//  class and override the area calculation method.
class Shape {
  calcArea() {
    throw new Error("this method must be overridden in subclasses");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calcArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(7);
console.log(circle.calcArea());

const rectangle = new Rectangle(8, 9);
console.log(rectangle.calcArea());
