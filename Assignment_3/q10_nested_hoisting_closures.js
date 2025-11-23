"use strict";
// Q10 - Nested Hoisting and Closures
// Demonstrate hoisting behavior and closures with inner function

console.log('=== Q10 - Nested Hoisting and Closures ===');

function outer() {
    // var count is hoisted to top of outer's scope but initialized as undefined at runtime start
    console.log('outer() - before var count:', count); // prints undefined because of hoisting
    var count = 5;

    function inner() {
        // inner has its own var count hoisted -> undefined inside inner
        console.log('inner() - before var count:', count); // undefined due to hoisting inside inner
        var count = 10;
        console.log('inner() - after var count:', count); // 10
    }

    inner();
    console.log('outer() - after inner call, outer count:', count); // 5
}

outer();

// Predictions and explanation (in comments):
// - When outer runs, JS hoists declarations: var count (outer) and function inner.
// - The console.log before 'var count = 5' prints undefined (outer's count exists but not yet initialized).
// - Inside inner, inner's var count is hoisted inside inner, shadowing outer's count. So the first log in inner prints undefined (inner's count exists but uninitialized). After assignment it prints 10.
// - After inner returns, outer's count remains 5.

// Arrow function variant: convert inner to arrow to see behavior change
function outerWithArrow() {
    console.log('\n-- outerWithArrow --');
    console.log('before outer var count:', countA); // undefined due to hoisting
    var countA = 5;

    const innerArrow = () => {
        // Arrow functions do not create their own 'this' or arguments, but they still have function scope for var declarations
        // If we remove a var count inside arrow, it will access outer's count
        console.log('innerArrow sees outer count (no var shadow):', countA);
    };

    innerArrow();
    console.log('after innerArrow, outer count:', countA);
}

outerWithArrow();

// Debugging notes:
// - Place breakpoints at each console.log to inspect activation records on the call stack.
// - Observe how inner's activation record contains its own 'count' variable which shadows outer's 'count'.
// - Arrow functions would capture the outer lexical scope and not create its own 'arguments' or 'this', but var shadowing still depends on whether you declare a var inside the arrow body.

