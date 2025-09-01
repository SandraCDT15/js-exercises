"use strict";
// Write a JavaScript program that creates a class called "BankAccount" with properties
//  for account number and balance. Include methods to deposit and withdraw money from the account.

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  set deposit(amount) {
    this.balance += amount;
  }

  set withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficient balance");
    }
  }

  get displayBalance() {
    return this.balance;
  }
}

const myAccount = new BankAccount("SD-1503", 1000);
console.log(myAccount.displayBalance);
myAccount.deposit = 500;
console.log(myAccount.displayBalance);
myAccount.withdraw = 1000;
console.log(myAccount.displayBalance);
myAccount.withdraw = 501;
