// Q4. Array Performance Analyzer
// Analyze student performance using array methods

// Generate array of 8 random scores between 30 and 100
const scores = [];
for (let i = 0; i < 8; i++) {
    const randomScore = Math.floor(Math.random() * 71) + 30; // 30 to 100
    scores.push(randomScore);
}

console.log("=== Array Performance Analyzer ===");
console.log("\n--- Student Scores ---");
console.log(scores);

// Calculate highest score
const highestScore = Math.max(...scores);
console.log(`\nHighest Score: ${highestScore}`);

// Calculate lowest score
const lowestScore = Math.min(...scores);
console.log(`Lowest Score: ${lowestScore}`);

// Calculate average score using reduce()
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
console.log(`Average Score: ${averageScore.toFixed(2)}`);

// Count number of students who passed (score >= 50)
const passedStudents = scores.filter(score => score >= 50);
const numberOfPassed = passedStudents.length;
const numberOfFailed = scores.length - numberOfPassed;

console.log(`\n--- Pass/Fail Analysis ---`);
console.log(`Students Passed (≥50): ${numberOfPassed}`);
console.log(`Students Failed (<50): ${numberOfFailed}`);
console.log(`Pass Percentage: ${((numberOfPassed / scores.length) * 100).toFixed(2)}%`);

// Map scores to grades
const grades = scores.map(score => {
    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
});

console.log("\n--- Grade Distribution ---");
console.log("Scores with Grades:");
scores.forEach((score, index) => {
    console.log(`Student ${index + 1}: ${score} → Grade ${grades[index]}`);
});

// Count grade distribution
const gradeDistribution = grades.reduce((dist, grade) => {
    dist[grade] = (dist[grade] || 0) + 1;
    return dist;
}, {});

console.log("\n--- Summary Statistics ---");
console.table({
    "Total Students": scores.length,
    "Highest Score": highestScore,
    "Lowest Score": lowestScore,
    "Average Score": averageScore.toFixed(2),
    "Passed": numberOfPassed,
    "Failed": numberOfFailed,
    "Range": highestScore - lowestScore
});

console.log("\n--- Grade Distribution Summary ---");
console.table(gradeDistribution);
