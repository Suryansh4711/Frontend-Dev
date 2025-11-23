// Q10. Citizen Eligibility Validator
// Evaluate eligibility for voting, driving, and passport based on age and citizenship

// Input data
const age = 22;
const isCitizen = true;

// Variable to store eligibility message
let eligibilityMessage;

// Evaluate eligibility using nested if-else and logical operators
if (isCitizen && age >= 18) {
    // Citizen and adult
    if (age >= 21) {
        // Eligible for all services (voting, driving, passport)
        eligibilityMessage = "✅ Eligible for all services (Voting, Driving, Passport).";
    } else if (age >= 18 && age <= 20) {
        // Eligible to vote only (some countries have different age requirements)
        eligibilityMessage = "✅ Eligible to vote only. (Driving license age not met in some regions)";
    }
} else if (!isCitizen && age >= 18) {
    // Not a citizen but age criteria met
    eligibilityMessage = "⚠️ Only age criteria met. Citizenship required for voting and passport.";
} else {
    // Not eligible yet (either underage or not a citizen)
    if (age < 18) {
        eligibilityMessage = "❌ Not eligible yet. You must be at least 18 years old.";
    } else {
        eligibilityMessage = "❌ Not eligible yet. Please check your citizenship status.";
    }
}

// Display eligibility information
console.log("=== Citizen Eligibility Validator ===");
console.log("\n--- Personal Information ---");
console.log(`Age: ${age} years`);
console.log(`Citizen: ${isCitizen ? "Yes" : "No"}`);

console.log("\n--- Eligibility Status ---");
console.log(eligibilityMessage);

// Detailed breakdown
console.log("\n--- Service-wise Eligibility ---");
console.log(`Voting: ${isCitizen && age >= 18 ? "✅ Eligible" : "❌ Not Eligible"}`);
console.log(`Driving License: ${age >= 18 ? "✅ Eligible" : "❌ Not Eligible"}`);
console.log(`Passport: ${isCitizen && age >= 18 ? "✅ Eligible" : "❌ Not Eligible"}`);
