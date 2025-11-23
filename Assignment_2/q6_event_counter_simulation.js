// Q6. Event-Based Counter Simulation
// Simulate click events with increment and decrement functions

// Global counter variable
let count = 0;

// Function to increment counter
function increment() {
    count++; // Increase count by 1
    console.log(`➕ Increment clicked! Current count: ${count}`);
    
    // Nested function to show function scope
    function showCountDetails() {
        // This nested function has access to the outer function's scope
        console.log(`   [Inner Scope] Count value is now: ${count}`);
        
        // Check milestone
        if (count % 5 === 0 && count !== 0) {
            console.log(`   🎉 Milestone reached: ${count}!`);
        }
    }
    
    // Call nested function
    showCountDetails();
}

// Function to decrement counter
function decrement() {
    count--; // Decrease count by 1
    console.log(`➖ Decrement clicked! Current count: ${count}`);
    
    // Nested function to show function scope
    function showCountDetails() {
        // This nested function has access to the outer function's scope
        console.log(`   [Inner Scope] Count value is now: ${count}`);
        
        // Check if negative
        if (count < 0) {
            console.log(`   ⚠️  Warning: Count is negative!`);
        }
    }
    
    // Call nested function
    showCountDetails();
}

// Function to reset counter
function reset() {
    const previousCount = count;
    count = 0;
    console.log(`🔄 Reset clicked! Count changed from ${previousCount} to ${count}`);
}

// Function to display current count
function displayCount() {
    console.log(`\n📊 Current Counter Value: ${count}`);
}

// Main execution - Simulate button clicks
console.log("=== Event-Based Counter Simulation ===");
console.log(`Initial count: ${count}\n`);

// Simulate multiple click events
console.log("--- Simulating User Clicks ---\n");

// Simulate 3 increment clicks
console.log("🖱️  User clicks Increment button:");
increment();
increment();
increment();

displayCount();

// Simulate 1 decrement click
console.log("\n🖱️  User clicks Decrement button:");
decrement();

displayCount();

// Simulate more increments
console.log("\n🖱️  User clicks Increment button 5 times:");
increment();
increment();
increment();
increment();
increment();

displayCount();

// Simulate decrements to negative
console.log("\n🖱️  User clicks Decrement button 10 times:");
for (let i = 0; i < 10; i++) {
    decrement();
}

displayCount();

// Reset counter
console.log("\n🖱️  User clicks Reset button:");
reset();

displayCount();

// Final demonstration of scope
console.log("\n--- Scope Demonstration ---");
console.log(`Global 'count' variable is accessible: ${count}`);
console.log("Nested functions have access to 'count' through closure.");
