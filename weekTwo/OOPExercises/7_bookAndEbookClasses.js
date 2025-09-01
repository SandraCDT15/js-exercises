"use strict";
// Write a JavaScript program that creates a class `Book` with properties for title,
//  author, and publication year. Include a method to display book details. Create a
//  subclass called 'Ebook' that inherits from the 'Book' class and includes an
//  additional property for book price. Override the display method to include the book price.

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayDetails() {
    console.log(
      `The book ${this.title} by the author ${this.author} was published in ${this.year}`
    );
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  displayDetails() {
    console.log(
      `The book ${this.title} by the author ${this.author} was published in ${this.publicationYear} and you can get it for $${this.price}`
    );
  }
}

const ebook = new Ebook("Don Quixote", "Miguel de Cervantes", 1605, 21.49);
ebook.displayDetails();
