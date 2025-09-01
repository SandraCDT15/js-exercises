"use strict";
// Write a JavaScript program that creates a class called 'Employee' with properties for
//  name and salary. Include a method to calculate annual salary. Create a subclass called
//  'Manager' that inherits from the 'Employee' class and adds an additional property for
//  department. Override the annual salary calculation method to include bonuses for managers.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  get annualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  get annualSalary() {
    const bonus = 0.1;
    return bonus * super.annualSalary + super.annualSalary;
  }
}

const manager1 = new Manager("Angela Luca", 5000, "Marketing");
console.log(manager1);
console.log(manager1.annualSalary);
