// Q8. Employee Salary Projection
// Calculate 5-year salary projection with yearly increments

// Initial salary and increment rate
const currentSalary = 500000; // in rupees
const annualIncrementRate = 8; // percentage

// Array to store salary projections
const salaryProjections = [];

// Calculate salary for each of the 5 years using for loop
let projectedSalary = currentSalary;

for (let year = 1; year <= 5; year++) {
    // Calculate salary for current year
    if (year > 1) {
        // Apply increment from year 2 onwards
        const incrementAmount = (projectedSalary * annualIncrementRate) / 100;
        projectedSalary += incrementAmount;
    }
    
    // Round the salary
    const roundedSalary = Math.round(projectedSalary);
    
    // Add to projections array
    salaryProjections.push({
        Year: year,
        Salary: `₹${roundedSalary.toLocaleString('en-IN')}`,
        "Numeric Value": roundedSalary
    });
}

// Display results
console.log("=== Employee Salary Projection ===");
console.log(`\nStarting Salary: ₹${currentSalary.toLocaleString('en-IN')}`);
console.log(`Annual Increment Rate: ${annualIncrementRate}%`);
console.log("\n5-Year Salary Projection:");
console.table(salaryProjections);

// Calculate total earnings over 5 years
let totalEarnings = 0;
for (let i = 0; i < salaryProjections.length; i++) {
    totalEarnings += salaryProjections[i]["Numeric Value"];
}

console.log(`\nTotal Earnings (5 years): ₹${Math.round(totalEarnings).toLocaleString('en-IN')}`);
