"use strict";
// Q7 - Promise.allSettled() Loader Demo

function loadProfile() { return new Promise((resolve, reject) => setTimeout(() => Math.random() < 0.2 ? reject('Profile failed') : resolve('Profile Loaded'), 2000)); }
function loadPosts() { return new Promise((resolve, reject) => setTimeout(() => Math.random() < 0.2 ? reject('Posts failed') : resolve('Posts Loaded'), 1500)); }
function loadMessages() { return new Promise((resolve, reject) => setTimeout(() => Math.random() < 0.2 ? reject('Messages failed') : resolve('Messages Loaded'), 1000)); }

console.log('=== Q7 - allSettled Loader Demo ===');

(async function() {
    const start = Date.now();
    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
    const duration = Date.now() - start;

    results.forEach((res, idx) => {
        if (res.status === 'fulfilled') console.log(`Module ${idx + 1} succeeded: ${res.value}`);
        else console.log(`Module ${idx + 1} failed: ${res.reason}`);
    });

    console.log(`Total time taken: ${duration}ms`);
})();
