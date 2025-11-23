"use strict";
// Q7 - makeMultiplier closure

function makeMultiplier(multiplier) {
    // multiplier is kept in closure of returned function
    return function(number) {
        return number * multiplier;
    };
}

console.log('=== Q7 - makeMultiplier Closure Demo ===');
const triple = makeMultiplier(3);
console.log('triple(5) =>', triple(5)); // 15

// Explanation in comment:
// - makeMultiplier creates a scope with 'multiplier'. The returned function retains access
//   to that scope even after makeMultiplier has finished executing. This retained scope is called a closure.
