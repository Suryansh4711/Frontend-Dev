// Q3. Math Utility Dashboard
// Scientific calculator math operations dashboard

// Input number
const x = 16.75;

console.log("=== Math Utility Dashboard ===");
console.log(`\nInput Number (x): ${x}`);

// Calculate various math operations
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubedValue = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10; // Random between 10-50

// Additional calculations
const absoluteValue = Math.abs(x);
const floorValue = Math.floor(x);
const ceilValue = Math.ceil(x);

// Display formatted results using template literals
console.log("\n--- Basic Operations ---");
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot.toFixed(4)}`);
console.log(`Cubed Value (x³): ${cubedValue.toFixed(2)}`);
console.log(`Random Number (10-50): ${randomNumber}`);

console.log("\n--- Additional Operations ---");
console.log(`Absolute Value: ${absoluteValue}`);
console.log(`Floor Value: ${floorValue}`);
console.log(`Ceiling Value: ${ceilValue}`);

// Formatted Result Summary
console.log("\n╔════════════════════════════════════════════╗");
console.log("║        MATH OPERATIONS SUMMARY             ║");
console.log("╠════════════════════════════════════════════╣");
console.log(`║ Input:          ${x.toString().padEnd(24)} ║`);
console.log(`║ Rounded:        ${roundedValue.toString().padEnd(24)} ║`);
console.log(`║ Square Root:    ${squareRoot.toFixed(4).padEnd(24)} ║`);
console.log(`║ Cubed:          ${cubedValue.toFixed(2).padEnd(24)} ║`);
console.log(`║ Random (10-50): ${randomNumber.toString().padEnd(24)} ║`);
console.log("╚════════════════════════════════════════════╝");

// More complex calculations
console.log("\n--- Advanced Calculations ---");
const sine = Math.sin(x);
const cosine = Math.cos(x);
const exponential = Math.exp(1); // e^1
const logarithm = Math.log(x);

console.log(`sin(${x}) = ${sine.toFixed(4)}`);
console.log(`cos(${x}) = ${cosine.toFixed(4)}`);
console.log(`e (Euler's number) = ${exponential.toFixed(4)}`);
console.log(`ln(${x}) = ${logarithm.toFixed(4)}`);
