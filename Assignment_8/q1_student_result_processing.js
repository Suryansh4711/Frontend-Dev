"use strict";
// Q1 - Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks = []) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce
    calculateAverage() {
        if (!Array.isArray(this.marks) || this.marks.length === 0) return 0;
        const sum = this.marks.reduce((acc, m) => acc + m, 0);
        return sum / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 85) return 'A';
        if (avg >= 70) return 'B';
        if (avg >= 50) return 'C';
        return 'F';
    }
}

console.log('=== Q1 - Student Result Processing ===');
const s1 = new Student('Amit', [88, 92, 79]);
const s2 = new Student('Sara', [68, 74, 70]);
const s3 = new Student('Kiran', [45, 52, 48]);

[s1, s2, s3].forEach(s => {
    console.log(`Student: ${s.name}`);
    console.log(`Marks: ${s.marks.join(', ')}`);
    console.log(`Average: ${s.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${s.getGrade()}`);
    console.log('---');
});
