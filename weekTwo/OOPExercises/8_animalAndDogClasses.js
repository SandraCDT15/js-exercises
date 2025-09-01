"use strict";
// Write a JavaScript program that creates a class called 'Animal' with properties for
//  species and sound. Include a method to make the animal's sound. Create a subclass
// called 'Dog' that inherits from the 'Animal' class and adds an additional property
//  for color. Override the make sound method to include the dog's color.

class Animal {
  constructor(specie, sound) {
    this.specie = specie;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(specie, sound, color) {
    super(specie, sound);
    this.color = color;
  }

  makeSound() {
    super.makeSound();
    console.log("Color", this.color);
  }
}

const scooby = new Dog("Dog", "Guau guau!", "Brown");
scooby.makeSound();
