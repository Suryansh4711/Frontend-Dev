"use strict";
// Q7 - Banking Application (private field #balance)

class BankAccount {
    #balance = 0;
    constructor(initial = 0) {
        this.#balance = initial;
    }

    deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) throw new Error('Invalid deposit amount');
        this.#balance += amount;
        console.log(`Deposited: ₹${amount}. Current balance: ₹${this.getBalance()}`);
    }

    withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) throw new Error('Invalid withdraw amount');
        if (amount > this.#balance) throw new Error('Insufficient balance');
        this.#balance -= amount;
        console.log(`Withdrawn: ₹${amount}. Current balance: ₹${this.getBalance()}`);
    }

    getBalance() {
        return +this.#balance.toFixed(2);
    }
}

console.log('=== Q7 - Banking Application ===');
const acc = new BankAccount(1000);
acc.deposit(500);
try {
    acc.withdraw(2000);
} catch (err) {
    console.error('Expected withdrawal error:', err.message);
}
acc.withdraw(300);
console.log('Final balance:', acc.getBalance());
