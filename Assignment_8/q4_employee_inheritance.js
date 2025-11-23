"use strict";
// Q4 - Employee and Manager classes with runtime polymorphism

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is working in ${this.department}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Override work method
    work() {
        console.log(`${this.name} (Manager) is managing team in ${this.department}`);
    }
}

console.log('=== Q4 - Employee Inheritance / Polymorphism ===');
const e1 = new Employee('Amit', 'Engineering');
const m1 = new Manager('Sara', 'Engineering');

const staff = [e1, m1];
staff.forEach(member => member.work()); // runtime polymorphism: calls overridden method for Manager
