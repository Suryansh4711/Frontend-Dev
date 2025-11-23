"use strict";
// Q6 - Employee Management System (Classes + Object Methods)

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }

    // Annual salary (assuming salary is monthly)
    getAnnualSalary() {
        return +(this.salary * 12).toFixed(2);
    }

    applyBonus(percent) {
        if (typeof percent !== 'number') throw new Error('percent must be number');
        this.salary = +(this.salary + (this.salary * percent) / 100).toFixed(2);
    }
}

const employees = [
    new Employee(1, 'Amit', 'Engineering', 50000),
    new Employee(2, 'Sara', 'HR', 35000),
    new Employee(3, 'Kiran', 'Finance', 42000),
    new Employee(4, 'Neha', 'Marketing', 38000),
    new Employee(5, 'Rahul', 'Support', 32000)
];

console.log('=== Q6 - Employee Management System ===');

employees.forEach(emp => {
    console.log(`${emp.name} (${emp.department}) - Monthly: ₹${emp.salary} | Annual: ₹${emp.getAnnualSalary()}`);
});

// Apply a 5% bonus to all employees
employees.forEach(emp => emp.applyBonus(5));
console.log('\nAfter 5% bonus applied:');
employees.forEach(emp => console.log(`${emp.name} - New Monthly: ₹${emp.salary} | New Annual: ₹${emp.getAnnualSalary()}`));

// Calculate total annual payout using reduce
const totalAnnualPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log('\nTotal Annual Payout of the company: ₹' + totalAnnualPayout.toFixed(2));

if (typeof module !== 'undefined' && module.exports) module.exports = { Employee, employees };
