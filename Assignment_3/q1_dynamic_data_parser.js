"use strict";
// Q1 - Dynamic Data Parser
// Convert each API value to Number, Boolean, and String forms.
// Skip invalid numeric values and log them separately.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to collect results
const validNumeric = [];
const invalidNumeric = [];
const detailedReport = [];

// Helper to test if string represents a valid number
function toNumberSafe(value) {
    // Number(null) === 0, Number(undefined) === NaN
    const num = Number(value);
    // Consider whitespace-only strings and strings with non-numeric suffix as invalid
    if (typeof value === 'string') {
        const trimmed = value.trim();
        // empty after trim -> invalid
        if (trimmed === '') return NaN;
        // numeric check: allow optional leading/trailing spaces, digits, optional decimal
        // Use a strict regex to detect plain numbers
        if (!/^[-+]?\d+(\.\d+)?$/.test(trimmed)) return NaN;
    }
    return num;
}

console.log('=== Q1 - Dynamic Data Parser ===');

for (let i = 0; i < apiData.length; i++) {
    const raw = apiData[i];
    const asString = String(raw);
    const asBoolean = Boolean(raw);
    const asNumber = toNumberSafe(raw);

    // Build entry for detailed report
    const entry = {
        index: i,
        raw,
        asString,
        asBoolean,
        asNumber
    };

    if (Number.isNaN(asNumber)) {
        // Skip invalid numeric values but log separately
        invalidNumeric.push({ index: i, raw, reason: 'Invalid number (NaN or non-numeric string)' });
    } else {
        validNumeric.push(asNumber);
    }

    detailedReport.push(entry);
}

// Print detailed report
console.log('\nDetailed conversions:');
detailedReport.forEach(item => {
    console.log(`Index ${item.index}: raw=${JSON.stringify(item.raw)} | String="${item.asString}" | Boolean=${item.asBoolean} | Number=${item.asNumber}`);
});

console.log('\nValid numeric values array:', validNumeric);
console.log('\nInvalid numeric entries (skipped):');
invalidNumeric.forEach(inv => console.log(`Index ${inv.index}: raw=${JSON.stringify(inv.raw)} - ${inv.reason}`));

// Summary
console.log('\n=== Summary ===');
console.log(`Total items: ${apiData.length}`);
console.log(`Valid numbers: ${validNumeric.length} -> [${validNumeric.join(', ')}]`);
console.log(`Invalid numbers: ${invalidNumeric.length}`);

// Conditional formatting example: highlight floats
const floats = validNumeric.filter(n => !Number.isInteger(n));
if (floats.length) console.log('Floats detected:', floats);

// Notes (for debugging):
// - null converts to 0 by Number(null)
// - undefined converts to NaN
// - strings with non-numeric characters are rejected by our regex (e.g. "100px")
// - whitespace-only strings are treated as invalid

