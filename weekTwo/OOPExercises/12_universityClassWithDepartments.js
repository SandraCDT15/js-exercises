"use strict";
// Write a JavaScript program that creates a class called University with properties
//  for university name and departments. Include methods to add a department, remove
//  a department, and display all departments.

class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    this.departments.push(department);
    console.log(`Department ${department} added successful`);
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Department ${department} deleted successfully.`);
    } else {
      console.log(`Department "${department}" not found.`);
    }
  }

  displayDepartments() {
    if (this.departments.length === 0) {
      console.log("No departments available");
    } else {
      console.log("Departments: ");
      this.departments.forEach((department, i) => {
        console.log(`${i + 1}.- ${department}`);
      });
    }
  }
}

const university = new University("ABC university");

university.displayDepartments();

university.addDepartment("Science");
university.addDepartment("Math");
university.addDepartment("Physics");

university.displayDepartments();

university.removeDepartment("Math");
university.displayDepartments();

university.removeDepartment("Philosophy");
