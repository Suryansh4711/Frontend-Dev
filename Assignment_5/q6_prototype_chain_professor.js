"use strict";
// Q6 - Prototype chain: Person -> Faculty -> Professor

function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() { console.log(`Person name: ${this.name}`); };

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getDepartment = function() { console.log(`Faculty dept: ${this.department}`); };

function Professor(name, department, level) {
    Faculty.call(this, name, department);
    this.level = level;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getLevel = function() { console.log(`Professor level: ${this.level}`); };

console.log('=== Q6 - Person -> Faculty -> Professor Prototype Chain ===');
const prof = new Professor('Dr. Kiran', 'Computer Science', 'Senior');
// Professor can access methods up the chain
prof.getName();
prof.getDepartment();
prof.getLevel();

// Confirm instanceof relationships
console.log('prof instanceof Professor:', prof instanceof Professor);
console.log('prof instanceof Faculty:', prof instanceof Faculty);
console.log('prof instanceof Person:', prof instanceof Person);
