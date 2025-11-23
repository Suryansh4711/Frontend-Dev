// Q9. Random Math Quiz Generator
// Generate random arithmetic challenges automatically

// Generate two random numbers between 1-20
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

// Array of operators
const operators = ['+', '-', '*', '/'];

// Select a random operator
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

// Variable to store the correct answer
let correctAnswer;

// Calculate the correct answer using switch statement
switch (randomOperator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        // Round division to 2 decimals
        correctAnswer = (num1 / num2).toFixed(2);
        break;
    default:
        correctAnswer = "Error: Invalid operator";
}

// Display the quiz question and answer
console.log("=== Random Math Quiz Generator ===");
console.log("\n🎲 Your Random Math Challenge:");
console.log(`\nQuestion: ${num1} ${randomOperator} ${num2} = ?`);
console.log("\n--- Answer ---");
console.log(`Correct Answer: ${correctAnswer}`);

// Additional information
console.log("\n--- Quiz Details ---");
console.log(`Number 1: ${num1}`);
console.log(`Number 2: ${num2}`);
console.log(`Operator: ${randomOperator}`);

// Provide operation name
let operationName;
switch (randomOperator) {
    case '+':
        operationName = "Addition";
        break;
    case '-':
        operationName = "Subtraction";
        break;
    case '*':
        operationName = "Multiplication";
        break;
    case '/':
        operationName = "Division";
        break;
}
console.log(`Operation: ${operationName}`);
