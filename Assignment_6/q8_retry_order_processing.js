"use strict";
// Q8 - Order Processing Flow: Async Retry Mechanism

function submitOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() >= 0.5; // 50% chance
            if (success) resolve('Order submitted: ' + JSON.stringify(order));
            else reject(new Error('Random submit failure'));
        }, 500);
    });
}

async function processOrder(order) {
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const res = await submitOrder(order);
            console.log(`Attempt ${attempt}: Success -`, res);
            return res;
        } catch (err) {
            console.log(`Attempt ${attempt}: Failed -`, err.message);
            if (attempt === maxAttempts) {
                throw new Error('Order could not be processed');
            }
            // wait a bit before retrying
            await new Promise(r => setTimeout(r, 300));
        }
    }
}

console.log('=== Q8 - Retry Order Processing ===');

(async function() {
    try {
        await processOrder({ id: 123, items: ['book', 'pen'] });
    } catch (err) {
        console.error('Final result: ', err.message);
    }
})();
