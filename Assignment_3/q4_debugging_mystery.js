"use strict";
// Q4 - Debugging Mystery
// Original problematic code (would throw under strict mode):
// function showMessage() {
//   greeting = "Welcome"; // undeclared assignment - throws in strict mode
//   console.log(greeting);
// }
// showMessage();

// Explanation:
// In strict mode, assigning to an undeclared identifier (greeting = "..") throws a ReferenceError.
// Non-strict JS would create a global variable implicitly which is a common source of bugs.

console.log('=== Q4 - Debugging Mystery ===');

function showMessageFixed() {
    // Fix: declare the variable explicitly. Prefer 'let' or 'const' depending on mutability.
    let greeting = "Welcome"; // now properly declared in local scope
    console.log('Inside showMessageFixed - greeting:', greeting);
}

showMessageFixed();

// Hoisting and scope change notes:
// - Under strict mode, variables must be declared. This prevents accidental globals.
// - Declaring 'let greeting' creates a block-scoped binding and avoids leaking to global scope.

// Debugging tip:
// - Add a watch for 'greeting' in VS Code while paused inside showMessageFixed to see its value.
// - Observe the call stack: showMessageFixed -> (global)

