"use strict";
// Q2 - applyOperation(numbers, operation)
// Takes an array and a callback operation to transform the array

function applyOperation(numbers, operation) {
    if (!Array.isArray(numbers)) throw new Error('numbers must be array');
    if (typeof operation !== 'function') throw new Error('operation must be function');
    return numbers.map(operation);
}

console.log('=== Q2 - applyOperation Demo ===');
const arr = [1,2,3,4];
const doubled = applyOperation(arr, n => n * 2);
console.log('Original:', arr);
console.log('Doubled:', doubled);

const squared = applyOperation(arr, n => n * n);
console.log('Squared:', squared);

// Demonstrates higher-order function usage: applyOperation receives a callback that defines behavior.
