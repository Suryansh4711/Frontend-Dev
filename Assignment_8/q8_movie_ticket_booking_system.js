"use strict";
// Q8 - Movie Ticket Booking System (class inheritance + prototype method)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    console.log(`Ticket - Movie: ${this.movieName} | Seat: ${this.seatNo} | Price: $${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee = 10) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return +(this.price + this.convenienceFee).toFixed(2);
    }
}

console.log('=== Q8 - Movie Ticket Booking System ===');
const t1 = new OnlineTicket('Avengers', 'A10', 12.5, 2.5);
console.log('Total amount:', t1.getTotalAmount());

// Call prototype method from base (MovieTicket.prototype) on OnlineTicket instance
t1.printTicket();

// Demonstrate prototype chain: printTicket is defined on MovieTicket.prototype and available to OnlineTicket instances
console.log('t1.__proto__ === OnlineTicket.prototype:', t1.__proto__ === OnlineTicket.prototype);
console.log('OnlineTicket.prototype.__proto__ === MovieTicket.prototype:', OnlineTicket.prototype.__proto__ === MovieTicket.prototype);
