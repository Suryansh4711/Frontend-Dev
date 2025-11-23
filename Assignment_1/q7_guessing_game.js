// Q7. Smart Guessing Game (Number Range)
// Enhanced guessing game with range checking

// Generate a random secret number between 1-50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// User's guess (you can change this value to test)
const userGuess = 25;

// Variable to store result message
let resultMessage;

// Check the guess using nested if conditions and logical operators
if (userGuess === secretNumber) {
    // Exact match
    resultMessage = "🎉 Correct guess! You won!";
} else {
    // Calculate difference
    const difference = Math.abs(userGuess - secretNumber);
    
    if (difference <= 3) {
        // Very close (within ±3)
        resultMessage = "🔥 Very close! ";
        if (userGuess > secretNumber) {
            resultMessage += "Try a bit lower.";
        } else {
            resultMessage += "Try a bit higher.";
        }
    } else {
        // Not close
        if (userGuess > secretNumber) {
            resultMessage = "📉 Too high! Try a lower number.";
        } else {
            resultMessage = "📈 Too low! Try a higher number.";
        }
    }
}

// Display game information
console.log("=== Smart Guessing Game ===");
console.log("\nGame Range: 1 - 50");
console.log(`Your Guess: ${userGuess}`);
console.log(`\n${resultMessage}`);

// Reveal answer (for testing purposes)
console.log(`\n[Debug] Secret Number was: ${secretNumber}`);
console.log(`[Debug] Difference: ${Math.abs(userGuess - secretNumber)}`);
