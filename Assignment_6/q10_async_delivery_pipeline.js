"use strict";
// Q10 - The Final Delivery: Async Pipeline Debugger
// Steps: takeOrder -> prepare -> pack -> dispatch -> deliver
// Each returns a Promise with random 1-2s delay and random success/failure

function delayRandom(min = 1000, max = 2000) {
    return new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (max - min + 1)) + min));
}

function step(name) {
    return async function(payload) {
        await delayRandom();
        // Simulate failure 15% chance
        if (Math.random() < 0.15) throw new Error(`${name} failed`);
        console.log(`Step: ${name} - completed`);
        return `${name} result`;
    };
}

const takeOrder = step('Order taken');
const prepare = step('Food prepared');
const pack = step('Package ready');
const dispatch = step('Out for delivery');
const deliver = step('Delivery completed');

console.log('=== Q10 - Async Delivery Pipeline ===');

async function runPipeline() {
    console.log('Start Pipeline');
    try {
        console.log('Step 1: Taking order');
        await takeOrder();

        console.log('Step 2: Preparing food');
        await prepare();

        console.log('Step 3: Packing');
        await pack();

        console.log('Step 4: Dispatching');
        await dispatch();

        console.log('Step 5: Delivering');
        await deliver();

        console.log('Delivery completed!');
    } catch (err) {
        console.error('Pipeline failed!', err.message);
    }
}

runPipeline();

// Comments:
// - Each await yields control back to the event loop while waiting, allowing microtasks/macrotasks to proceed.
// - Errors thrown inside any awaited step bubble up to the nearest try/catch, enabling single-point failure handling.
