// Q9. Odd–Even Number Analyzer
// Classify numbers 1-30 based on multiple conditions (FizzBuzz variant)

console.log("=== Odd–Even Number Analyzer ===");

// Create array of numbers from 1 to 30 using a loop
const numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

console.log("\n--- Numbers Array (1-30) ---");
console.log(numbers.join(', '));

// Array to store results
const results = [];

console.log("\n--- Classification Results ---");

// Analyze each number
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    let classification;
    
    // Check conditions in order of priority
    if (num % 3 === 0 && num % 5 === 0) {
        // Divisible by both 3 and 5
        classification = "FizzBuzz";
    } else if (num % 2 === 0) {
        // Even number
        classification = "Even";
    } else {
        // Odd number
        classification = "Odd";
    }
    
    // Store result
    results.push(classification);
    
    // Print result with emoji
    let emoji;
    if (classification === "FizzBuzz") emoji = "🎯";
    else if (classification === "Even") emoji = "⚡";
    else emoji = "⭐";
    
    console.log(`${emoji} ${num}: ${classification}`);
}

// Display results array
console.log("\n--- Results Array ---");
console.log(results);

// Statistical analysis
const fizzBuzzCount = results.filter(r => r === "FizzBuzz").length;
const evenCount = results.filter(r => r === "Even").length;
const oddCount = results.filter(r => r === "Odd").length;

console.log("\n--- Statistical Summary ---");
console.log(`Total Numbers Analyzed: ${numbers.length}`);
console.log(`FizzBuzz (divisible by 3 & 5): ${fizzBuzzCount}`);
console.log(`Even Numbers: ${evenCount}`);
console.log(`Odd Numbers: ${oddCount}`);

// Display in table format
const summary = [];
for (let i = 0; i < numbers.length; i++) {
    summary.push({
        Number: numbers[i],
        Classification: results[i],
        "Divisible by 3": numbers[i] % 3 === 0 ? "Yes" : "No",
        "Divisible by 5": numbers[i] % 5 === 0 ? "Yes" : "No"
    });
}

console.log("\n--- Detailed Classification Table ---");
console.table(summary);

// Find specific patterns
console.log("\n--- Pattern Analysis ---");
const fizzBuzzNumbers = numbers.filter((num, index) => results[index] === "FizzBuzz");
const evenNumbers = numbers.filter((num, index) => results[index] === "Even");
const oddNumbers = numbers.filter((num, index) => results[index] === "Odd");

console.log(`FizzBuzz Numbers: ${fizzBuzzNumbers.join(', ')}`);
console.log(`Even Numbers: ${evenNumbers.join(', ')}`);
console.log(`Odd Numbers: ${oddNumbers.join(', ')}`);
