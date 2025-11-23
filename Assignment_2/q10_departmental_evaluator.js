// Q10. Departmental Employee Evaluator
// Evaluate employees from multiple departments based on performance points

// Nested array for departments with [department name, performance score]
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("=== Departmental Employee Evaluator ===");
console.log("\n--- Department Performance Scores ---");

// Display initial data
for (let i = 0; i < departments.length; i++) {
    console.log(`${departments[i][0]}: ${departments[i][1]} points`);
}

// Evaluate each department
console.log("\n--- Performance Evaluation ---");

// Array to store evaluation results
const evaluations = [];

// Loop through each department
for (let i = 0; i < departments.length; i++) {
    const departmentName = departments[i][0];
    const score = departments[i][1];
    let rating;
    let emoji;
    let feedback;
    
    // Use nested if-else conditions and comparison operators
    if (score >= 90) {
        rating = "Excellent";
        emoji = "🌟";
        feedback = "Outstanding performance! Keep up the great work!";
    } else if (score >= 75 && score <= 89) {
        rating = "Good";
        emoji = "✅";
        feedback = "Good performance. Room for improvement to reach excellence.";
    } else if (score >= 60 && score <= 74) {
        rating = "Average";
        emoji = "⚠️";
        feedback = "Average performance. Needs focused improvement.";
    } else {
        rating = "Needs Improvement";
        emoji = "❌";
        feedback = "Performance below expectations. Immediate action required.";
    }
    
    // Store evaluation
    evaluations.push({
        Department: departmentName,
        Score: score,
        Rating: rating,
        Status: emoji
    });
    
    // Print detailed evaluation
    console.log(`\n${emoji} ${departmentName} Department:`);
    console.log(`   Score: ${score}/100`);
    console.log(`   Rating: ${rating}`);
    console.log(`   Feedback: ${feedback}`);
}

// Display summary table
console.log("\n--- Evaluation Summary Table ---");
console.table(evaluations);

// Calculate overall statistics
let totalScore = 0;
let excellentCount = 0;
let goodCount = 0;
let averageCount = 0;
let needsImprovementCount = 0;

for (let i = 0; i < departments.length; i++) {
    const score = departments[i][1];
    totalScore += score;
    
    if (score >= 90) excellentCount++;
    else if (score >= 75) goodCount++;
    else if (score >= 60) averageCount++;
    else needsImprovementCount++;
}

const averageScore = totalScore / departments.length;

// Find best and worst performing departments
let bestDept = departments[0];
let worstDept = departments[0];

for (let i = 1; i < departments.length; i++) {
    if (departments[i][1] > bestDept[1]) {
        bestDept = departments[i];
    }
    if (departments[i][1] < worstDept[1]) {
        worstDept = departments[i];
    }
}

// Display organizational statistics
console.log("\n--- Organizational Statistics ---");
console.log(`Total Departments: ${departments.length}`);
console.log(`Average Score: ${averageScore.toFixed(2)}/100`);
console.log(`\nRating Distribution:`);
console.log(`  Excellent (≥90): ${excellentCount}`);
console.log(`  Good (75-89): ${goodCount}`);
console.log(`  Average (60-74): ${averageCount}`);
console.log(`  Needs Improvement (<60): ${needsImprovementCount}`);

console.log(`\n🏆 Best Performing: ${bestDept[0]} (${bestDept[1]} points)`);
console.log(`📉 Needs Attention: ${worstDept[0]} (${worstDept[1]} points)`);

// Overall organizational health
console.log("\n--- Organizational Health ---");
if (averageScore >= 85) {
    console.log("✅ Excellent: Organization is performing exceptionally well!");
} else if (averageScore >= 70) {
    console.log("✅ Good: Organization is performing well with room for growth.");
} else if (averageScore >= 60) {
    console.log("⚠️  Average: Organization needs strategic improvements.");
} else {
    console.log("❌ Critical: Immediate organizational intervention required.");
}
