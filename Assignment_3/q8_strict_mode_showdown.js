"use strict";
// Q8 - Strict Mode Showdown
// Show differences when running code with and without 'use strict'

console.log('=== Q8 - Strict Mode Showdown ===');

// The problematic code:
// function demo(a, a) { total = 10; delete total; }
// demo(5, 10);

// In strict mode the duplicate parameter names (a, a) are a SyntaxError and assigning to undeclared 'total' throws ReferenceError.

// We'll attempt to create a non-strict function with duplicate params using the Function constructor (which creates non-strict functions by default)
try {
    const nonStrictDemo = Function('a', 'a', 'total = 10; return typeof total;');
    // Call the non-strict function - it will create a global 'total' (non-strict behavior)
    const typeOfTotal = nonStrictDemo(5, 10);
    console.log('Non-strict function executed. typeof total (created globally):', typeOfTotal);
    // Clean up global if it exists (in Node global is 'global')
    try { delete global.total; } catch (e) { /* ignore */ }
} catch (err) {
    console.log('Error creating/executing non-strict function:', err.message);
}

// Now demonstrate that creating a strict function with duplicate params will throw
try {
    // Attempt to create a strict function via Function constructor with a "use strict" prologue
    const strictDemo = Function('"use strict"; return (function(a, a) { total = 10; delete total; });')();
    // If creation succeeded (it shouldn't), try calling
    strictDemo(5, 10);
} catch (err) {
    console.log('Attempt to create strict duplicate-param function failed as expected:', err.message);
}

// Correct ES6 version (no duplicate params, use let/const, avoid delete on variables)
function demoCorrect(a, b) {
    'use strict';
    let total = 10; // declared variable - cannot be deleted
    // delete total; // illegal for declared variables; delete works on object properties only
    return total + a + b;
}

console.log('Correct ES6 demo result:', demoCorrect(5, 10));

// Explanation (summary):
// - Duplicate parameter names are disallowed in strict mode because they cause ambiguity and errors.
// - Assigning to an undeclared identifier creates globals in non-strict mode but throws in strict mode.
// - delete cannot remove declared variables (var/let/const) — it's meant for object properties.

