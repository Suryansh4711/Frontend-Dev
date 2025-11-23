"use strict";
// Q5 - Person and Student using constructor functions and prototype inheritance

function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // Call Person constructor to set name
    Person.call(this, name);
    this.branch = branch;
}

// Inherit from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

console.log('=== Q5 - Person -> Student (Prototype) Demo ===');
const s1 = new Student('Amit', 'Computer Science');
s1.printName();
s1.printBranch();

// Confirm prototype chain
console.log('s1 instanceof Student:', s1 instanceof Student);
console.log('s1 instanceof Person:', s1 instanceof Person);
