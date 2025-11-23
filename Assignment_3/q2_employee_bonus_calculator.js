"use strict";
// Q2 - Employee Bonus Calculator
// Convert salary and years to numbers, compute bonus based on years

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log('=== Q2 - Employee Bonus Calculator ===');

for (let i = 0; i < employees.length; i++) {
    try {
        const emp = employees[i];
        if (!emp) throw new Error('Missing employee object at index ' + i);
        // Ensure required properties exist
        if (!('name' in emp) || !('salary' in emp) || !('years' in emp)) {
            throw new Error(`Missing property for employee at index ${i}`);
        }

        // Convert values to numbers explicitly
        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error(`Conversion error for employee ${emp.name}: salary or years is not a number`);
        }

        // Bonus rule: 10% if years > 3, else 5%
        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;

        // Strict mode prevents accidental globals. All vars are block-scoped.
        console.log(`\nEmployee: ${emp.name}`);
        console.log(`Salary: ₹${salary.toFixed(2)}`);
        console.log(`Years: ${years}`);
        console.log(`Bonus Rate: ${(bonusRate * 100).toFixed(0)}%`);
        console.log(`Bonus Amount: ₹${bonus.toFixed(2)}`);
        console.log(`Total Compensation: ₹${(salary + bonus).toFixed(2)}`);

    } catch (err) {
        console.log(`Error processing employee at index ${i}: ${err.message}`);
    }
}

// Extra note: using "use strict" at file top prevents implicit global creation like total = 10;
// Try...catch handles missing properties and conversion issues gracefully.
