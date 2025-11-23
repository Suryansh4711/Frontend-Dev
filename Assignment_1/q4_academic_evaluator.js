// Q4. Academic Performance Evaluator
// Check whether a student is promoted based on marks

// Input marks for 5 subjects (out of 100)
const marks = [78, 85, 92, 45, 88];
const subjectNames = ["Math", "Science", "English", "History", "Computer"];

// Display marks
console.log("=== Academic Performance Evaluator ===");
console.log("\nSubject-wise Marks:");
for (let i = 0; i < marks.length; i++) {
    console.log(`${subjectNames[i]}: ${marks[i]}`);
}

// Calculate total marks
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
}

// Calculate average and percentage
const averageMarks = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// Check for validation: any subject < 35
let hasFailedSubject = false;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        hasFailedSubject = true;
        break;
    }
}

// Determine result using logical operators
let result;
if (hasFailedSubject) {
    result = "Detained (Failed in one or more subjects with marks < 35)";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

// Display results
console.log("\n--- Performance Summary ---");
console.log(`Total Marks: ${totalMarks}/500`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
