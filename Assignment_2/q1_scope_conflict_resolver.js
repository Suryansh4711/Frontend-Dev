// Q1. Scope Conflict Resolver
// Demonstrating proper variable scoping in a payroll system

// Global variable - accessible throughout the entire script
let bonus = 5000;

// Function to calculate total salary
function calculateSalary(isPermanent) {
    // Local variable - only accessible within this function
    let salary = 40000;
    
    console.log("\n--- Inside calculateSalary() Function ---");
    console.log(`Base Salary: ₹${salary}`);
    console.log(`Global Bonus: ₹${bonus}`);
    console.log(`Is Permanent Employee: ${isPermanent}`);
    
    // Add bonus only if employee is permanent
    if (isPermanent) {
        // Total salary includes bonus for permanent employees
        let totalSalary = salary + bonus;
        console.log(`✅ Bonus Applied: ₹${bonus}`);
        console.log(`Total Salary: ₹${totalSalary}`);
        return totalSalary;
    } else {
        // No bonus for non-permanent employees
        console.log(`❌ Bonus Not Applied (Not Permanent)`);
        console.log(`Total Salary: ₹${salary}`);
        return salary;
    }
}

// Main execution
console.log("=== Scope Conflict Resolver ===");
console.log(`\nInitial Global Bonus: ₹${bonus}`);

// Test Case 1: Permanent Employee
console.log("\n--- Test Case 1: Permanent Employee ---");
calculateSalary(true);

// Test Case 2: Non-Permanent Employee
console.log("\n--- Test Case 2: Non-Permanent Employee ---");
calculateSalary(false);

// Demonstrate global scope change
console.log("\n--- Modifying Global Bonus ---");
bonus = 8000; // Changing global variable
console.log(`Updated Global Bonus: ₹${bonus}`);

// Test Case 3: After global variable change
console.log("\n--- Test Case 3: After Global Bonus Change ---");
calculateSalary(true);

// Demonstrate that local variable 'salary' is not accessible outside function
console.log("\n--- Scope Demonstration ---");
console.log(`Can access global 'bonus' outside function: ₹${bonus}`);
try {
    console.log(salary); // This will throw an error
} catch (error) {
    console.log(`❌ Cannot access local 'salary' outside function: ${error.message}`);
}
