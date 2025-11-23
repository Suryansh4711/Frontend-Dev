"use strict";
// Q3 - Product Discount System (constructor + prototype)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    if (typeof percent !== 'number' || percent < 0) throw new Error('Invalid discount percent');
    const discounted = +(this.price * (1 - percent / 100)).toFixed(2);
    return discounted;
};

console.log('=== Q3 - Product Discount System ===');
const p1 = new Product('Laptop', 45000);
const p2 = new Product('Shoes', 2500);
const p3 = new Product('Book', 600);

console.log(`${p1.name} original: ₹${p1.price} -> after 10%: ₹${p1.applyDiscount(10)}`);
console.log(`${p2.name} original: ₹${p2.price} -> after 5%: ₹${p2.applyDiscount(5)}`);
console.log(`${p3.name} original: ₹${p3.price} -> after 20%: ₹${p3.applyDiscount(20)}`);

// Abstraction note:
// The applyDiscount prototype method encapsulates discount calculation logic so callers simply request new price without handling math repeatedly.
