"use strict";
// Q9 - Fitness App Analytics

class FitnessAnalytics {
    constructor(data = []) {
        if (!Array.isArray(data)) throw new Error('Data must be array');
        this.data = data;
    }

    getActiveUsers(stepThreshold = 7000) {
        if (this.data.length === 0) throw new Error('Dataset is empty');
        return this.data.filter(u => u.steps > stepThreshold).map(u => u.user);
    }

    getAverageCalories() {
        if (this.data.length === 0) throw new Error('Dataset is empty');
        const total = this.data.reduce((acc, u) => acc + u.calories, 0);
        return total / this.data.length;
    }

    getUserSummary() {
        if (this.data.length === 0) throw new Error('Dataset is empty');
        return this.data.map(u => `${u.user}: steps=${u.steps}, calories=${u.calories}`);
    }
}

console.log('=== Q9 - Fitness App Analytics ===');
const dataset = [
    { user: 'A', steps: 8000, calories: 300 },
    { user: 'B', steps: 12000, calories: 500 },
    { user: 'C', steps: 4000, calories: 200 }
];

try {
    const fa = new FitnessAnalytics(dataset);
    console.log('Active Users:', fa.getActiveUsers());
    console.log('Average Calories:', fa.getAverageCalories());
    console.log('User Summary:');
    console.log(fa.getUserSummary().join('\n'));
} catch (err) {
    console.error('Error:', err.message);
}

// Test empty dataset error
try {
    const empty = new FitnessAnalytics([]);
    empty.getActiveUsers();
} catch (err) {
    console.error('Expected empty dataset error:', err.message);
}
