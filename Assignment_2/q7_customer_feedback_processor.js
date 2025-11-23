// Q7. Customer Feedback Processor
// Analyze customer feedback for positivity and length

// Function to process feedback
function processFeedback(feedback) {
    console.log("\n--- Processing Feedback ---");
    console.log(`Original Feedback: "${feedback}"`);
    
    // Count words by splitting on spaces
    const words = feedback.split(' ');
    const wordCount = words.length;
    console.log(`\nWord Count: ${wordCount} words`);
    
    // Convert to lowercase for case-insensitive checking
    const feedbackLower = feedback.toLowerCase();
    
    // Check for negative keywords
    const hasNegativeWords = feedbackLower.includes('bad') || feedbackLower.includes('poor');
    
    // Additional sentiment analysis
    const positiveWords = ['great', 'amazing', 'excellent', 'good', 'fast', 'love', 'best', 'wonderful'];
    const negativeWords = ['bad', 'poor', 'terrible', 'worst', 'slow', 'hate', 'awful'];
    
    // Count positive and negative words
    let positiveCount = 0;
    let negativeCount = 0;
    
    positiveWords.forEach(word => {
        if (feedbackLower.includes(word)) positiveCount++;
    });
    
    negativeWords.forEach(word => {
        if (feedbackLower.includes(word)) negativeCount++;
    });
    
    console.log(`\n--- Sentiment Analysis ---`);
    console.log(`Positive Keywords Found: ${positiveCount}`);
    console.log(`Negative Keywords Found: ${negativeCount}`);
    
    // Determine feedback category
    let category;
    let emoji;
    
    if (hasNegativeWords) {
        category = "Needs Improvement";
        emoji = "⚠️";
    } else {
        category = "Positive Feedback";
        emoji = "✅";
    }
    
    console.log(`\n${emoji} Category: ${category}`);
    
    // Additional metrics
    const characterCount = feedback.length;
    const averageWordLength = feedback.replace(/\s/g, '').length / wordCount;
    
    console.log(`\n--- Additional Metrics ---`);
    console.log(`Total Characters: ${characterCount}`);
    console.log(`Average Word Length: ${averageWordLength.toFixed(2)} characters`);
    console.log(`Sentiment Score: ${positiveCount - negativeCount}`);
    
    return {
        category,
        wordCount,
        positiveCount,
        negativeCount,
        characterCount
    };
}

// Main execution
console.log("=== Customer Feedback Processor ===");

// Test Case 1: Positive feedback
const feedback1 = "Great product! Fast delivery and amazing sound quality!";
console.log("\n【 Test Case 1: Positive Review 】");
processFeedback(feedback1);

// Test Case 2: Negative feedback
const feedback2 = "Bad experience! Poor quality and slow shipping.";
console.log("\n【 Test Case 2: Negative Review 】");
processFeedback(feedback2);

// Test Case 3: Mixed feedback
const feedback3 = "The product is great but delivery was poor.";
console.log("\n【 Test Case 3: Mixed Review 】");
processFeedback(feedback3);

// Test Case 4: Neutral feedback
const feedback4 = "The product arrived on time. It works as expected.";
console.log("\n【 Test Case 4: Neutral Review 】");
processFeedback(feedback4);

// Test Case 5: Very positive feedback
const feedback5 = "Excellent product! Amazing quality, great value, and wonderful customer service!";
console.log("\n【 Test Case 5: Very Positive Review 】");
processFeedback(feedback5);

console.log("\n--- Processing Complete ---");
