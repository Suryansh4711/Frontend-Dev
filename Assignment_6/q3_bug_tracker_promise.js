"use strict";
// Q3 - Bug Tracker: convert callback to Promise

function fetchBugs(callback) {
    setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Promise-based version
function getBugs() {
    return new Promise((resolve, reject) => {
        // Simulate random API failure
        const failed = Math.random() < 0.2;
        setTimeout(() => {
            if (failed) return reject(new Error('API Error: Failed to fetch bugs'));
            resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

console.log('=== Q3 - Bug Tracker (Promise) ===');

// Using old callback (for reference)
fetchBugs((bugs) => {
    console.log('(callback) Bugs:');
    console.table(bugs);
});

// Using Promise-based version
getBugs()
    .then(bugs => {
        console.log('(promise) Bugs:');
        console.table(bugs);
    })
    .catch(err => console.error('(promise) Error fetching bugs:', err.message));

// Alternatively with async/await
(async function() {
    try {
        const bugs = await getBugs();
        console.log('(async/await) Bugs:');
        console.table(bugs);
    } catch (err) {
        console.error('(async/await) Error fetching bugs:', err.message);
    }
})();
