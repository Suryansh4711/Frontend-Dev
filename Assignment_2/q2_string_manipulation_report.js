// Q2. String Manipulation Report
// Format product titles properly for e-commerce display

// Original product name with extra spaces and inconsistent casing
const originalProductName = "  wireless headphones PRO  ";

console.log("=== String Manipulation Report ===");
console.log(`\nOriginal Product Name: "${originalProductName}"`);
console.log(`Original Length: ${originalProductName.length} characters`);

// Step 1: Trim extra spaces from both ends
const trimmedName = originalProductName.trim();
console.log(`\n✓ After trim(): "${trimmedName}"`);

// Step 2: Convert to lowercase
const lowercaseName = trimmedName.toLowerCase();
console.log(`✓ After toLowerCase(): "${lowercaseName}"`);

// Step 3: Capitalize first letter of each word
// Split into words, capitalize each, then join back
const words = lowercaseName.split(' ');
const capitalizedWords = words.map(word => {
    // Capitalize first letter and add rest of the word
    return word.charAt(0).toUpperCase() + word.slice(1);
});
const capitalizedName = capitalizedWords.join(' ');
console.log(`✓ After capitalizing each word: "${capitalizedName}"`);

// Step 4: Replace "Pro" with "Pro Edition"
const finalProductName = capitalizedName.replace('Pro', 'Pro Edition');
console.log(`✓ After replace('Pro', 'Pro Edition'): "${finalProductName}"`);

// Final Summary
console.log("\n--- Final Product Title ---");
console.log(`Cleaned Title: "${finalProductName}"`);
console.log(`Final Length: ${finalProductName.length} characters`);
console.log(`Characters Removed: ${originalProductName.length - finalProductName.length}`);

// Additional Analysis
console.log("\n--- Additional Details ---");
console.log(`Number of Words: ${finalProductName.split(' ').length}`);
console.log(`Uppercase Letters: ${(finalProductName.match(/[A-Z]/g) || []).length}`);
console.log(`Lowercase Letters: ${(finalProductName.match(/[a-z]/g) || []).length}`);
