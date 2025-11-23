"use strict";
// Q4 - Car constructor and prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(`Car: ${this.brand} ${this.model}`);
};

console.log('=== Q4 - Car Prototype Demo ===');
const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

car1.getDetails();
car2.getDetails();

// Demonstrates method sharing: getDetails lives on Car.prototype, not duplicated per instance.
console.log('getDetails is same function reference for both:', car1.getDetails === car2.getDetails);
