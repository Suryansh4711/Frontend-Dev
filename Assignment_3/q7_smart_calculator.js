"use strict";
// Q7 - Smart Calculator
// Handle basic operations with error handling for divide by zero and invalid roots

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0; // example numbers

class CalculatorError extends Error {}
class DivideByZeroError extends CalculatorError {}
class NegativeRootError extends CalculatorError {}
class InvalidOperationError extends CalculatorError {}

function calculate(op, a, b) {
    switch (op) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            if (b === 0) throw new DivideByZeroError('Cannot divide by zero');
            return a / b;
        case 'power':
            return Math.pow(a, b);
        case 'root':
            if (a < 0) throw new NegativeRootError('Cannot take root of negative number');
            // b is degree of root; default square root if b === 2
            return Math.pow(a, 1 / (b || 2));
        default:
            throw new InvalidOperationError(`Operation '${op}' not supported`);
    }
}

console.log('=== Q7 - Smart Calculator ===');

operations.forEach(op => {
    try {
        const result = calculate(op, num1, num2);
        console.log(`Operation: ${op} | ${num1} ${op} ${num2} => Result: ${result}`);
    } catch (err) {
        if (err instanceof DivideByZeroError) {
            console.log(`Operation: ${op} | Error: DivideByZero - ${err.message}`);
        } else if (err instanceof NegativeRootError) {
            console.log(`Operation: ${op} | Error: NegativeRoot - ${err.message}`);
        } else if (err instanceof InvalidOperationError) {
            console.log(`Operation: ${op} | Error: InvalidOperation - ${err.message}`);
        } else {
            console.log(`Operation: ${op} | Error: ${err.message}`);
        }
    }
});

// Formatted summary for a selected operation
console.log('\n-- Summary Example (divide) --');
try {
    const res = calculate('divide', num1, num2);
    console.log(`Result: ${res}`);
} catch (err) {
    console.log(`Failed to compute divide: ${err.name} - ${err.message}`);
}

// Notes: use try...catch when calling calculate to handle domain errors explicitly.

