"use strict";
// Write a JavaScript program that creates a class called Bank with properties
//  for bank names and branches. Include methods to add a branch, remove a branch,
//  and display all branches.

class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch) {
    this.branches.push(branch);
    console.log(`${branch} added successfully.`);
  }

  removeBranch(branch) {
    const index = this.branches.indexOf(branch);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Branch ${branch} removed successfully.`);
    } else {
      console.log(`Branch "${branch}" does not exist.`);
    }
  }

  displayBranches() {
    if (this.branches.length === 0) {
      console.log("No brances available");
    } else {
      console.log(`List of branches`);
      this.branches.forEach((branch, i) => {
        console.log(`${i + 1}.- ${branch}`);
      });
    }
  }
}

const bank = new Bank("BBVA");
bank.addBranch("Branch A");
bank.addBranch("Branch B");
bank.addBranch("Branch C");
bank.displayBranches();
bank.removeBranch("Branch B");
bank.displayBranches();
