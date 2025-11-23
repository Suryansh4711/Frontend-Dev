"use strict";
// Q2 - Online Food Ordering (map + Error Handling)

const menu = {
    'burger': 120,
    'pizza': 450,
    'fries': 80,
    'cold coffee': 150,
    'sandwich': 100
};

function calculateBill(orderItems = []) {
    // Map to price list and throw if invalid
    const prices = orderItems.map(item => {
        const key = item.toLowerCase();
        if (!(key in menu)) throw new Error(`Invalid menu item: ${item}`);
        return menu[key];
    });

    const total = prices.reduce((acc, p) => acc + p, 0);
    return { items: orderItems, prices, total };
}

console.log('=== Q2 - Online Food Ordering ===');
try {
    const bill = calculateBill(['Pizza', 'Fries', 'Cold Coffee']);
    console.log('Bill details:', bill);
} catch (err) {
    console.error('Error calculating bill:', err.message);
}

try {
    const bill2 = calculateBill(['Pizza', 'Sushi']); // Sushi not on menu
    console.log('Bill2 details:', bill2);
} catch (err) {
    console.error('Expected error for invalid item:', err.message);
}
