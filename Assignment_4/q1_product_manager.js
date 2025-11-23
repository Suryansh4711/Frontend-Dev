"use strict";
// Q1 - E-Commerce Product Manager (Classes + Objects)
// Product class with id, name, price, category

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price; // numeric
        this.category = category;
    }

    // Apply a discount percentage (e.g., 10 means 10%)
    applyDiscount(percent) {
        if (typeof percent !== 'number' || percent < 0) throw new Error('Invalid discount percent');
        const discountAmount = (this.price * percent) / 100;
        this.price = +(this.price - discountAmount).toFixed(2);
        return this.price;
    }

    // Display product details in formatted string
    displayDetails() {
        return `Product [${this.id}] - ${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, 'Smartphone X', 45000, 'electronics'),
    new Product(2, 'Bluetooth Headset', 1200, 'accessories'),
    new Product(3, 'Coffee Mug', 350, 'kitchen'),
    new Product(4, 'Gaming Laptop', 120000, 'electronics'),
    new Product(5, 'Notebook', 150, 'stationery')
];

console.log('=== Q1 - Product Manager ===');
console.log('\nAll Products:');
products.forEach(p => console.log(p.displayDetails()));

// Apply a discount example
console.log('\nApplying 10% discount to product id=2 (Bluetooth Headset)');
products[1].applyDiscount(10);
console.log(products[1].displayDetails());

// Display products with price > 1000 using filter
const premiumProducts = products.filter(p => p.price > 1000);
console.log('\nProducts with price > 1000:');
premiumProducts.forEach(p => console.log(p.displayDetails()));

// Export Product and products when running in module environments (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Product, products };
}
