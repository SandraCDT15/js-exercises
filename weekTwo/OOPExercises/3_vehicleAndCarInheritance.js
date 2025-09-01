"use strict";
// Write a JavaScript program that creates a class called 'Vehicle' with properties for
//  make, model, and year. Include a method to display vehicle details. Create a subclass
//  called 'Car' that inherits from the 'Vehicle' class and includes an additional property
//  for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(
      `This vehicle was made for ${this.make}, is the model ${this.model} for the year ${this.year}.`
    );
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  displayDetails() {
    console.log(
      `This vehicle was made for ${this.make}, is the model ${this.model} for the year ${this.year} and has ${this.doors} doors.`
    );
  }
}

const vehicle = new Vehicle("Ford", "F-150", 2020);
vehicle.displayDetails();

const car = new Car("Honda", "Accord", 2023, 4);
car.displayDetails();
