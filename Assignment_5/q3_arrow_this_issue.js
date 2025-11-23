"use strict";
// Q3 - Arrow function and `this` behavior

const user = {
    name: 'Amit',
    showName: () => {
        // Arrow functions do not bind their own 'this'; they inherit lexical this (likely undefined in strict mode)
        console.log('Inside arrow showName, this.name =', this && this.name);
        console.log('So this.name is undefined for arrow method in object literal. Use normal function instead.');
    }
};

console.log('=== Q3 - Arrow `this` Issue Demo ===');
user.showName();

// Fix by using a normal function expression so that 'this' refers to the object
const userFixed = {
    name: 'Amit',
    showName: function() {
        console.log('Inside normal function showName, this.name =', this.name);
    }
};

userFixed.showName();

// Explanation:
// - Arrow functions don't have their own 'this'; when used as an object method, `this` doesn't refer to the object.
// - Normal function (function expression or function declaration) binds `this` dynamically based on call site (object.method()).
