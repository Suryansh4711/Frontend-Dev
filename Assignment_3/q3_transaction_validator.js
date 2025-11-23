"use strict";
// Q3 - Transaction Validator
// Validate transactions, throw custom errors, categorize results

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullEntryError extends TransactionError {}

const validTransactions = [];
const invalidTransactions = [];

console.log('=== Q3 - Transaction Validator ===');

for (let i = 0; i < transactions.length; i++) {
    try {
        const tx = transactions[i];
        if (tx === null) throw new NullEntryError(`Transaction at index ${i} is null`);
        if (typeof tx !== 'object') throw new MissingFieldError(`Invalid transaction type at index ${i}`);
        if (!('id' in tx)) throw new MissingFieldError(`Missing id for transaction at index ${i}`);
        if (!('amount' in tx)) throw new MissingFieldError(`Missing amount for transaction id ${tx.id}`);
        if (typeof tx.amount !== 'number') throw new TransactionError(`Amount is not a number for id ${tx.id}`);
        if (tx.amount < 0) throw new NegativeAmountError(`Negative amount for id ${tx.id}: ${tx.amount}`);

        // If all checks pass
        validTransactions.push(tx);
        console.log(`✔ Transaction ${tx.id} processed: amount=${tx.amount}`);
    } catch (err) {
        // Categorize
        if (err instanceof NegativeAmountError) {
            invalidTransactions.push({ index: i, type: 'NegativeAmount', message: err.message });
            console.log(`✖ NegativeAmountError: ${err.message}`);
        } else if (err instanceof MissingFieldError) {
            invalidTransactions.push({ index: i, type: 'MissingField', message: err.message });
            console.log(`✖ MissingFieldError: ${err.message}`);
        } else if (err instanceof NullEntryError) {
            invalidTransactions.push({ index: i, type: 'NullEntry', message: err.message });
            console.log(`✖ NullEntryError: ${err.message}`);
        } else {
            invalidTransactions.push({ index: i, type: 'Other', message: err.message });
            console.log(`✖ Error: ${err.message}`);
        }
    }
}

console.log('\n--- Final Report ---');
console.log(`Valid transactions count: ${validTransactions.length}`);
console.log(validTransactions);
console.log(`Failed transactions count: ${invalidTransactions.length}`);
console.table(invalidTransactions);

// Debug note: set a breakpoint inside the for-loop (e.g., on the try line) to watch 'tx' and error categories.
// In VS Code you can add a Watch for 'tx' and step through each iteration to inspect memory/state.

