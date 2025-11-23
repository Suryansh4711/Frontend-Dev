"use strict";
// Q1 - greetUser(name, callback)
// Prints greeting then executes callback showEndMessage

function showEndMessage() {
    console.log('Welcome to the course!');
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    // Simulate asynchronous behavior with setTimeout to illustrate callback flow
    if (typeof callback === 'function') {
        setTimeout(() => {
            callback();
        }, 100); // 100ms delay
    }
}

console.log('=== Q1 - Callback Flow Demo ===');
greetUser('Amit', showEndMessage);

// Demonstrate inline callback
greetUser('Sara', () => console.log('Welcome to the course! (inline callback)'));

// Note: callbacks can be synchronous or asynchronous. Here we used setTimeout to mimic async flow.
