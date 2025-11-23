"use strict";
// Q1 - The Startup Morning: Async Coffee Maker
// Three async steps returning Promises: boilWater, brewCoffee, pourCoffee
// Use Promise chaining (.then()) and .catch() to handle errors

function randomDelay(min = 1000, max = 2000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maybeFail(probability = 0.15) {
    return Math.random() < probability;
}

function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = randomDelay();
        setTimeout(() => {
            if (maybeFail()) return reject(new Error('Boiler malfunction'));
            console.log('Step 1: Water boiled');
            resolve('boiled water');
        }, delay);
    });
}

function brewCoffee(water) {
    return new Promise((resolve, reject) => {
        const delay = randomDelay();
        setTimeout(() => {
            if (maybeFail()) return reject(new Error('Grinder jammed'));
            console.log('Step 2: Coffee brewed using', water);
            resolve('fresh coffee');
        }, delay);
    });
}

function pourCoffee(coffee) {
    return new Promise((resolve, reject) => {
        const delay = randomDelay();
        setTimeout(() => {
            if (maybeFail()) return reject(new Error('Cup broke'));
            console.log('Step 3: Coffee poured into cup');
            resolve('Coffee ready for the team!');
        }, delay);
    });
}

console.log('=== Q1 - Async Coffee Maker ===');

// Promise chaining
boilWater()
    .then(water => brewCoffee(water))
    .then(coffee => pourCoffee(coffee))
    .then(msg => console.log(msg))
    .catch(err => console.error('Coffee process failed:', err.message));

// Also show the same with a short async/await function (for demonstration)
(async function demoAsyncAwait() {
    try {
        const water = await boilWater();
        const coffee = await brewCoffee(water);
        const msg = await pourCoffee(coffee);
        console.log('(async/await) ' + msg);
    } catch (err) {
        console.error('(async/await) Coffee process failed:', err.message);
    }
})();
