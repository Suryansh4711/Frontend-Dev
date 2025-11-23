// Q6. Progressive Discount System
// Apply dynamic discount tiers based on purchase amount

// Input total purchase amount
const originalTotal = 7500;

// Variables for discount calculation
let discountPercentage = 0;
let discountAmount = 0;

// Determine discount based on purchase amount
if (originalTotal >= 10000) {
    discountPercentage = 25;
} else if (originalTotal >= 5000) {
    discountPercentage = 15;
} else if (originalTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount amount
discountAmount = (originalTotal * discountPercentage) / 100;

// Calculate final price after discount
const finalPrice = originalTotal - discountAmount;

// Round the final price
const roundedFinalPrice = Math.round(finalPrice);

// Display results
console.log("=== Progressive Discount System ===");
console.log("\n--- Purchase Summary ---");
console.log(`Original Total: ₹${originalTotal}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${discountAmount.toFixed(2)}`);
console.log(`Final Price After Discount: ₹${roundedFinalPrice}`);

// Display savings
if (discountPercentage > 0) {
    console.log(`\nYou saved: ₹${discountAmount.toFixed(2)}!`);
} else {
    console.log("\nNo discount applied. Purchase more to get discounts!");
}
