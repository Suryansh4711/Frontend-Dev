"use strict";
// Q9 - Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
    constructor() {
        this.items = []; // { name, price, quantity }
    }

    addItem(name, price, quantity = 1) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((sum, it) => sum + it.price * it.quantity, 0);
    }

    applyCoupon(code) {
        // Coupon format SAVE20 or DISC10 etc.
        if (!/^(SAVE|DISC)\d{1,2}$/.test(code)) throw new Error('Invalid coupon format');
        const percent = parseInt(code.replace(/^[A-Z]+/, ''), 10);
        if (Number.isNaN(percent) || percent <= 0) throw new Error('Invalid coupon percent');
        const total = this.getTotal();
        const discount = (total * percent) / 100;
        return { total, discount, finalTotal: +(total - discount).toFixed(2) };
    }
}

console.log('=== Q9 - Shopping Cart ===');
const cart = new Cart();
cart.addItem('Laptop', 45000, 1);
cart.addItem('Shoes', 2500, 2);
cart.addItem('Book', 600, 1);
console.log('Cart items:', cart.items);
console.log('Cart total:', cart.getTotal());

try {
    const couponResult = cart.applyCoupon('SAVE10');
    console.log('Coupon applied:', couponResult);
} catch (err) {
    console.log('Coupon error:', err.message);
}

try {
    cart.applyCoupon('INVALID');
} catch (err) {
    console.log('Expected invalid coupon error:', err.message);
}

if (typeof module !== 'undefined' && module.exports) module.exports = { Cart };
