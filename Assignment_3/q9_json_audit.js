"use strict";
// Q9 - JSON Audit
// Parse raw JSON entries, detect invalid JSON and missing keys.

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

console.log('=== Q9 - JSON Audit ===');

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];
    try {
        const parsed = JSON.parse(line);
        // Check required keys
        if (!('user' in parsed) || !('age' in parsed)) {
            throw new Error(`Missing keys in parsed object at line ${i}: keys=${Object.keys(parsed).join(',')}`);
        }
        // Convert age to Number if possible
        parsed.age = Number(parsed.age);
        if (Number.isNaN(parsed.age)) {
            throw new Error(`Invalid age value at line ${i}`);
        }
        // push to clean array
        clean.push(parsed);
        console.log(`✔ Parsed line ${i}: user=${parsed.user}, age=${parsed.age}`);
    } catch (err) {
        errors.push({ line: i, raw: line, message: err.message });
        console.log(`✖ Error parsing line ${i}: ${err.message}`);
    }
}

console.log('\n--- Clean Data ---');
console.table(clean);
console.log('\n--- Errors ---');
console.table(errors);

// Bonus: filter out under-18 users
const adults = clean.filter(u => u.age >= 18);
const minors = clean.filter(u => u.age < 18);
console.log('\nAdults (>=18):');
console.table(adults);
console.log('\nMinors (<18):');
console.table(minors);

// Debug note: set breakpoint inside try block to inspect 'parsed' and control flow when JSON.parse throws.

