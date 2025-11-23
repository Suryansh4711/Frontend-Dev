"use strict";
// Q3 - Library Management System (Classes + Objects)

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) return false;
        this.isIssued = true;
        return true;
    }

    returnBook() {
        if (!this.isIssued) return false;
        this.isIssued = false;
        return true;
    }

    display() {
        return `${this.title} by ${this.author} | ISBN: ${this.ISBN} | ${this.isIssued ? 'Issued' : 'Available'}`;
    }
}

// Sample collection
const library = [
    new Book('1984', 'George Orwell', 'ISBN001'),
    new Book('Clean Code', 'Robert C. Martin', 'ISBN002'),
    new Book('You Don\'t Know JS', 'Kyle Simpson', 'ISBN003')
];

console.log('=== Q3 - Library Management System ===');
console.log('\nAvailable books:');
library.filter(b => !b.isIssued).forEach(b => console.log(b.display()));

function issueBookByISBN(isbn) {
    const book = library.find(b => b.ISBN === isbn);
    if (!book) {
        console.log(`No book found with ISBN ${isbn}`);
        return false;
    }
    if (book.issueBook()) {
        console.log(`Book issued: ${book.display()}`);
        return true;
    } else {
        console.log(`Book already issued: ${book.display()}`);
        return false;
    }
}

function returnBookByISBN(isbn) {
    const book = library.find(b => b.ISBN === isbn);
    if (!book) {
        console.log(`No book found with ISBN ${isbn}`);
        return false;
    }
    if (book.returnBook()) {
        console.log(`Book returned: ${book.display()}`);
        return true;
    } else {
        console.log(`Book was not issued: ${book.display()}`);
        return false;
    }
}

// Example usage
issueBookByISBN('ISBN002');
console.log('\nAvailable after issuing ISBN002:');
library.filter(b => !b.isIssued).forEach(b => console.log(b.display()));

returnBookByISBN('ISBN002');
console.log('\nAvailable after returning ISBN002:');
library.filter(b => !b.isIssued).forEach(b => console.log(b.display()));

if (typeof module !== 'undefined' && module.exports) module.exports = { Book, library, issueBookByISBN, returnBookByISBN };
