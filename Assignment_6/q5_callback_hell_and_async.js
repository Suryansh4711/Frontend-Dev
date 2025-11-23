"use strict";
// Q5 - Frontend Rush: callback hell -> async/await
// Pipeline: design -> build -> test -> deploy -> celebrate

function stage(name, cb) {
    setTimeout(() => {
        console.log(`Stage: ${name}`);
        if (typeof cb === 'function') cb();
    }, 1000);
}

console.log('=== Q5 - Callback Hell Demo ===');
// Callback hell version
stage('design', () => {
    stage('build', () => {
        stage('test', () => {
            stage('deploy', () => {
                stage('celebrate', () => {
                    console.log('Pipeline (callbacks) complete');
                });
            });
        });
    });
});

// Async/await version
function stagePromise(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Stage: ${name}`);
            resolve(name);
        }, 1000);
    });
}

(async function runPipeline() {
    console.log('\n=== Q5 - Async/Await Version ===');
    try {
        await stagePromise('design');
        await stagePromise('build');
        await stagePromise('test');
        await stagePromise('deploy');
        await stagePromise('celebrate');
        console.log('Pipeline (async/await) complete');
    } catch (err) {
        console.error('Pipeline failed:', err.message);
    }
})();

// Comment: async/await flattens the flow making it linear and readable; error handling is centralized with try/catch.
