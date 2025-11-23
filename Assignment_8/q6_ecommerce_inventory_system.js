"use strict";
// Q6 - E-Commerce Inventory System (filter, sort, reduce, groupBy)

const products = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 45000, stock: 5 },
    { id: 2, name: 'Shoes', category: 'fashion', price: 2500, stock: 20 },
    { id: 3, name: 'Book', category: 'education', price: 600, stock: 2 },
    { id: 4, name: 'Headphones', category: 'electronics', price: 1500, stock: 0 },
    { id: 5, name: 'T-Shirt', category: 'fashion', price: 499, stock: 50 }
];

function getLowStockProducts(threshold = 5) {
    return products.filter(p => p.stock <= threshold);
}

function sortProductsByPrice(ascending = true) {
    return [...products].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((acc, p) => acc + p.price * p.stock, 0);
}

function groupByCategory() {
    return products.reduce((acc, p) => {
        if (!acc[p.category]) acc[p.category] = [];
        acc[p.category].push(p);
        return acc;
    }, {});
}

console.log('=== Q6 - E-Commerce Inventory System ===');
console.log('Low stock products:', getLowStockProducts());
console.log('Products sorted by price (asc):', sortProductsByPrice(true));
console.log('Total inventory value: ₹' + calculateTotalInventoryValue());
console.log('Grouped by category:');
console.table(groupByCategory());
