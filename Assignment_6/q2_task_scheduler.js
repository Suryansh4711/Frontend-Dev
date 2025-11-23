"use strict";
// Q2 - Task Scheduler: microtask vs macrotask demo

console.log('=== Q2 - Task Scheduler ===');

console.log('Start');

setTimeout(() => {
    console.log('macrotask: setTimeout callback');
}, 0);

Promise.resolve().then(() => {
    console.log('microtask: Promise.then callback');
});

console.log('Synchronous log');

console.log('End');

/*
Predicted ordering (and explanation):
1. Start (sync)
2. Synchronous log (sync)
3. End (sync)
4. microtask: Promise.then callback (microtasks run after current stack finishes, before macrotasks)
5. macrotask: setTimeout callback (macrotasks run after microtasks)

Microtasks (Promise callbacks) run before macrotasks (setTimeout) because the event loop processes the microtask queue immediately after the current call stack completes.
*/
