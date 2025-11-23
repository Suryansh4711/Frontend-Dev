"use strict";
// Q9 - Rewrite Person -> Student using ES6 classes and compare with prototype version

class Person {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name (class): ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    printBranch() {
        console.log(`Branch (class): ${this.branch}`);
    }
}

console.log('=== Q9 - ES6 Classes Demo ===');
const student = new Student('Amit', 'Computer Science');
student.printName();
student.printBranch();

// Compare with prototype version created earlier (if exists in same runtime)
if (typeof require !== 'undefined') {
    try {
        const proto = require('../Assignment_5/q5_person_student_prototype.js');
        // The prototype module doesn't export the constructors; so we just note the conceptual parity in comments.
        console.log('Prototype version exists as file for comparison; both approaches create same runtime behavior: instanceof checks and shared methods via prototype.');
    } catch (e) {
        // ignore
    }
}

// Demonstrate instanceof
console.log('student instanceof Student:', student instanceof Student);
console.log('student instanceof Person:', student instanceof Person);

// Explanation:
// - ES6 class syntax is syntactic sugar over prototype-based inheritance. Methods are placed on the prototype and behavior is the same.
