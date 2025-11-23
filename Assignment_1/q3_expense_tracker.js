// Q3. Monthly Expense Tracker
// Calculate total and average monthly expenses with dynamic updates

// Array of expenses for 5 categories
const expenses = [
    { category: "Food", amount: 5000 },
    { category: "Travel", amount: 3000 },
    { category: "Rent", amount: 15000 },
    { category: "Bills", amount: 2500 },
    { category: "Leisure", amount: 4500 }
];

// Calculate total expenses
let totalExpenses = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i].amount;
}

// Calculate average expense
const averageExpense = totalExpenses / expenses.length;

// Add 10% tax to total
const taxRate = 0.10;
const taxAmount = totalExpenses * taxRate;
totalExpenses += taxAmount; // Using assignment operator

// Round values to 2 decimal places
const roundedTotal = totalExpenses.toFixed(2);
const roundedAverage = averageExpense.toFixed(2);
const roundedTax = taxAmount.toFixed(2);

// Display results
console.log("=== Monthly Expense Tracker ===");
console.log("\nExpense Breakdown:");
console.table(expenses);

console.log("\n--- Summary ---");
console.log(`Average Expense per Category: ₹${roundedAverage}`);
console.log(`Tax Amount (10%): ₹${roundedTax}`);
console.log(`Final Total (including tax): ₹${roundedTotal}`);
