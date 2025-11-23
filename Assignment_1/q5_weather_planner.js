// Q5. Weather Activity Planner
// Advise user on activities based on weather conditions

// Weather variables
const temperature = 28; // in Celsius
const isRaining = false;
const windSpeed = 15; // in km/h

// Variable to store activity recommendation
let activityAdvice;

// Determine activity based on weather conditions using logical operators
if (isRaining) {
    // If it's raining, stay indoors
    activityAdvice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    // If it's very hot and not raining
    activityAdvice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    // If it's cold and windy
    activityAdvice = "Too cold and windy — stay home.";
} else {
    // Perfect weather
    activityAdvice = "Perfect day for a walk.";
}

// Display weather information and advice
console.log("=== Weather Activity Planner ===");
console.log("\nCurrent Weather Conditions:");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining ? "Yes" : "No"}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log("\n--- Activity Recommendation ---");
console.log(activityAdvice);
