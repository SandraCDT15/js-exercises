"use strict";
// Write a JavaScript program to create a class called "Person" with properties
//  for name, age and country. Include a method to display the person's details.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  showDetails() {
    console.log("Name: ", this.name);
    console.log("Age: ", this.age);
    console.log("Country: ", this.country);
  }
}

const sandra = new Person("Sandra Delgado", 23, "Mexico");
const javier = new Person("Javier Amezcua", 25, "Germany");

sandra.showDetails();
javier.showDetails();
