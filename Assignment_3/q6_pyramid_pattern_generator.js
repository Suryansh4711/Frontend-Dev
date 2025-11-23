"use strict";
// Q6 - Pyramid Pattern Generator
// Generate a pyramid pattern, show var vs let behavior and allow user-controlled limit

console.log('=== Q6 - Pyramid Pattern Generator ===');

function generatePyramid(rows = 4, useVar = false) {
    console.log(`\nGenerating pyramid with rows=${rows} (useVar=${useVar})`);
    if (useVar) {
        // Demonstrate using var (function-scoped) variables
        for (var i = 1; i <= rows; i++) {
            var line = '';
            for (var j = 1; j <= i; j++) {
                line += '* ';
            }
            console.log(line.trim());
        }
        // With var, the loop variables i and j remain accessible here
        console.log('After loop (var) i=', i, 'j=', j);
    } else {
        // Using let (block-scoped) - safer and will not leak loop vars
        for (let i = 1; i <= rows; i++) {
            let line = '';
            for (let j = 1; j <= i; j++) {
                line += '* ';
            }
            console.log(line.trim());
        }
        try {
            // Accessing i or j here would throw ReferenceError when using let
            console.log('After loop (let) trying to access i:', i);
        } catch (err) {
            console.log('As expected, cannot access block-scoped i/j when using let ->', err.message);
        }
    }
}

// Default pyramid (as required) -> 4 rows
generatePyramid(4, false);

// Demonstrate var leak
generatePyramid(4, true);

// Allow user-controlled limit (default = 5) - in Node we can't prompt reliably, so we accept env var or fallback
const userLimit = Number(process.env.PYRAMID_ROWS) || 5;
console.log('\nGenerating pyramid using user-controlled limit (default 5):');
generatePyramid(userLimit, false);

// Debug notes:
// - Switch between let and var to observe variable re-use/leakage.
// - In strict mode, undeclared loop variables would throw ReferenceError; we used declarations each time.

