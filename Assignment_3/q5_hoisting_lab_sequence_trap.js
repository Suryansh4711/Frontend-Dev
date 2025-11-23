"use strict";
// Q5 - Hoisting Lab: The Sequence Trap
// We will explain hoisting, then fix code and provide arrow function variant.

console.log('=== Q5 - Hoisting Lab ===');

// Original snippet (prediction):
// console.log(score);    // 'undefined' because var score is hoisted but uninitialized
// announce();            // function declaration is hoisted -> works
// var score = 50;
// function announce() { console.log('Game started'); }
// let status = 'ready';  // temporal dead zone for let
// startGame();           // ERROR: startGame sees status in TDZ or startGame is hoisted but status may be defined? Actually startGame used before status declaration will still run but status defined later => TDZ affects access
// function startGame() { console.log(status); }

// Explanation:
// - var declarations are hoisted and initialized to undefined.
// - function declarations are hoisted with their body (callable before definition).
// - let/const are hoisted but are in TDZ until their declaration is evaluated; accessing them earlier throws ReferenceError.

// Fixed version - run properly by ordering/declarations
console.log('\n-- Fixed version --');
var score = 50;
function announce() { console.log('Game started'); }
console.log(score);
announce();
let status = 'ready';
function startGame() { console.log(status); }
startGame();

// Arrow function variant - demonstrates hoisting differences
console.log('\n-- Arrow function variant --');
const score2 = 100;
const announceArrow = () => console.log('Game started (arrow)');
const startGameArrow = () => console.log(status2);
let status2 = 'ready';
console.log(score2);
announceArrow();
startGameArrow();

// Notes:
// - Arrow functions assigned to const/let are NOT hoisted as callable functions; the variable is hoisted but is in TDZ until initialization.
// - Function declarations are fully hoisted, arrow functions are not callable before their assignment.

// Debug observation: place breakpoints on console.log lines to inspect variables in different phases and see TDZ effect for 'let' variables.

