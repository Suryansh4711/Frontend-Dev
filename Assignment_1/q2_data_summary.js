// Q2. Multi-Type Data Summary
// Simulate a database summary of various user data entries

// Declare variables of different data types
const userString = "John Doe";
const userAge = 25;
const isActive = true;
const hobbies = ["reading", "gaming", "coding"];
const userProfile = { name: "John", role: "Developer" };
const emptyValue = null;
let notDefined;

// Create an array to store data summary
const dataSummary = [
    {
        Label: "User Name",
        Value: userString,
        Type: typeof userString
    },
    {
        Label: "User Age",
        Value: userAge,
        Type: typeof userAge
    },
    {
        Label: "Is Active",
        Value: isActive,
        Type: typeof isActive
    },
    {
        Label: "Hobbies",
        Value: JSON.stringify(hobbies),
        Type: Array.isArray(hobbies) ? "array" : typeof hobbies
    },
    {
        Label: "User Profile",
        Value: JSON.stringify(userProfile),
        Type: typeof userProfile
    },
    {
        Label: "Empty Value",
        Value: emptyValue,
        Type: emptyValue === null ? "null" : typeof emptyValue
    },
    {
        Label: "Not Defined",
        Value: notDefined,
        Type: typeof notDefined
    }
];

// Display formatted report using console.table()
console.log("=== Multi-Type Data Summary ===");
console.table(dataSummary);
