"use strict";
// Q4 - DevOps Delay: Promise.all and Promise.race

function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) return reject(new Error('Server A failure'));
            resolve('Server A deployed');
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) return reject(new Error('Server B failure'));
            resolve('Server B deployed');
        }, 3000);
    });
}

console.log('=== Q4 - DevOps Delay ===');

// Promise.all
Promise.all([serverA(), serverB()])
    .then(results => console.log('Deployment completed for all servers:', results))
    .catch(err => console.error('Deployment error (all):', err.message));

// Promise.race
Promise.race([serverA(), serverB()])
    .then(fastest => console.log('Fastest response:', fastest))
    .catch(err => console.error('Deployment error (race):', err.message));

// Note: Both serverA() and serverB() are invoked twice above; in a real app you'd create single promises and reuse them.
