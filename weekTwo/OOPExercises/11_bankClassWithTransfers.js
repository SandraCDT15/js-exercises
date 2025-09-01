"use strict";
// Write a JavaScript program that creates a class called BankAccount with properties
//  for account number, account holder name, and balance. Include methods to deposit,
// withdraw, and transfer money between accounts.

class BankAccount {
  constructor(accountNumber, holderName, balance) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }

  deposit(amount) {
    return (this.balance += amount);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Inssufficient balance");
    } else {
      return (this.balance -= amount);
    }
  }

  transfer(amount, recipient) {
    if (amount <= this.balance) {
      this.balance -= amount;
      recipient.deposit(amount);
      console.log(
        `Amount ${amount} transferred from account ${this.accountNumber} to account ${recipient.accountNumber}`
      );
    } else {
      console.log("Insufficient balance for transfer");
    }
  }

  get getBalance() {
    return this.balance;
  }
}

const sandraAccount = new BankAccount("NuBa-001", "Sandra Delgado", 2000);
const javiAccount = new BankAccount("BBVA-003", "Javier Amezcua", 300);

console.log(sandraAccount.getBalance);
console.log(javiAccount.getBalance);

sandraAccount.deposit(500);
console.log(sandraAccount.getBalance);

sandraAccount.transfer(1000, javiAccount);
console.log(sandraAccount.getBalance);
console.log(javiAccount.getBalance);

javiAccount.transfer(4000, sandraAccount);
console.log(javiAccount.getBalance);
console.log(sandraAccount.getBalance);
