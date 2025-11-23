// Q5. Boolean Logic Access System
// Smart home security system with multiple condition checks

// Function to check security status
function checkSecurityStatus(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    console.log("\n--- Security Check ---");
    console.log(`Door Locked: ${isDoorLocked}`);
    console.log(`Window Closed: ${isWindowClosed}`);
    console.log(`Alarm On: ${isAlarmOn}`);
    console.log(`Owner Inside: ${isOwnerInside}`);
    
    // Access is granted only if ALL conditions are met
    const isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;
    
    // Detailed condition analysis
    const doorAndWindowSecure = isDoorLocked && isWindowClosed;
    const alarmAndOwnerCheck = isAlarmOn && isOwnerInside;
    
    console.log("\n--- Analysis ---");
    console.log(`Door & Window Secure: ${doorAndWindowSecure}`);
    console.log(`Alarm & Owner Check: ${alarmAndOwnerCheck}`);
    
    // Determine security status
    if (isSecure) {
        console.log("\n✅ Status: SECURE");
        console.log("All security conditions are met. Home is safe.");
    } else {
        console.log("\n❌ Status: UNSAFE");
        console.log("Security breach detected! Issues:");
        
        // Identify specific issues
        if (!isDoorLocked) console.log("  • Door is not locked");
        if (!isWindowClosed) console.log("  • Window is not closed");
        if (!isAlarmOn) console.log("  • Alarm is not activated");
        if (!isOwnerInside) console.log("  • Owner is not inside");
    }
    
    return isSecure;
}

console.log("=== Boolean Logic Access System ===");

// Test Case 1: All conditions met - Secure
console.log("\n【 Test Case 1: Ideal Secure Conditions 】");
checkSecurityStatus(true, true, true, true);

// Test Case 2: Door not locked - Unsafe
console.log("\n【 Test Case 2: Door Not Locked 】");
checkSecurityStatus(false, true, true, true);

// Test Case 3: Alarm off - Unsafe
console.log("\n【 Test Case 3: Alarm Not Activated 】");
checkSecurityStatus(true, true, false, true);

// Test Case 4: Owner not inside - Unsafe
console.log("\n【 Test Case 4: Owner Away 】");
checkSecurityStatus(true, true, true, false);

// Test Case 5: Multiple issues - Unsafe
console.log("\n【 Test Case 5: Multiple Security Issues 】");
checkSecurityStatus(false, false, false, true);

// Test Case 6: All conditions failed - Critical
console.log("\n【 Test Case 6: Critical - All Failed 】");
checkSecurityStatus(false, false, false, false);

// Advanced boolean logic demonstration
console.log("\n--- Advanced Boolean Logic ---");
const test1 = true && true;  // true
const test2 = true || false; // true
const test3 = !false;        // true
const test4 = (true && false) || true; // true

console.log(`true && true = ${test1}`);
console.log(`true || false = ${test2}`);
console.log(`!false = ${test3}`);
console.log(`(true && false) || true = ${test4}`);
