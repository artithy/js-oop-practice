class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.year}`);
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Price: $${this.price}`);
    }
}

const myEbook = new Ebook("JavaScript Essentials", "John Doe", 2023, 15.99);
myEbook.displayDetails();
