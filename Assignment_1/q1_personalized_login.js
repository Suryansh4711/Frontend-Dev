// Q1. Personalized Login Greeting
// This program greets users with time-based messages

// Declare user name
const userName = "Suryansh";

// Get current hour (0-23)
const currentHour = new Date().getHours();

// Variable to store the greeting message
let greetingMessage;

// Determine greeting based on time of day
if (currentHour < 12) {
    // Morning: 0-11 hours
    greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    // Afternoon: 12-17 hours
    greetingMessage = `Good Afternoon ${userName}!`;
} else {
    // Evening: 18-23 hours
    greetingMessage = `Good Evening ${userName}!`;
}

// Display the greeting
console.log(greetingMessage);
console.log(`Current hour: ${currentHour}`);
