// Q8. Dynamic Discount Evaluator
// Calculate discounts based on product categories and cart totals

// Shopping cart with products
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

console.log("=== Dynamic Discount Evaluator ===");
console.log("\n--- Shopping Cart ---");
console.table(cart);

// Calculate subtotal and apply category discounts
let subtotal = 0;
let totalDiscount = 0;

console.log("\n--- Item-wise Discount Calculation ---");

// Process each item in cart
const itemDetails = cart.map(item => {
    let discountPercent = 0;
    
    // Determine discount based on category
    if (item.category === "electronics") {
        discountPercent = 10;
    } else if (item.category === "fashion") {
        discountPercent = 5;
    } else if (item.category === "education") {
        discountPercent = 0; // No discount for education
    }
    
    // Calculate discount amount for this item
    const discountAmount = (item.price * discountPercent) / 100;
    const finalPrice = item.price - discountAmount;
    
    // Add to subtotal
    subtotal += item.price;
    totalDiscount += discountAmount;
    
    console.log(`\n${item.item} (${item.category}):`);
    console.log(`  Original Price: ₹${item.price}`);
    console.log(`  Category Discount: ${discountPercent}%`);
    console.log(`  Discount Amount: ₹${discountAmount}`);
    console.log(`  Price after discount: ₹${finalPrice}`);
    
    return {
        item: item.item,
        category: item.category,
        originalPrice: item.price,
        discount: `${discountPercent}%`,
        discountAmount: discountAmount,
        finalPrice: finalPrice
    };
});

// Calculate cart total after category discounts
let cartTotal = subtotal - totalDiscount;

console.log("\n--- Cart Summary (After Category Discounts) ---");
console.log(`Subtotal: ₹${subtotal}`);
console.log(`Total Category Discount: ₹${totalDiscount}`);
console.log(`Cart Total: ₹${cartTotal}`);

// Check if eligible for extra overall discount
let extraDiscount = 0;
let extraDiscountPercent = 0;

if (subtotal > 50000) {
    extraDiscountPercent = 5;
    extraDiscount = (cartTotal * extraDiscountPercent) / 100;
    cartTotal -= extraDiscount;
    
    console.log("\n🎉 Extra Discount Applied!");
    console.log(`Cart value > ₹50,000: Additional ${extraDiscountPercent}% off`);
    console.log(`Extra Discount Amount: ₹${extraDiscount}`);
} else {
    console.log("\n💡 Tip: Spend more than ₹50,000 to get an extra 5% discount!");
    console.log(`   (You need ₹${50000 - subtotal} more)`);
}

// Final calculation using reduce()
const finalTotal = cart.reduce((total, item) => {
    let discount = 0;
    if (item.category === "electronics") discount = 0.10;
    else if (item.category === "fashion") discount = 0.05;
    
    return total + (item.price * (1 - discount));
}, 0);

// Apply extra discount if applicable
let grandTotal = finalTotal;
if (subtotal > 50000) {
    grandTotal = finalTotal * 0.95; // Apply 5% extra discount
}

console.log("\n=== FINAL BILL ===");
console.log(`Original Subtotal: ₹${subtotal}`);
console.log(`Category Discounts: -₹${totalDiscount}`);
if (extraDiscount > 0) {
    console.log(`Extra Discount (5%): -₹${extraDiscount.toFixed(2)}`);
}
console.log(`Total Savings: ₹${(subtotal - grandTotal).toFixed(2)}`);
console.log(`\n💰 GRAND TOTAL: ₹${grandTotal.toFixed(2)}`);
console.log(`Savings Percentage: ${((subtotal - grandTotal) / subtotal * 100).toFixed(2)}%`);

// Display detailed breakdown
console.log("\n--- Detailed Item Breakdown ---");
console.table(itemDetails);
