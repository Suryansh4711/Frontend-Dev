"use strict";
// Q9 - Debugging the Event Loop
// Predict execution order for microtasks (Promise.then) and macrotasks (setTimeout)

/* Prediction:
Script start
Script end
Promise callback
Timeout callback

Explanation: Synchronous logs run first. After the call stack clears, microtasks (Promise callbacks)
are processed before macrotasks (setTimeout callbacks).
*/

console.log('=== Q9 - Event Loop Debugging ===');
console.log('Script start');
setTimeout(() => console.log('Timeout callback'), 0);
Promise.resolve().then(() => console.log('Promise callback'));
console.log('Script end');

// Run this file to compare predicted and actual outputs. The actual output should match the prediction above.
