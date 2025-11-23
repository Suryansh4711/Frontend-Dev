"use strict";
// Q5 - Ride-Sharing Application (User, Driver, Trip)

class User {
    constructor(name, rating = 5) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle; // object { make, model, number }
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance; // in km
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null) throw new Error('Distance is required');
        if (typeof this.distance !== 'number' || this.distance < 0) throw new Error('Invalid distance');
        const base = 50; // base fare
        const perKm = 12; // per km rate
        return base + this.distance * perKm;
    }
}

console.log('=== Q5 - Ride-Sharing Application ===');
const rider = new User('Kiran', 4.8);
const driver = new Driver('Neha', 4.9, { make: 'Toyota', model: 'Innova', number: 'XYZ-1234' });

try {
    const trip = new Trip('A', 'B', 12.5);
    console.log('Calculated fare: ₹' + trip.calculateFare());
} catch (err) {
    console.error('Trip error:', err.message);
}

try {
    const badTrip = new Trip('A', 'B', -5);
    console.log(badTrip.calculateFare());
} catch (err) {
    console.error('Expected error for negative distance:', err.message);
}
